import React from 'react';

function FeaturedProject({ title, description, gif, caseStudy }) {
  return (
    <div className='row d-flex align-items-center'>
      <div className='col'>
        <div className='my-auto bg-white p-5'>
          <h2 className='cardo fw-bold'>{title}</h2>
          <p>{description}</p>
          <button
            type='button'
            className='btn btn-primary'
            onClick={() => window.open(caseStudy, '_blank')}
          >
            Case Study Link
          </button>
        </div>
      </div>
      <div className='col mx-5'>
        <img
          src={gif}
          alt={`${title} preview`}
          style={{ width: '500px' }}
        />
      </div>
    </div>
  );
}

export default FeaturedProject;
