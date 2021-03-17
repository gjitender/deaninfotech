import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const banner = require('../images/umbraco-banner.jpg');
const dotnetbannericon = require('../images/umbraco-icon.png');



export default function Banner() {
  return (
    <Fragment>
        <div className="clearfix" />
        <section className="internal-banner">
          <img src={banner} className="img-responsive" alt="" />
          <div className="overlay-banner">
          <h1><span><img src={dotnetbannericon} alt="php-icon" /></span></h1>
            <h2>We Provide <span>Flexible Solutions </span> With Rich Standard <span>Technology</span></h2>
            <p>We have remarkable experience in providing business specific Umbraco development services</p>
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

