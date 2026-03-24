/**
 * Projects Index
 * Ordered from frontend (HTML/CSS) → frameworks → backend
 */

import landingTrip from './landing-trip.json';
import blogLandingpage from './blog-landingpage.json';
import typeset from './typeset.json';
import flexneat from './flexneat.json';
import promptHub from './prompt-hub.json';
import virtualg from './virtualg.json';
import finova from './finova.json';
import bookingroom from './bookingroom.json';
import supplychain from './supplychain.json';

export const projects = [
  blogLandingpage,
  typeset,
  flexneat,
  promptHub,
  virtualg,
  finova,
  supplychain,
  bookingroom,
];

export const getProjectById = (id) => {
  return projects.find(project => project.id === id) || null;
};

export const getAllProjectIds = () => {
  return projects.map(project => ({
    params: { id: project.id }
  }));
};

export default projects;
