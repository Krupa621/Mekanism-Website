import React, { useState } from 'react';
import './TechStackIoSDev.scss';
import {
  AppIoSContentCD,
  AppIoSContentDatabases,
  AppIoSContentFRP,
  AppIoSContentLanguages,
} from '../../../../../../common/constant';

const TechStackIoSContent = () => {
  const [tab, setTab] = useState('01');
  const [tabName, setTabName] = useState(AppIoSContentLanguages);

  const handleTabChange = (tab) => {
    if (tab === 'AppIoSContentLanguages') {
      setTabName(AppIoSContentLanguages);
    } else if (tab === 'AppIoSContentDatabases') {
      setTabName(AppIoSContentDatabases);
    } else if (tab === 'AppIoSContentFRP') {
      setTabName(AppIoSContentFRP);
    } else if (tab === 'AppIoSContentCD') {
      setTabName(AppIoSContentCD);
    }
  };

  return (
    <div className='TechStackContainer'>
      <div className='TechStackWrapper'>
        <p
          className='content_para '
          onClick={() => handleTabChange('AppIoSContentLanguages')}
        >
          Language
        </p>
        <p
          className='content_para'
          onClick={() => handleTabChange('AppIoSContentDatabases')}
        >
          Databases
        </p>
        <p
          className='content_para '
          onClick={() => handleTabChange('AppIoSContentFRP')}
        >
          FRP and networking
        </p>
        <p
          className='content_para '
          onClick={() => handleTabChange('AppIoSContentCD')}
        >
          CI/CD
        </p>
      </div>
      <div className='TechStackWrapperItems'>
        <div>
          <div className='TechStackContent'>
            {tabName?.headingIcons.map((item, index) => (
              <div
                key={index}
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
          <div className=' mt-5'>
            {tabName.information.map((item) => (
              <div
                key={item.id}
                className='row d-flex justify-content-between'
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

export default TechStackIoSContent;
