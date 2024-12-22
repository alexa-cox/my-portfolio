import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className={`col-${project.col || 3}`}>
      <div className='card p-2'>
        <img
          src={project.image}
          className='card-img-top m-auto'
          alt={`${project.title} preview`}
          style={{ width: 250, height: 250 }}
        />
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title fw-bold cardo mb-2'>{project.title}</h5>
          <div className='button-container mt-2 d-flex justify-content-center gap-4'>
            {project.live && (
              <a
                href={project.live}
                className='btn btn-dark btn-sm col-6'
                target='_blank'
                rel='noopener noreferrer'
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                className='btn btn-outline-dark btn-sm col-6'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
