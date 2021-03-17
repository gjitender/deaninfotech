import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import ImageWebp from '../../../ImageWebp'


const banner = require("../images/asp-net-banner.jpg");
const dotnetbannericon = require("../images/asp-net-icon.png");

export default function Banner() {
  return (
    <div>
      <Fragment>
        <div className="clearfix" />
        <section className="internal-banner">
        <ImageWebp
                  srcWebp={banner}
                  src={banner}
                  className="img-responsive"
                  />
          {/* <img src={banner} className="img-responsive" alt="" /> */}
          <div className="overlay-banner">
            <h1>
              <span>
              <ImageWebp
                  srcWebp={dotnetbannericon}
                  src={dotnetbannericon}
                  />
                {/* <img src={dotnetbannericon} alt="php-icon" /> */}
              </span>
            </h1>
            <h2>
              Magnify Your <span>Digital Experience </span> With Our{" "}
              <span>Asp.Net Services</span>
            </h2>
            <p>
              Change the way of software development with our customized asp.net
              services
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
