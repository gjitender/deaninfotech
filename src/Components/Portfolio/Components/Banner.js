import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const banner = require('../images/portfolio-banner.jpg');
const dotnetbannericon = require('../images/portfolio-icon.png');


export default function Banner() {
  return (
    <Fragment>
    <div className="clearfix" />

    <section className="internal-banner">
      <img src={banner} alt="" className="img-responsive" />
      <div className="overlay-banner">
      <h1><span><img src={dotnetbannericon} alt="php-icon" /></span></h1>
        <h2>We  <span>Create </span> And Customize Applications To Enhance <span>User Experience</span></h2>
        <p>We are superior at creating, designing and implementation of web technologies</p>
        <h6>
      
        <NavLink to="/contact"  className="hvr-sweep-to-right hvr-wobble-vertical">Contact Us <span className="arrowRight"></span></NavLink>
       </h6>
      </div>
    </section>

    <div className="clearfix" />
  </Fragment>
  )
}


