import daily from "../../data/plants.json";
import seed from "../../data/seed/plants.json";
import {
  parseTier,
  redactMetadata,
  type AccessTier,
  type PlantMetadata,
} from "./access";

export type SeedPlant = (typeof seed.plants)[number];

export function listPlants(): SeedPlant[] {
  return seed.plants;
}

export function getPlant(slug: string): SeedPlant | null {
  return seed.plants.find((plant) => plant.slug === slug) ?? null;
}

export function forTier(plant: SeedPlant, tier: AccessTier) {
  return {
    ...plant,
    metadata: redactMetadata(plant.metadata as PlantMetadata, tier, null),
  };
}

export function readTier(value: string | string[] | undefined): AccessTier {
  const raw = Array.isArray(value) ? value[0] : value;
  return parseTier(raw);
}

export function headGardener(genus: string, species: string) {
  const latin = `${genus} ${species}`;
  const row = daily.plants.find((plant) => plant.latin === latin);
  if (!row?.note) return null;
  const name = daily.curator.name.trim() || "Name to come";
  return {
    note: row.note,
    date: row.date,
    sign: `${daily.curator.title} · ${name} · ${daily.curator.years} years`,
  };
}

export function dailyCover() {
  const plants = [...daily.plants].sort((a, b) => b.date.localeCompare(a.date));
  const plant = plants[0];
  if (!plant) return null;
  const match = seed.plants.find((row) => `${row.genus} ${row.species}` === plant.latin);
  const name = daily.curator.name.trim() || "Name to come";
  return {
    ...plant,
    slug: match?.slug ?? null,
    sign: `${daily.curator.title} · ${name} · ${daily.curator.years} years`,
  };
}

export function commonName(plant: { alternative_names: string[]; genus: string }): string {
  return plant.alternative_names[0] ?? plant.genus;
}

export function botanicalName(plant: {
  genus: string;
  species: string;
  infraspecific_rank: string | null;
  infraspecific_epithet: string | null;
  cultivar: string | null;
}): string {
  const infra = [plant.infraspecific_rank, plant.infraspecific_epithet].filter(Boolean).join(" ");
  const cultivar = plant.cultivar ? `'${plant.cultivar}'` : "";
  return [plant.genus, plant.species, infra, cultivar].filter(Boolean).join(" ");
}
