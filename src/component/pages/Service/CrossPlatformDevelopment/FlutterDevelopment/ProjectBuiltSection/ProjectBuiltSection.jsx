import React from 'react';
import './ProjectBuiltSection.scss';

function ProjectBuiltSection({ title, detail, imgs }) {
  return (
    <div className='projectbuiltsection-wrapper'>
      <div className='project-build-text-wrapper'>
        <h1 className='sub_header_font fw-6'>{title}</h1>
        <p className='content_para fw-4'>{detail}</p>
      </div>
      <div className='project-build-logos'>
        {imgs.map((img, i) => (
          <img
            key={i}
            src={img}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectBuiltSection;
