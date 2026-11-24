-- Step 2. Core plants table.
-- Columns follow the spec's baseline: taxonomy as columns, avatar modules,
-- POD specs, and agent_instructions inside metadata jsonb.
-- infraspecific rank, authority, habitat, and the RHS H-rating are part of
-- the same baseline (genus, species, infraspecific, cultivar, authority,
-- family, common names, origin/habitat, USDA zone and RHS H-rating).
-- alternative_names holds the common names.

CREATE TABLE public.plants (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at timestamptz NOT NULL DEFAULT now(),
  slug text NOT NULL UNIQUE,
  genus text NOT NULL,
  species text NOT NULL,
  infraspecific_rank text,
  infraspecific_epithet text,
  cultivar text,
  authority text,
  family text NOT NULL,
  alternative_names text[] NOT NULL DEFAULT '{}',
  origin text,
  habitat text,
  hardiness_zone text,
  hardiness_rhs text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  CONSTRAINT plants_metadata_object CHECK (jsonb_typeof(metadata) = 'object')
);

COMMENT ON TABLE public.plants IS
  'Plant of the Day core record. Taxonomy is structure only. No RHS Plant Finder data.';

COMMENT ON COLUMN public.plants.alternative_names IS
  'Common names. The spec calls this alternative_names.';

COMMENT ON COLUMN public.plants.hardiness_zone IS
  'USDA hardiness zone range, stored as text, for example 3-10.';

COMMENT ON COLUMN public.plants.hardiness_rhs IS
  'RHS H-rating, for example H6. The scale is named. The value is not an RHS database row.';

COMMENT ON COLUMN public.plants.metadata IS
  'avatars (casual_observer, production_grower, ecological_manager), pod, agent_instructions.';

CREATE INDEX plants_family_idx ON public.plants (family);
CREATE INDEX plants_genus_species_idx ON public.plants (genus, species);
