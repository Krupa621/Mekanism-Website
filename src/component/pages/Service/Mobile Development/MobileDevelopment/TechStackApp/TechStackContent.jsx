/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import './TechStackContent.css';
import {
  Databases,
  Frameworks,
  Languages,
} from '../../../../../../common/constant';

const TechStackContent = () => {
  const [tab, setTab] = useState('01');
  const [tabName, setTabName] = useState(Languages);

  const handleTabChange = (tab) => {
    if (tab === 'Languages') {
      setTabName(Languages);
    } else if (tab === 'Databases') {
      setTabName(Databases);
    } else if (tab === 'Frameworks') {
      setTabName(Frameworks);
    }
  };

  return (
    <div className='container mx-auto'>
      <div className='d-flex gap-3'>
        <p
          className='hoverBtnSelect sub_head_color px-2 py-2 fw-5 content_para '
          onClick={() => handleTabChange('Languages')}
        >
          Language
        </p>
        <p
          className='hoverBtnSelect sub_head_color px-2 py-2 fw-5 content_para '
          onClick={() => handleTabChange('Databases')}
        >
          Databases
        </p>
        <p
          className='hoverBtnSelect sub_head_color px-2 py-2 fw-5 content_para '
          onClick={() => handleTabChange('Frameworks')}
        >
          Frameworks
        </p>
      </div>
      <div className='TechStackWrapperItems mt-5 '>
        <div>
          <div className='d-flex gap-4 overflow-hidden'>
            {tabName?.headingIcons.map((item) => (
              <div
                className='text-center'
                onClick={() => setTab(item?.id)}
              >
                <h2
                  key={item.id}
                  className='content_para color_white'
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

export default TechStackContent;
