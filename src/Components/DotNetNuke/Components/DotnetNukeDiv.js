import React, { Fragment } from "react";
import RequestForm from "../../requestform";

export default function DotnetNukeDiv() {
  return (
    <div>
      <Fragment>
        <section className="net-request-form p-80">
          <div className="container wow animate fadeInLeft">
            <div className="col-md-8 col-sm-12 col-xs-12 second-block">
              <h2 className="uppercase">DOTNET NUKE DEVELOPMENT</h2>
              <p>
                DotNet Nuke is an open source web platform used to develop web
                applications for enterprise and is widely adopted by Web Content
                Management Platform which allows business to expand to other
                countries. It facilitates the programmer to build highly
                interactive and dynamic websites and web applications.
              </p>
              <p>
                With Dean Infotech you can easily get customized solutions based
                on the business needs and requirements. We make the use of
                different technologies with high-quality standards that are
                desirable for small or large business. Our talented team of
                developers maintains the website integrity by analyzing and
                testing the different features of DotNet Nuke.
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
