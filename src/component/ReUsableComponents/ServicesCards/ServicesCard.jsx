const ServicesCard = ({ title, contentItems }) => {
  return (
    <div className=' col-lg-4 col-md-6 px-0 mt-20 contentBoxData'>
      <div className='m-3 CoreIndutryBox h-100'>
        <div className='d-flex align-items-center justify-content-between mb-20'>
          <h3 className='sub_part_header fw-6 sub_head_color'>{title}</h3>
          <svg
            width='10'
            height='10'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M6.82222 14.648L7.60269 15.4285C7.93316 15.759 8.46753 15.759 8.79448 15.4285L15.6289 8.59763C15.9593 8.26716 15.9593 7.73279 15.6289 7.40584L8.79448 0.57146C8.46401 0.240991 7.92964 0.240991 7.60269 0.57146L6.82222 1.35193C6.48823 1.68591 6.49527 2.23083 6.83628 2.55779L11.0726 6.59373L0.968703 6.59373C0.501125 6.59373 0.124953 6.9699 0.124953 7.43748V8.56248C0.124953 9.03005 0.501125 9.40623 0.968703 9.40623L11.0726 9.40623L6.83628 13.4422C6.49175 13.7691 6.48472 14.314 6.82222 14.648Z' />
          </svg>
        </div>
        <ul>
          {contentItems?.map((item, index) => (
            <li
              key={index}
              className='content_para fw-4 sub_head_color mb-20'
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ServicesCard;
