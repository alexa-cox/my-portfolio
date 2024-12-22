import { PROJECTS } from './PROJECTS';

// Select All
export const selectAllProjects = () => {
  return [...PROJECTS].reverse();
};

// Random order
export const selectRandomOrderProjects = () => {
  const projects = selectAllProjects();
  const randomizedProjects = [];

  while (projects.length > 0) {
    const randomIndex = Math.floor(Math.random() * projects.length);
    randomizedProjects.push(projects.splice(randomIndex, 1)[0]);
  }

  return randomizedProjects;
};

// Filter
export const selectProjectsByCategory = (cat) => {
  return PROJECTS.filter((project) =>
    project.category.some((c) => c.toLowerCase() === cat.toLowerCase())
  );
};

// Select all featured
export const selectAllFeaturedProjects = () => {
  return PROJECTS.filter((project) => project.featured);
};

//Random Featured
export const selectRandomFeaturedProject = () => {
  const featuredProjects = selectAllFeaturedProjects();
  const int = Math.floor(Math.random() * featuredProjects.length);
  return featuredProjects[int];
};
