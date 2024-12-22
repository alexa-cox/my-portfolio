import React, { useEffect, useRef } from 'react';

function BlogCard({ blog }) {
  const descriptionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current && containerRef.current) {
      const container = containerRef.current;
      const description = descriptionRef.current;
      const lineHeight = parseInt(
        window.getComputedStyle(description).lineHeight
      );
      const containerHeight = container.clientHeight;
      const maxLines = Math.floor(containerHeight / lineHeight);

      description.style.webkitLineClamp = maxLines.toString();
      description.style.display = '-webkit-box';
      description.style.webkitBoxOrient = 'vertical';
      description.style.overflow = 'hidden';
    }
  }, []);

  return (
    <div className='card p-3 h-100'>
      <img
        src={blog.image}
        className='card-img-top'
        alt={`${blog.title} cover`}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div
        className='card-body d-flex flex-column'
        style={{ minHeight: '200px' }}
      >
        <h5 className='card-title fw-bold cardo mb-2'>{blog.title}</h5>
        <div
          ref={containerRef}
          className='flex-grow-1'
        >
          <p
            ref={descriptionRef}
            className='card-text mb-1 pb-1'
          >
            {blog.description}
          </p>
        </div>
        <a
          href={blog.link}
          className='btn btn-outline-dark btn-sm mt-auto me-auto'
          target='_blank'
          rel='noopener noreferrer'
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
