/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import FQASection from './FQASection';
import './QuestionSection.scss';
function QuestionSection({ title, info, fqa }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='questionssections-wrapper'>
      <div className='question-title'>
        <h1>{title}</h1>
        <p>{info}</p>
      </div>
      <div className='question-main-wrapper'>
        <div className='questions-container'>
          {fqa.map((data, i) =>
            i % 2 == 1 ? (
              <FQASection
                {...data}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            ) : null
          )}
        </div>
        <div className='questions-container'>
          {fqa.map((data, i) =>
            i % 2 !== 1 ? (
              <FQASection
                {...data}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionSection;
