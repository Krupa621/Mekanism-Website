import React from 'react';
import './DevelopmentTime.scss';
import Progressbar from './ProgressBar/Progressbar';
import FlowRightTime from './FlowRightTime/FlowRightTime';

function DevelopmentTime({ selectedApp }) {
  const getAppProgress = () => {
    switch (selectedApp) {
      case 'uber':
        return (
          <>
            <Progressbar
              width='40%'
              backgroundColor='#34C759'
              text='Android'
            />
            <Progressbar
              width='40%'
              backgroundColor='#f132e'
              text='IOS'
            />
            <Progressbar
              width='50%'
              backgroundColor='#16C3FD'
              text='Flutter'
            />
            <Progressbar
              width='90%'
              backgroundColor='#E73434'
              text='Android + IOS'
            />
          </>
        );
      case 'shipping':
        return (
          <>
            <Progressbar
              width='60%'
              backgroundColor='#34C759'
              text='Android'
            />
            <Progressbar
              width='60%'
              backgroundColor='#f132e'
              text='IOS'
            />
            <Progressbar
              width='60%'
              backgroundColor='#16C3FD'
              text='Flutter'
            />
            <Progressbar
              width='90%'
              backgroundColor='#E73434'
              text='Android + IOS'
            />
          </>
        );
      case 'ecommerce':
        return (
          <>
            <Progressbar
              width='45%'
              backgroundColor='#34C759'
              text='Android'
            />
            <Progressbar
              width='45%'
              backgroundColor='#f132e'
              text='IOS'
            />
            <Progressbar
              width='60%'
              backgroundColor='#16C3FD'
              text='Flutter'
            />
            <Progressbar
              width='90%'
              backgroundColor='#E73434'
              text='Android + IOS'
            />
          </>
        );
      case 'fitness':
        return (
          <>
            <Progressbar
              width='50%'
              backgroundColor='#34C759'
              text='Android'
            />
            <Progressbar
              width='50%'
              backgroundColor='#f132e'
              text='IOS'
            />
            <Progressbar
              width='70%'
              backgroundColor='#16C3FD'
              text='Flutter'
            />
            <Progressbar
              width='90%'
              backgroundColor='#E73434'
              text='Android + IOS'
            />
          </>
        );
      default:
        return null;
    }
  };

  const getFlowRightTime = () => {
    switch (selectedApp) {
      case 'uber':
        return (
          <FlowRightTime detail='You spend on Uber-like app built on Flutter' />
        );
      case 'shipping':
        return (
          <FlowRightTime detail='You spend on Shipping app built on React native' />
        );
      case 'ecommerce':
        return (
          <FlowRightTime detail='You spend on E-commerce app built on React native' />
        );
      case 'fitness':
        return (
          <FlowRightTime detail='You spend on Fitness app built on React native' />
        );
      default:
        return null;
    }
  };

  return (
    <div className='developmentflow-wrapper'>
      <div className='flow-leftside'>
        <h3 className='content_para fw-4'>Development time</h3>
        <div className='hour-wrapper'>
          <div className='line-1'>
            <h3 className='content_para fw-6'>0h</h3>
          </div>
          <div className='line'></div>
          <div className='line'>
            <h3 className='content_para fw-6'>500h</h3>
          </div>
          <div className='line'></div>
          <div className='line'>
            <h3 className='content_para fw-6'>1000h</h3>
          </div>
        </div>
        <div className='progress-container'>{getAppProgress()}</div>
      </div>
      {getFlowRightTime()}
    </div>
  );
}

export default DevelopmentTime;
