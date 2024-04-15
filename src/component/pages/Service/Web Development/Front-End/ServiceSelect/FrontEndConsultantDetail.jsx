import React from 'react';
import consultantImg from '../../../../../../assets/images/FrontEndPage/Consulatant.png';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillLinkedin } from 'react-icons/ai';
import { FrontEndServices } from '../../../../../../common/constant';

const FrontEndConsultantDetail = () => {
  return (
    <div className='consulatantContainer row'>
      <div className='consultantImg col-lg-4 col-md-6 col-12'>
        {/* <div className='consulatantImage'> */}
        <img
          src={consultantImg}
          alt='imageCounslor'
          className='imgConsoulr'
        />
        {/* </div> */}
        <div className='consultantInfo d-flex justify-content-between'>
          <div>
            <h3 className='mb-1 fw-6  sub_part_header content_color'>
              Sergey Molchanov
            </h3>
            <p className='m-0 content_para fw-4 sub_content_light_color'>
              Head of Business Development
            </p>
            <button
              className='mt-3 primary_button border_none px-3 py-2'
              type='submit'
            >
              Book Consultation
            </button>
          </div>
          <div>
            <HiOutlineMail />
            <AiFillLinkedin />
          </div>
        </div>
      </div>
      <div className='col-lg-8 col-md-6 col-12'>
        {FrontEndServices?.map((item, index) => (
          <div
            key={index}
            className='d-flex gap-3'
          >
            <svg
              className='mt-2'
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g
                id='Icon Set - Travel'
                clipPath='url(#clip0_331_4685)'
              >
                <path
                  id='Vector'
                  d='M8.65146 21.1393L0.851457 13.3393C0.382848 12.8707 0.382848 12.1109 0.851457 11.6423L2.54847 9.94521C3.01708 9.47655 3.77693 9.47655 4.24553 9.94521L9.49999 15.1996L20.7544 3.94521C21.2231 3.4766 21.9829 3.4766 22.4515 3.94521L24.1485 5.64227C24.6171 6.11088 24.6171 6.87068 24.1485 7.33933L10.3485 21.1394C9.87986 21.608 9.12007 21.608 8.65146 21.1393Z'
                  fill='#f132e'
                />
              </g>
              <defs>
                <clipPath id='clip0_331_4685'>
                  <rect
                    width='24'
                    height='24'
                    fill='white'
                    transform='translate(0.5 0.542969)'
                  />
                </clipPath>
              </defs>
            </svg>
            <div>
              <h3 className=' fw-6 sub_part_header m-0 content_color mb-2 '>
                {item.heading}
              </h3>
              <p className=' m-0 fw-4 content_color content_para'>
                {item.info}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontEndConsultantDetail;
