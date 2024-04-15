import { useState } from 'react';
import AccordionList from './AccordionList';
import { AccordionData } from '../../../../../common/AccordianSection/Accordian';
function Accordion() {
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
        <AccordionList
          accordionData={AccordionData}
          handleToggle={handleToggle}
          toggle={toggle}
        />
      </div>
    </div>
  );
}

export default Accordion;
