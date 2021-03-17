import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';


const JavaScriptBanner = require('../images/javascript-banner.jpg');
const JavascriptIcon = require('../images/javascript-icon.png');


export default function Banner() {
  return (
    <div>
       <Fragment>
        <div className="clearfix" />
        {/* <!-- banner start--> */}
        <section className="internal-banner">
          <img src={JavaScriptBanner} alt="" className="img-responsive" />
          <div className="overlay-banner">
          <h1><span><img src={JavascriptIcon} alt="javascript-icon" /></span></h1>
            <h2>We Recognize  <span>The Power</span> Of Javascript Which Takes Development To <span>Level</span></h2>
            <p>JavaScript brings charm to any web page and we are master in its use</p>
            <h6>
           <NavLink  to="/portfolio"  className="hvr-wobble-vertical portfolio">Our Portfolio</NavLink>
            <NavLink to="/contact"  className="hvr-sweep-to-right hvr-wobble-vertical">Contact Us <span className="arrowRight"></span></NavLink>
           
            </h6>
          </div>
        </section>
        {/* <!-- banner end--> */}
        <div className="clearfix" />
      </Fragment>
    </div>
  )
}


