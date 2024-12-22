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
        <div className='skills col d-flex justify-content-center'>
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
        <div className='about-info col'>
          <img
            src={alexandriaAbout}
            alt='Alexandria Cox'
            className='rounded-circle about-image mx-auto d-block mb-5'
          />
          <div className='bg-white px-5'>
            <p>
              Cupcake ipsum dolor sit amet I love cotton candy jujubes. Donut
              bear claw pudding sugar plum donut soufflé icing icing gummi
              bears. Fruitcake I love donut apple pie donut soufflé candy canes
              chocolate bar.
            </p>
            <p>
              Tootsie roll bear claw gingerbread chocolate bar carrot cake
              muffin soufflé. I love topping caramels gummies I love carrot cake
              tootsie roll. I love jelly beans chupa chups bear claw tart jelly
              beans. Ice cream bear claw donut jelly beans donut bear claw
              croissant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
