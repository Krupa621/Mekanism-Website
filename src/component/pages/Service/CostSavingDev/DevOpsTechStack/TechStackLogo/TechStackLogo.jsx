import React from 'react';
import './TechStackLogo.scss';

function TechStackLogo({
  cloudstacklogo,
  stacklogosourcecode,
  stacklogocicd,
  selectedStack,
  stacklogowebserver,
  stacklogocontainer,
  stacklogoapplication,
  stacklogomonitoring,
  stacklogocode,
}) {
  const logosToShow = (() => {
    switch (selectedStack) {
      case 0:
        return cloudstacklogo;
      case 1:
        return stacklogosourcecode;
      case 2:
        return stacklogocicd;
      case 3:
        return stacklogowebserver;
      case 4:
        return stacklogocontainer;
      case 5:
        return stacklogoapplication;
      case 6:
        return stacklogomonitoring;
      case 7:
        return stacklogocode;

      default:
        break;
    }
  })();
  return (
    <>
      {logosToShow.map((item, index) => (
        <div
          className='techstacklogo-wrapper'
          key={index}
        >
          <h2 className='sub_part_header '>{item.title}</h2>
          <div className='techstack-logo-wrapper'>
            {item.logos.map((list, i) => (
              <div
                className='logo-name'
                key={index}
              >
                <img
                  src={list.logo}
                  alt={`Logo ${i + 1}`}
                />
                <h4 className='content_para'>{list.techname}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default TechStackLogo;
