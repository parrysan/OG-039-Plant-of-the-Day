import { notFound } from "next/navigation";
import { PlantRecord } from "../../../components/plant-record";
import { TierForm } from "../../../components/tier-form";
import { forTier, getPlant, readTier } from "../../../lib/plants";

export default async function PlantPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ tier?: string }>;
}) {
  const { slug } = await params;
  const plant = getPlant(slug);
  if (!plant) notFound();
  const tier = readTier((await searchParams).tier);

  return (
    <div className="ods-stack" data-gap="lg">
      <TierForm tier={tier} slug={slug} />
      <PlantRecord plant={forTier(plant, tier)} tier={tier} />
    </div>
  );
}
