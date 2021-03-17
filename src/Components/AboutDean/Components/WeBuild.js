import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import ImageWebp from '../../../ImageWebp'

export default function WeBuild() {
  return (
    <div>
      <Fragment>
        <div className="clearfix" />
        {/* <!-- banner start--> */}
        <section className="internal-banner">
        <ImageWebp
                  srcWebp={"images/aboutus-banner.jpg"}
                  src={"images/aboutus-banner.jpg"}
                  className="img-responsive"
                  />
          {/* <img
            src={"images/aboutus-banner.jpg"}
            alt=""
            className="img-responsive"
          /> */}
          <div className="overlay-banner">
            <h1>
              <span>
              <ImageWebp
                  srcWebp={"images/about-icon.png"}
                  src={"images/about-icon.png"}
                  />
                {/* <img src={"images/about-icon.png"} alt="about-icon" /> */}
              </span>
            </h1>
            <h2>
              We <span>Develop</span> Client-Centric, Customized{" "}
              <span>Web & Mobile Solutions</span>
            </h2>
            <p>Get reliable solutions with speed and technology</p>
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
        {/* <!-- banner end--> */}
        <div className="clearfix" />
      </Fragment>
    </div>
  );
}
