import React, { useState } from 'react';
import {
  WebTechBack,
  WebTechCMS,
  WebTechDatabases,
  WebTechFrameworks,
  WebTechFront,
} from '../../../../../../common/constant';

const WebTechContent = () => {
  const [tab, setTab] = useState('01');
  const [tabName, setTabName] = useState(WebTechFront);

  const handleTabChange = (tab) => {
    if (tab === 'WebTechFront') {
      setTabName(WebTechFront);
    } else if (tab === 'WebTechBack') {
      setTabName(WebTechBack);
    } else if (tab === 'WebTechFrameworks') {
      setTabName(WebTechFrameworks);
    } else if (tab === 'WebTechCMS') {
      setTabName(WebTechCMS);
    } else if (tab === 'WebTechDatabases') {
      setTabName(WebTechDatabases);
    }
  };

  return (
    <div className='container mx-auto'>
      <div className='d-flex gap-5 TechItems'>
        <p
          className='hoverBtnSelect sub_head_color px-2 py-2 fw-5 content_para '
          onClick={() => handleTabChange('WebTechFront')}
        >
          Frontend
        </p>
        <p
          className='hoverBtnSelect sub_head_color px-2 py-2 fw-5 content_para '
          onClick={() => handleTabChange('WebTechBack')}
        >
          Backend
        </p>
        <p
          className='hoverBtnSelect sub_head_color px-2 py-2 fw-5 content_para '
          onClick={() => handleTabChange('WebTechFrameworks')}
        >
          Frameworks
        </p>
        <p
          className='hoverBtnSelect sub_head_color px-2 py-2 fw-5 content_para '
          onClick={() => handleTabChange('WebTechCMS')}
        >
          CMS
        </p>
        <p
          className='hoverBtnSelect sub_head_color px-2 py-2 fw-5 content_para '
          onClick={() => handleTabChange('WebTechDatabases')}
        >
          Databases
        </p>
      </div>
      <div className='TechStackWrapperItems mt-5 '>
        <div>
          <div className='d-flex gap-4 overflow-hidden'>
            {tabName?.headingIcons.map((item) => (
              <>
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
              </>
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

export default WebTechContent;
