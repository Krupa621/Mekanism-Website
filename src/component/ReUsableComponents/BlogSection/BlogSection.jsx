/* eslint-disable react/jsx-key */
import React from 'react';
import './BlogSection.scss';
import LatestInsights from '../LatestInsights/LatestInsights';
import { Arrow } from '../../../icons/icons';

function BlogSection({ data, header, title, isButton }) {
  return (
    <>
      <div className='text-wrapper-blog'>
        <h2>{header}</h2>
        <h2 className='title'>{title}</h2>
        {isButton && (
          <button>
            Read More
            <Arrow />
          </button>
        )}
      </div>
      <div className='blogsection-wrapper'>
        <div className='blogcard-container'>
          {data.map((d) => (
            <LatestInsights {...d} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogSection;
