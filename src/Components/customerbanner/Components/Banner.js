import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import ImageWebp from '../../../ImageWebp'

const banner = require("../images/contact-dean.jpg");
// const laravelbannericon = require('../images/contact-icon.png');

export default function Banner() {
  return (
    <div>
      <Fragment>
        <div className="clearfix" />
        <section className="internal-banner customer_banner">
        <ImageWebp
                  srcWebp={banner}
                  src={banner}
                  className="img-responsive"
                  />
          {/* <img src={banner} alt="" className="img-responsive" /> */}
          <div className="overlay-banner">
            <h2>
              Please <span>tell</span> us more about <span>you</span>
            </h2>
            <p></p>
            <h6>
              <NavLink
                to="/portfolio"
                className="hvr-wobble-vertical portfolio"
              >
                Our Portfolio
              </NavLink>
            </h6>
          </div>
        </section>
        <div className="clearfix" />
      </Fragment>
    </div>
  );
}
