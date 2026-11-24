import { KeyValueList } from "../../ods/components/key-value-list/react/KeyValueList";
import type { PlantMetadata } from "../lib/access";
import { botanicalName, commonName, headGardener } from "../lib/plants";
import { ReaderLayers } from "./reader-layers";
import type { AccessTier } from "../lib/access";

type RecordPlant = {
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
  metadata: PlantMetadata;
};

export function PlantRecord({ plant, tier }: { plant: RecordPlant; tier: AccessTier }) {
  const gardener = headGardener(plant.genus, plant.species);
  const hardiness = [plant.hardiness_zone && `USDA ${plant.hardiness_zone}`, plant.hardiness_rhs && `RHS ${plant.hardiness_rhs}`]
    .filter(Boolean)
    .join(" · ");
  const infra = [plant.infraspecific_rank, plant.infraspecific_epithet].filter(Boolean).join(" ");
  const rows = [
    { id: "genus", label: "Genus", value: plant.genus },
    { id: "species", label: "Species", value: plant.species },
    infra ? { id: "infra", label: "Infraspecific", value: infra } : null,
    plant.cultivar
      ? {
          id: "cultivar",
          label: "Cultivar",
          value: plant.cultivar,
          hint: plant.cultivar === "Seedlantern" ? "Fictional name for this seed. Not a trade cultivar." : undefined,
        }
      : null,
    plant.authority ? { id: "authority", label: "Authority", value: plant.authority } : null,
    { id: "family", label: "Family", value: plant.family },
    { id: "names", label: "Common names", value: plant.alternative_names.join(", ") },
    plant.origin ? { id: "origin", label: "Origin", value: plant.origin } : null,
    plant.habitat ? { id: "habitat", label: "Habitat", value: plant.habitat } : null,
    hardiness ? { id: "hardiness", label: "Hardiness", value: hardiness } : null,
  ].filter((row): row is { id: string; label: string; value: string; hint?: string } => Boolean(row));

  return (
    <article className="ods-stack" data-gap="lg">
      <header className="ods-stack" data-gap="sm">
        <p className="ods-text" data-size="sm" data-tone="secondary">
          Plant record
        </p>
        <h1 className="ods-heading">{commonName(plant)}</h1>
        <p className="ods-text latin">{botanicalName(plant)}</p>
      </header>

      <section className="ods-card">
        <div className="ods-stack" data-gap="lg">
          <figure className="plant-plate">
            <p className="ods-text" data-size="sm">
              No plate yet
            </p>
            <figcaption className="ods-text" data-size="sm" data-tone="secondary">
              3:4 frame for a botanical plate. Nothing is drawn here.
            </figcaption>
          </figure>
          <KeyValueList items={rows} divided />
          {gardener ? (
            <div className="ods-stack" data-gap="sm">
              <h2 className="ods-heading" data-size="sm">
                Head Gardener
              </h2>
              <p className="ods-text">{gardener.note}</p>
              <p className="ods-text" data-size="sm" data-tone="secondary">
                {gardener.sign}
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="ods-stack" data-gap="lg" aria-labelledby="layers-heading">
        <h2 className="ods-heading" data-size="sm" id="layers-heading">
          Reader layers
        </h2>
        <ReaderLayers metadata={plant.metadata} tier={tier} />
        {plant.metadata.agent_instructions ? (
          <p className="ods-text" data-size="sm" data-tone="secondary">
            The image recipe is in the pipeline config. This page does not call an image API.
          </p>
        ) : null}
      </section>
    </article>
  );
}
