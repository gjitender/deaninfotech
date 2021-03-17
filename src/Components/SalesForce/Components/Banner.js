import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';


const banner = require('../images/salesforce-banner.jpg');
const qaicon = require('../images/salesforce-icon.png');


export default function Banner() {
  return (
    <Fragment>
    <div className="clearfix" />

    <section className="internal-banner">
      <img src={banner} alt="" className="img-responsive" />
      <div className="overlay-banner">
      <h1><span><img src={qaicon} alt="qa-icon" /></span></h1>
        <h2>Serve <span>Your Business</span> With Salesforce, And Experience Success Like <span>Never Before</span></h2>
        <p>Capture the benefits of CRM and connect with customers using world renowned Salesforce CRM</p>
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


