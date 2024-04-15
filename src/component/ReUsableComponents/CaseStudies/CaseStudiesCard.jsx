import React from 'react';
import './CaseStudies.scss';
import { Arrow } from '../../../icons/icons';

const CaseStudiesCard = (props) => {
  const { isFrom, showList, item, listStyle } = props;

  return (
    <div className='CaseStudiesWrapper'>
      <div className='CaseStudyData'>
        <div className='CaseStudyImage'>
          <img
            src={item.image}
            alt='CaseImg'
          />
        </div>
        <div className='caseStudyDetails'>
          {isFrom && (
            <div className='techInfo'>
              <p className='content_para'>{item.breadCrumbsOne}</p>
              <p className='content_para'>{item.breadCrumbsTwo}</p>
            </div>
          )}
          <h2 className='sub_part_header'>{item.title}</h2>
          <p className='content_para CaseStudyObjectInfo'>{item.info}</p>
          {isFrom && (
            <>
              <div className='country_details'>
                <p className='content_para'>{item.country}</p>
                <p className='content_para'>{item.countryName}</p>
              </div>

              <div className='tech_details'>
                <p className='content_para'>{item.tech}</p>
                <p className='content_para'>{item.techName}</p>
              </div>
            </>
          )}

          {showList && (
            <ul>
              <li
                className='content_para_info'
                style={{ listStyle: listStyle }}
              >
                {item.listOne}
              </li>
              <li
                className='content_para_info'
                style={{ listStyle: listStyle }}
              >
                {item.listTwo}
              </li>
              <li
                className='content_para_info'
                style={{ listStyle: listStyle }}
              >
                {item.listThree}
              </li>
              <li
                className='content_para_info'
                style={{ listStyle: listStyle }}
              >
                {item.listForth}
              </li>
            </ul>
          )}
          <div className='explore_btn'>
            <p className='content_para'>Explore more </p>
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesCard;
