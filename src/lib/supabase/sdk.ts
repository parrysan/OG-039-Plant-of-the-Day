import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database, PlantRow } from "./database";

/**
 * Typed PostgREST client for a local-first pipeline.
 *
 * Read through `plants_for_reader`. The view redacts metadata from the JWT
 * claims `access_tier` (public | member | expert) and, when set,
 * `avatar_role` (casual_observer | production_grower | ecological_manager).
 * The anon key alone is the public tier.
 *
 * Writes hit `plants` and require an authenticated JWT whose access_tier
 * is expert. The service role bypasses RLS. If a pipeline uses it, call
 * `redactMetadata` from src/lib/access.ts before the row leaves the process.
 */
export function createSupabaseClient(
  url = process.env.SUPABASE_URL,
  key = process.env.SUPABASE_ANON_KEY,
): SupabaseClient<Database> | null {
  if (!url || !key) return null;
  return createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function createPlantSdk(client: SupabaseClient<Database>) {
  return {
    async listPlants(): Promise<PlantRow[]> {
      const { data, error } = await client.from("plants_for_reader").select("*").order("genus");
      if (error) throw error;
      return (data ?? []) as PlantRow[];
    },
    async getPlant(slug: string): Promise<PlantRow | null> {
      const { data, error } = await client
        .from("plants_for_reader")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();
      if (error) throw error;
      return (data as PlantRow | null) ?? null;
    },
  };
}

export type PlantSdk = ReturnType<typeof createPlantSdk>;
