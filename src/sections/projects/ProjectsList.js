import React, { useState } from 'react';
import { selectAllProjects, selectProjectsByCategory } from './projectsSplice';
import ProjectCard from './ProjectCard';

function ProjectsList() {
  const [activeCategory, setActiveCategory] = useState('all');
  const allProjects = selectAllProjects();

  // Get unique categories using Set
  const categories = [
    'all',
    ...new Set(
      allProjects.flatMap((project) =>
        project.category.map((cat) => cat.toLowerCase())
      )
    ),
  ].sort((a, b) => {
    if (a === 'all') return -1;
    if (b === 'all') return 1;
    return a.localeCompare(b);
  });

  // Get filtered projects based on active category
  const getFilteredProjects = () => {
    if (activeCategory === 'all') return allProjects;
    return selectProjectsByCategory(activeCategory);
  };

  const calculateLayout = (projects) => {
    let currentRowWidth = 0;
    return projects.map((project) => {
      const desiredWidth = project.col || 1;
      if (currentRowWidth >= 3) currentRowWidth = 0;
      const availableSpace = 3 - currentRowWidth;
      const actualWidth = Math.min(desiredWidth, availableSpace);
      currentRowWidth += actualWidth;
      return { ...project, actualCol: actualWidth };
    });
  };

  const layoutProjects = calculateLayout(getFilteredProjects());

  return (
    <section className='text-center my-5'>
      <h2 className='text-center cardo fw-bold my-3 px-2 bg-white'>
        Other Projects
      </h2>

      {/* Category Filter Links */}
      <div className='d-flex justify-content-center gap-3 mb-4 flex-wrap bg-white'>
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-link text-primary text-decoration-none ${
              activeCategory === category ? 'fw-bold' : ''
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div
        id='projectContainer'
        className='row gy-3 gx-4 mx-5 justify-content-center'
      >
        {layoutProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={{ ...project, col: project.actualCol * 4 }}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsList;
