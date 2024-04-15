/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import {
  AppAndroidContentDatabases,
  AppAndroidContentFrameworks,
  AppAndroidContentLanguages,
} from '../../../../../../common/constant';
import './TechStackAndroidContent.scss';

const TechStackAndroidContent = () => {
  const [tab, setTab] = useState('01');
  const [tabName, setTabName] = useState(AppAndroidContentLanguages);

  const handleTabChange = (tab) => {
    if (tab === 'AppAndroidContentLanguages') {
      setTabName(AppAndroidContentLanguages);
    } else if (tab === 'AppAndroidContentDatabases') {
      setTabName(AppAndroidContentDatabases);
    } else if (tab === 'AppAndroidContentFrameworks') {
      setTabName(AppAndroidContentFrameworks);
    }
  };

  return (
    <div className='TechStackContainer'>
      <div className='TechStackWrapper'>
        <p
          className='content_para '
          onClick={() => handleTabChange('AppAndroidContentLanguages')}
        >
          Language
        </p>
        <p
          className='content_para '
          onClick={() => handleTabChange('AppAndroidContentDatabases')}
        >
          Databases
        </p>
        <p
          className='content_para '
          onClick={() => handleTabChange('AppAndroidContentFrameworks')}
        >
          Frameworks
        </p>
      </div>
      <div className='TechStackWrapperItems'>
        <div>
          {/* <Slider {...settings}> */}
          <div className='TechStackContent'>
            {tabName?.headingIcons.map((item) => (
              <div
                className='TechStackDetail'
                onClick={() => setTab(item?.id)}
              >
                <h2
                  key={item.id}
                  className='content_para'
                >
                  {item.heading}
                </h2>
                <div className='LanIconHover'>{item.langIcon}</div>
              </div>
            ))}
          </div>
          {/* </Slider> */}
          <div className='mt-5'>
            {tabName.information.map((item) => (
              <div
                key={item.id}
                className='row d-flex justify-content-between p-0'
              >
                {tab === item.id && (
                  <>
                    <div className='col-lg-8 col-md-12 p-0'>
                      <div>
                        <h2 className='color_white fw-6 sub_part_header mb-4'>
                          {item.subHeading}
                        </h2>
                        <p className='color_white m-0 content_para mb-5'>
                          {item.info}
                        </p>
                        <button className='contactBtn'>Hire Developers</button>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-12 p-0 d-flex gap-4 mt-100'>
                      <div className=' d-flex flex-column '>
                        <h2 className='color_white font_franklin fw-7 header_font m-0'>
                          {item.itemDivision}
                        </h2>
                        <p className='color_white content_para m-0'>
                          {item.deviceLang}
                        </p>
                      </div>
                      <div className=' d-flex flex-column '>
                        <h2 className='color_white font_franklin fw-7 header_font m-0'>
                          {item.percentage}
                        </h2>
                        <p className='color_white content_para m-0'>
                          {item.performer}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackAndroidContent;
