/**
 * Projects Index
 * This file exports all projects for easy importing.
 * To add a new project:
 * 1. Create a new JSON file in data/projects/
 * 2. Add an import below
 * 3. Add to the projects array
 */

import covidAlert from './covid-alert.json';
import landingTrip from './landing-trip.json';
import typeset from './typeset.json';
import virtualg from './virtualg.json';
import blogLandingpage from './blog-landingpage.json';
import flexneat from './flexneat.json';
import bookingroom from './bookingroom.json';
import finova from './finova.json';

/**
 * All projects array
 * Add new project imports above and include them here
 */
export const projects = [
  // covidAlert,
  // landingTrip,
  blogLandingpage,
  typeset,
  finova,
  virtualg,
  flexneat,
  bookingroom,
];

/**
 * Get project by ID
 * @param {string} id - Project ID
 */
export const getProjectById = (id) => {
  return projects.find(project => project.id === id) || null;
};

/**
 * Get all project IDs for dynamic routes
 */
export const getAllProjectIds = () => {
  return projects.map(project => ({
    params: { id: project.id }
  }));
};

export default projects;
