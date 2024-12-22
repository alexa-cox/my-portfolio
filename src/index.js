//libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
//style
import './assets/styles/main.scss';
//components
import Sidebar from './components/Sidebar';
import ContactButton from './components/ContactForm';
import Footer from './components/Footer';
//sections
import Home from './sections/HomeSection';
import About from './sections/AboutSection';
import Projects from './sections/projects/ProjectSection';
import Blog from './sections/blog/BlogSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Sidebar />
    <div className='row justify-content-end'>
      <div className='col-10'>
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

/*
Complete all page components.
Complete contact form
Complete all animations.
Figure out Routing.
Project data and handling
Conditional Render of Featured project + projects or just projects. Ternary 
Figure out spacing issue / make sure i like look/feel
Responsive for tablet
Responsive for phone
See what i need to do to make deployable.
Deploy
*/
