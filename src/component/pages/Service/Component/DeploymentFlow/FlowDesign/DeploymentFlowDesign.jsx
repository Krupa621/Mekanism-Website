import React from 'react';
import './DeploymentFlowDesign.scss';
function DeploymentFlowDesign(props) {
  return (
    <>
      <div
        className='DeploymentFlowDesign'
        style={{ backgroundColor: props.color }}
      >
        <h3>{props.number}</h3>
      </div>
    </>
  );
}

export default DeploymentFlowDesign;
