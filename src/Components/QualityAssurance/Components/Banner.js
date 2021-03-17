import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const banner = require('../images/about-dean.jpg');
const qaicon = require('../images/qa-icon.png');

export default function Banner() {
  return (
    <Fragment>
    <div className="clearfix" />
    {/* <!-- banner start--> */}
    <section className="internal-banner">
      <img src={banner} alt="" className="img-responsive" />
      <div className="overlay-banner">
      <h1><span><img src={qaicon} alt="qa-icon" /></span></h1>
        <h2>Good <span>Quality</span> Means Good Business <span>For Us</span></h2>
        <p>We deliver quality, our clients experience success</p>
        <h6>
       <NavLink  to="/portfolio"  className="hvr-wobble-vertical portfolio">Our Portfolio</NavLink>
        <NavLink to="/contact"  className="hvr-sweep-to-right hvr-wobble-vertical">Contact Us <span className="arrowRight"></span></NavLink>
        </h6>
        </div>
    </section>
    {/* <!-- banner end--> */}
    <div className="clearfix" />
  </Fragment>
  )
}


