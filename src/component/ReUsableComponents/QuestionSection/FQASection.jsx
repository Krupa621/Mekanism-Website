import React from 'react';
import './FQASection.scss';

function FQASection({
  questions,
  info,
  listsitems,
  title,
  info1,
  id,
  isOpen,
  setIsOpen,
}) {
  const toggleContent = () => {
    setIsOpen(isOpen === id ? null : id);
  };
  console.log('===>', setIsOpen);

  return (
    <div className='addquestions-container'>
      <div
        className='addquestion-wrapper'
        onClick={toggleContent}
      >
        <i className={`fa-solid fa-${isOpen == id ? 'minus' : 'plus'}`}></i>
        <div className='content'>
          {questions.map((question) => (
            <>
              <p>{question}</p>
              {isOpen == id ? (
                <>
                  <div className='questiona-wrapper'>
                    <p>{info}</p>
                    <br />
                    <p>{info1}</p>
                  </div>
                  <div className='question-b'>
                    <ul>
                      {title}
                      {listsitems?.map((listitem, i) => (
                        <li key={i}>{listitem}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : null}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FQASection;
