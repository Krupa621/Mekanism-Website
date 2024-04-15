import React from 'react';
import './InfoContainer.scss';
import { TickMark } from '../../../../../icons/icons';
function InfoContainer() {
  return (
    <div className='info-wrapper'>
      <p className='content_para'>
        Dedicated development team services bring you the perk of tight
        cooperation with the team to stay on the same page. But these are not
        all the benefits you get from this model.
      </p>
      <div className='Infomation'>
        <div className='InfoContent'>
          <TickMark />
          <h3 className='sub_part_header'>Server side and databases</h3>
        </div>
        <div className='InfoContent'>
          <TickMark />
          <h3 className='sub_part_header'>Cost-effective refactoring</h3>
        </div>
        <div className='InfoContent'>
          <TickMark />
          <h3 className='sub_part_header'>Secure clouds and APIs</h3>
        </div>
      </div>
    </div>
  );
}

export default InfoContainer;
