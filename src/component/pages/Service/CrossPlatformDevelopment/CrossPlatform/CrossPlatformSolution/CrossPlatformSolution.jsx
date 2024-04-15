import React from 'react';
import './CrossPlatformSolution.scss';
import CrossSolutionCard from './CrossSolutionCards/CrossSolutionCard';
function CrossPlatformSolution() {
  return (
    <div className='crossplatform-solution-wrapper'>
      <div className='crosssolution-text-wrapper'>
        <h2 className='sub_header_font '>
          Cross-Platform Solutions We’ve Delivered
        </h2>
        <p className='content_para'>
          We individually approach each cross-platform solution, find the best
          ways to implement it, and help the client optimize development time,
          budget, and efforts
        </p>
      </div>
      <div className='crosssolution-container mt-60'>
        <CrossSolutionCard />
      </div>
    </div>
  );
}

export default CrossPlatformSolution;
