import { notFound, redirect } from "next/navigation";
import { findProgramById } from "@/lib/programs";
import ApplyDetailClient from "./ApplyDetailClient";

export default async function ApplyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const program = findProgramById(Number(id));
  if (!program) notFound();
  if (!program.open) redirect("/competency/apply");

  return <ApplyDetailClient program={program} />;
}
