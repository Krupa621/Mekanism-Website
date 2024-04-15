import React from 'react';
import './AppBuildDetails.scss';

const AppBuildDetails = (props) => {
  const { contentDetails } = props;

  return (
    <div className='AppBuildContainer'>
      {contentDetails.map((item) => (
        <>
          <h2 className='sub_header_font'>{item.heading}</h2>
          <p className='content_para '>{item.info}</p>
        </>
      ))}
    </div>
  );
};

export default AppBuildDetails;
