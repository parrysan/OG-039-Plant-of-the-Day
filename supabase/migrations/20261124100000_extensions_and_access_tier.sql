-- Step 1. uuid-ossp and the access tier enum.
-- On a stock Postgres this migration creates a stub auth.jwt() so the
-- later policies can be applied without the Supabase image. On Supabase
-- the real auth.jwt() is left in place.

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DO $$
BEGIN
  CREATE TYPE public.access_tier AS ENUM ('public', 'member', 'expert');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN
    CREATE ROLE anon NOLOGIN;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN
    CREATE ROLE authenticated NOLOGIN;
  END IF;
END
$$;

CREATE SCHEMA IF NOT EXISTS auth;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_proc p
    JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname = 'auth' AND p.proname = 'jwt'
  ) THEN
    CREATE FUNCTION auth.jwt()
    RETURNS jsonb
    LANGUAGE sql
    STABLE
    AS $fn$
      SELECT COALESCE(
        NULLIF(current_setting('request.jwt.claims', true), '')::jsonb,
        '{}'::jsonb
      );
    $fn$;
  END IF;
END
$$;
