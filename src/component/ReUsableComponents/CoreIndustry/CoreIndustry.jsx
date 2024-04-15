import React from 'react';
import CoreIndustryDetails from './CoreIndustryDetails';
import './CoreIndustry.scss';

const CoreIndustry = (props) => {
  const { componentInfoConstant, componentInfoCustomer } = props;

  return (
    <>
      <div className='Coreindustry'>
        <div className='CoreExpertiesContainer'>
          {componentInfoConstant?.map((item, index) => (
            <CoreIndustryDetails
              key={index}
              contentItems={item.contents}
              title={item.title}
            />
          ))}
        </div>

        <h2 className='sub_header_font'>
          We also have customers in these domains
        </h2>

        <div className='CoreExpertiesCustomer'>
          {componentInfoCustomer?.map((item, index) => (
            <CoreIndustryDetails
              key={index}
              contentItems={item.contents}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CoreIndustry;
