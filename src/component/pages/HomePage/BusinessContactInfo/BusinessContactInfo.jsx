import React from 'react';
import person from '../../../../assets/images/person1.png';
import './BusinessContactInfo.scss';
// slick slider
import Slider from 'react-slick';
import { PinIcon } from '../../../../icons/icons';
import { BusinessContactInfoDetails } from '../../../../common/BusinessContactInfo';

const BusinessContactInfo = () => {
  // render();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='contactDetails'>
      {BusinessContactInfoDetails?.map((item) => (
        <>
          <div
            className='formContainer'
            key={item}
          >
            <h2 className='sub_header_font'>{item.heading}</h2>
            <form>
              <div className='formWrapper '>
                <div className='formInputPart'>
                  <input
                    type='text'
                    placeholder='Full Name'
                    name='name'
                    required
                  />
                  <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    className='placeholder-gray-400 text-gray-600 relative text-sm  focus:outline-none focus:ring '
                    required
                  />
                </div>
                <div className='formInputPart '>
                  <label
                    type='file'
                    name='upload'
                    id='upload'
                    htmlFor='upload'
                    className='formbold-input-label color-white d-flex align-items-center justify-content-between'
                  >
                    <p className='m-0 color-white'>{item.project}</p>
                    <PinIcon />
                  </label>
                </div>
              </div>

              <div className='formInputPart'>
                <input
                  type='checkbox'
                  id='box'
                  name='box'
                  value='checkBox'
                />
                <label htmlFor='box'>{item.check}</label>
              </div>

              <div className='d-flex align-items-center gap-3 sendingDetails'>
                <h4 className='content_para'>{item.msg}</h4>
                <button>{item.button}</button>
              </div>
            </form>
          </div>
          <div
            className='personReward'
            key={item}
          >
            <Slider {...settings}>
              <div>
                <div className='personDetail'>
                  <div>
                    <img
                      src={person}
                      alt='person1'
                    />
                  </div>
                  <div>
                    <h3 className='content_para'>{item.name}</h3>
                    <h3 className='content_para'>{item.founder}</h3>
                  </div>
                </div>
                <p className='content_para'>{item.review}</p>
              </div>
              <div>
                <div className='personDetail'>
                  <div>
                    <img
                      src={person}
                      alt='person1'
                    />
                  </div>
                  <div>
                    <h3 className='content_para'>{item.name}</h3>
                    <h3 className='content_para'>{item.founder}</h3>
                  </div>
                </div>
                <p className='content_para'>{item.review}</p>
              </div>
              <div>
                <div className='personDetail'>
                  <div>
                    <img
                      src={person}
                      alt='person1'
                    />
                  </div>
                  <div>
                    <h3 className='content_para'>{item.name}</h3>
                    <h3 className='content_para'>{item.founder}</h3>
                  </div>
                </div>
                <p className='content_para'>{item.review}</p>
              </div>
            </Slider>
          </div>
        </>
      ))}
    </div>
  );
};

export default BusinessContactInfo;
