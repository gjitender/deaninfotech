import React, { Component, Fragment } from 'react';


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
            <h2 className="uppercase">DEAN INFOTECH EXPERTISE</h2>
            <h4>Our core team of iPhone Developers uses the latest technologies to make better contributions to the success of your business</h4>
            <p>Dean Infotech has a team of skilled iOS Developers that provides custom iOS Services to enhance the user experience</p>
            <br/>
          </div>
        </section>

        <section className="mobile-dean-expertise-info p-40">
          <div className="col-md-4 col-sm-6 col-xs-12 left-block">

            <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.1s">
              <h3>Advanced Framework <span><img alt="" src={shield} /></span></h3>
              <p>We use advanced iOS framework which is used in iPhone App development that can easily promote your business.</p>
            </div>

            <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.2s">
              <h3>Unique Strategies <span><img alt="" src={education} /></span></h3>
              <p>We develop unique strategies and techniques while developing iOS applications with social media functionality.</p>
            </div>

            <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.3s">
              <h3>Scalable solutions <span><img alt="" src={hrs24} /></span></h3>
              <p>We develop iOS applications with scalable solutions that will benefit app users in business and fulfil their requirement.</p>
            </div>

            <div className="sub-part wow animate fadeInLeft" data-wow-delay="0.4s">
              <h3>Highly Competitive Price <span><img alt="" src={methology} /></span> </h3>
              <p>Our highly competitive price serves your business with innovative work structure and work strategies.</p>
            </div>


          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 center-block">


            <div className="sub-part wow animate fadeInRight" data-wow-delay="0.1s">
              <h3><span><img alt="" src={handDollar} /></span> Excellent Returns  </h3>
              <p>With the deployment of powerful iPhone Applications we fetch our customers with excellent returns on their investment.</p>
            </div>

            <div className="sub-part wow animate fadeInRight" data-wow-delay="0.2s">
              <h3><span><img alt="" src={humanHand} /></span> On time Delivery </h3>
              <p>We deliver our services and cost-effective web solutions on time as we understand the value of your valuable time.</p>
            </div>

            <div className="sub-part wow animate fadeInRight" data-wow-delay="0.3s">
              <h3><span><img alt="" src={userApi} /></span> Develop High-quality Solutions</h3>
              <p>We develop high-quality iPhone applications and competent iPhone Development services.</p>
            </div>

            <div className="sub-part wow animate fadeInRight" data-wow-delay="0.4s">
              <h3><span><img alt="" src={humanHand} /></span> Well Defined Process  </h3>
              <p>Our Agile methodology and well-defined process enable you to access your business data in an easy manner.</p>
            </div>

          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 right-block ios" />
        </section>

        <div className="clearfix" />
      </Fragment>
    </div>
  )
}

