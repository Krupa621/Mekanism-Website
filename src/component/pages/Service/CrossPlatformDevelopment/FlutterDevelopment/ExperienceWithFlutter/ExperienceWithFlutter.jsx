import React from 'react';
import './ExperienceWithFlutter.scss';
import ExperienceCard from './ExperienceWithFlutterCard/ExperienceCard';
import img1 from './../../../../../../assets/images/experiencecardimg1.png';
import img2 from './../../../../../../assets/images/flutter-two-phones.webp.png';
function ExperienceWithFlutter() {
  return (
    <div className='experinence-flutter-wrapper'>
      <div className='experience-flutter-text-wrapper'>
        <h2 className='sub_header_font fw-6'>Our experience with Flutter</h2>
        <p className='content_para fw-4'>
          We offer Flutter app development services to clients and create
          open-source projects to support the community.
        </p>
      </div>
      <div className='experience-card-container'>
        <ExperienceCard
          header='GitHub open-source library'
          techName={['Git Hub']}
          icon={[
            <i
              key={1}
              className='fa-brands fa-square-github'
            ></i>,
          ]}
          detail1='We’ve updated our warmly welcomed Sliding Tutorial library with 2,5K stars on GitHub to support Flutter.'
          detail2='This open-source library will help you create onboarding screens for iOS and Android using the parallax effect. The library was built with the support of Flutter elements in mind to look natural in design.'
          experienceCardImg={img1}
        />
        <div className='line'></div>
        <ExperienceCard
          header='GitHub open-source library'
          techName={['App Store', 'Google Play']}
          icon={[
            <i
              key={1}
              className='fa-brands fa-apple'
            ></i>,
            <i
              key={2}
              className='fa-brands fa-google-play'
            ></i>,
          ]}
          detail1='We’ve updated our warmly welcomed Sliding Tutorial library with 2,5K stars on GitHub to support Flutter.'
          detail2='This open-source library will help you create onboarding screens for iOS and Android using the parallax effect. The library was built with the support of Flutter elements in mind to look natural in design.'
          experienceCardImg={img2}
        />
      </div>
    </div>
  );
}

export default ExperienceWithFlutter;
