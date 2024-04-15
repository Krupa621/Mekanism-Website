import React, { useState } from 'react';
import './AppBuildData.scss';
import { Arrow } from '../../../icons/icons';

const AppBuildData = (props) => {
  const { contentData, tabs } = props;
  const [tab, setTab] = useState('01');
  console.log('contentData', contentData);
  return (
    <>
      <div className='ApplicationDetailing'>
        <div className='AppWidth'>
          <div className='appItems'>
            {tabs.map((item, index) => (
              <p
                key={index}
                className='content_para'
                onClick={() => setTab(item?.id)}
              >
                {item.name}
              </p>
            ))}
          </div>
          <div className='contentContainer'>
            {contentData.map((item) => (
              <>
                {tab === item.id && (
                  <>
                    <div
                      key={item.id}
                      className='developInfo'
                    >
                      <p className='content_para'>{item.info}</p>
                      <div className='button'>
                        <h3 className='content_para'>{item.button}</h3>
                        <Arrow />
                      </div>
                    </div>
                    <div className='developAvgTime'>
                      <div>
                        <h3 className='sub_header_font'>{item.hours}</h3>
                        <p className='content_para'>{item.hrsInfo}</p>
                      </div>
                      <div>
                        <h3 className='sub_header_font'>{item.months}</h3>
                        <p className='content_para'>{item.monthInfo}</p>
                      </div>
                    </div>
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBuildData;
