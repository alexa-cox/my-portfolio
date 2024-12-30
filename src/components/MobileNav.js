import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import signature from '../assets/images/Alexandria Signature.png';
import ContactForm from './ContactForm';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      className='d-md-none bg-light px-4'
      expand='md'
    >
      <NavbarBrand href='#home'>
        <img
          src={signature}
          alt='Logo'
          height='30'
        />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse
        isOpen={isOpen}
        navbar
      >
        <Nav
          navbar
          className='w-100 text-center text-dark'
        >
          <NavItem>
            <NavLink href='#home'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#about'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#projects'>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#blog'>Blog</NavLink>
          </NavItem>
          <NavItem className='mt-3'>
            <ContactForm isMobile={true} />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default MobileNav;
