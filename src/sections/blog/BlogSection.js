import React, { useState, useEffect } from 'react';
import { selectRandomBlogs } from './blogsSplice';
import BlogCard from './BlogCard';

function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogsToShow = 3;

  useEffect(() => {
    setBlogs(selectRandomBlogs(8));
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? blogs.length - blogsToShow : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === blogs.length - blogsToShow ? 0 : prev + 1
    );
  };

  return (
    <section
      id='blog'
      className='my-5 p-5'
    >
      <h2 className='cardo fw-bold text-center my-3 px-1 bg-white'>
        From the Blog
      </h2>

      <div className='position-relative py-4'>
        <div className='row flex-nowrap overflow-hidden gx-4'>
          {blogs.slice(currentIndex, currentIndex + blogsToShow).map((blog) => (
            <div
              key={blog.id}
              className='col-4 p-4'
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
        <button
          className='btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-n2'
          onClick={handlePrev}
        >
          <i class='fa-solid fa-chevron-left'></i>
        </button>
        <button
          className='btn btn-dark position-absolute top-50 end-0 translate-middle-y me-n2'
          onClick={handleNext}
        >
          <i class='fa-solid fa-chevron-right'></i>
        </button>
      </div>

      <div className='text-center mt-4'>
        <a
          href='https://medium.com/@alexa-cox'
          className='btn btn-primary'
          target='_blank'
          rel='noopener noreferrer'
        >
          Read More On Medium Page
        </a>
      </div>
    </section>
  );
}

export default BlogSection;
