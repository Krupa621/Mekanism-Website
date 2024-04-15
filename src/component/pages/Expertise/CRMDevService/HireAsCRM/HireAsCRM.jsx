import React from 'react';
import MemberDetail from '../../../Service/CrossPlatformDevelopment/CrossPlatform/HireAsCrossPlatformDevelopment/MemberDetail/MemberDetail';
import DetailContent from '../../../Service/CrossPlatformDevelopment/CrossPlatform/HireAsCrossPlatformDevelopment/DetailContent/DetailContent';
import './HireAsCRM.scss';
function HireAsCRM() {
  return (
    <div className='hire-as-crm-wrapper'>
      <div className='hireasCrm-text-wrapper'>
        <h1 className='sub_header_font fw-6'>
          Why Hire us as a CRM software development company
        </h1>
      </div>

      <div className='memberdetailspart-container mt-80'>
        <MemberDetail
          name='Sergey Molchanov'
          position='Head of Business Development'
        />
        <div className='detailcontent-container'>
          <DetailContent
            name='Agile-oriented development team full of high-tier experts'
            extraClassName='detailtext'
            fontWeight='400'
          />
          <DetailContent
            name='On-demand team scaling'
            extraClassName='detailtext'
            fontWeight='400'
          />
          <DetailContent
            name='Fast integration into existing development workflows'
            extraClassName='detailtext'
            fontWeight='400'
          />
          <DetailContent
            name='Strong technical expertise across six industries'
            extraClassName='detailtext'
            fontWeight='400'
          />
          <DetailContent
            name='Huge talent pool to choose'
            extraClassName='detailtext'
            fontWeight='400'
          />
          <DetailContent
            name='Experience with Jira-like corporate tools and ease of  communication'
            extraClassName='detailtext'
            fontWeight='400'
          />
          <DetailContent
            name='Sign a non-disclosure agreement on request'
            extraClassName='detailtext'
            fontWeight='400'
          />
          <DetailContent
            name='Full management control'
            extraClassName='detailtext'
            fontWeight='400'
          />
        </div>
      </div>
    </div>
  );
}

export default HireAsCRM;
