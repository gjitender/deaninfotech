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
    <Fragment>
    <section className="mobile-dean-expertise-heading p-40">
      <div className="container">
        <h2 className="uppercase">Dean Infotech Expertise in Mobile Application Development</h2>
        <h4>We have a remarkable expertise in developing customized mobile apps for different platforms</h4>
        <br/>
      </div>
    </section>

    <section className="mobile-dean-expertise-info p-40">
      <div className="col-md-4 col-sm-6 col-xs-12 left-block">

        <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.1s">
          <h3>Agile Methodology <span><img alt="" src={shield} /></span></h3>
          <p>We uses Agile methods to develop mobile applications that suit the need of the user.</p>
        </div>

        <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.2s">
          <h3>Cross Platforms <span><img alt="" src={education} /></span></h3>
          <p>We make the use of cross platforms app enhancement tools for testing and development of mobile apps.</p>
        </div>

        <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.3s">
          <h3>On-time Delivery <span><img alt="" src={hrs24} /></span></h3>
          <p>Our strategic plans and agile methods led us to deliver projects on time.</p>
        </div>

        <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.4s">
          <h3> QA Testing <span><img alt="" src={methology} /></span> </h3>
          <p>We rigorously perform quality assurance and testing before “Go Live“ events.</p>
        </div>


      </div>
      <div className="col-md-4 col-sm-6 col-xs-12 center-block">


        <div className="sub-part wow animate fadeInRight" data-wow-delay="0.1s">
          <h3><span><img alt="" src={handDollar} /></span> Lower Cost  </h3>
          <p>We benefit our customers at affordable prices and better integrity.</p>
        </div>

        <div className="sub-part wow animate fadeInRight" data-wow-delay="0.2s">
          <h3><span><img alt="" src={humanHand} /></span> Experienced Developers  </h3>
          <p>Our Steam of technical experts creates mobile applications that work seamlessly across all platforms.</p>
        </div>

        <div className="sub-part wow animate fadeInRight" data-wow-delay="0.3s">
          <h3><span><img alt="" src={userApi} /></span> Flexible and customized Models  </h3>
          <p>We make the use of best frameworks to make compatible customized mobile applications.</p>
        </div>

        <div className="sub-part wow animate fadeInRight" data-wow-delay="0.4s">
          <h3><span><img alt="" src={humanHand} /></span> Take care of Confidentiality </h3>
          <p>We protect your data and take care of your confidentiality.</p>
        </div>

      </div>
      <div className="col-md-4 col-sm-6 col-xs-12 right-block" />
    </section>

    <div className="clearfix" />
  </Fragment>
  )
}


