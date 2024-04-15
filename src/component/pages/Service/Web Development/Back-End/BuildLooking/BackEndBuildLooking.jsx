import React from 'react';
import './BackEndBuildLooking.scss';

const BackEndBuildLooking = () => {
  return (
    <>
      <div className='buildLookingContainer'>
        <div className='buildLookingWrapper'>
          <p className='content_para'>
            Get a backend development service to equip your application with a
            robust backend software architecture. Request a call back and
            receive a full consultation from our tech experts.
          </p>
        </div>
        <div className='buildLookingWrapper'>
          <h2 className='sub_header_font'>
            Need to build fault-tolerant back ends?
          </h2>
          <button>Book a call</button>
        </div>
      </div>
      {/* * mobileview * */}
      <div className='buildLookingContainerMobView'>
        <h2 className='sub_header_font'>
          Need to build fault-tolerant back ends?
        </h2>
        <p className='content_para'>
          Get a backend development service to equip your application with a
          robust backend software architecture. Request a call back and receive
          a full consultation from our tech experts.
        </p>
        <div>
          <button>Book a call</button>
        </div>
      </div>
    </>
  );
};

export default BackEndBuildLooking;
