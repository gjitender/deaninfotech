import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Config from "../config";
import Trustpilot from './trustpilot';

const Certified = require("../../images/certified-with.webp");
const Footerten = require("../../images/footer-ten-years.png");
const withdean1 = require("../AboutDean/image/INDUSTRY-EXPERIENCE.png");
const withdean2 = require("../AboutDean/image/RETENTION-RATE.png");
const withdean3 = require("../AboutDean/image/DELIGHTED-CLIENTS.png");
const withdean4 = require("../AboutDean/image/EMPLOYEES.png");
const withdean5 = require("../AboutDean/image/SENIOR-EXPERT-STAFF.png");

const recaptchaRef = React.createRef();

export default class Footer extends Component {
  openNav = () => {
    document.getElementById("myNav").style.height = "100%";
    document.body.style.overflow = "hidden";
  };
  closeNav = () => {
    document.getElementById("myNav").style.height = "0%";
    document.body.style.overflow = "visible";
  };

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "", 
      budget: "",
      message: "",
      nameErr: "",
      emailErr: "",
      phoneErr: "",
      budgetErr: "",
      messageErr: "",
      isVerified: false,
      recaptchaErr: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
  verifyCallback = response => {
    console.log(response);

    if (response) {
      this.setState({
        isVerified: true,
        recaptchaErr: ""
      });
    }
  };

  ReCAPTCHALoaded = () => {
    document.getElementById("reErr").innerHTML = "";
    this.setState({
      isVerified: true,
      recaptchaErr: ""
    });
  };

  onSubmit = () => {
    let validate = this.handleValidation();
    let { name, email, phone, message, budget } = this.state;
    let data = { name, email, phone, message, budget };
    data.referrer = localStorage.referrer ? localStorage.referrer : '';
    let that = this;
    if (!validate) {
      let reqObj = {
        method: "POST",
        url: Config.auth.baseurl + "FContact",
        headers: {
          "Content-Type": "application/json",
          Authorization: Config.auth.Authorization
        },
        data: data
      };
      axios(reqObj)
        .then(res => {
          that.setState({
            isVerified: false,
            recaptchaErr: ""
          });
          console.log(res);
          if (res.status === 200) {
            alert("Your Message has been Sent Successfully");
            this.setState({ name: "", email: "", phone: "", message: "", budget: "" });
            window.location.reload();
          }
        })

        .catch(err => {});
    }
  };

