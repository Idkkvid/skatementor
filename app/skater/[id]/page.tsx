import ProfileContent from "./ProfileContent";
import { SKATERS } from "../../data/skaters";

export function generateStaticParams() {
  return SKATERS.map((skater) => ({
    id: skater.id.toString(),
  }));
}

export default async function SkaterProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProfileContent id={id} />;
}
