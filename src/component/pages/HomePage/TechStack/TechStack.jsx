import React from 'react';
import './TechStack.scss';
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
import TechIconMobileView from './TechIconMobileView';

const TechStack = () => {
  return (
    <div className='TechStack_Container'>
      <div className='container'>
        <h2 className='sub_header_font'>Technology Stack</h2>
        <p className='content_para'>
          The development team working on a project uses only modern and
          scalable technologies to implement mobile and web applications the way
          you mean it
        </p>
        <div className='TechStackWrapper'>
          {techStackData.map((item, index) => (
            <>
              <div
                className='TechLeft'
                key={index}
              >
                <h3 className='sub_part_header'>{item.headerWeb}</h3>
                <hr />
                <div className='TechStackContent'>
                  <div>
                    <p className='sub_part_header'>{item.BackEnd}</p>
                    <div className='TechLaung'>
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
                    <div className='TechLaung'>
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
              </div>
              <div className='TechRight'>
                <h3 className='sub_part_header'>{item.MobTech}</h3>
                <hr />
                <div className='Mobtech'>
                  <div>
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
              </div>
            </>
          ))}
        </div>
        <TechIconMobileView extraClassName='tableticon' />
      </div>
    </div>
  );
};

export default TechStack;
