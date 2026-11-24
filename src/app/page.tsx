import { ExternalLink } from "../components/external-link";
import { TierForm } from "../components/tier-form";
import { commonName, dailyCover, listPlants, readTier } from "../lib/plants";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const tier = readTier((await searchParams).tier);
  const cover = dailyCover();
  const plants = listPlants();

  return (
    <div className="ods-stack" data-gap="lg">
      <header className="ods-stack" data-gap="sm">
        <h1 className="ods-heading">Plant of the Day</h1>
        <p className="ods-text" data-size="lead">
          One record. The reader layer opens on click.
        </p>
      </header>

      {cover ? (
        <section className="ods-stack" data-gap="sm" aria-label="Today">
          <p className="ods-text" data-size="sm" data-tone="secondary">
            {cover.date}
          </p>
          <h2 className="ods-heading" data-size="sm">
            {cover.common}
          </h2>
          <p className="ods-text latin">{cover.latin}</p>
          <p className="ods-text">{cover.note}</p>
          <p className="ods-text" data-size="sm" data-tone="secondary">
            {cover.sign}
          </p>
          {cover.slug ? (
            <p>
              <ExternalLink href={`/plant/${cover.slug}?tier=${tier}`}>Open the record</ExternalLink>
            </p>
          ) : null}
        </section>
      ) : null}

      <TierForm tier={tier} />

      <section className="ods-stack" data-gap="sm" aria-labelledby="records-heading">
        <h2 className="ods-heading" data-size="sm" id="records-heading">
          Records
        </h2>
        <ul className="plant-list">
          {plants.map((plant) => (
            <li key={plant.slug}>
              <ExternalLink href={`/plant/${plant.slug}?tier=${tier}`}>{commonName(plant)}</ExternalLink>
              <p className="ods-text latin" data-size="sm" data-tone="secondary">
                {plant.genus} {plant.species}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
