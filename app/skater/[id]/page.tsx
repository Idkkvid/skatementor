import ProfileContent from "./ProfileContent";
import { SKATERS } from "../../data/skaters";
import type { Metadata } from "next";

export function generateStaticParams() {
  return SKATERS.map((skater) => ({
    id: skater.id.toString(),
  }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return params.then(({ id }) => {
    const skater = SKATERS.find((item) => item.id.toString() === id);

    return {
      title: skater ? `${skater.name} | SkateMentor` : "Skater no encontrado | SkateMentor",
      description: skater?.bio,
    } satisfies Metadata;
  });
}

export default async function SkaterProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProfileContent id={id} />;
}
