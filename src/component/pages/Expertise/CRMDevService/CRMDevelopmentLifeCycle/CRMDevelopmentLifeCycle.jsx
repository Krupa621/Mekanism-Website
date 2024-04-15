import React, { useState } from 'react';
import './CRMDevelopmentLifeCycle.scss';
import LifeCycleContent from './LifeCycleContent/LifeCycleContent';
import {
  content,
  crmlifecycledata,
  rightsidecontent,
} from '../../../../../common/lifecycleContent';
import RightSideContent from './LifeCycleContentRightSide/RightSideContent';
import LifeCycleContentTabletview from './LifeCycleContentTabletview';

function CRMDevelopmentLifeCycle() {
  const [selectedStack, setSelectedStack] = useState(0);

  return (
    <div className='crm-lifecycle-wrapper'>
      <div className='crm-lifecycle-text-wrapper'>
        <h2 className='sub_header_font fw-6'>Our CRM development cycle</h2>
        <p className='content_para'>
          Our custom CRM development services are based on a time-tested
          development process that helps us deliver polished CRM systems.
        </p>
      </div>
      <div className='lifecycle-content-wrapper'>
        <LifeCycleContent
          contents={crmlifecycledata}
          setSelectedStack={setSelectedStack}
          selectedStack={selectedStack}
          additionalData={rightsidecontent}
        />
        <RightSideContent
          contents={rightsidecontent}
          selectedStack={selectedStack}
        />
        <LifeCycleContentTabletview contents={content} />
      </div>
    </div>
  );
}

export default CRMDevelopmentLifeCycle;
