import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import expressIcon from '../assets/images/express-js-50.png';
import mongodbIcon from '../assets/images/mongodb-50.png';
import alexandriaAbout from '../assets/images/alexandria-about.png';

// Reusable skill item component with React Spring animation
const SkillItem = ({ icon, imgSrc, name }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Generate random delay between 0 and 1.5 seconds
  const randomDelay = React.useMemo(() => Math.random() * 1500, []);

  const springProps = useSpring({
    from: { opacity: 0.5, transform: 'translateX(-30px)' },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0px)' : 'translateX(-30px)',
    },
    delay: randomDelay,
    config: {
      mass: 1.2,
      tension: 280, // Reduced from 280
      friction: 5, // Increased from 20
      clamp: false, // Allows for natural overshooting
      velocity: 0.01, // Adds subtle initial velocity
    },
  });

  return (
    <animated.div
      ref={ref}
      style={springProps}
      className='skill-item'
    >
      {icon ? (
        <i className={icon}></i>
      ) : (
        <img
          src={imgSrc}
          alt={name}
        />
      )}
      <div className='skill-name'>{name}</div>
    </animated.div>
  );
};

function About() {
  return (
    <section
      id='about'
      className='row justify-content-end'
    >
      <div className='row px-5 my-5'>
        {/* Skills Section */}
        <div className='skills col order-2 order-md-1 d-flex justify-content-center'>
          <div className='d-flex flex-column justify-content-center'>
            <SkillItem
              icon='fa-brands fa-html5'
              name='HTML'
            />
            <SkillItem
              icon='fa-brands fa-css3-alt'
              name='CSS'
            />
            <SkillItem
              icon='fa-brands fa-sass'
              name='SASS'
            />
          </div>

          <div className='d-flex flex-column justify-content-center'>
            <SkillItem
              icon='fa-brands fa-js'
              name='JavaScript'
            />
            <SkillItem
              icon='fa-brands fa-react'
              name='React'
            />
            <SkillItem
              imgSrc={expressIcon}
              name='Express.js'
            />
            <SkillItem
              icon='fa-brands fa-bootstrap'
              name='Bootstrap'
            />
          </div>

          <div className='d-flex flex-column justify-content-center'>
            <SkillItem
              icon='fa-brands fa-node-js'
              name='Node.js'
            />
            <SkillItem
              imgSrc={mongodbIcon}
              name='MongoDB'
            />
            <SkillItem
              icon='fa-brands fa-git-alt'
              name='Git'
            />
          </div>
        </div>

        {/* About Info Section */}
        <div className='about-info col order-1 order-md-2'>
          <img
            src={alexandriaAbout}
            alt='Alexandria Cox'
            className='rounded-circle about-image mx-auto d-block mb-5'
          />
          <div className='bg-white px-5'>
            <p>
              Driven by a passion for technology, I bring a fresh and innovative
              perspective to full-stack development, building on a foundation in
              customer service and marketing. My journey has been shaped by a
              growth mindset and a commitment to continuous learning. With
              experience in both customer-facing roles and marketing, I’ve
              developed the ability to empathize with users and understand their
              needs—skills I apply to create user-centric applications.
            </p>
            <p>
              I thrive in dynamic environments, solving problems with efficient
              and effective solutions. My ability to bridge the gap between
              technical and non-technical teams allows me to approach
              development with a unique perspective on user experience and
              business goals.{' '}
              <b>
                Let’s connect to explore how I can contribute to your team’s
                success.
              </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
