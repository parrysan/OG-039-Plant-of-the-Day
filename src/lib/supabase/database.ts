import type { AccessTier } from "../access";

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type PlantRow = {
  id: string;
  created_at: string;
  slug: string;
  genus: string;
  species: string;
  infraspecific_rank: string | null;
  infraspecific_epithet: string | null;
  cultivar: string | null;
  authority: string | null;
  family: string;
  alternative_names: string[];
  origin: string | null;
  habitat: string | null;
  hardiness_zone: string | null;
  hardiness_rhs: string | null;
  metadata: Json;
};

export type Database = {
  public: {
    Tables: {
      plants: {
        Row: PlantRow;
        Insert: Partial<PlantRow> & Pick<PlantRow, "slug" | "genus" | "species" | "family">;
        Update: Partial<PlantRow>;
        Relationships: [];
      };
    };
    Views: {
      plants_for_reader: {
        Row: PlantRow;
        Relationships: [];
      };
    };
    Functions: Record<string, never>;
    Enums: {
      access_tier: AccessTier;
    };
    CompositeTypes: Record<string, never>;
  };
};
