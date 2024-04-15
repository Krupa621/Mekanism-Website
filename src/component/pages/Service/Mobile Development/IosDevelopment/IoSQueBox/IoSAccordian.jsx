import React, { useState } from 'react';
import IoSAccordianList from './IoSAccordianList';
import { IoSQueAccordionData } from '../../../../../../common/AccordianSection/Accordian';

function IoSAccordian() {
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
        <IoSAccordianList
          accordionData={IoSQueAccordionData}
          handleToggle={handleToggle}
          toggle={toggle}
        />
      </div>
    </div>
  );
}
export default IoSAccordian;
