import { projects } from "@/data/projects";
import ArchivesClient from "./ArchivesClient";

export const metadata = {
  title: "Archives des projets - Georges NTCHANGA",
  description: "Tous les autres projets d'exercices et d'apprentissage de Georges NTCHANGA.",
};

export default function ArchivesPage() {
  return <ArchivesClient projects={projects} />;
}
