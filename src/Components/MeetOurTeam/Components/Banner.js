import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';



const aboutDean = require('../images/team-banner.jpg');


export default function Banner() {
  return (
    <Fragment>
    <div className="clearfix" />
    {/* <!-- banner start--> */}
    <section className="internal-banner">
      <img src={aboutDean} alt="" className="img-responsive" />
      <div className="overlay-banner">
      <h1><span><img src={"images/team-icon.png"} alt="about-icon" /></span></h1>
        <h2>Our <span>Enthusiastic Professionals</span> Lead Your Business With Best Power Of <span>Enterprise</span></h2>
        <p>A result-driven team is what matters at the end</p>
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


