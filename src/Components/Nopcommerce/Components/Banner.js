import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const banner = require('../images/nopcommerce-banner.jpg');
const dotnetbannericon = require('../images/nopcommerce-icon.png');


export default function Banner() {
  return (
    <Fragment>
    <div className="clearfix" />
    <section className="internal-banner">
      <img src={banner} className="img-responsive" alt="" />
      <div className="overlay-banner">
      <h1><span><img src={dotnetbannericon} alt="php-icon" /></span></h1>
        <h2>We Offer <span>High Flexibility </span> Control To Online Business Owners With <span>Nopcommerce</span></h2>
        <p>Get all features and updates emerged at one place to grow your business at flawless manner</p>
       <h6>
       <NavLink  to="/portfolio"  className="hvr-wobble-vertical portfolio">Our Portfolio</NavLink>
        <NavLink to="/contact"  className="hvr-sweep-to-right hvr-wobble-vertical">Contact Us <span className="arrowRight"></span></NavLink>
       </h6>
      </div>
    </section>
    <div className="clearfix" />
  </Fragment>
  )
}


