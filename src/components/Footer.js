import React from 'react';

function Footer() {
  return (
    <div className='row justify-content-end'>
      <div className='col-10'>
        <footer className='py-3 my-4'>
          <p className='text-center text-body-secondary bg-white'>
            Copyright © {new Date().getFullYear()} Alexandria Cox
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
