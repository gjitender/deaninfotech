import React, {  Fragment } from 'react';

const EnterpriseSolution1 = require('../images/Enterprise-solution.png');
const infographics = require('../images/info-graphics.png');
const custom = require('../images/custom-software.png');
const consulting = require('../images/consulting.png');
const crm = require('../images/crm.png');



export default function EnterpriseSolutionPanel() {
   return (
      <div>
          <Fragment>
       <section className="enterprise p-80">
               <div className="container">
                  <div className="col-md-6 col-sm-6 col-xs-12 wow animate fadeInLeft">
                     <h2>Enterprise Solution</h2>
                     <p>We understand your needs for your business and provide the best enterprise solutions. We deliver 
                       the cost effective solutions to our clients with upgraded technology features, ultimately leading 
                       to their business growth. Be it for information management, communication with our off-site employees, 
                       clients or connectivity with other organizations, our effective work structure extend the value of current
                        information technology enabling business process innovation.</p>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12 wow animate fadeInRight">
                     <figure><img src={EnterpriseSolution1} className="img-responsive" alt="Enterprise-solution" /></figure>
                  </div>
               </div>
            </section>
            <div className="erp-infographics p-80">
               <div className="container">
                  <figure className="wow animate bounceInUp"><img src={infographics} className="img-responsive" alt="info-graphics" /></figure>
               </div>
            </div>
            <section className="enterprise-services p-80" id="enterprise">
               <div className="container">
                  <h2 className="uppercase">Enterprise Software Services</h2>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                     <div className="blue wow animate fadeInUp">
                        <figure><img src={custom} alt="custom-software" /></figure>
                        <h3>Custom Software</h3>
                        <p> Acclimating the enterprise from traditional hardware to automated designed software.</p>
                     </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                     <div className="blue yellow wow animate fadeInUp">
                        <figure><img src={consulting} alt="consulting" /></figure>
                        <h3>Consulting</h3>
                        <p>We provide the collaborative solution for business and IT challenges with innovative ideas.</p>
                     </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                     <div className="blue sky wow animate fadeInUp">
                        <figure><img src={crm} alt="crm" /></figure>
                        <h3>CRM/ERP</h3>
                        <p>We empower your employees to make more sales and serve your customer like never before.</p>
                     </div>
                  </div>
               </div>
            </section>
       
        <div className="clearfix" />
      </Fragment>
      </div>
   )
}


