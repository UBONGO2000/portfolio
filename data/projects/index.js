/**
 * Projects Index
 *
<<<<<<< HEAD
 * Automatically loads every project JSON file in this directory (except
 * TEMPLATE.json) at build time and exposes it as `projects`, sorted by the
 * `order` field. To add a project, just drop a JSON file here - no other
 * file needs to change.
 */

import fs from 'fs';
import path from 'path';

const PROJECTS_DIR = path.join(process.cwd(), 'data', 'projects');
const REQUIRED_FIELDS = ['id', 'title', 'description', 'image', 'tier'];
const VALID_TIERS = ['primary', 'secondary', 'data', 'learning'];

function loadProjects() {
  const files = fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith('.json') && file !== 'TEMPLATE.json');

  const seenIds = new Set();

  const loaded = files.map((file) => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), 'utf-8');
    const project = JSON.parse(raw);

    for (const field of REQUIRED_FIELDS) {
      if (!project[field]) {
        throw new Error(
          `Invalid project file "${file}": missing required field "${field}".`
        );
      }
    }

    if (!VALID_TIERS.includes(project.tier)) {
      throw new Error(
        `Invalid project file "${file}": tier must be one of ${VALID_TIERS.join(', ')}, got "${project.tier}".`
      );
    }

    if (seenIds.has(project.id)) {
      throw new Error(
        `Invalid project file "${file}": duplicate project id "${project.id}".`
      );
    }
    seenIds.add(project.id);

    return project;
  });

  return loaded.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export const projects = loadProjects();
=======
 * `generated.json` is produced by scripts/generate-projects-index.js, which
 * scans every *.json file in this directory (except TEMPLATE.json), validates
 * it, and sorts it by `order`. That script runs automatically before
 * dev/build/test (see package.json). To add a project: drop a new JSON file
 * here (+ its image in public/) - nothing else needs to change.
 */

import generatedProjects from './generated.json';

export const projects = generatedProjects;
>>>>>>> f14095ac163694bc8a61bb7a83473e08aeadd42d

export const getProjectById = (id) => {
  return projects.find(project => project.id === id) || null;
};

export const getAllProjectIds = () => {
  return projects.map(project => ({
    params: { id: project.id }
  }));
};

export default projects;
