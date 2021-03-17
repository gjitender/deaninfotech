import React, { Fragment } from "react";
import ImageWebp from '../../../ImageWebp'


export default function WelcomeToDean() {
  return (
    <div>
      <Fragment>
        {/* <!-- dean-aboutus start--> */}
        <section className="dean-aboutus p-80">
          <div className="container">
            <div className="col-md-12 col-sm-6 col-xs-12 para wow animate fadeInLeft">
              <h2 className="uppercase">Welcome To Dean</h2>
              <h3>We Create Business: Our Clients Experience Success</h3>
              <p>
                Dean Infotech Pvt. Ltd. is a certified outstanding Enterprise
                Level Solution Development Firm providing the specialized
                services to various industries across several physiographic
                including United States, United Kingdom, Australia, and India.
              </p>
              <p>
                We build the foundation for the intellective business by working
                with upcoming technologies to provide a better customer
                experience through personalized services and enhanced
                collaboration.
              </p>
              <p>
                Our affordable customized and scalable solutions save companies
                consequential time and financial resources by allowing them to
                concentrate on efforts by core business. We provide the business
                solutions to clients which help them to simplify, strengthen and
                transform their business.
              </p>
              <p>
                Our team of technology enthusiasts and creative designers focus
                on delivering best solutions to our clients. We offer Cloud
                Based Solutions and create best applications with great
                functionality. Implementing a strategical approach while
                developing applications makes us outshine the market
              </p>
              <p>
                Developers at Dean Infotech make the use of latest technologies
                to provide innovative and prominent applications with high
                functionality to enhance user experience. We deliver a unique
                blend of business acumen coupled with an absolute understanding
                and passion for the internet and all it offers.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12 our-value">
              <h4>
              <ImageWebp
                  srcWebp={"images/be-real.png"}
                  src={"images/be-real.png"}
                  />
                {/* <img src={"images/be-real.png"} alt="be-real" /> Be Real */}
              </h4>
              <p>
                We believe in being real by providing the simplicity and
                building the applications with high functionality. These are the
                key strengths of our company.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 our-value">
              <h4>
              <ImageWebp
                  srcWebp={"images/Passionate-Innovative.png"}
                  src={"images/Passionate-Innovative.png"}
                  />
                {/* <img
                  src={"images/Passionate-Innovative.png"}
                  alt="Passionate-&amp;-Innovative"
                /> */}
                Passionate &amp; Innovative
              </h4>
              <p>
                Our highly passionate developers deliver innovative and
                award-winning solutions that allow us to attract clients in the
                market.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 our-value">
              <h4>
              <ImageWebp
                  srcWebp={"images/Making-a-Difference.png"}
                  src={"images/Making-a-Difference.png"}
                  />
                {/* <img
                  src={"images/Making-a-Difference.png"}
                  alt="Making-a-Difference"
                /> */}
                Making a Difference
              </h4>
              <p>
                We deliver a unique blend of business acumen coupled with an
                absolute understanding and change the way our services &amp;
                products reach to the market.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 our-value">
              <h4>
              <ImageWebp
                  srcWebp={"images/Quest-to-Learn.png"}
                  src={"images/Quest-to-Learn.png"}
                  />
                {/* <img
                  src={"images/Quest-to-Learn.png"}
                  alt="Quest-to-Learn"
                /> */}
                Quest to Learn
              </h4>
              <p>
                We simplify the technologies by spending more time on innovation
                on trends like Cloud Expansion or Digital Transformation.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 our-value">
              <h4>
              <ImageWebp
                  srcWebp={"images/Results-Matter.png"}
                  src={"images/Results-Matter.png"}
                  />
                {/* <img
                  src={"images/Results-Matter.png"}
                  alt="Results-Matter"
                /> */}
                Results Matter
              </h4>
              <p>
                Our positive attitude results in an achievement of the whole
                organization with the combined effort of each individual.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 our-value">
              <h4>
              <ImageWebp
                  srcWebp={"images/Always-Connected.png"}
                  src={"images/Always-Connected.png"}
                  />
                {/* <img
                  src={"images/Always-Connected.png"}
                  alt="Always-Connected"
                /> */}
                Always Connected
              </h4>
              <p>
                We believe in building relationships with the clients across the
                boundaries. We are always standing next to our clients.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- dean-aboutus end--> */}
        <div className="clearfix" />
      </Fragment>
    </div>
  );
}
