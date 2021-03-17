import React, {  Fragment } from 'react';
import RequestForm from '../../requestform';



export default function AndroidDiv() {
  return (
    <div>
        <Fragment>
        <section className="mobile-request-form p-80">
          <div className="container">
            <div className="col-md-8 col-sm-6 col-xs-12 left-part wow animate fadeInLeft">
              <h2 className="uppercase">ANDROID APP DEVELOPMENT</h2>
              <p>To create new applications which can run on the Android Platform is known as Android App Development. Most of the smartphones use Android platform and Android apps can be written using Java or C++ using Android Development Kit. Android is the first choice for customers looking for the mobile with the need for business to be accessible in the form of Android Apps. </p>
              <p>Dean Infotech is one of the foremost players for Android Development Industry known mainly for fulfilling the requirements of the clients. We develop amazing Android Apps using SDK, Android Emulator, and Android Virtual Device Manager, Acorn, Genymotion etc. to deliver our services with excellence.  </p>
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



