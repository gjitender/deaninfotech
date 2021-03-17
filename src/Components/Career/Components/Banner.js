import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import ImageWebp from '../../../ImageWebp'

const banner = require('../images/career-banner.jpg');
const laravelbannericon = require('../images/career-icon.png');



function Banner() {
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
            <h2>Boost <span>Your Career</span>  By Making A <span>Right Choice</span></h2>
            <p>We provide the opportunity which help you grow significantly</p>
            <h6>
           <NavLink  to="/portfolio"  className="hvr-wobble-vertical portfolio">Our Portfolio</NavLink>
            <NavLink to="/contact"  className="hvr-sweep-to-right hvr-wobble-vertical">Contact Us <span className="arrowRight"></span></NavLink>
           
            </h6>
          </div>
        </section>

        <div className="clearfix" />
      </Fragment>
    </div>
  )
}

export default Banner;


