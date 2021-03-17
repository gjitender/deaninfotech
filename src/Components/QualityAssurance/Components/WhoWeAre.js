import React, { Fragment } from 'react';

const qualityicon1 = require('../images/Certified-quality-analysts.png');
const qualityicon2 = require('../images/Focus-and-attention-to-detail.png');
const qualityicon3 = require('../images/Well-equipped-infrastructure.png');
const qualityicon4 = require('../images/Full-cycle-testing.png');
const qualityicon5 = require('../images/Iterative-quality-checks.png');
const qualityicon6 = require('../images/Future-proof-setup.png');
const qualityicon7 = require('../images/reduce-Time-to-Market.png');
const qualityicon8 = require('../images/Major-automation-tools.png');


export default function WhoWeAre() {
    return (
        <Fragment>
        {/* <!-- qa-who-we-are start--> */}
        <section className="qa-who-we-are p-80">
          <div className="container wow animate fadeInUp">
            <div className="row">
              <h2 className="uppercase">How We stand</h2>
              <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info hvr-wobble-vertical">
                                <figure><img src={qualityicon1} alt="Certified-quality-analysts" /></figure>
                                <h3>Certified quality <br />analysts</h3>
                                <p>Our quality management enables you to get the most configurable enterprise solutions for your business.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info hvr-wobble-vertical">
                                <figure><img src={qualityicon2} alt="Focus-and-attention-to-detail" /></figure>
                                <h3>Focus and <br />attention-to-detail</h3>
                                <p>We have the ability to achieve the thoroughness and accuracy while working on the projects.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info hvr-wobble-vertical">
                                <figure><img src={qualityicon3} alt="Well-equipped-infrastructure" /></figure>
                                <h3>Well-equipped <br />infrastructure</h3>
                                <p>Developers are equipped to work on latest machines to create the best systems in least time followed by thorough testing on upgraded physical devices.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info hvr-wobble-vertical">
                                <figure><img src={qualityicon4} alt="Fullcycletesting" /></figure>
                                <h3>Full-cycle <br />testing</h3>
                                <p>We have the team of professionals who perform full cycle testing and implementation of business-boosting IT solutions.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info hvr-wobble-vertical">
                                <figure><img src={qualityicon5} alt="Iterative-quality-checks" /></figure>
                                <h3>Iterative quality <br />checks</h3>
                                <p> With the innovative software testing solutions we put iterative quality checks on our projects until it goes live.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info hvr-wobble-vertical">
                                <figure><img src={qualityicon6} alt="Future-proof-setup" /></figure>
                                <h3>Future-proof <br />setup</h3>
                                <p>We provide future-proof cloud solutions that enable the enterprise to make the use of the latest technologies with approved integrated solutions.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info hvr-wobble-vertical">
                                <figure><img src={qualityicon7} alt="reduce-Time-to-Market" /></figure>
                                <h3>Reduced <br />time-to-market</h3>
                                <p>We specialize in enabling the scaled solutions with the fast delivery of services thus reducing the overall time to market.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info hvr-wobble-vertical">
                                <figure><img src={qualityicon8} alt="Major-automation-tools" /></figure>
                                <h3>Major automation <br/>tools</h3>
                                <p>With comprehensive automated tools we put the more reliable processes with the proven capability to deliver world-class solutions.</p>
                            </div>
                        </div>
              </div>
          </div>
        </section>
        
        {/* <!-- qa-who-we-are end--> */}
        <div className="clearfix" />
      </Fragment>
    )
}


