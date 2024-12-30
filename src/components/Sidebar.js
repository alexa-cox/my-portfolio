import React, { useEffect } from 'react';
import profileImage from '../assets/images/alexandria-profile.png';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Sidebar() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove('current');
          });
          document
            .querySelector(`.nav-link[href*=${id}]`)
            ?.classList.add('current');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='row'>
      <div className='nav-side d-flex flex-column flex-shrink-0 p-3 bg-light bg-gradient col-2'>
        <img
          className='rounded-circle profile-img'
          src={profileImage}
        />
        <Nav
          vertical
          className='nav-pills flex-column mb-auto cardo fw-bold'
        >
          <NavItem>
            <NavLink
              href='#home'
              className='link-dark current'
              aria-current='page'
            >
              <i className='fa-solid fa-house home-icon'></i>
              {`\t`}
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href='#about'
              className='link-dark'
            >
              <i className='fa-solid fa-user about-icon'></i> {`\t`}
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href='#projects'
              className='link-dark'
            >
              <i className='fa-solid fa-computer project-icon'></i> {`\t`}
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href='#blog'
              className='link-dark'
            >
              <i className='fa-solid fa-book-bookmark blog-icon'></i>
              {`\t`}
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className='icons text-center mt-4 mb-5 mx-auto'>
          <NavItem>
            <NavLink
              href='https://github.com/alexa-cox'
              target='_blank'
              className='text-dark p-2'
            >
              <i className='fa-brands fa-github'></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href='https://www.linkedin.com/in/alexandriataylorcox/'
              target='_blank'
              className='text-dark p-2'
            >
              <i className='fa-brands fa-linkedin-in'></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href='https://medium.com/@alexa-cox'
              target='_blank'
              className='text-dark p-2'
            >
              <i className='fa-brands fa-medium'></i>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
