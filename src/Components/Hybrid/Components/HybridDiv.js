import React, {  Fragment } from 'react';
import RequestForm from '../../requestform';



export default function HybridDiv() {
  return (
    <div>
       <Fragment>
        <section className="mobile-request-form p-80">
          <div className="container">
            <div className="col-md-8 col-sm-6 col-xs-12 left-part wow animate fadeInLeft">
              <h2 className="uppercase">HYBRID DEVELOPMENT</h2>
              <p>Hybrid Mobile App Development is the combination of mobile applications built using HTML 5 and JavaScript with native platform features. These are designed to target the Webview, which is present inside the native app container. </p>
              <p>The team of professionals at Dean Infotech makes the use of ReactNative, PhoneGap, Cordova and another plug-in that includes API for accessing the device features. Hybrid Applications are built in order to enhance the user experience and combine the elements of both native and web applications which are used in mobile computing. </p>
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


