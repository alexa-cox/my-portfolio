//libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
//style
import './assets/styles/main.scss';
//components
import Sidebar from './components/Sidebar';
import ContactButton from './components/ContactForm';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
//sections
import Home from './sections/HomeSection';
import About from './sections/AboutSection';
import Projects from './sections/projects/ProjectSection';
import Blog from './sections/blog/BlogSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Sidebar />
    <MobileNav />
    <div className='row justify-content-end'>
      <div className='col-md-10'>
        <ContactButton />
        <Home />
        <About />
        <Projects />
        <Blog />
        <Footer />
      </div>
    </div>
  </>
);
