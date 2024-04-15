import React from 'react';
import './AppCost.scss';

const AppCost = () => {
  return (
    <>
      <div className='AppCostContainer'>
        <h2 className='sub_header_font'>How much will your app cost?</h2>
        <div className='appCostInfo'>
          <p className='content_para'>
            Calculate the cost of your software project with our solution that
            allows you to select the required functionality interactively and
            quickly
          </p>
          <div className='w-100'>
            <button>Calculate Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCost;
