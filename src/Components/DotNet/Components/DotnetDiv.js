import React, { Fragment } from "react";
import RequestForm from "../../requestform";

export default function DotnetDiv() {
  return (
    <div>
      <Fragment>
        <section className="net-request-form p-80">
          <div className="container wow animate fadeInLeft">
            <div className="col-md-8 col-sm-12 col-xs-12 second-block">
              <h2 className="uppercase">ASP.NET DEVELOPMENT</h2>
              <p>
                ASP.NET is a development platform with the comprehensive
                software infrastructure that enables you to build up robust Web
                applications and services which are executed in IIS server. It
                is an open source server-side web application platform used to
                build dynamic websites. With its advantage to reduce coding, it
                helps to build large applications.
              </p>
              <p>
                At Dean Infotech, we provide you asp dot net services in a much
                reliable and affordable manner. Right from the development,
                analysis, design and testing, we implement industry best
                practices in ASP.NET application development. Our technical team
                of experts draws experience in all major industries to meet the
                challenges of IT problems. We combine technical expertise to
                help you acquire new capabilities for desktop and web
                applications.
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
