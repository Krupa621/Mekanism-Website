import React from 'react';
import './AdvantageOfCrossPlatform.scss';
import AdvantageHelpCard from './AdvantageHelpCards/AdvantageHelpCard';
function AdvantageOfCrossPlatform() {
  return (
    <div className='advantageofcross-wrapper'>
      <div className='advantageofcross-leftpart'>
        <h1 className='sub_header_font'>
          Advantages of Cross-Platform App Development
        </h1>
        <p className='content_para mt-20'>
          Benefit from our cross platform mobile app development service: custom
          solutions for mobile, smart TVs, wearables, or else, aligning with
          existing business systems, updates and rebuilds on demand
        </p>
        <button className='content_para mt-40'>
          Contact Us <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
      <div className='advantagecards-wrapper'>
        <AdvantageHelpCard
          name='Cross-platform Scalability'
          number='1'
          info='A unified app business logic and up to 80% code reuse to target several platforms simultaneously'
          extramainClassName='scalability'
          extranumberClassName='scalability-number'
        />
        <AdvantageHelpCard
          name='Quicker time-to-market'
          number='2'
          info='Save 20-40% of time on app’s creation and deployment to stores with less resources than on two native solutions'
          extramainClassName='quicker'
          extranumberClassName='quicker-number'
        />
        <AdvantageHelpCard
          name='Reduced development costs'
          number='3'
          info='Cross-platform mobile development services to cut project costs without sacrificing features or native-like interface'
          extramainClassName='reduced'
          extranumberClassName='reduced-number'
        />
      </div>
    </div>
  );
}

export default AdvantageOfCrossPlatform;
