import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';
// import '../css/testimonial.css';

const testimonial = require('../images/testimonial-banner.jpg');


export default function Banner() {
  return (
    <Fragment>
    <div className="clearfix" />
    {/* <!-- banner start--> */}
    <section className="internal-banner">
      <img src={testimonial} alt="" className="img-responsive" />
      <div className="overlay-banner">
      <h1><span><img src={"images/testimonial-icon.png"} alt="about-icon" /></span></h1>
        <h2>Our  <span>End-To-End</span> Services Makes Customers <span>Happy</span></h2>
        <p>We work with innovation to maintain customer relationship bonds</p>
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


