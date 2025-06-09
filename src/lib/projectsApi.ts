import { projectsData } from '@/content/projectsData';
import type { Project } from './types';

export function getAllProjects(): Project[] {
  return projectsData;
}

export function getProjectById(id: string): Project | undefined {
  return projectsData.find(project => project.id === id);
}

export function getAllProjectCategories(): string[] {
  const categories = new Set<string>();
  projectsData.forEach(project => {
    if (project.category) {
      categories.add(project.category);
    }
  });
  return Array.from(categories).sort();
}