import React from 'react';
import './AdvantageHelpCard.scss';
function AdvantageHelpCard({
  number,
  name,
  info,
  extramainClassName,
  extranumberClassName,
}) {
  return (
    <div
      className={`advantagecard-wrapper${
        extramainClassName ? ` ${extramainClassName}` : ''
      }`}
    >
      <div
        className={`number${
          extranumberClassName ? ` ${extranumberClassName}` : ''
        }`}
      >
        {number}
      </div>
      <div className='advantage-text-wrapper'>
        <h3 className='content_para'>{name}</h3>
        <p className='content_para'>{info}</p>
      </div>
    </div>
  );
}

export default AdvantageHelpCard;
