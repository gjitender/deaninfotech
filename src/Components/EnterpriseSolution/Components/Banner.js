import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';


const enterprise1 = require('../images/enterprise-banner.jpg');
const enterpriseicon = require('../images/enterprise-icon.png');


export default function Banner() {
  return (
    <div>
       <Fragment>
        <div className="clearfix" />
        {/* <!-- banner start--> */}
        <section className="internal-banner">
          <img src={enterprise1} alt="" className="img-responsive" />
          <div className="overlay-banner">
          <h1><span><img src={enterpriseicon} alt="enterprise-icon" /></span></h1>
            <h2>With The  <span>Cost Effective</span> Solutions, We Streamline Key Areas For <span>Businesses</span></h2>
            <p>We design cloud based custom solutions with unmatched precision to ease the way of doing business</p>
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

