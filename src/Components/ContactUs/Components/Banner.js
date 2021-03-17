import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import ImageWebp from '../../../ImageWebp'
const banner = require('../images/contact-dean.jpg');
const laravelbannericon = require('../images/contact-icon.png');



export default function Banner() {
  return (
    <div>
        <Fragment>
        <div className="clearfix" />
        <section className="internal-banner">
        <ImageWebp
                  srcWebp={banner}
                  src={banner}
                  className="img-responsive"
                  />
          {/* <img src={banner} alt="" className="img-responsive" /> */}
          <div className="overlay-banner">
          <h1><span>
          <ImageWebp
                  srcWebp={laravelbannericon}
                  src={laravelbannericon}
                  />
            {/* <img src={laravelbannericon} alt="php-icon" /> */}
            </span></h1>
            <h2>We <span>offer</span> edge cutting solutions that fulfil your <span>business needs</span></h2>
            <p>Get all types of software solutions under one roof</p>
            <h6>
           <NavLink  to="/portfolio"  className="hvr-wobble-vertical portfolio">Our Portfolio</NavLink>
             </h6>
          </div>
         
        </section>
        <div className="clearfix" />
      </Fragment>
    </div>
  )
}


