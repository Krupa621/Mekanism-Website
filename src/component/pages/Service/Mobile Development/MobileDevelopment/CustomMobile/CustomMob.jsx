import React, { useState } from 'react';
import './CustomMob.scss';
import { customDetails } from '../../../../../../common/constant';

const CustomMob = () => {
  const [tab, setTab] = useState('01');

  const tabs = [
    {
      id: '01',
      name: 'Taxi',
    },
    {
      id: '02',
      name: 'Streaming',
    },
    {
      id: '03',
      name: 'Booking',
    },
    {
      id: '04',
      name: 'Delivery',
    },
    {
      id: '05',
      name: 'Fitness',
    },
    {
      id: '06',
      name: 'Marketplace',
    },
  ];
  return (
    <div className='container mt-140 mx-auto'>
      <div className='row d-flex align-items-center mb-5'>
        <h2 className='col sub_header_font fw-6 sub_head_color m-0'>
          Custom mobile apps
        </h2>
        <p className='col sub_head_color m-0 fw-5 content_para '>
          Helping startups and businesses build mobile solutions that support
          their brand identity, meet market needs and encourage business growth
          and expansion.
        </p>
      </div>
      <div className='ApplicationDetailing'>
        <div className='AppWidth mx-auto'>
          <div className='appItems d-flex justify-content-between mx-auto mb-40'>
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
          {customDetails.map((item) => (
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
        </div>
      </div>
    </div>
  );
};

export default CustomMob;
