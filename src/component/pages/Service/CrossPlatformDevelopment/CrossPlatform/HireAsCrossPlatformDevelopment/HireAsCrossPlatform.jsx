import React from 'react';
import './HireAsCrossPlatform.scss';
import MemberDetail from './MemberDetail/MemberDetail';
import DetailContent from './DetailContent/DetailContent';
function HireAsCrossPlatform() {
  return (
    <div className='hireascrossplatform-wrapper'>
      <h1 className='sub_header_font'>
        Why Hire company as Cross-Platform App Development Company
      </h1>
      <div className='memberdetailspart-container mt-80'>
        <MemberDetail
          name='Sergey Molchanov'
          position='Head of Business Development'
        />
        <div className='detailcontent-container'>
          <DetailContent
            name='Best practices and compliance with industry security standards'
            info='We create cross-platform solutions that consider the latest standards regarding security, data  safety, usability, and interoperability in particular domain and area'
          />
          <DetailContent
            name='Full-cycle development'
            info='End-to-end cross-platform mobile app development services: Discovery Phase, bespoke UI/UX  designs and prototypes, Delivery, and post-production support'
          />
          <DetailContent
            name='Technology expertise'
            info='company experts help startups and companies choose the best cross-platform stack and advise the architecture, allowing to achieve the project’s goals faster'
          />
          <DetailContent
            name='Continuous innovation'
            info='Our team participates in various conferences and meetings devoted to innovations and  updates in cross-platform development — to make innovations serve our customers’ business  goals and needs'
          />
        </div>
      </div>
    </div>
  );
}

export default HireAsCrossPlatform;
