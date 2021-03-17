import React, { Fragment } from "react";
import ImageWebp from "../../../ImageWebp";

const About1 = require("../image/idea.png");
const About2 = require("../image/enterprise.png");
const About3 = require("../image/mobile.png");
const About4 = require("../image/Salesforce_Implementation.png");
const About5 = require("../image/Certified_Verified_Resources.png");
const About6 = require("../image/Innovation_Leaders.png");
const About7 = require("../image/Website_eCommerce_Portals.png");
const About8 = require("../image/Internet_Marketing_Products.png");
const About9 = require("../image/Certified_Verified_Resources.png");
const About10 = require("../image/Complete_Technology_Architecture.png");
const About11 = require("../image/Data_Insights.png");
const About12 = require("../image/Platform_Engineering_Solutions.png");

export default function WhoWeAreAbout() {
  return (
    <div>
      <Fragment>
        {/* <!-- dean-who-we-are start--> */}
        <section className="dean-who-we-are p-80">
          <div className="container">
            <div className="col-md-12 col-sm-12 col-xs-12 wow animate fadeInUp">
              <h2>
                WE CREATE SUPER AWESOME FUNCTIONALITIES <br /> AND ENHANCE THE
                USER EXPERIENCE
              </h2>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="sub hvr-wobble-vertical">
                  <figure>
                    <ImageWebp srcWebp={About1} src={About1} />
                    {/* <img src={About1} alt="idea" /> */}
                  </figure>
                  <h3>Idea Analysis</h3>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="sub hvr-wobble-vertical">
                  <figure>
                    <ImageWebp srcWebp={About2} src={About2} />
                    {/* <img src={About2} alt="enterprise" /> */}
                  </figure>
                  <h3>Enterprise Applications</h3>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="sub hvr-wobble-vertical">
                  <figure>
                  <ImageWebp srcWebp={About3} src={About3} />
                    {/* <img src={About3} alt="mobile" /> */}
                  </figure>
                  <h3>Mobility Applications</h3>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="sub hvr-wobble-vertical">
                  <figure>
                  <ImageWebp srcWebp={About4} src={About4} />
                    {/* <img src={About4} alt="Salesforce_Implementation" /> */}
                  </figure>
                  <h3>Salesforce Implementation</h3>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="sub hvr-wobble-vertical">
                  <figure>
                  <ImageWebp srcWebp={About5} src={About5} />
                    {/* <img src={About5} alt="Cloud_Business_Expertise" /> */}
                  </figure>
                  <h3>Cloud Business Expertise</h3>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="sub hvr-wobble-vertical">
                  <figure>
                  <ImageWebp srcWebp={About6} src={About6} />
                    {/* <img src={About6} alt="Innovation_Leaders" /> */}
                  </figure>
                  <h3>Innovation Leaders</h3>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="sub hvr-wobble-vertical">
                  <figure>
                  <ImageWebp srcWebp={About7} src={About7} />
                    {/* <img src={About7} alt="Website_&amp;_eCommerce_Portals" /> */}
                  </figure>
                  <h3>Website eCommerce Portals</h3>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="sub hvr-wobble-vertical">
                  <figure>
                  <ImageWebp srcWebp={About8} src={About8} />
                    {/* <img src={About8} alt="Internet_Marketing_Products" /> */}
                  </figure>
                  <h3>Internet Marketing Products</h3>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="sub hvr-wobble-vertical">
                  <figure>
                  <ImageWebp srcWebp={About9} src={About9} />
                    {/* <img
                      src={About9}
                      alt="Certified_&amp;_Verified_Resources"
                    /> */}
                  </figure>
                  <h3>Certified Verified Resources</h3>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="sub hvr-wobble-vertical">
                  <figure>
                  <ImageWebp srcWebp={About10} src={About10} />
                    {/* <img src={About10} alt="Complete_Technology_Architecture" /> */}
                  </figure>
                  <h3>Complete Technology Architecture</h3>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="sub hvr-wobble-vertical">
                  <figure>
                  <ImageWebp srcWebp={About11} src={About11} />
                    {/* <img src={About11} alt="Data_Insights" /> */}
                  </figure>
                  <h3>
                    Data <br />
                    Insights
                  </h3>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="sub hvr-wobble-vertical">
                  <figure>
                  <ImageWebp srcWebp={About12} src={About12} />
                    {/* <img src={About12} alt="Platform_Engineering_Solutions" /> */}
                  </figure>
                  <h3>Platform Engineering Solutions</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- dean-who-we-are end--> */}
        <div className="clearfix" />
      </Fragment>
    </div>
  );
}
