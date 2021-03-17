import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const banner = require('../images/ios-banner.jpg');
const dotnetbannericon = require('../images/ios-icon.png');




export default function Banner() {
  return (
    <div>
      <Fragment>
        <div className="clearfix" />
        <section className="internal-banner">
          <img src={banner} alt="" className="img-responsive" />
          <div className="overlay-banner">
          <h1><span><img src={dotnetbannericon} alt="php-icon" /></span></h1>
            <h2>With <span>Right Tools, Experience  </span> The High Quality Of <span> iOS Applications</span></h2>
            <p>We design interactive mobile apps built on iOS platform</p>
            <h6>
           <NavLink  to="/portfolio"  className="hvr-wobble-vertical portfolio">Our Portfolio</NavLink>
            <NavLink to="/contact"  className="hvr-sweep-to-right hvr-wobble-vertical">Contact Us <span className="arrowRight"></span></NavLink>
           </h6>
          </div>
        </section>
        <div className="clearfix" />
      </Fragment>
    </div>
  )
}

