import React from 'react';
import './HireAsIt.scss';
import MemberDetail from '../../../Service/CrossPlatformDevelopment/CrossPlatform/HireAsCrossPlatformDevelopment/MemberDetail/MemberDetail';
import DetailContent from '../../../Service/CrossPlatformDevelopment/CrossPlatform/HireAsCrossPlatformDevelopment/DetailContent/DetailContent';
function HireAsIt() {
  return (
    <div className='hire-as-it-wrapper'>
      <div className='hireasit-text-wrapper'>
        <h1 className='sub_header_font fw-6'>
          Why Hire company as IT consulting services company
        </h1>
      </div>

      <div className='memberdetailspart-container mt-80'>
        <MemberDetail
          name='Sergey Molchanov'
          position='Head of Business Development'
        />
        <div className='detailcontent-container'>
          <DetailContent
            name='We’ve been providing IT consulting services since 2011'
            extraClassName='detailtext'
            fontWeight='400'
            fontSize='18px'
          />
          <DetailContent
            name='Deep tech expertise across different business domains'
            extraClassName='detailtext'
            fontWeight='400'
            fontSize='18px'
          />
          <DetailContent
            name='Senior specialists are available — mobile and web developers, DevOps, designers, PMs, QA engineers, analysts'
            extraClassName='detailtext'
            fontWeight='400'
            fontSize='18px'
          />
          <DetailContent
            name='AWS Certified team — AWS Certified Security-Specialty, AWS STP Foundations, AWS Certified Developer - Associate'
            extraClassName='detailtext'
            fontWeight='400'
            fontSize='18px'
          />
          <DetailContent
            name='We offer full-suite IT consulting services to help you optimize software architecture and improve the decision-making process'
            extraClassName='detailtext'
            fontWeight='400'
            fontSize='18px'
          />
          <DetailContent
            name='Modernize outdated IT systems to accelerate technology adoption and fuel business growth'
            extraClassName='detailtext'
            fontWeight='400'
            fontSize='18px'
          />
          <DetailContent
            name='Provide digital transformation to improve customer experience and reach your business goals in the digital era'
            extraClassName='detailtext'
            fontWeight='400'
            fontSize='18px'
          />
        </div>
      </div>
    </div>
  );
}

export default HireAsIt;
