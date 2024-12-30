import React from 'react';

function Footer() {
  return (
    <footer className=''>
      <div className='text-center social-icons py-3 my-4 bg-white'>
        <a
          href='https://github.com/alexa-cox'
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 text-info'
        >
          <i className='fa-brands fa-github'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/alexandriataylorcox/'
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 text-info'
        >
          <i className='fa-brands fa-linkedin-in'></i>
        </a>
        <a
          href='https://medium.com/@alexa-cox'
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 text-info'
        >
          <i className='fa-brands fa-medium'></i>
        </a>
        <p className='text-info'>
          Copyright © {new Date().getFullYear()} Alexandria Cox
        </p>
      </div>
    </footer>
  );
}

export default Footer;
