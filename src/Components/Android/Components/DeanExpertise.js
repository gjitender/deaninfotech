import React, { Fragment } from 'react';
import ImageWebp from '../../../ImageWebp'


const shield = require('../images/shield-bg-border.png');
const education = require('../images/education-border.png');
const hrs24 = require('../images/24hrs-border.png');
const userApi = require('../images/user-api-border.png');
const handDollar = require('../images/hand-dollar-border.png');
const methology = require('../images/methology-border.png');
const humanHand = require('../images/human-hand-border.png');



export default function DeanExpertise() {
  return (
    <div>
       <Fragment>
        <section className="mobile-dean-expertise-heading p-40">
          <div className="container">
            <h2 className="uppercase">DEAN INFOTECH EXPERTISE IN ANDROID APP DEVELOPMENT</h2>
            <h4>We have strong technical expertise in Android App Development with customized website Solutions and Services</h4>
            <p>Dean Infotech has remarkable experience in developing Android Apps for customers with innovative and attractive designs and upgraded features and functionalities that fulfil the requirements of customers.</p>
            <br/>
          </div>
        </section>

        <section className="mobile-dean-expertise-info p-40">
          <div className="col-md-4 col-sm-6 col-xs-12 left-block">

            <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.1s">
              <h3>Guarantee <span>
              <ImageWebp
                  srcWebp={shield}
                  src={shield}
                  />
                {/* <img alt="" src={shield} /> */}
                </span></h3>
              <p>We guarantee on-time delivery of projects and customized App solutions to our clients.</p>
            </div>

            <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.2s">
              <h3>On-Time Delivery <span>
              <ImageWebp
                  srcWebp={education}
                  src={education}
                  />
                {/* <img alt="" src={education} /> */}
                </span></h3>
              <p>We help your business to grow by adding value and delivering your projects on time.</p>
            </div>

            <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.3s">
              <h3>Security and automation <span>
              <ImageWebp
                  srcWebp={hrs24}
                  src={hrs24}
                  />
                {/* <img alt="" src={hrs24} /> */}
                </span></h3>
              <p>We create highly secure App solutions with business security and automation for small and large business.</p>
            </div>

            <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.4s">
              <h3> Improved Design <span>
              <ImageWebp
                  srcWebp={methology}
                  src={methology}
                  />
                {/* <img alt="" src={methology} /> */}
                </span> </h3>
              <p>We provide the new platform for your business with newly developed android apps that run with greater functionality.</p>
            </div>


          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 center-block">


            <div className="sub-part wow animate fadeInRight" data-wow-delay="0.1s">
              <h3><span>
              <ImageWebp
                  srcWebp={handDollar}
                  src={handDollar}
                  />
                {/* <img alt="" src={handDollar} /> */}
                </span> Low Storage  </h3>
              <p>Our team of professionals design low storage apps that will fit into your mobile and can be downloaded from the play store.</p>
            </div>

            <div className="sub-part wow animate fadeInRight" data-wow-delay="0.2s">
              <h3><span>
              <ImageWebp
                  srcWebp={humanHand}
                  src={humanHand}
                  />
                {/* <img alt="" src={humanHand} /> */}
                </span> Robust Applications </h3>
              <p>We enhanced the client experience by providing user-friendly applications which increase profitability.</p>
            </div>

            <div className="sub-part wow animate fadeInRight" data-wow-delay="0.3s">
              <h3><span>
              <ImageWebp
                  srcWebp={userApi}
                  src={userApi}
                  />
                {/* <img alt="" src={userApi} /> */}
                </span> Native and Customized applications </h3>
              <p>Be it a small startup or a large enterprise we build applications for both with upgraded features.</p>
            </div>

            <div className="sub-part wow animate fadeInRight" data-wow-delay="0.4s">
              <h3><span>
              <ImageWebp
                  srcWebp={humanHand}
                  src={humanHand}
                  />
                {/* <img alt="" src={humanHand} /> */}
                </span> Flexible Models </h3>
              <p>We use flexible engagement models to deliver customized Android Applications with greater integration.</p>
            </div>

          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 right-block android" />
        </section>

        <div className="clearfix" />
      </Fragment>
    </div>
  )
}


