import React from 'react';
import './DevOpsValues.scss';
function DevOpsValues({ values }) {
  return (
    <div className='devops-wrapper'>
      <div className='devops-content-wrapper'>
        <div className='devops-text-wrapper'>
          <h2 className='sub_header_font fw-6'>DevOps values</h2>
          <p className='content_para fw-4'>
            Our DevOps partner will help you with cloud infrastructure,
            continuous integration, and automation. We develop and maintain
            effective solutions bearing in mind industry best practices, cost
            savings, and your business workflows.
          </p>
        </div>
        <div className='values'>
          {values.map((item, index) => (
            <div
              className='value'
              key={index}
            >
              <h3 className='sub_part_header fw-6'>{item.name}</h3>
              <p className='content_para fw-4'>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DevOpsValues;
