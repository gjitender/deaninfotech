import React, { Fragment } from "react";
import ImageWebp from "../../../ImageWebp";

const phpexicon9 = require("../images/Smile-icon.png");
const phpexicon10 = require("../images/agil-software.png");
const phpexicon11 = require("../images/creative.png");
const phpexicon12 = require("../images/Bespoke.png");
const phpexicon13 = require("../images/custom-software-2.png");
const phpexicon14 = require("../images/unparalleled-communication.png");
const phpexicon15 = require("../images/trusted-and-reliable-technology.png");
const phpexicon16 = require("../images/unmatched-security.png");

export default function DeanCustomize() {
  return (
    <div>
      <Fragment>
        <section className="mobile-dean-customize android p-80">
          <div className="container">
            <div className="col-md-6" />
            <div className="col-md-6 col-sm-6 col-xs-12 right-part wow animate fadeInRight">
              <h2 className="uppercase">
                INTERACTIVE, INNOVATIVE AND <br /> CUSTOMIZED at Dean Infotech
              </h2>
              <p>
                At Dean Infotech, we analyze your requirements and work
                according to your needs. We create bug-free applications with
                clean and optimized codes which leave no damage impressions on
                clients. Our dedicated Android Development Team ensures to
                deliver the projects on time with new versions of the
                technology. We believe in delivering faster services with
                optimized code structure.
              </p>
              <p>
                Our dedicated team of professionals has experience in working
                with the latest technologies that help to generate innovative
                app designs that will run on different platforms. We provide
                certified Application Developers to work on different projects.
              </p>
              <span>Some of our Android Application Services include:</span>
              <ul>
                <li>Home Furnishing Android App Development</li>
                <li>Social Networking Android App Development</li>
                <li>Education Android App Development</li>
                <li>Customized Android App Development</li>
                <li>Health Android App Development</li>
                <li>Mini-Apps Development</li>
                <li>E-commerce Android Apps</li>
                <li>Music Android App Development</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="happy-client p-80">
          <div className="container">
            <h2 className="uppercase">
              NEED HELP IN ANDROID DEVELOPMENT, WE ARE ALWAYS THERE FOR YOU
            </h2>
            <p>
              We create beautifully designed innovative applications for Android
              to drive growth for world’s leading brands
            </p>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="sub wow animate fadeInUp">
                <figure>
                  <ImageWebp srcWebp={phpexicon9} src={phpexicon9} />
                  {/* <img src={phpexicon9} alt="icon" /> */}
                </figure>
                <h3>Expertise in App Development</h3>
                <p>
                  Our certified professionals have expertise in developing
                  applications for Android platform with upgraded technology.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="sub wow animate fadeInUp">
                <figure>
                  <ImageWebp srcWebp={phpexicon10} src={phpexicon10} />
                  {/* <img src={phpexicon10} alt="icon" /> */}
                </figure>
                <h3>Agile Software Team</h3>
                <p>
                  We use agile methods and different strategies for planning to
                  provide better control over the development process for
                  Android applications.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="sub wow animate fadeInUp">
                <figure>
                  <ImageWebp srcWebp={phpexicon11} src={phpexicon11} />
                  {/* <img src={phpexicon11} alt="icon" /> */}
                </figure>
                <h3>Application Design</h3>
                <p>
                  We use innovative design features embedded with the latest
                  technology to serve your business with excellence.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="sub wow animate fadeInUp">
                <figure>
                  <ImageWebp srcWebp={phpexicon12} src={phpexicon12} />
                  {/* <img src={phpexicon12} alt="icon" /> */}
                </figure>
                <h3>Integrated Applications</h3>
                <p>
                  We navigate different complexities to integrate Android
                  applications with enterprise level software.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="sub wow animate fadeInUp">
                <figure>
                  <ImageWebp srcWebp={phpexicon13} src={phpexicon13} />
                  {/* <img src={phpexicon13} alt="icon" /> */}
                </figure>
                <h3>High Performance</h3>
                <p>
                  The applications designed by our team of experts are high
                  embedded with high quality & supported by the system
                  architecture.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="sub wow animate fadeInUp">
                <figure>
                  <ImageWebp srcWebp={phpexicon14} src={phpexicon14} />
                  {/* <img src={phpexicon14} alt="icon" /> */}
                </figure>
                <h3>Utility Applications</h3>
                <p>
                  We develop applications that help business in developing and
                  also ensure that all apps feature use the latest aspects for
                  android platform.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="sub wow animate fadeInUp">
                <figure>
                  <ImageWebp srcWebp={phpexicon15} src={phpexicon15} />
                  {/* <img src={phpexicon15} alt="icon" /> */}
                </figure>
                <h3>Pleasing Experience</h3>
                <p>
                  We offer a pleasing experience to our clients by working with
                  us and enjoying the benefits of innovative apps developed by
                  our team members.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="sub wow animate fadeInUp">
                <figure>
                  <ImageWebp srcWebp={phpexicon16} src={phpexicon16} />
                  {/* <img src={phpexicon16} alt="icon" /> */}
                </figure>
                <h3>Customized Applications</h3>
                <p>
                  We are equipped with state of technology to develop customized
                  applications that boost your business growth and fulfil
                  requirements for your projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="clearfix" />
      </Fragment>
    </div>
  );
}
