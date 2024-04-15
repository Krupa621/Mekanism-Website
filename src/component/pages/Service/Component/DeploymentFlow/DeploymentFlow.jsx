import React, { useState } from 'react';
import './DeploymentFlow.scss';
import DeploymentFlowDesign from './FlowDesign/DeploymentFlowDesign';
import DeploymentFlowLinks from './DeploymentFlowLinks/DeploymentFlowLinks';

function DeploymentFlow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 7;
  const maxSlidePosition = 1000;

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    if (activeIndex < totalSlides - 1 && activeIndex * 175 < maxSlidePosition) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className='deploymentflow-wrapper'>
      <div className='deploymentflow-description'>
        <h1>Our software development flow</h1>
        <p>
          We follow an established software development life cycle (SDLC) to
          build a cost-effective product that meets your requirements and market
          demands
        </p>
      </div>
      <div className='pre-next-container'>
        <button
          className='prev-button'
          onClick={handlePrev}
        >
          Pre
        </button>
        <h3>|</h3>
        <button
          className='next-button'
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      <div className='number-box-slider'>
        <div
          className='deploymentflowdegine-wrapper'
          style={{ transform: `translateX(-${activeIndex * 175}px)` }}
        >
          <DeploymentFlowDesign
            number='01'
            color='#758aff'
          />
          <DeploymentFlowDesign
            number='02'
            color='#6c82ff'
          />
          <DeploymentFlowDesign
            number='03'
            color='#5972ff'
          />
          <DeploymentFlowDesign
            number='04'
            color='#4e69ff'
          />
          <DeploymentFlowDesign
            number='05'
            color='#4b67ff'
          />
          <DeploymentFlowDesign
            number='06'
            color='#4162ff'
          />
          <DeploymentFlowDesign
            number='07'
            color='#f132e'
          />
          <div className='arrow'></div>
        </div>
      </div>
      <div className='deploymentlinks-wrapper'>
        <DeploymentFlowLinks
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          totalSlides={totalSlides}
        />
      </div>
    </div>
  );
}

export default DeploymentFlow;
