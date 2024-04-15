import React from 'react';
import './CustomerSoftwareSolution.scss';
import { CustomerSoftItems } from '../../../../../common/ServicePageCustomerSoftware';
import { Arrow } from '../../../../../icons/icons';

const CustomerSoftwareSolution = () => {
  return (
    <div className='container'>
      <div className='SoftSolnContainer'>
        <h2 className='sub_header_font '>Custom Software solutions we offer</h2>
        <p className='content_para '>
          Our team supports you at every stage of the software development
          life-cycle: from product discovery to deployment and post-release
          support
        </p>
      </div>

      {CustomerSoftItems?.map((item, index) => (
        <div key={index}>
          <>
            <div className='SolutionContainer'>
              <img
                src={item.image}
                alt='mobDev'
              />
              <div className='SolutionContent'>
                <h3 className='sub_part_header'>{item.heading}</h3>
                <p className='content_para'>{item.information}</p>
                <div>
                  <p className='content_para'>{item.techDev1}</p>
                  <p className='content_para'>{item.techDev2}</p>
                  <p className='content_para'>{item.techDev3}</p>
                </div>
                <span className='m-0 content_para fw-4'>
                  Explore More &nbsp;
                  <Arrow />
                </span>
              </div>
            </div>

            {/* tablet view */}
            <div className='SolutionContainerTabletView'>
              <div className='d-block d-sm-flex align-items-center gap-3'>
                <div>
                  <img
                    src={item.image}
                    alt='mobDev'
                  />
                </div>
                <div>
                  <h3 className='footer-detail-color fw-6 sub_part_header mb-10'>
                    {item.heading}
                  </h3>
                  <p className='mb-20 fw-4 content_para sub_head_color'>
                    {item.information}
                  </p>
                </div>
              </div>
              <div>
                <div className='d-block d-sm-flex justify-content-between align-items-center mb-10 '>
                  <p className='text-decoration-underline fw-4 content_para sub_head_color'>
                    {item.techDev1}
                  </p>
                  <p className='text-decoration-underline fw-4 content_para sub_head_color'>
                    {item.techDev2}
                  </p>
                  <p className='text-decoration-underline fw-4 content_para sub_head_color'>
                    {item.techDev3}
                  </p>
                </div>
                <span className='m-0 content_para fw-4'>
                  Explore More &nbsp;
                  <Arrow />
                </span>
              </div>
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default CustomerSoftwareSolution;
