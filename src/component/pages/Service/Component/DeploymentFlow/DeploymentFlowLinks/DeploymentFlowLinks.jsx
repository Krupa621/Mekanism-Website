import React, { useState, useEffect } from 'react';
import './DeploymentFlowLinks.scss';
import DescoveryPhase from './FlowLinkContent/DescoveryPhase';
import FirstContent from './FlowLinkContent/FirstContent';
import UiUx from './FlowLinkContent/UiUx';
import DevelopmentProcess from './FlowLinkContent/DevelopmentProcess';
import QA from './FlowLinkContent/QA';
import Deployment from './FlowLinkContent/Deployment';
import Support from './FlowLinkContent/Support';

function DeploymentFlowLinks({ activeIndex }) {
  const [activeSection, setActiveSection] = useState('first-contact');

  useEffect(() => {
    const sections = [
      'first-contact',
      'discovery-phase',
      'ui-ux-design',
      'development-process',
      'quality-assurance',
      'deployment',
      'support-maintenance',
    ];

    setActiveSection(sections[activeIndex]);
  }, [activeIndex]);

  const items = [
    'first-contact',
    'discovery-phase',
    'ui-ux-design',
    'development-process',
    'quality-assurance',
    'deployment',
    'support-maintenance',
  ];

  const handleSectionClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  return (
    <div className='flowlink-wrapper'>
      <div
        className='flowlink'
        style={{ transform: `translateX(-${activeIndex * 175}px)` }}
      >
        {items.map((item) => (
          <h3
            key={item}
            onClick={() => handleSectionClick(item)}
            className={activeSection === item ? 'active' : ''}
          >
            {item}
          </h3>
        ))}
      </div>

      <div className='content-wrapper'>
        {items.map((item) => (
          <div key={item}>
            {activeSection === item && (
              <>
                {item === 'first-contact' && <FirstContent />}
                {item === 'discovery-phase' && <DescoveryPhase />}
                {item === 'ui-ux-design' && <UiUx />}
                {item === 'development-process' && <DevelopmentProcess />}
                {item === 'quality-assurance' && <QA />}
                {item === 'deployment' && <Deployment />}
                {item === 'support-maintenance' && <Support />}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeploymentFlowLinks;
