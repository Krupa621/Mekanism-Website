import React, { useState } from 'react';
import BackEndAccordianList from './BackEndAccordianList';
import { BackEndQueAccordionData } from '../../../../../../common/AccordianSection/Accordian';

function BackEndAccordian() {
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
        <BackEndAccordianList
          accordionData={BackEndQueAccordionData}
          handleToggle={handleToggle}
          toggle={toggle}
        />
      </div>
    </div>
  );
}

export default BackEndAccordian;
