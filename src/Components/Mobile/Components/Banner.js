import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const banner = require('../images/mobile-banner.jpg');
const dotnetbannericon = require('../images/mobile-icon.png');


export default function Banner() {
  return (
    <Fragment>
        <div className="clearfix" />
        <section className="internal-banner">
          <img src={banner} alt="" className="img-responsive" />
          <div className="overlay-banner">
          <h1><span><img src={dotnetbannericon} alt="php-icon" /></span></h1>
            <h2>Create, <span>Customize </span> And Manage <span>Mobile Apps</span></h2>
            <p>Top-notch Mobile Solutions to turn your ideas into reality</p>
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


