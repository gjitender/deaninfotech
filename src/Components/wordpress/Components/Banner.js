import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const banner = require('../images/wordpress-banner.jpg');
const laravelbannericon = require('../images/wordpress-icon.png');


export default function Banner() {
  return (
    <Fragment>
        <div className="clearfix" />

        <section className="internal-banner">
          <img src={banner} alt="" className="img-responsive" />
          <div className="overlay-banner">
          <h1><span><img src={laravelbannericon} alt="php-icon" /></span></h1>
            <h2>Explore <span>Your Profession</span> With Powerful And Intutive <span>Wordpress Platform</span></h2>
            <p>Get out of box customized solutions with strategic and creative approach</p>
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


