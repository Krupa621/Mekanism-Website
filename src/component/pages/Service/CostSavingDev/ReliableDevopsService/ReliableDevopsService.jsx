import React from 'react';
import './ReliableDevopsService.scss';
function ReliableDevopsService({ devcontant, title, detail, listStyle }) {
  return (
    <div className='reliabledevops-wrapper'>
      <div className='reliabledevops-text-wrapper'>
        <h2 className='sub_header_font fw-6'>{title}</h2>
        <p className='content_para'>{detail}</p>
      </div>
      <div className='reliabledevops-contants'>
        {devcontant.map((item, index) => (
          <div
            className='reliabledevops-contant'
            key={index}
          >
            <ul className='sub_part_header fw-6'>
              {item.title}
              {item.lists.map((list, i) => (
                <li
                  key={i}
                  className='content_para fw-4'
                  style={{ listStyle: listStyle }}
                >
                  {list}
                </li>
              ))}
            </ul>
            <div className='img-wrapper'>
              <img
                src={item.devopsimg}
                className='devopsimg'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReliableDevopsService;