  handleValidation() {
    let isError = false;

    // Google Recaptch
    if (!this.state.isVerified) {
      this.setState({
        recaptchaErr: "Verify you are human."
      });
      isError = true;
    }

    if (this.state.name === "") {
      this.setState({
        nameErr: "Please enter your name"
      });
      isError = true;
    }

    if (this.state.email === "") {
      this.setState({
        emailErr: "Please enter Valid email address"
      });
      isError = true;
    }

    if (this.state.phone === "") {
      this.setState({
        phoneErr: "Please Enter Valid Phone Number"
      });
      isError = true;
    } else if (isNaN(this.state.phone)) {
      this.setState({ phoneErr: "Please enter only numbers" });
      isError = true;
    }

    if(this.state.budget === '') {
      this.setState({
        budgetErr:"Please Select Your Budget"
      });
      isError = true;
    }

    if (this.state.message === "") {
      this.setState({
        messageErr: "Please Enter Text Message"
      });
      isError = true;
    }
    return isError;
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name + "Err"]: "",
      recaptchaErr: ""
    });
  }

  componentDidMount() {
    if (this.props.abc === "true") {
      document.getElementById("footerHomeHide").style.display = "none";
    } else {
      document.getElementById("footerHomeHide").style.display = "block";
    }
    this.unmounted = false;
  }
  componentWillUnmount() {
    this.unmounted = true;
  }
  
  render() {
   
    return (
      <Fragment>
        <div id="footerHomeHide">
          <section className="call-action">
            <div className="container">
              <h3>
                <button
                  className="hvr-icon-wobble-horizontal hvr-wobble-horizontal"
                  onClick={this.openNav}
                >
                  {" "}
                  Request a Quote &nbsp;
                </button>
              </h3>
            </div>
          </section>
          <section className="stats-panel">
            <div className="stats">
              <div className="delight">
                <ul>
                  <li>
                    <span>
                      <img src={withdean1} alt="INDUSTRY-EXPERIENCE" />
                    </span>
                    <div className="content1">
                      <span>22+Years</span>
                      <p>OF INDUSTRY EXPERIENCE</p>
                    </div>
                  </li>
                  <li>
                    <span>
                      <img src={withdean2} alt="RETENTION-RATE" />
                    </span>
                    <div className="content1">
                      <span>64%</span>
                      <p>Repeat Client RATE</p>
                    </div>
                  </li>
                  <li>
                    <span>
                      <img src={withdean3} alt="DELIGHTED-CLIENTS" />
                    </span>
                    <div className="content1">
                      <span>450+</span>
                      <p>DELIGHTED CLIENTS</p>
                    </div>
                  </li>
                  <li>
                    <span>
                      <img src={withdean4} alt="EMPLOYEES" />
                    </span>
                    <div className="content1">
                      <span>150+</span>
                      <p>EMPLOYEES</p>
                    </div>
                  </li>
                  <li>
                    <span>
                      <img src={withdean5} alt="SENIOR-&amp;-EXPERT-STAFF" />
                    </span>
                    <div className="content1">
                      <span>75%</span>
                      <p>SENIOR &amp; EXPERT STAFF</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <footer>
          <div className="top-footer p-40">
            <div className="container">
              <div className="row">
                <div className="footer-info-first-block">
                  <div className="col-md-2 footer-logo">
                    <img
                      src={Footerten}
                      alt="footer ten Years"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-md-10 para wow animate fadeInRight">
                    <p>
                      With 22+ years of existence, Dean InfoTech has worked with
                      Fortune 500 companies and SMEs alike which has given us
                      vast exposure to the industry trends and to the proved
                      methodologies to solve complex business problems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="footer-info-second-block">
                  <div className="col-md-4 left wow animate fadeInLeft">
                    <h2>About Us</h2>
                    <p>
                      Dean Infotech Pvt. Ltd. is a leading enterprise solution
                      firm which gains its expertise through its collective
                      experience across various continents where we deal with
                      multinational and local enterprises. This enables our
                      highly skilled professional team to understand client’s
                      requirements and provide the best business solutions and
                      services on time.
                    </p>
                    <figure>
                      <img
                        src={Certified}
                        alt="certified-logo"
                        className="img-responsive"
                      />{" "}
                    </figure>
                  </div>
                  <div className="col-md-4 center wow animate fadeInUp">
                    <h2>CONTACT</h2>
                    <ul>
                      <li>
                        <a href="skype:deaninfotech?call">
                          <i className="fa fa-skype" /> deaninfotech{" "}
                        </a>{" "}
                      </li>
                      <li>
                        <NavLink to="#">
                          <i className="fa fa-phone" /> +1 407-634-4433,{" "}
                        </NavLink>
                        <NavLink to="#"> +91 981-047-0129 </NavLink>
                      </li>
                      <li>
                        <a href="mailto:sales@deaninfotech.com">
                          <i className="fa fa-envelope" />{" "}
                          sales@deaninfotech.com
                        </a>
                      </li>
                    </ul>
                    <div className="footer-info-second-bloc">
                      <h2>FOLLOW WITH US</h2>
                      <ul className="social">
                        <li>
                          <a href="https://www.facebook.com/DeanInfotech">
                            <i className="fa fa-facebook hvr-wobble-vertical" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/deaninfotech">
                            <i className="fa fa-twitter hvr-wobble-vertical" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/company/deaninfotech">
                            <i className="fa fa-linkedin hvr-wobble-vertical" />
                          </a>
                        </li>
                        {/* <li><a href="https://plus.google.com/+Deaninfotech_WebDevelopment"><i className="fa fa-google-plus hvr-wobble-vertical" /></a></li> */}
                        <li>
                          <a href="https://www.instagram.com/deaninfotech/">
                            <i className="fa fa-instagram hvr-wobble-vertical" />
                          </a>
                        </li>
                      </ul>
                      
                      <Trustpilot />                    
                    </div>
                  </div>
                  <div className="col-md-4 right wow animate fadeInRight">
                    <h2>GET IN TOUCH</h2>
                    <form name="contactform" className="contactform">
                      <fieldset>
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          onChange={this.handleChange}
                          value={this.state.name}
                        />

                        <span className="footererror">
                          {this.state.nameErr}
                        </span>

                        <input
                          type="text"
                          placeholder="Email"
                          name="email"
                          onChange={this.handleChange}
                          value={this.state.email}
                        />

                        <span className="footererror">
                          {this.state.emailErr}
                        </span>

                        <input
                          type="text"
                          placeholder="Phone No"
                          name="phone"
                          onChange={this.handleChange}
                          value={this.state.phone}
                        />

                        <span className="footererror">
                          {this.state.phoneErr}
                        </span>
                       
                              <select  name="budget" id="header_gq_budget_range" onChange={this.handleChange} value={this.state.budget}>
                                <option value="" defaultValue="">Select your budget range*</option>
                                <option value="< $100">&lt; $100</option>
                                <option value="$100 - $500">$100 - $500</option>
                                <option value="$500 - $1,000">$500 - $1,000</option>
                                <option value="$1,000 - $2,000">$1,000 - $2,000</option>
                                <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                <option value="> $10,000">&gt; $10,000</option>
                              </select>
                              <span className="footererror">{this.state.budgetErr}</span>
                           

                        <textarea
                          placeholder="Message"
                          name="message"
                          onChange={this.handleChange}
                          value={this.state.message}
                        ></textarea>

                        <span className="footererror">
                          {this.state.messageErr}
                        </span>

                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey="6LfxQnAUAAAAAE4UmivJIXxx3762N9ksKGY1iA9C"
                          render="explicit"
                          verifyCallback={this.verifyCallback}
                          onloadCallback={this.ReCAPTCHALoaded}
                          onChange={this.ReCAPTCHALoaded}
                        />
                        <span
                          style={{ color: "red", float: "left" }}
                          id="reErr"
                        >
                          {this.state.recaptchaErr}
                        </span>

                        <input
                          type="button"
                          id="submit"
                          value="submit"
                          onClick={this.onSubmit}
                          className="btn hvr-wobble-vertical"
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="container">
              <div className="col-md-5 left-part">
                <p>
                  &copy; ALL RIGHTS RESERVED BY DEANINFOTECH PVT LTD. TERMS OF
                  <br /> USE Various trademarks held by their respective owners.
                </p>
              </div>
             

              <div className="col-md-7 right-part">
                <figure>
                <a href="https://www.goodfirms.co/companies/view/841/dean-infotech-pvt-ltd">
                    <img
                      className="hvr-wobble-vertical"
                      src={require("../../images/footer-client-logo4.png")}
                      alt="footer-client-logo4"
                    />{" "}
                  </a>
               
                  <a href="https://clutch.co/profile/dean-infotech">
                    <img
                      className="hvr-wobble-vertical"
                      src={require("../../images/clutch_logo.png")}
                      alt="Expertise"
                    />{" "}
                  </a>
                  
                <a href="https://www.expertise.com/fl/orlando/mobile-app-development">
                    <img
                      className="hvr-wobble-vertical"
                      src={require("../../images/expertiselogo.png")}
                      alt="Expertise"
                    />{" "}
                  </a>
                  <a href="https://www.appfutura.com/app-developers/united-states">
                    <img
                      className="hvr-wobble-vertical"
                      src={require("../../images/appfutura_logo.png")}
                      alt="Expertise"
                    />{" "}
                  </a>
                  <img
                    className="hvr-wobble-vertical"
                    src={require("../../images/footer-client-logo1.png")}
                    alt="footer-client-logo1"
                  />
                 
                  <img
                    className="hvr-wobble-vertical"
                    src={require("../../images/footer-client-logo5.png")}
                    alt="footer-client-logo5"
                  />
                </figure>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}
