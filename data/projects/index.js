/**
 * Projects Index
 *
 * `generated.json` is produced by scripts/generate-projects-index.js, which
 * scans every *.json file in this directory (except TEMPLATE.json), validates
 * it, and sorts it by `order`. That script runs automatically before
 * dev/build/test (see package.json). To add a project: drop a new JSON file
 * here (+ its image in public/) - nothing else needs to change.
 */

import generatedProjects from './generated.json';

export const projects = generatedProjects;

export const getProjectById = (id) => {
  return projects.find(project => project.id === id) || null;
};

export const getAllProjectIds = () => {
  return projects.map(project => ({
    params: { id: project.id }
  }));
};

export default projects;
