import { notFound } from "next/navigation";
import { findAdminProgramById } from "@/lib/admin/programs";
import ApplicantsClient from "./ApplicantsClient";

export default async function ApplicantsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const program = findAdminProgramById(Number(id));
  if (!program) notFound();

  return <ApplicantsClient program={program} />;
}
