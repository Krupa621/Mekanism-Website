/* eslint-disable react/jsx-key */
import React from 'react';
import './AdvanceTechContent.scss';

const AdvanceTechContent = (props) => {
  const { componentInfo, listStyle, islist, istext, backgroundColor } = props;
  return (
    <div
      className='techContainer'
      style={{ backgroundColor: backgroundColor }}
    >
      <div className='techWrapper'>
        {componentInfo.map((item) => (
          <div>
            <ul className='sub_part_header'>{item.heading}</ul>
            {islist && (
              <>
                <li
                  className='content_para'
                  style={{ listStyle: listStyle }}
                >
                  {item.listItem1}
                </li>
                <li
                  className='content_para'
                  style={{ listStyle: listStyle }}
                >
                  {item.listItem2}
                </li>
                <li
                  className='content_para'
                  style={{ listStyle: listStyle }}
                >
                  {item.listItem3}
                </li>
                <li
                  className='content_para'
                  style={{ listStyle: listStyle }}
                >
                  {item.listItem4}
                </li>
              </>
            )}
            {istext && (
              <>
                <h2 className='sub_part_header fw-6'>{item.title}</h2>
                <h3 className='content_para'>{item.detail}</h3>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvanceTechContent;
