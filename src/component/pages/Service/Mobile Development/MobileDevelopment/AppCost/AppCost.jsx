import React from 'react';
import './AppCost.scss';

const AppCost = () => {
  return (
    <>
      <div className='appCostContainer'>
        <div className='appCostWrapper'>
          <p className='content_para'>
            Calculate the cost of your software project with our solution that
            allows you to select the required functionality interactively and
            quickly
          </p>
        </div>
        <div className='appCostContent'>
          <h2 className='sub_header_font'>How much will your app cost?</h2>
          <button>Calculate Now</button>
        </div>
      </div>
      {/* mobileview */}
      <div className='appCostContainerMobView'>
        <h2 className='sub_header_font'>How much will your app cost?</h2>
        <p className='content_para'>
          Calculate the cost of your software project with our solution that
          allows you to select the required functionality interactively and
          quickly
        </p>
        <button>Calculate Now</button>
      </div>
    </>
  );
};

export default AppCost;
