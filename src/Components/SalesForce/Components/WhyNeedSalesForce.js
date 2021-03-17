import React, { Fragment } from 'react';


const cApplicationIcon = require('../images/c-application-icon.png');
const platformIcon = require('../images/platform-icon.png');
const managementIcon = require('../images/management-icon.png');
const salesImpli = require('../images/sales-implementation.png');



export default function WhyNeedSalesForce() {
  return (
    <Fragment>
    <section className="salesforce-video p-80">
    <div className="container">
      <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft">
        <h2>Better Salesforce <span>Bigger Possibilities</span></h2>
        <p>At <strong>DEANINFOTECH</strong>, we provide <strong>comprehensive Salesforce services</strong> for delivering extensive improvements to your own business. Using our <strong>expertise</strong> and <strong>understanding</strong>														of the Salesforce, we deliver a professional service that helps you really <strong>make the most of this powerful platform.</strong>
        </p>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <iframe src="https://www.youtube.com/embed/rYKzAe2FuzI?autoplay=0&showinfo=0&controls=0&rel=0" title="abc" allowFullScreen height="315"></iframe>
      </div>
    </div>
  </section>
    <section className="salesforce p-80">

      <div className="container">

        <h2 className="uppercase">WHY NEED SALESFORCE</h2>
        <p>The world’s number 1 Customer Relationship Management (CRM) platform - Salesforce is cloud-based software with an approach to manage all interactions with your customers and prospects. It empowers the employees to make more sales and serve the customer like never before. Check out our salesforce services and get started:- </p>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="icon wow animate fadeInUp" data-wow-delay="0.1s">
            <figure><img src={cApplicationIcon} alt="" /></figure>
            <h3>CRM</h3>
            <p>Manage and analyze all your customer activity in one place with a suite of web-based CRM software.</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="icon wow animate fadeInUp" data-wow-delay="0.2s">
            <figure><img src={platformIcon} alt="" /></figure>
            <h3>CLOUD</h3>
            <p>Serve each customer with the unique needs and processes with customer-centric services delivered on mobile.</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="icon wow animate fadeInUp" data-wow-delay="0.3s">
            <figure><img src={managementIcon} alt="" /></figure>
            <h3>FLEXIBLE</h3>
            <p>This platform delivers robust, scalable and flexible infrastructure to empower IT solutions.</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="icon wow animate fadeInUp" data-wow-delay="0.4s">
            <figure><img src={salesImpli} alt="" /></figure>
            <h3>FORTUNE TELLER</h3>
            <p>Embark on new fortune teller strategies by monitoring the implicit and explicit behaviour of transactional needs.</p>
          </div>
        </div>
      </div>
    </section>


    <div className="clearfix" />
  </Fragment>
  )
}


