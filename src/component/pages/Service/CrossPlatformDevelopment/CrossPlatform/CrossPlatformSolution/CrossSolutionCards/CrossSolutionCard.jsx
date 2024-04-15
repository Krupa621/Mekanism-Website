import React from 'react';
import './CrossSolutionCard.scss';
import { crosssolutioncard } from '../../../../../../../common/constant';
function CrossSolutionCard() {
  return (
    <>
      {crosssolutioncard?.map((item, index) => (
        <div
          className='crosssolutioncard-wrapper'
          key={index}
        >
          <img src={item.img} />
          <div className='crosssolutioncard-text-wrapper'>
            <h1 className='sub_part_header'>{item.name}</h1>
            <p className='content_para'>{item.info}</p>
            <ul className='content_para'>
              Challenges solved:
              <li className='content_para_info'>{item.list1}</li>
              <li className='content_para_info'>{item.list2}</li>
              <li className='content_para_info'>{item.list3}</li>
              <li className='content_para_info'>{item.list4}</li>
            </ul>
            <button className='pages-name mt-20'>
              Explore more
              <i className='fa-solid fa-arrow-right'></i>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CrossSolutionCard;
