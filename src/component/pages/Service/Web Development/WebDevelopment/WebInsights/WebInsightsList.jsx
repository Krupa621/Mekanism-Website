import React from 'react';
import Slider from 'react-slick';
import { WebLatestInsightWrapper } from '../../../../../../common/LatestInsight';

const WebInsightsList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,

    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {WebLatestInsightWrapper?.map((item, index) => (
          <div
            key={index}
            className='col px-0 mb-4'
          >
            <div className='mx-2 h-100 Insights_box px-0 d-flex flex-column justify-content-between'>
              <div
                className='p-4'
                style={{ height: '260px' }}
              >
                <div className='d-flex gap-2 align-items-center mb-10'>
                  <p className='content_para fw-4 sub_head_color m-0'>
                    {item.blogName}
                  </p>
                  <img
                    src={item.icon}
                    alt='ArrowIcon'
                  />
                  <p className='content_para fw-4 sub_head_color m-0'>
                    {item.guideName}
                  </p>
                </div>
                <h3 className='sub_part_header fw-4 sub_head_color mb-10'>
                  {item.title}
                </h3>
                <p className='content_para fw-4 sub_head_color mb-30'>
                  May 23, 2023
                </p>
              </div>
              <div>
                <img
                  src={item.imgSrc}
                  alt='Insight_image'
                  className='w-100'
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default WebInsightsList;
