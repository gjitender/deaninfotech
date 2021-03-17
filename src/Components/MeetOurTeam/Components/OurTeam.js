import React, {  Fragment } from 'react';



const team1 = require('../images/team1.jpg');
const team2 = require('../images/team2.jpg');
const team3 = require('../images/team3.jpg');
const team4 = require('../images/team4.jpg');
const team5 = require('../images/team5.jpg');
const team6 = require('../images/team6_1.jpg');
const team7 = require('../images/team7.jpg');
const teamadil = require('../images/Adel-Alkhiraimi.jpg');



export default function OurTeam() {
  return (
    <Fragment>
    {/* <!-- our-team start--> */}
    <section className="our-team p-80">
      <div className="container">
        <h3>The Best Team. The Happiest clients</h3>
        <h2>Enthusiastic, Professional & Qualified</h2>
        <div className="row">
          <div className="col-md-3 wow animate fadeInUp" data-wow-delay="0.1s">
            <div className="thumb hvr-wobble-vertical">
            <div className="sub-part1"><a href="">
              <figure><img src={team1} alt="" />
                <div className="overlay-strip">
                  <div className="text"><p>30 years of experience in business leadership, investments & portfolio management</p></div>
                </div>
              </figure>
              </a></div>
              <div className="info">
                <h4>Kg Aggarwal</h4>
                <h5>Director</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 wow animate fadeInUp" data-wow-delay="0.2s">
            <div className="thumb hvr-wobble-vertical">
            <div className="sub-part1"><a href="">
              <figure><img src={team2} alt="" />
              <div className="overlay-strip">
                  <div className="text"><p>Young and dynamic individual with focus on IT transformations, systems integrations, automation & business process re-engineering</p></div>
                </div>
              </figure>
              </a></div>
              <div className="info">
                <h4>Ankit Aggarwal</h4>
                <h5>Director</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 wow animate fadeInUp" data-wow-delay="0.7s">
            <div className="thumb hvr-wobble-vertical">
            <div className="sub-part1"><a href="">
              <figure><img src={team7} alt="" />
              <div className="overlay-strip">
                  <div className="text"><p>2 Decades of experience in providing excellent consulting and software services to global clients</p></div>
                </div>
              </figure>
              </a></div>
              <div className="info">
                <h4>Erwin De Troch</h4>
                <h5>Principal Consultant - Europe</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 wow animate fadeInUp" data-wow-delay="0.4s">
            <div className="thumb hvr-wobble-vertical">
            <div className="sub-part1"><a href="">
              <figure><img src={teamadil} alt="" />
              <div className="overlay-strip">
                  <div className="text"><p>Highly motivated individual with vast experience in IT services and products across Middle East Region</p></div>
                </div>
              </figure>
              </a></div>
              <div className="info">
                <h4>Adel Alkhiraimi</h4>
                <h5>Principal Consultant - Middle East</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 wow animate fadeInUp" data-wow-delay="0.3s">
            <div className="thumb hvr-wobble-vertical">
            <div className="sub-part1"><a href="">
              <figure><img src={team3} alt="" />
              <div className="overlay-strip">
                  <div className="text"><p>Proved track record of exceptional business consulting, global delivery operations and sales</p></div>
                </div>
              </figure>
              </a></div>
              <div className="info">
                <h4>Gaurav Saxena</h4>
                <h5>Business Unit Head - Sales and Operation </h5>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 wow animate fadeInUp" data-wow-delay="0.4s">
            <div className="thumb hvr-wobble-vertical">
            <div className="sub-part1"><a href="">
              <figure><img src={team4} alt="" />
              <div className="overlay-strip">
                  <div className="text"><p>Instrumental in project delivery and holds one goal - 100% client satisfaction</p></div>
                </div>
              </figure>
              </a></div>
              <div className="info">
                <h4>Sneha Malik</h4>
                <h5>Delivery Manager</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 wow animate fadeInUp" data-wow-delay="0.5s">
            <div className="thumb hvr-wobble-vertical">
            <div className="sub-part1"><a href="">
              <figure><img src={team5} alt="" />
              <div className="overlay-strip">
                  <div className="text"><p>Leads Global Sales operations focusing on business services and client relations</p></div>
                </div>
              </figure>
              </a></div>
              <div className="info">
                <h4>Bharat Khatri</h4>
                <h5>Sales Manager</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 wow animate fadeInUp" data-wow-delay="0.6s">
            <div className="thumb hvr-wobble-vertical">
            <div className="sub-part1"><a href="">
              <figure><img src={team6} alt="" />
              <div className="overlay-strip">
                  <div className="text"><p>Helps in building a culture that values people and their core development at Dean</p></div>
                </div>
              </figure>
              </a></div>
              <div className="info">
                <h4>Rekha Yadav</h4>
                <h5>Human Resources</h5>
              </div>
            </div>
          </div>
          
          
         
        </div>
      </div>
    </section>
   
    {/* <!-- our-team end--> */}
    <div className="clearfix" />
  </Fragment>
  )
}


