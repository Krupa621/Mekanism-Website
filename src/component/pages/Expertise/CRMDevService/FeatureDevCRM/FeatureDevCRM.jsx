// import React from 'react';
// import './FeatureDevCRM.scss';
// function FeatureDevCRM(contents) {
//   return (
//     <div className='FeatureDevCrm-wrapper'>
//       <div className='devcrm-text-wrapper'>
//         <h2 className='sub_header_font fw-6'>CRM solutions we’ve delivered</h2>
//         <p className='content_para'>
//           We individually approach each solution for the Node.js backend and
//           bring it to life, optimizing the client’s time, budget, and efforts
//         </p>
//       </div>
//       {contents.map((item, index) => (
//         <div
//           className='devcrm-box-wrapper'
//           key={index}
//         >
//           <img
//             src={item.img}
//             alt='caseindusrtry'
//           />
//           {item.names.map((index, title, infos) => (
//             <div
//               className='devrem-content'
//               key={index}
//             >
//               <h1>{title}</h1>.
//               {infos.map((name, info) => (
//                 <>
//                   <h2>{name}</h2>
//                   <p>{info}</p>
//                 </>
//               ))}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FeatureDevCRM;
// FeatureDevCRM.js
// FeatureDevCRM.js
import React from 'react';
import './FeatureDevCRM.scss';

function FeatureDevCRM({ contents }) {
  return (
    <div className='FeatureDevCrm-wrapper'>
      <div className='devcrm-text-wrapper'>
        <h2 className='sub_header_font fw-6'>CRM solutions we’ve delivered</h2>
        <p className='content_para'>
          We individually approach each solution for the Node.js backend and
          bring it to life, optimizing the client’s time, budget, and efforts
        </p>
      </div>
      {contents.map((item, index) => (
        <div
          className='devcrm-box-wrapper'
          key={index}
        >
          <img
            src={item.img}
            alt='caseindusrtry'
          />
          <div
            className='devrem-content'
            key={index}
          >
            <h1 className='sub_part_header fw-6'>{item.title}</h1>
            <div className='name-info-wrapper'>
              {item.infos.map(({ name, info }, index) => (
                <React.Fragment key={index}>
                  <h2 className='content_para_info fw-6'>{name}</h2>
                  <p className='content_para_info '>{info}</p>
                </React.Fragment>
              ))}
            </div>
            <div className='header-contant-wrapper'>
              {item.links.map(({ header, contant }, index) => (
                <React.Fragment key={index}>
                  <div className='header-contant'>
                    <h2 className='content_para_info fw-6'>{header}</h2>
                    <p className='content_para_info '>{contant}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureDevCRM;
