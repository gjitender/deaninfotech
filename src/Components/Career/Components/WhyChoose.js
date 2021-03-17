import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import ImageWebp from "../../../ImageWebp";

const icon1 = require("../images/icon-1.png");
const icon2 = require("../images/icon-2.png");
const icon3 = require("../images/icon-3.png");
const icon4 = require("../images/icon-4.png");
const icon5 = require("../images/icon-5.png");
const icon6 = require("../images/icon-6.png");
const icon7 = require("../images/icon-7.png");
const icon8 = require("../images/icon-8.png");
const marketing = require("../images/marketing.png");

export default function WhyChoose() {
  return (
    <div>
      <Fragment>
        <section className="why-choose-dean p-80" id="why">
          <div className="container">
            <h2 className="uppercase">Why Choose Dean</h2>
            <p>
              We develop strategies and solutions that deliver tangible business
              values to our clients.
            </p>

            <div
              className="col-md-3 col-sm-6 col-xs-12 wow animate fadeInUp"
              wow-data-delay="0.1s"
            >
              <div className="detail">
                <figure>
                  <ImageWebp srcWebp={icon1} src={icon1} />
                  {/* <img alt="" src={icon1} /> */}
                </figure>
                <h2>Employee First</h2>
                <p>
                  We have simplified internal communications and amplify the
                  employee voice to deliver valuable information in real time.
                </p>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow animate fadeInUp"
              wow-data-delay="0.2s"
            >
              <div className="detail">
                <figure>
                  <ImageWebp srcWebp={icon2} src={icon2} />
                  {/* <img alt="" src={icon2} /> */}
                </figure>
                <h2>Advanced Resources</h2>
                <p>
                  We help our respurces to maximize the talent through
                  innovative workforce business solutions and advanced
                  resources.
                </p>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow animate fadeInUp"
              wow-data-delay="0.3s"
            >
              <div className="detail">
                <figure>
                  <ImageWebp srcWebp={icon3} src={icon3} />
                  {/* <img alt="" src={icon3} /> */}
                </figure>
                <h2>Client Relations</h2>
                <p>
                  Our advanced client relation systems open the channel of our
                  workforce to interact directly with clients based globally.
                </p>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow animate fadeInUp"
              wow-data-delay="0.4s"
            >
              <div className="detail">
                <figure>
                  <ImageWebp srcWebp={icon4} src={icon4} />
                  {/* <img alt="" src={icon4} /> */}
                </figure>
                <h2>Up-to-date technology</h2>
                <p>
                  Our people gets to work on latest technologies which are
                  running in market increasing the overall skillset of people.{" "}
                </p>
              </div>
            </div>

            <div
              className="col-md-3 col-sm-6 col-xs-12 wow animate fadeInUp"
              wow-data-delay="0.5s"
            >
              <div className="detail">
                <figure>
                  <ImageWebp srcWebp={icon5} src={icon5} />
                  {/* <img alt="" src={icon5} /> */}
                </figure>
                <h2>Zero Tolerance</h2>
                <p>
                  We have zero tolerance policy in place which protects any kind
                  of harassment or biasness at workplace.
                </p>
              </div>
            </div>

            <div
              className="col-md-3 col-sm-6 col-xs-12 wow animate fadeInUp"
              wow-data-delay="0.6s"
            >
              <div className="detail">
                <figure>
                  <ImageWebp srcWebp={icon6} src={icon6} />
                  {/* <img alt="" src={icon6} /> */}
                </figure>
                <h2>Project Planning and Management</h2>
                <p>
                  We are actively involved in different strategies for projects
                  like planning and management of advanced resources for
                  innovative work solutions.
                </p>
              </div>
            </div>

            <div
              className="col-md-3 col-sm-6 col-xs-12 wow animate fadeInUp"
              wow-data-delay="0.7s"
            >
              <div className="detail">
                <figure>
                  <ImageWebp srcWebp={icon7} src={icon7} />
                  {/* <img alt="" src={icon7} /> */}
                </figure>
                <h2>Improved Data Capture</h2>
                <p>
                  We create data-driven workflows, operations and services which
                  allow us to improve the analytics of data to increase the
                  efficiency of work.
                </p>
              </div>
            </div>

            <div
              className="col-md-3 col-sm-6 col-xs-12 wow animate fadeInUp"
              wow-data-delay="0.8s"
            >
              <div className="detail">
                <figure>
                  <ImageWebp srcWebp={icon8} src={icon8} />
                  {/* <img alt="" src={icon8} /> */}
                </figure>
                <h2>Integrity in work</h2>
                <p>
                  We are known for integrity at workplace and are equal
                  opportunity employer.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="job_opening_div p-80" id="how">
          <div className="container">
            <div className="col-md-8 col-sm-6 col-xs-12 left wow animate fadeInLeft">
              <h3>Not able to find your matching opening?</h3>
              <p>
                If you are not able to find your interested profile and you are
                interested to work with us, in that case, feel free to send your
                profile. We will be glad to hire you if we like what you can do.
              </p>

              <h5>
                <NavLink to="/mail-your-synopsis">
                  MAIL YOUR SYNOPSIS <i className="fa fa-chevron-right"></i>
                </NavLink>
              </h5>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 right">
              <ImageWebp
                srcWebp={marketing}
                src={marketing}
                className="img-responsive marketing_img"
              />
              {/* <img alt="" src={marketing} className="img-responsive marketing_img"  /> */}
            </div>
          </div>
        </section>
      </Fragment>
    </div>
  );
}
