import React, { useState } from 'react';
import './DevOpsTechStack.scss';
import TechStackLogo from './TechStackLogo/TechStackLogo';
import TechStackName from './TechStackName/TechStackName';
import { devopsname } from '../../../../../common/devOpsTechStack/TechstackNames';

function DevOpsTechStack({
  title,
  detail,
  cloudstacklogo,
  stacklogosourcecode,
  stacklogocicd,
  stacklogowebserver,
  stacklogocontainer,
  stacklogoapplication,
  stacklogomonitoring,
  stacklogocode,
}) {
  const [selectedStack, setSelectedStack] = useState(0);

  return (
    <div className='devops-techstack-wrapper'>
      <div className='devops-techstack-content-wrapper'>
        <div className='techstack-text-wrapper'>
          <h2 className='sub_header_font fw-6'>{title}</h2>
          <p className='content_para fw-4'>{detail}</p>
        </div>
        <div className='technology-names'>
          <TechStackLogo
            cloudstacklogo={cloudstacklogo}
            stacklogosourcecode={stacklogosourcecode}
            stacklogocicd={stacklogocicd}
            selectedStack={selectedStack}
            stacklogowebserver={stacklogowebserver}
            stacklogocontainer={stacklogocontainer}
            stacklogoapplication={stacklogoapplication}
            stacklogomonitoring={stacklogomonitoring}
            stacklogocode={stacklogocode}
          />
          {devopsname.map((data, index) => (
            <TechStackName
              {...data}
              key={index}
              setSelectedStack={setSelectedStack}
              selectedStack={selectedStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DevOpsTechStack;
