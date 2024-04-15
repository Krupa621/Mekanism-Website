import React from 'react';
import MemberDetail from '../../../CrossPlatformDevelopment/CrossPlatform/HireAsCrossPlatformDevelopment/MemberDetail/MemberDetail';
import DetailContent from '../../../CrossPlatformDevelopment/CrossPlatform/HireAsCrossPlatformDevelopment/DetailContent/DetailContent';
import './HireAsFrontend.scss';
function HireAsFrontend() {
  return (
    <div className='hireasfrontend-wrapper'>
      <div className='hireasfrontend-text-wrapper'>
        <h1 className='sub_header_font fw-6'>
          Why Choose Our Frontend Services
        </h1>
        <p className='content_para fw-3'>
          Our frontend team is fully staffed by experienced developers who are
          constantly learning new technologies to ensure the best quality of
          your software
        </p>
      </div>

      <div className='memberdetailspart-container mt-80'>
        <MemberDetail
          name='Sergey Molchanov'
          position='Head of Business Development'
        />
        <div className='detailcontent-container'>
          <DetailContent
            name='92% of the company are senior and middle-level engineers'
            info='We constantly deepen the teams’ expertise, providing customers with certified software engineers who can solve complicated tasks'
          />
          <DetailContent
            name='An integrated approach to your project'
            info='We offer tech and business analytics services to select the best development approach and implement your idea quickly'
          />
          <DetailContent
            name='Quality, regardless of the project type and scope'
            info='We consistently fulfill our obligations and ensure the quality of delivery when developing large-scale or lightweight software in any industry'
          />
          <DetailContent
            name='Fast involvement: from 1 day'
            info='The pool of frontend developers is always available: our customers don’t spend time on recruitment, getting software engineers even during 24 hours'
          />
        </div>
      </div>
    </div>
  );
}

export default HireAsFrontend;
