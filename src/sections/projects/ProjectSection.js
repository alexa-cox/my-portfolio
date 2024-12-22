import React from 'react';
import FeaturedProject from './FeaturedProject';
import ProjectsList from './ProjectsList';
import { selectRandomFeaturedProject } from './projectsSplice';

function Projects() {
  const randomFeaturedProject = selectRandomFeaturedProject();

  return (
    <section
      id='projects'
      className='px-5 my-5'
    >
      {randomFeaturedProject && <FeaturedProject {...randomFeaturedProject} />}
      <ProjectsList />
    </section>
  );
}

export default Projects;
