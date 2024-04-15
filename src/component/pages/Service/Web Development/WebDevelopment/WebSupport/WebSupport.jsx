/* eslint-disable max-len */
import React, { useState } from 'react';
import { WebCustomDetails } from '../../../../../../common/AppBuildSection';
import { Arrow } from '../../../../../../icons/icons';

const WebSupport = () => {
  const [tab, setTab] = useState('01');

  const tabs = [
    {
      id: '01',
      name: 'E-commerce',
    },
    {
      id: '02',
      name: 'Media',
    },
    {
      id: '03',
      name: 'Marketplace',
    },
    {
      id: '04',
      name: 'Enterprise',
    },
  ];
  return (
    <div className='container mt-140 mx-auto'>
      <div className='row d-flex align-items-center mb-5 justify-content-between'>
        <h2 className='col-12 col-lg-4 col-sm-6 sub_header_font fw-6 sub_head_color m-0'>
          Web app to support your business
        </h2>
        <p className='col-12 col-lg-3 col-sm-6 sub_head_color m-0 fw-5 content_para '>
          Build a web application adjusted to your business domain and focused
          on your target audience’s pains.
        </p>
      </div>
      <div className='ApplicationDetailing'>
        <div className='AppWidth mx-auto'>
          <div className='TechItems appItems d-flex justify-content-between mx-auto mb-40'>
            {tabs.map((item, index) => (
              <p
                key={index}
                className='hoverBtnSelect content_para px-3 py-2 sub_head_color'
                onClick={() => setTab(item?.id)}
              >
                {item.name}
              </p>
            ))}
          </div>
          {WebCustomDetails.map((item) => (
            <div
              key={item.id}
              className='row justify-content-between'
            >
              {tab === item.id && (
                <>
                  <div className='col-lg-8 col-md-12 appItemWidth'>
                    <p className='sub_head_color m-0 fw-5 content_para '>
                      {item.info}
                    </p>
                  </div>
                  <div className='col-lg-4 col-md-12 appItems'>
                    <div className='mb-4'>
                      <h3 className='content_color sub_header_font m-0'>
                        {item.hours}
                      </h3>
                      <p className='content_para m-0 sub_content_light_color'>
                        {item.hrsInfo}
                      </p>
                    </div>
                    <div>
                      <h3 className='content_color sub_header_font m-0'>
                        {item.months}
                      </h3>
                      <p className='content_para m-0 sub_content_light_color'>
                        {item.monthInfo}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
          <div className='d-flex align-items-center exploreBtn mt-4'>
            <p className='m-0 content_para fw-4'>See Case Study</p>
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSupport;
