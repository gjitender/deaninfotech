import React, { Fragment } from "react";
import RequestForm from "../../requestform";

export default function AspDiv() {
  return (
    <div>
      <Fragment>
        <section className="net-request-form p-80">
          <div className="container wow animate fadeInLeft">
            <div className="col-md-8 col-sm-12 col-xs-12 second-block">
              <h2 className="uppercase">ASP.NET DEVELOPMENT</h2>
              <p>
                The ASP.NET framework is an application framework which is
                designed to create dynamic web pages for websites and web
                applications. It is a platform which is provided by Microsoft to
                create powerful web applications with the minimum of coding.
              </p>
              <p>
                At Dean Infotech we develop feature enriched websites which are
                scalable and secure. Our team of professionals works with
                advanced technologies and creates the innovative and responsive
                design. Our web solutions are available at an affordable cost
                with creative designs that will help to enhance your business.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 first-block">
              <RequestForm />
            </div>
          </div>
        </section>
        <div className="clearfix" />
      </Fragment>
    </div>
  );
}
