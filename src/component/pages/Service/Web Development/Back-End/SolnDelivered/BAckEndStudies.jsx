import React from 'react';
import { BackEndCaseStudyContent } from '../../../../../../common/constant';

const BAckEndStudies = () => {
  return (
    <>
      <div className='container mx-auto'>
        {BackEndCaseStudyContent?.map((item, index) => (
          <div key={index}>
            <div className='CaseStudies_wrapper mb-50'>
              <div className='CaseStudyData align-items-center justify-content-center gap-4 row w-100 m-0'>
                <div className='col-md-12 p-0 col-lg-6 p-0'>
                  <img
                    src={item.image}
                    alt=''
                    className='w-100'
                  />
                </div>
                <div className='col caseStudy_date py-4 px-3'>
                  <h2 className='sub_part_header fw-6 sub_head_color'>
                    {item.title}
                  </h2>
                  <p className='content_para fw-4 sub_head_color mb-10 CaseStudyObjectInfo'>
                    {item.info}
                  </p>
                  <ul>
                    <li>{item.listOne}</li>
                    <li>{item.listTwo}</li>
                    <li>{item.listThree}</li>
                    <li>{item.listForth}</li>
                  </ul>
                  <div className='d-flex justify-content-between align-items-center explore_btn explore_button'>
                    <p className='m-0 content_para fw-4'>Explore more </p>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6.82222 14.648L7.60269 15.4285C7.93316 15.759 8.46753 15.759 8.79448 15.4285L15.6289 8.59763C15.9593 8.26716 15.9593 7.73279 15.6289 7.40584L8.79448 0.57146C8.46401 0.240991 7.92964 0.240991 7.60269 0.57146L6.82222 1.35193C6.48823 1.68591 6.49527 2.23083 6.83628 2.55779L11.0726 6.59373L0.968703 6.59373C0.501125 6.59373 0.124953 6.9699 0.124953 7.43748V8.56248C0.124953 9.03005 0.501125 9.40623 0.968703 9.40623L11.0726 9.40623L6.83628 13.4422C6.49175 13.7691 6.48472 14.314 6.82222 14.648Z'
                        fill='#ec52cb'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BAckEndStudies;
