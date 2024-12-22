import React from 'react';

function Footer() {
  return (
    <footer className='py-3 my-4'>
      <p className='text-center text-body-secondary bg-white'>
        Copyright © {new Date().getFullYear()} Alexandria Cox
      </p>
    </footer>
  );
}

export default Footer;
