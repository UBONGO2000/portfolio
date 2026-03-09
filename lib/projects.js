/**
 * Project Data Loader
 * This utility loads all projects from the data/projects folder.
 * To add a new project, simply create a new JSON file in data/projects/
 */

import fs from 'fs';
import path from 'path';

const projectsDirectory = path.join(process.cwd(), 'data/projects');

/**
 * Get all projects from the data/projects folder
 * @returns {Array} Array of project objects
 */
export function getAllProjects() {
  // Check if directory exists
  if (!fs.existsSync(projectsDirectory)) {
    console.warn('Projects directory not found. Please create data/projects/ folder.');
    return [];
  }

  // Read all JSON files in the projects directory
  const fileNames = fs.readdirSync(projectsDirectory);
  
  const projects = fileNames
    .filter(fileName => fileName.endsWith('.json'))
    .map(fileName => {
      const filePath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      try {
        return JSON.parse(fileContents);
      } catch (error) {
        console.error(`Error parsing ${fileName}:`, error);
        return null;
      }
    })
    .filter(project => project !== null)
    .sort((a, b) => {
      // Sort by order if specified, otherwise by id
      return (a.order || 0) - (b.order || 0);
    });

  return projects;
}

/**
 * Get a single project by ID
 * @param {string} id - Project ID
 * @returns {Object|null} Project object or null if not found
 */
export function getProjectById(id) {
  const projects = getAllProjects();
  return projects.find(project => project.id === id) || null;
}

/**
 * Get all project IDs (for dynamic routes)
 * @returns {Array} Array of project IDs
 */
export function getAllProjectIds() {
  const projects = getAllProjects();
  return projects.map(project => ({
    params: { id: project.id }
  }));
}

/**
 * Project schema for validation
 * @typedef {Object} Project
 * @property {string} id - Unique identifier
 * @property {string} title - Project title
 * @property {string} description - Short description
 * @property {string} image - Path to project image
 * @property {string} [github] - GitHub repository URL
 * @property {string} [demo] - Live demo URL
 * @property {string[]} technologies - Array of technologies used
 * @property {Object} fullDescription - Full description in multiple languages
 * @property {string} fullDescription.fr - French description
 * @property {string} fullDescription.en - English description
 * @property {Object} features - Features list in multiple languages
 * @property {string[]} features.fr - French features
 * @property {string[]} features.en - English features
 * @property {Object} challenges - Challenges description
 * @property {string} challenges.fr - French challenges
 * @property {string} challenges.en - English challenges
 * @property {number} [order] - Display order
 */

export default {
  getAllProjects,
  getProjectById,
  getAllProjectIds
};
