import React from 'react';
import './ReducedCostSection.scss';
import ReduceCostCard from './ReducedCostCardSection/ReduceCostCard';
function ReducedCostSection({ title, detail, cost, isImg }) {
  return (
    <div className='reducedcost-wrapper'>
      <div className='reducecost-text-wrapper'>
        <h1 className='sub_header_font fw-6'>{title}</h1>
        <p className='content_para fw-4'>{detail}</p>
      </div>
      {cost.map((data, i) => (
        <ReduceCostCard
          key={i}
          {...data}
          isImg={isImg}
        />
      ))}
    </div>
  );
}

export default ReducedCostSection;
