import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const banner = require('../images/php-banner.jpg');
const phpbannericon = require('../images/php-icon.png');


export default function Banner() {
  return (
    <Fragment>
    <div className="clearfix" />

    <section className="internal-banner">
      <img src={banner} alt="" className="img-responsive" />
      <div className="overlay-banner">
      <h1><span><img src={phpbannericon} alt="php-icon" /></span></h1>
        <h2>We Offer Best <span>Php Services</span> With Responsive Designing And <span>Development</span></h2>
        <p>Get next level PHP solutions at affordable prices</p>
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



