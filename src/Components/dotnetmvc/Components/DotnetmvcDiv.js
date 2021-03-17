import React, { Fragment } from "react";
import RequestForm from "../../requestform";

export default function DotnetmvcDiv() {
  return (
    <div>
      <Fragment>
        <section className="net-request-form p-80">
          <div className="container wow animate fadeInLeft">
            <div className="col-md-8 col-sm-12 col-xs-12 second-block">
              <h2 className="uppercase">ASP.NET MVC DEVELOPMENT</h2>
              <p>
                ASP.NET MVC is an open source framework mainly used to build
                mobile and web applications. This model-view-controller
                framework is the lightweight framework with integrated features
                which gives you a full control over your website. Our team of
                experts follows the agile methodology while developing
                customized solutions.
              </p>
              <p>
                Our professionals explore the features of asp.net MVC to provide
                the work with great performance. With the use of this framework,
                we can retrieve better results which will eventually enhance the
                user experience. We built countless modules for our customers
                according to their needs.{" "}
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
