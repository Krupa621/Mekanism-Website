import React from 'react';
import {
  FrontEndQueAccordionData,
  FrontEndQueAccordionDataSecond,
} from '../../../../../../common/constant';

function FrontAccordianList({ handleToggle, toggle }) {
  return (
    <>
      <div className='col-sm-12 col-lg-6'>
        {FrontEndQueAccordionData.map((value) => {
          const { id, qn, ans, heading, info } = value;
          return (
            <div
              className='card  px-3 mt-20 border_none'
              key={id}
            >
              <div
                className='card-header d-flex gap-3 align-items-center'
                onClick={() => handleToggle(id)}
                style={{ cursor: 'pointer' }}
              >
                <div
                  style={{ color: toggle ? '#f132e' : '#f132e' }}
                  className='iconSize'
                >
                  {id === toggle ? '-' : '+'}
                </div>
                <h2 className='content_para fw-4 header_color accordionQue m-0'>
                  {qn}
                </h2>
              </div>
              {id === toggle ? (
                <div className='card-body ms-4'>
                  <div>
                    <h2 className='content_para fw-4 header_color'>
                      {heading}
                    </h2>
                    <h2 className='content_para fw-4 header_color mt-30'>
                      {info}
                    </h2>
                  </div>
                  <ul>
                    {ans.map((item, i) => (
                      <li
                        key={i}
                        className='content_para fw-4 header_color'
                      >
                        {item.listItemName}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ''
              )}
            </div>
          );
        })}
      </div>
      <div className='col-sm-12 col-lg-6'>
        {FrontEndQueAccordionDataSecond.map((value) => {
          const { id, qn, ans, heading, info } = value;
          return (
            <div
              className='card   px-3 mt-20 border_none'
              key={id}
            >
              <div
                className='card-header d-flex gap-3 align-items-center'
                onClick={() => handleToggle(id)}
                style={{ cursor: 'pointer' }}
              >
                <div
                  style={{ color: toggle ? '#f132e' : '#f132e' }}
                  className='iconSize'
                >
                  {id === toggle ? '-' : '+'}
                </div>
                <h2 className='content_para fw-4 header_color accordionQue m-0'>
                  {qn}
                </h2>
              </div>
              {id === toggle ? (
                <div className='card-body ms-4'>
                  <div>
                    <h2 className='content_para fw-4 header_color'>
                      {heading}
                    </h2>
                    <h2 className='content_para fw-4 header_color mt-30'>
                      {info}
                    </h2>
                  </div>
                  <ul>
                    {ans.map((item, i) => (
                      <li
                        key={i}
                        className='content_para fw-4 header_color'
                      >
                        {item.listItemName}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ''
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FrontAccordianList;
