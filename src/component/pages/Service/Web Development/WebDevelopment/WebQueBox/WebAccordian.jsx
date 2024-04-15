import React, { useState } from 'react';

import WebAccordianList from './WebAccordianList';
import { WebQueAccordionData } from '../../../../../../common/AccordianSection/Accordian';

function WebAccordian() {
  const [toggle, setToggle] = useState(null);
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };
  return (
    <div className='container '>
      <div className='row'>
        <WebAccordianList
          accordionData={WebQueAccordionData}
          handleToggle={handleToggle}
          toggle={toggle}
        />
      </div>
    </div>
  );
}

export default WebAccordian;
