import React from 'react';

function FlutterHeroSection() {
  return (
    <div className='Hero_section mobileTitle'>
      <div className='d-flex flex-column justify-content-center py-3 serviceHeroPart'>
        <div className='d-flex align-items-center gap-2'>
          <p className='content_para_info fw-4 sub_content_light_color m-0'>
            Service
          </p>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.21484 1.56799L5.73516 1.04768C5.95547 0.827368 6.31172 0.827368 6.52969 1.04768L11.0859 5.60159C11.3062 5.8219 11.3062 6.17815 11.0859 6.39612L6.52969 10.9524C6.30937 11.1727 5.95312 11.1727 5.73516 10.9524L5.21484 10.4321C4.99219 10.2094 4.99687 9.84612 5.22422 9.62815L8.04844 6.93752H1.3125C1.00078 6.93752 0.75 6.68674 0.75 6.37502V5.62502C0.75 5.31331 1.00078 5.06252 1.3125 5.06252H8.04844L5.22422 2.3719C4.99453 2.15393 4.98984 1.79065 5.21484 1.56799Z'
              fill='#878787'
            />
          </svg>
          <p className='content_para_info fw-4 sub_content_light_color m-0'>
            Cross-Platform Development
          </p>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.21484 1.56799L5.73516 1.04768C5.95547 0.827368 6.31172 0.827368 6.52969 1.04768L11.0859 5.60159C11.3062 5.8219 11.3062 6.17815 11.0859 6.39612L6.52969 10.9524C6.30937 11.1727 5.95312 11.1727 5.73516 10.9524L5.21484 10.4321C4.99219 10.2094 4.99687 9.84612 5.22422 9.62815L8.04844 6.93752H1.3125C1.00078 6.93752 0.75 6.68674 0.75 6.37502V5.62502C0.75 5.31331 1.00078 5.06252 1.3125 5.06252H8.04844L5.22422 2.3719C4.99453 2.15393 4.98984 1.79065 5.21484 1.56799Z'
              fill='#878787'
            />
          </svg>
          <p className='content_para_info fw-4 sub_content_light_color m-0'>
            Flutter App Development
          </p>
        </div>
        <h2 className='header_font fw-7 font_franklin header_color mb-20'>
          Flutter App Development Services
        </h2>
        <p className='content_para fw-4 mb-40'>
          Get high-performance, native-like mobile apps built with Flutter on
          time and within your budget.
        </p>
        <div>
          <button
            className='primary_button border_none px-3 py-2'
            type='submit'
          >
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlutterHeroSection;
