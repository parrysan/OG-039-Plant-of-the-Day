-- Proves the tier gates. Raises if a tier can see a node it should not.
-- Ranks match src/lib/access.ts.

DO $$
DECLARE
  meta jsonb;
BEGIN
  PERFORM set_config('request.jwt.claims', '{"access_tier":"public"}', false);
  SELECT metadata INTO meta FROM public.plants_for_reader WHERE slug = 'urtica-dioica';
  IF meta -> 'avatars' ? 'production_grower' OR meta -> 'avatars' ? 'ecological_manager' THEN
    RAISE EXCEPTION 'public tier saw a locked avatar';
  END IF;
  IF NOT (meta -> 'avatars' ? 'casual_observer') THEN
    RAISE EXCEPTION 'public tier is missing casual_observer';
  END IF;
  IF meta ? 'pod' OR meta ? 'agent_instructions' THEN
    RAISE EXCEPTION 'public tier saw pod or agent_instructions';
  END IF;

  PERFORM set_config('request.jwt.claims', '{"access_tier":"member"}', false);
  SELECT metadata INTO meta FROM public.plants_for_reader WHERE slug = 'urtica-dioica';
  IF NOT (meta -> 'avatars' ? 'casual_observer' AND meta -> 'avatars' ? 'production_grower') THEN
    RAISE EXCEPTION 'member tier is missing observer or grower';
  END IF;
  IF meta -> 'avatars' ? 'ecological_manager' OR meta ? 'agent_instructions' THEN
    RAISE EXCEPTION 'member tier saw expert nodes';
  END IF;
  IF NOT (meta ? 'pod') THEN
    RAISE EXCEPTION 'member tier is missing pod';
  END IF;

  PERFORM set_config('request.jwt.claims', '{"access_tier":"expert"}', false);
  SELECT metadata INTO meta FROM public.plants_for_reader WHERE slug = 'aloe-vera';
  IF NOT (
    meta -> 'avatars' ? 'casual_observer'
    AND meta -> 'avatars' ? 'production_grower'
    AND meta -> 'avatars' ? 'ecological_manager'
    AND meta ? 'pod'
    AND meta ? 'agent_instructions'
  ) THEN
    RAISE EXCEPTION 'expert tier is missing a node';
  END IF;

  PERFORM set_config('request.jwt.claims', '{"access_tier":"expert","avatar_role":"production_grower"}', false);
  SELECT metadata INTO meta FROM public.plants_for_reader WHERE slug = 'aloe-vera';
  IF meta -> 'avatars' ? 'casual_observer' OR meta -> 'avatars' ? 'ecological_manager' THEN
    RAISE EXCEPTION 'avatar_role filter leaked another module';
  END IF;
  IF NOT (meta -> 'avatars' ? 'production_grower') THEN
    RAISE EXCEPTION 'avatar_role filter dropped the requested module';
  END IF;
  IF meta ? 'pod' OR meta ? 'agent_instructions' THEN
    RAISE EXCEPTION 'avatar_role filter leaked pod or agent_instructions';
  END IF;
END
$$;

DO $$
BEGIN
  PERFORM set_config('request.jwt.claims', '{"access_tier":"public","role":"anon"}', false);
  BEGIN
    EXECUTE 'SET ROLE anon';
    BEGIN
      PERFORM 1 FROM public.plants LIMIT 1;
      RAISE EXCEPTION 'anon read the base plants table';
    EXCEPTION
      WHEN insufficient_privilege THEN
        NULL;
    END;
    IF NOT EXISTS (
      SELECT 1 FROM public.plants_for_reader WHERE slug = 'urtica-dioica'
    ) THEN
      RAISE EXCEPTION 'anon could not read plants_for_reader';
    END IF;
    RESET ROLE;
  END;
END
$$;
