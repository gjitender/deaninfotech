import React, {  Fragment } from 'react';
import RequestForm from '../../requestform';



export default function IosDiv() {
  return (
    <div>
        <Fragment>
        <section className="mobile-request-form p-80">
          <div className="container">
            <div className="col-md-8 col-sm-6 col-xs-12 left-part wow animate fadeInLeft">
              <h2 className="uppercase">iOS APP DEVELOPMENT</h2>
              <p>With the increased use of smartphones and upcoming of new application designs make it necessary for businesses to go for iOS App Development. Millions of iPhone users use applications that are flooded in the apple app store. </p>
              <p>As an iPhone Application Development company, we understand the competition in the mobile application world where there are many companies that bring their best to develop iPhone applications. The experts at Dean Infotech use latest technology features for iPhone Development with the frameworks including Swift, Cocoa, Xcode5, Objective Programming C language and fill the iPhone store with amazing applications. </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 right-part">
            <RequestForm />
            </div>
          </div>
        </section>
        <div className="clearfix" />
      </Fragment>
    </div>
  )
}


