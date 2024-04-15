import React from 'react';
import CoreIndustry from '../../../../ReUsableComponents/CoreIndustry/CoreIndustry';
import '../../../HomePage/CaseIndustry/CaseIndustry.scss';

const CoreIndustryService = ({
  componentInfoConstant,
  componentInfoCustomer,
}) => {
  return (
    <>
      <div className='CoreExpertise'>
        <h2 className='sub_header_font'>Core industry expertise</h2>
        <p className='content_para'>
          Decade of experience accumulated in sophisticated web platforms,
          mobile applications, and complex systems in line with the latest
          industry trends.
        </p>
        <CoreIndustry
          componentInfoConstant={componentInfoConstant}
          componentInfoCustomer={componentInfoCustomer}
        />
      </div>
    </>
  );
};

export default CoreIndustryService;
