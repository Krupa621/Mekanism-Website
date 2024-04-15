import React, { useState } from 'react';
import TechIconList from './TechIconList';
import JS_icon from '../../../../assets/images/JS.svg';
import TS_icon from '../../../../assets/images/TS.svg';
import Net_icon from '../../../../assets/images/net.svg';
import Python_icon from '../../../../assets/images/python.svg';
import Java_icon from '../../../../assets/images/java.svg';
import Ruby_icon from '../../../../assets/images/ruby.svg';
import React_icon from '../../../../assets/images/reactThin.svg';
import Angular_icon from '../../../../assets/images/Angular.svg';
import VueJS_icon from '../../../../assets/images/vueJs.svg';
import ios_icon from '../../../../assets/images/ios.svg';
import flutter_icon from '../../../../assets/images/flutterThick.svg';
import ReactNative_icon from '../../../../assets/images/reactNative.svg';
import kotlin_icon from '../../../../assets/images/kotlin.svg';
import { techStackData } from '../../../../common/TechnologyStack/TechnologyStack';
import './TechIconMobileView.scss';

function TechIconMobileView({ extraClassName }) {
  const [activeSection, setActiveSection] = useState('WebTech');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div
      className={`TechStackWrapper${
        extraClassName ? ` ${extraClassName}` : ''
      }`}
    >
      {techStackData.map((item, index) => (
        <div key={index}>
          <div className='TechLeft'>
            <div className='web-mob'>
              <div
                className={`web ${activeSection === 'WebTech' ? 'active' : ''}`}
                onClick={() => handleSectionClick('WebTech')}
              >
                <h3 className='sub_part_header webpage'>{item.headerWeb}</h3>
                <h3 className='sub_part_header webmobile'>
                  {item.headerWebtablet}
                </h3>
              </div>
              <div
                className={`mob ${activeSection === 'MobTech' ? 'active' : ''}`}
                onClick={() => handleSectionClick('MobTech')}
              >
                <h3 className='sub_part_header mobilepage'>{item.MobTech}</h3>
                <h3 className='sub_part_header mobile'>
                  {item.headerWebmobile}
                </h3>
              </div>
            </div>
            {activeSection === 'WebTech' && (
              <div className='TechStackContent-mobileview'>
                <div>
                  <p className='sub_part_header'>{item.BackEnd}</p>
                  <div className='TechLaung-mobileview'>
                    <div>
                      <TechIconList
                        imgSrc={JS_icon}
                        subTitle='Node JS'
                      />
                    </div>
                    <div>
                      <TechIconList
                        imgSrc={TS_icon}
                        subTitle='Type Script'
                      />
                    </div>
                    <div>
                      <TechIconList
                        imgSrc={Net_icon}
                        subTitle='.NET'
                      />
                    </div>
                    <div>
                      <TechIconList
                        imgSrc={Python_icon}
                        subTitle='Python'
                      />
                    </div>
                    <div>
                      <TechIconList
                        imgSrc={Java_icon}
                        subTitle='Java'
                      />
                    </div>
                    <div>
                      <TechIconList
                        imgSrc={Ruby_icon}
                        subTitle='Ruby'
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className='sub_part_header'>{item.FrontEnd}</p>
                  <div className='TechLaung-mobileview'>
                    <div>
                      <TechIconList
                        imgSrc={React_icon}
                        subTitle='React'
                      />
                    </div>
                    <div>
                      <TechIconList
                        imgSrc={Angular_icon}
                        subTitle='Angular'
                      />
                    </div>
                    <div>
                      <TechIconList
                        imgSrc={VueJS_icon}
                        subTitle='Vue JS'
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {activeSection === 'MobTech' && (
            <div className='TechRight-mobileview'>
              <div className='Mobtech'>
                <div className='leftMobTech'>
                  <div className='ioSTech'>
                    <p className='sub_part_header'>{item.iOS}</p>
                    <div>
                      <TechIconList
                        imgSrc={ios_icon}
                        subTitle='Swift'
                      />
                    </div>
                  </div>
                  <div className='crossTech'>
                    <p className='sub_part_header'>{item.cross}</p>
                    <div className='crossIcons'>
                      <div>
                        <TechIconList
                          imgSrc={flutter_icon}
                          subTitle='Flutter'
                        />
                      </div>
                      <div>
                        <TechIconList
                          imgSrc={ReactNative_icon}
                          subTitle='React Native'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='androidTech'>
                    <p className='sub_part_header'>{item.android}</p>
                    <div>
                      <div>
                        <TechIconList
                          imgSrc={kotlin_icon}
                          subTitle='Kotlin'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TechIconMobileView;
