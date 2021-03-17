import React, { Fragment } from 'react';
import RequestForm from '../../requestform';



export default function MobileDiv() {
  return (
    <Fragment>
    <section className="mobile-request-form p-80">
      <div className="container">
        <div className="col-md-8 col-sm-6 col-xs-12 left-part wow animate fadeInLeft">
          <h2 className="uppercase">MOBILE DEVELOPMENT</h2>
          <p>We design, develop and deliver the mobile apps across different platforms iOS and Android focusing on the outstanding performance. With the increased usage of smartphones, developing the mobile application is indeed an obligatory task. </p>
          <p>As a leading Mobile Application Development company, Dean Infotech creates highly innovative and digitally transformative application designs that are suitable to the needs of the user. We use an agile methodology to keep you in the loop for streamlined delivery and cost-effective projects that matches your goals within the budget. </p>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12 right-part">
        <RequestForm />
        </div>
      </div>
    </section>
    <div className="clearfix" />
  </Fragment>
  )
}


