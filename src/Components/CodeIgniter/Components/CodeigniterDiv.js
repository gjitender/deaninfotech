import React, {  Fragment } from 'react';
import RequestForm from '../../requestform';


export default function CodeigniterDiv() {
  return (
    <div>
      <Fragment>
        <section className="request-form p-80">
          <div className="container wow animate fadeInLeft">
            <div className="col-md-8 col-sm-6 col-xs-12 para">
              <h2 className="uppercase">CODEIGNITER WEB DEVELOPMENT</h2>
              <p>Codeigniter is a PHP framework designed for those developers who need a simple and easy toolkit to create attractive, innovative and dynamic web applications. It is an open source web applications framework with the ability to accomplish projects faster rather than writing every single piece of code. With its exclusive features and MVC based architecture, it is preferred by most of the developers and customers who want their work to be done fast. </p>
              <p>At Dean Infotech, we create fully featured and functionality rich web applications using the Codeigniter framework. Our expert team members build dynamic web pages which are easy to integrate and are full fledged with an attractive accent that can be displayed on the mobile screen as well. </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 ">
              <RequestForm />
            </div>
          </div>
        </section>
        <div className="clearfix" />
      </Fragment>
    </div>
  )
}

