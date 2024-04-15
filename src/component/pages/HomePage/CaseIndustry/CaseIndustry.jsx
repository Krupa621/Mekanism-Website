import React from 'react';
import {
  CaseIndustryConstant,
  CaseIndustryCustomer,
} from '../../../../common/CoreIndustry';
import CoreIndustry from '../../../ReUsableComponents/CoreIndustry/CoreIndustry';

const CaseIndustry = () => {
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
          componentInfoConstant={CaseIndustryConstant}
          componentInfoCustomer={CaseIndustryCustomer}
        />
      </div>
    </>
  );
};
export default CaseIndustry;
