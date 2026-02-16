import { workData } from '@/assets/assets';
import ProjectClient from './ProjectClient';

// Generate static params for static export
export function generateStaticParams() {
  return workData.map((project) => ({
    id: String(project.id),
  }));
}

export default async function ProjectDetail({ params }) {
  const { id } = await params;
  
  // Find project by ID
  const project = workData.find(p => String(p.id) === String(id)) || null;

  return <ProjectClient project={project} projectId={id} />;
}
