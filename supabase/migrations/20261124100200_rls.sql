-- Step 3. Row level security.
-- A policy can hide a row. It cannot hide a key inside metadata.
-- plants_for_reader is the read API. It returns the baseline columns and
-- a redacted metadata object. Ranks match src/lib/access.ts.
--
-- public  (0): casual_observer
-- member  (1): casual_observer, production_grower, pod
-- expert  (2): all of the above, ecological_manager, agent_instructions
--
-- If the JWT has avatar_role, only that module is returned. pod and
-- agent_instructions stay hidden, so a single-role pipeline call cannot
-- read the other nodes.

CREATE OR REPLACE FUNCTION public.reader_access_tier()
RETURNS public.access_tier
LANGUAGE plpgsql
STABLE
AS $$
DECLARE
  raw text;
BEGIN
  raw := COALESCE(auth.jwt(), '{}'::jsonb) ->> 'access_tier';
  IF raw IN ('public', 'member', 'expert') THEN
    RETURN raw::public.access_tier;
  END IF;
  RETURN 'public'::public.access_tier;
END;
$$;

CREATE OR REPLACE FUNCTION public.reader_avatar_role()
RETURNS text
LANGUAGE plpgsql
STABLE
AS $$
DECLARE
  raw text;
BEGIN
  raw := COALESCE(auth.jwt(), '{}'::jsonb) ->> 'avatar_role';
  IF raw IN ('casual_observer', 'production_grower', 'ecological_manager') THEN
    RETURN raw;
  END IF;
  RETURN NULL;
END;
$$;

CREATE OR REPLACE FUNCTION public.redact_plant_metadata(meta jsonb)
RETURNS jsonb
LANGUAGE plpgsql
STABLE
AS $$
DECLARE
  tier public.access_tier := public.reader_access_tier();
  role text := public.reader_avatar_role();
  rank int;
  avatars jsonb := COALESCE(meta -> 'avatars', '{}'::jsonb);
  kept jsonb := '{}'::jsonb;
  key text;
  min_rank int;
  result jsonb;
BEGIN
  rank := CASE tier
    WHEN 'public' THEN 0
    WHEN 'member' THEN 1
    WHEN 'expert' THEN 2
    ELSE 0
  END;

  FOR key IN SELECT jsonb_object_keys(avatars)
  LOOP
    IF role IS NOT NULL AND key <> role THEN
      CONTINUE;
    END IF;
    min_rank := CASE key
      WHEN 'casual_observer' THEN 0
      WHEN 'production_grower' THEN 1
      WHEN 'ecological_manager' THEN 2
      ELSE 99
    END;
    IF rank >= min_rank THEN
      kept := kept || jsonb_build_object(key, avatars -> key);
    END IF;
  END LOOP;

  result := jsonb_build_object('avatars', kept);

  IF role IS NULL AND rank >= 1 AND meta ? 'pod' THEN
    result := result || jsonb_build_object('pod', meta -> 'pod');
  END IF;

  IF role IS NULL AND rank >= 2 AND meta ? 'agent_instructions' THEN
    result := result || jsonb_build_object('agent_instructions', meta -> 'agent_instructions');
  END IF;

  RETURN result;
END;
$$;

CREATE OR REPLACE VIEW public.plants_for_reader
WITH (security_barrier = true, security_invoker = false) AS
SELECT
  id,
  created_at,
  slug,
  genus,
  species,
  infraspecific_rank,
  infraspecific_epithet,
  cultivar,
  authority,
  family,
  alternative_names,
  origin,
  habitat,
  hardiness_zone,
  hardiness_rhs,
  public.redact_plant_metadata(metadata) AS metadata
FROM public.plants;

COMMENT ON VIEW public.plants_for_reader IS
  'Baseline columns plus metadata redacted for the JWT access_tier and avatar_role.';

ALTER TABLE public.plants ENABLE ROW LEVEL SECURITY;

CREATE POLICY plants_select_expert
  ON public.plants
  FOR SELECT
  TO authenticated
  USING (public.reader_access_tier() = 'expert');

CREATE POLICY plants_insert_expert
  ON public.plants
  FOR INSERT
  TO authenticated
  WITH CHECK (public.reader_access_tier() = 'expert');

CREATE POLICY plants_update_expert
  ON public.plants
  FOR UPDATE
  TO authenticated
  USING (public.reader_access_tier() = 'expert')
  WITH CHECK (public.reader_access_tier() = 'expert');

CREATE POLICY plants_delete_expert
  ON public.plants
  FOR DELETE
  TO authenticated
  USING (public.reader_access_tier() = 'expert');

REVOKE ALL ON public.plants FROM PUBLIC, anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.plants TO authenticated;

REVOKE ALL ON public.plants_for_reader FROM PUBLIC;
GRANT SELECT ON public.plants_for_reader TO anon, authenticated;

GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.reader_access_tier() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.reader_avatar_role() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.redact_plant_metadata(jsonb) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION auth.jwt() TO anon, authenticated;
