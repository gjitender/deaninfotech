import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import ImageWebp from "../../../ImageWebp";

const banner = require("../images/codeigniter-banner.jpg");
const laravelbannericon = require("../images/code-ignitor-icon.png");

export default function Banner() {
  return (
    <div>
      <Fragment>
        <div className="clearfix" />

        <section className="internal-banner">
          <ImageWebp srcWebp={banner} src={banner} className="img-responsive" />
          {/* <img src={banner} alt="" className="img-responsive" /> */}
          <div className="overlay-banner">
            <h1>
              <span>
                <ImageWebp
                  srcWebp={laravelbannericon}
                  src={laravelbannericon}
                />
                {/* <img src={laravelbannericon} alt="php-icon" /> */}
              </span>
            </h1>
            <h2>
              Get Effective <span>Codeigniter Applications</span> To Enhance
              Your <span>Business Growth</span>
            </h2>
            <p>
              We provide high quality web solutions with intuitive web designs
              using strong Codeigniter framework
            </p>
            <h6>
              <NavLink
                to="/portfolio"
                className="hvr-wobble-vertical portfolio"
              >
                Our Portfolio
              </NavLink>
              <NavLink
                to="/contact"
                className="hvr-sweep-to-right hvr-wobble-vertical"
              >
                Contact Us <span className="arrowRight"></span>
              </NavLink>
            </h6>
          </div>
        </section>

        <div className="clearfix" />
      </Fragment>
    </div>
  );
}
