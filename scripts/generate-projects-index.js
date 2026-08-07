#!/usr/bin/env node
'use strict';

/**
 * Scans data/projects/*.json (except TEMPLATE.json), validates each file,
 * sorts the result by `order`, and writes data/projects/generated.json.
 *
 * data/projects/index.js only does a static `import` of that generated file
 * so the module stays bundler-safe (no fs / dynamic require reaching the
 * client bundle, since it's imported from a 'use client' page). This script
 * runs automatically before dev/build/test - see package.json.
 */

const fs = require('fs');
const path = require('path');

const PROJECTS_DIR = path.join(__dirname, '..', 'data', 'projects');
const OUTPUT_FILE = path.join(PROJECTS_DIR, 'generated.json');
const EXCLUDED_FILES = new Set(['TEMPLATE.json', path.basename(OUTPUT_FILE)]);
const REQUIRED_FIELDS = ['id', 'title', 'description', 'image'];

function loadProject(filename) {
  const filePath = path.join(PROJECTS_DIR, filename);
  let project;
  try {
    project = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    throw new Error(`Invalid JSON in "${filename}": ${error.message}`);
  }

  const missing = REQUIRED_FIELDS.filter((field) => !project[field]);
  if (missing.length > 0) {
    throw new Error(
      `Invalid project file "${filename}": missing required field(s) ${missing.join(', ')}`
    );
  }

  return project;
}

function generate() {
  const files = fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith('.json') && !EXCLUDED_FILES.has(file));

  const projects = files.map(loadProject);

  const seenIds = new Set();
  const duplicateIds = new Set();
  projects.forEach((project) => {
    if (seenIds.has(project.id)) {
      duplicateIds.add(project.id);
    }
    seenIds.add(project.id);
  });
  if (duplicateIds.size > 0) {
    throw new Error(`Duplicate project id(s) found: ${[...duplicateIds].join(', ')}`);
  }

  projects.sort((a, b) => {
    const orderA = a.order ?? Infinity;
    const orderB = b.order ?? Infinity;
    return orderA - orderB;
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(projects, null, 2) + '\n');
  console.log(`Generated data/projects/generated.json with ${projects.length} project(s).`);
}

try {
  generate();
} catch (error) {
  console.error(`\nFailed to generate projects index:\n  ${error.message}\n`);
  process.exit(1);
}
