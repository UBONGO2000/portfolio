import { projects, getProjectById } from '@/data/projects';
import ProjectClient from './ProjectClient';

// Generate static params for static export
export function generateStaticParams() {
  return projects.map((project) => ({
    id: String(project.id),
  }));
}

export default async function ProjectDetail({ params }) {
  const { id } = await params;
  
  // Find project by ID using the new data structure
  const project = getProjectById(id);

  return <ProjectClient project={project} projectId={id} />;
}
