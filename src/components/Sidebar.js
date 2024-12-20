import React from 'react';
import profileImage from '../assets/images/alexandria-profile.png';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Sidebar() {
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
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href='#about'
              className='link-dark'
            >
              <i className='fa-solid fa-user about-icon'></i>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href='#projects'
              className='link-dark'
            >
              <i className='fa-solid fa-computer project-icon'></i>
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href='#blog'
              className='link-dark'
            >
              <i className='fa-solid fa-book-bookmark blog-icon'></i>
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className='icons text-center mt-4 mb-5'>
          <NavItem>
            <NavLink
              href='https://github.com/alexa-cox'
              target='_blank'
              className='text-dark'
            >
              <i className='fa-brands fa-github'></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href='https://www.linkedin.com/in/alexandriataylorcox/'
              target='_blank'
              className='text-dark'
            >
              <i className='fa-brands fa-linkedin-in'></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href='https://medium.com/@alexa-cox'
              target='_blank'
              className='text-dark'
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
