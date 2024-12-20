import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import resume from '../assets/Alexandria C Resume Template.pdf';

function Home() {
  const handleResumeClick = () => {
    window.open(resume, '_blank');
  };

  const cursorSpring = useSpring({
    from: { opacity: 1 },
    to: async (next) => {
      while (true) {
        await next({ opacity: 0 });
        await next({ opacity: 1 });
      }
    },
    config: { duration: 500 },
  });

  return (
    <div className='container-fluid'>
      <div className='row justify-content-end'>
        <div className='col-10'>
          <section
            id='home'
            className='d-flex align-items-center justify-content-center pt-5 mb-5 bg-white'
          >
            <div>
              <h2 className='display-3'>
                <span className='cardo fw-bold code-number text-info'>21</span>
                <span className='text-info code-text'>&lt;</span>
                <span className='code-text text-primary'>h2</span>
                <span className='text-info code-text'>&gt;</span> Hello, I'm
                <span className='text-info code-text'>&lt;/</span>
                <span className='code-text text-primary'>h2</span>
                <span className='text-info code-text'>&gt;</span>
              </h2>

              <h1 className='display-1 fw-bold'>
                <span className='cardo fw-bold code-number text-info'>22</span>
                <span className='text-info code-text'>&lt;</span>
                <span className='code-text text-primary'>h1</span>
                <span className='text-info code-text'>&gt;</span>
                <span id='name'> Alexandria! </span>
                <span className='text-info code-text'>&lt;/</span>
                <span className='code-text text-primary'>h1</span>
                <span className='text-info code-text'>&gt;</span>
              </h1>

              <h3 className='display-5'>
                <span className='cardo fw-bold code-number text-info'>23</span>
                <span className='text-info code-text'>&lt;</span>
                <span className='code-text text-primary'>h3</span>
                <span className='text-info code-text'>&gt;</span> Tagline or
                title
                <span className='text-info code-text'>&lt;/</span>
                <span className='code-text text-primary'>h3</span>
                <span className='text-info code-text'>&gt;</span>
              </h3>

              <h3 className='display-5'>
                <span className='cardo fw-bold code-number text-info'>24</span>
                <animated.span
                  style={cursorSpring}
                  className='cursor'
                >
                  |
                </animated.span>
              </h3>

              <div className='d-flex justify-content-center mt-5'>
                <button
                  type='button'
                  id='resume'
                  className='btn btn-primary btn-lg'
                  onClick={handleResumeClick}
                >
                  Resume
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
