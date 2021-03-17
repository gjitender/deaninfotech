import React, {  Fragment } from 'react';
import RequestForm from '../../requestform';


export default function WordPressDiv() {
  return (
    <Fragment>
        <section className="request-form p-80">
          <div className="container wow animate fadeInLeft">
            <div className="col-md-8 col-sm-6 col-xs-12 para">
              <h2 className="uppercase">WORDPRESS DEVELOPMENT</h2>
              <p>WordPress is an open source CMS with the embedded features of PHP and My SQL. It is simple to install and is used to create a free website or blog with customized mobile-ready designs and themes. WordPress act as a boon for clients who were seeking extremely easy to use and understand CMS tools while developing web applications. </p>
              <p>Dean Infotech is a leading company which extensively provides all type of website development solutions by utilizing extensible features of WordPress. We deliver custom website solutions with latest WordPress resolution. Our dedicated WordPress team will provide you with the flexible website solutions at the rocket speed. </p>
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

