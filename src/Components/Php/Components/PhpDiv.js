import React, {  Fragment } from 'react';
import RequestForm from '../../requestform';


export default function PhpDiv() {
  return (
    <Fragment>
    <section className="request-form p-80">
      <div className="container wow animate fadeInLeft">
        <div className="col-md-8 col-sm-6 col-xs-12 para">
          <h2 className="uppercase">PHP DEVELOPMENT</h2>
          <p>PHP is a language which is suited for web development along with the use of HTML and CSS. PHP development focuses on server-side scripting and offers many advanced features for a professional programmer. PHP is the server-side programming language used for Website development to make dynamic pages and applications. Both clients and developers get the benefit from this language with its upgraded features and functionality. </p>
          <p>Being one of the most reliable PHP development company in Abroad and in INDIA, Dean Infotech provides highly interactive, tailored and dynamic websites and web applications with the customized business solutions. We offer the business solutions that offer maximum ROI to fulfil the business requirements. Our team of professionals takes up the challenge with the intent of delivering robust and dynamic web applications. </p>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12 ">
        <RequestForm />
        </div>
      </div>
    </section>
    <div className="clearfix" />
  </Fragment>
  )
}


