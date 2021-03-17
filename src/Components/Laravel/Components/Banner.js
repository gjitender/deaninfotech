import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const banner = require('../images/laravel-banner.jpg');
const laravelbannericon = require('../images/laravel-icon.png');



export default function Banner() {
  return (
       <Fragment>
        <div className="clearfix" />

        <section className="internal-banner">
          <img src={banner} alt="" className="img-responsive" />
          <div className="overlay-banner">
          <h1><span><img src={laravelbannericon} alt="php-icon" /></span></h1>
            <h2>Get Powerful <span>Laravel Development</span> Solutions That Fulfill <span>Your Requirements</span></h2>
            <p>Our customized services help to grow your business with the most relevant web application framework</p>
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



