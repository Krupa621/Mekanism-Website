import React, { useState } from 'react';
import { FrontEndQueAccordionData } from '../../../../../../common/constant';
import FrontAccordianList from './FrontAccordianList';

function FrontAccordian() {
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
        <FrontAccordianList
          accordionData={FrontEndQueAccordionData}
          handleToggle={handleToggle}
          toggle={toggle}
        />
      </div>
    </div>
  );
}

export default FrontAccordian;
