import fs from 'fs';
import path from 'path';
import { projects, getProjectById, getAllProjectIds } from '@/data/projects';

const PROJECTS_DIR = path.join(__dirname, '../../data/projects');

describe('Projects Data', () => {
  describe('automatic loading', () => {
    it('should load every JSON file in data/projects (except TEMPLATE.json)', () => {
      const projectsDir = path.join(process.cwd(), 'data', 'projects');
      const jsonFiles = fs
        .readdirSync(projectsDir)
        .filter((file) => file.endsWith('.json') && !['TEMPLATE.json', 'generated.json'].includes(file));

      expect(projects.length).toBe(jsonFiles.length);

      const ids = new Set(projects.map((p) => p.id));
      jsonFiles.forEach((file) => {
        const raw = fs.readFileSync(path.join(projectsDir, file), 'utf-8');
        const project = JSON.parse(raw);
        expect(ids.has(project.id)).toBe(true);
      });
    });

    it('should sort projects by ascending order within each tier', () => {
      const byTier = {};
      projects.forEach((project) => {
        byTier[project.tier] = byTier[project.tier] || [];
        byTier[project.tier].push(project);
      });

      Object.values(byTier).forEach((tierProjects) => {
        for (let i = 1; i < tierProjects.length; i++) {
          const previousOrder = tierProjects[i - 1].order ?? 0;
          const currentOrder = tierProjects[i].order ?? 0;
          expect(currentOrder).toBeGreaterThanOrEqual(previousOrder);
        }
      });
    });
  });

  describe('projects', () => {
    it('should have at least one project', () => {
      expect(projects.length).toBeGreaterThan(0);
    });

    it('should have valid project structure', () => {
      const validTiers = ['primary', 'secondary', 'data', 'learning'];

      projects.forEach(project => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('image');
        expect(project).toHaveProperty('technologies');
        expect(Array.isArray(project.technologies)).toBe(true);
        expect(validTiers).toContain(project.tier);
      });
    });

    it('should have unique project IDs', () => {
      const ids = projects.map(p => p.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('should load every JSON file in data/projects (except TEMPLATE.json and the generated index)', () => {
      const expectedIds = fs
        .readdirSync(PROJECTS_DIR)
        .filter((file) => file.endsWith('.json') && !['TEMPLATE.json', 'generated.json'].includes(file))
        .map((file) => require(path.join(PROJECTS_DIR, file)).id);

      const loadedIds = projects.map((p) => p.id);
      expect(new Set(loadedIds)).toEqual(new Set(expectedIds));
      expect(loadedIds.length).toBe(expectedIds.length);
    });

    it('should be sorted by ascending order', () => {
      const orders = projects.map((p) => p.order ?? Infinity);
      const sortedOrders = [...orders].sort((a, b) => a - b);
      expect(orders).toEqual(sortedOrders);
    });

    it('should only use recognized tier values', () => {
      const VALID_TIERS = ['primary', 'secondary', 'data', 'learning'];
      projects.forEach((project) => {
        if (project.tier !== undefined) {
          expect(VALID_TIERS).toContain(project.tier);
        }
      });
    });

    it('should rank the primary tier as supplychain, bookingroom, finova, prompt-hub', () => {
      const primaryIds = projects
        .filter((p) => p.tier === 'primary')
        .map((p) => p.id);
      expect(primaryIds).toEqual(['supplychain', 'bookingroom', 'finova', 'Prompt-hub']);
    });
  });

  describe('getProjectById', () => {
    it('should return a project when given a valid ID', () => {
      const firstProject = projects[0];
      const project = getProjectById(firstProject.id);
      expect(project).toBeDefined();
      expect(project.id).toBe(firstProject.id);
    });

    it('should return null when given an invalid ID', () => {
      const project = getProjectById('non-existent-project');
      expect(project).toBeNull();
    });
  });

  describe('getAllProjectIds', () => {
    it('should return an array of objects with params property', () => {
      const ids = getAllProjectIds();
      expect(Array.isArray(ids)).toBe(true);
      expect(ids.length).toBeGreaterThan(0);
      ids.forEach(id => {
        expect(id).toHaveProperty('params');
        expect(id.params).toHaveProperty('id');
      });
    });

    it('should return same number of IDs as projects', () => {
      const ids = getAllProjectIds();
      expect(ids.length).toBe(projects.length);
    });
  });
});
