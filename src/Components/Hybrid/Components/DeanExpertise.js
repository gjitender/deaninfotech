import React, {  Fragment } from 'react';


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
            <h2 className="uppercase">DEANINFOTECH EXPERTISE</h2>
            <h4>DEDICATED DEVELOPERS WHO BUILD APPS FOR BUSINESSES, CONSUMERS AND ENTERPRISES</h4>
            <p>At Dean Infotech, we create Hybrid Mobile Applications with creative and compelling experience for your business with customized business solutions.</p>
            <br/>
          </div>
        </section>

        <section className="mobile-dean-expertise-info p-40">
          <div className="col-md-4 col-sm-6 col-xs-12 left-block">
            <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.1s">
              <h3>Cost Effective <span><img alt="" src={shield} /></span></h3>
              <p>The solutions we provide are cost effective as well as customized according to the needs of consumers.</p>
            </div>
            <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.2s">
              <h3>Strategy and planning <span><img alt="" src={education} /></span></h3>
              <p>We employ the new strategy and planning to derive the simplicity at the core of the experience.</p>
            </div>
            <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.3s">
              <h3>Design with effectiveness <span><img alt="" src={hrs24} /></span></h3>
              <p>With every feature, our team of Hybrid application developers work to provide you with innovative design with effectiveness.</p>
            </div>

            <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.4s">
              <h3>Testing <span><img alt="" src={methology} /></span> </h3>
              <p>We undertake different tests in order to provide you with well-developed applications.</p>
            </div>


          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 center-block">


            <div className="sub-part wow animate fadeInRight" data-wow-delay="0.1s">
              <h3><span><img alt="" src={handDollar} /></span> Develop High-quality Solutions   </h3>
              <p>We work in order to develop high quality, customized web solutions to enhance the user experience.</p>
            </div>

            <div className="sub-part wow animate fadeInRight" data-wow-delay="0.2s">
              <h3><span><img alt="" src={humanHand} /></span> Take care of Confidentiality  </h3>
              <p>The projects that you gave us, we keep them secure by maintaining its confidentiality.</p>
            </div>

            <div className="sub-part wow animate fadeInRight" data-wow-delay="0.3s">
              <h3><span><img alt="" src={userApi} /></span> Methodology</h3>
              <p>We develop the agile methodology with a well-defined strategy with custom features and designs.</p>
            </div>

            <div className="sub-part wow animate fadeInRight" data-wow-delay="0.4s">
              <h3><span><img alt="" src={humanHand} /></span> Qualified and Talented Team  </h3>
              <p>Our qualified and talented team of professionals work in accordance to fulfil all the requirements of clients. </p>
            </div>

          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 right-block hybrid" />
        </section>

        <div className="clearfix" />
      </Fragment>
    </div>
  )
}


