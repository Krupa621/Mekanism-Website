import React from 'react';
import './AdvancedIoSAppContent.scss';
import AdvanceTechContent from '../../../../../ReUsableComponents/AdvanceTechnology/AdvanceTechContent';

const AdvancedIoSAppContent = ({
  title,
  detail,
  componentInfo,
  listStyle,
  islist,
  istext,
  iotapp,
  backgroundColor,
}) => {
  return (
    <div
      className='AdvanceIoSAppContainer'
      style={{ backgroundColor: iotapp }}
    >
      <div className='AdvanceIoSAppWrapper'>
        <h2 className='sub_header_font'>{title}</h2>
        <p className='content_para'>{detail}</p>
      </div>
      <AdvanceTechContent
        componentInfo={componentInfo}
        listStyle={listStyle}
        islist={islist}
        istext={istext}
        backgroundColor={backgroundColor}
      />
    </div>
  );
};
export default AdvancedIoSAppContent;
