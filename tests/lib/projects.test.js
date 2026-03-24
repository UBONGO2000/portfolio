import { projects, getProjectById, getAllProjectIds } from '@/data/projects';

describe('Projects Data', () => {
  describe('projects', () => {
    it('should have at least one project', () => {
      expect(projects.length).toBeGreaterThan(0);
    });

    it('should have valid project structure', () => {
      projects.forEach(project => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('image');
        expect(project).toHaveProperty('technologies');
        expect(Array.isArray(project.technologies)).toBe(true);
      });
    });

    it('should have unique project IDs', () => {
      const ids = projects.map(p => p.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
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
