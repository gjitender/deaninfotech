import React, {PureComponent, Fragment } from 'react';
import { NavLink } from 'react-router-dom';



export default class Services extends PureComponent {
  render() {
    return (
      <div>
          <Fragment>
        {/* <!-- services start--> */}

        <section className="dean-services p-40">
          <div className="container">
            <h2>Services</h2>
            <div className="col-md-12 col-sm-6 col-xs-12 services-info">
              <img src={require("../../../images/cloud-with-dean.webp")} alt="cloud" />
              <ul>
                <li className="four wow animate bounceInUp" data-wow-delay="0.2s">
                  <span><mark>2</mark>Ecommerce Development</span>
                  <ul>
                    <li><NavLink to="/laravel-development-company">Laravel</NavLink></li>
                    <li><NavLink to="/wordpress-development-Company">Wordpress</NavLink></li>
                    <li><NavLink to="/nopcommerce-development-company">Nopcommerce</NavLink></li>
                  </ul>
                </li>
                <li className="four wow animate bounceInUp" data-wow-delay="0.4s">
                  <span><mark>5</mark>Enterprise Software Development</span>
                  <ul>
                    <li><NavLink to="/enterprise-software-development">Custom Software</NavLink></li>
                    <li><NavLink to="/enterprise-software-development">Consulting</NavLink></li>
                    <li><NavLink to="/enterprise-software-development">CRM/ERP</NavLink></li>
                  </ul>
                </li>
                <li className="four wow animate bounceInUp" data-wow-delay="0.6s">
                  <span><mark>3</mark>Javascript Services</span>
                  <ul>
                    <li><NavLink to="/javascript-development-company">React</NavLink></li>
                    <li><NavLink to="/javascript-development-company">React Native</NavLink></li>
                    <li><NavLink to="/javascript-development-company">Node</NavLink></li>
                  </ul>
                </li>
                <li className="four wow animate bounceInUp" data-wow-delay="0.8s">
                  <span><mark>4</mark>Salesforce Cloud Services</span>
                  <ul>
                    <li><NavLink to="/salesforce-development-services">Implementation</NavLink></li>
                    <li><NavLink to="/salesforce-development-services">Customization</NavLink></li>
                    <li><NavLink to="/salesforce-development-services">lighting Migration</NavLink></li>
                  </ul>
                </li>
                <li className="four  wow animate bounceInUp" data-wow-delay="1s">
                  <span><mark>1</mark>Mobile Application Development</span>
                  <ul>
                    <li><NavLink to="/android-app-development-company">Android</NavLink></li>
                    <li><NavLink to="/ios-app-development-company">IOS</NavLink></li>
                    <li><NavLink to="/hybrid-app-development-company">Hybrid</NavLink></li>
                  </ul>
                </li>
                <li className="four wow animate bounceInUp" data-wow-delay="1.2s">
                  <span><mark>6</mark>Web development Services</span>
                  <ul>
                    <li><NavLink to="/asp.net-mvc-development-company">Asp.net MVC</NavLink></li>
                    <li><NavLink to="/codeigniter-development-company">Codeigniter</NavLink></li>
                    <li><NavLink to="/umbraco-development-company">Umbraco</NavLink></li>
                  </ul>
                </li>
              </ul>

            </div>
          </div>
        </section>

        <section className="services-mobile p-80">

<div className="container">

    <h2 className="uppercase">Services</h2>

    <div className="col-md-12 col-sm-12 col-xs-12 left">

        <div className="first one">

            <span>1</span>

            <div className="col-for">

                <h2>MOBILE APPLICATION DEVELOPMENT</h2>

                <ul>

                    <li>ANDROID</li>

                    <li>IOS</li>

                    <li>HYBRID</li>

                </ul>

            </div>

        </div>

        <div className="first two">

            <span>2</span>

            <div className="col-for">

                <h2>ECOMMERCE DEVELOPMENT</h2>

                <ul>

                    <li>LARAVEL</li>

                    <li>WORDPRESS</li>

                    <li>NOPCOMMERCE</li>

                </ul>

            </div>

        </div>

        <div className="first three">

            <span>3</span>

            <div className="col-for">

                <h2>Javascript Services</h2>

                <ul>

                    <li>REACT</li>

                    <li>REACT NATIVE</li>

                    <li>NODE</li>

                </ul>

            </div>

        </div>

        <div className="first four">

            <span>4</span>

            <div className="col-for">

                <h2>SALESFORCE CLOUD SERVICES</h2>

                <ul>

                    <li>REACT</li>

                    <li>REACT NATIVE</li>

                    <li>NODE</li>

                </ul>

            </div>

        </div>

        <div className="first five">

            <span>5</span>

            <div className="col-for">

                <h2>ENTERPRISE SOFTWARE DEVELOPMENT</h2>

                <ul>

                    <li>CUSTOM SOFTWARE</li>

                    <li>CONSULTING</li>

                    <li>CRM/ERP</li>

                </ul>

            </div>

        </div>

        <div className="first six">

            <span>6</span>

            <div className="col-for">

                <h2>WEB DEVELOPMENT SERVICES</h2>

                <ul>

                    <li>ASP.NET MVC</li>

                    <li>CODEIGNITER</li>

                    <li>UMBRACO</li>

                </ul>

            </div>

        </div>

    </div>

</div>

</section>
<section className="how-do-mobile">

						<h1 className="how-we-do">How We Do</h1>

						<div className="col-md-12 col-sm-12 col-xs-12 col-for">

								<div className="left">

										<figure><img src={require('../../../images/understand-client.png')} alt="understand-client" /></figure>

								</div>

								<div className="right">

										<h2>UNDERSTAND OUR CLIENTS</h2>

										<ul>

												<li>Call or Meeting</li>

												<li>NDA (Non-Disclosure)</li>

										</ul>

								</div>

						</div>

						<div className="col-md-12 col-sm-12 col-xs-12 col-for two">

								<div className="left">

										<figure><img src={require('../../../images/partnership.png')} alt="partnership" /></figure>

								</div>

								<div className="right">

										<h2>STRATEGIC PARTNERSHIP</h2>

										<ul>

												<li>T&amp;C Communicated</li>

												<li>Project Agreement</li>

										</ul>

								</div>

						</div>

						<div className="col-md-12 col-sm-12 col-xs-12 col-for three">

								<div className="left">

										<figure><img src={require('../../../images/estimates.png')} alt="estimates" /></figure>

								</div>

								<div className="right">

										<h2>PROJECT ESTIMATES</h2>

										<ul>

												<li>Gather Requirements</li>

												<li>Perfect Proposal</li>

										</ul>

								</div>

						</div>

						<div className="col-md-12 col-sm-12 col-xs-12 col-for four">

								<div className="left">

										<figure><img src={require('../../../images/working-together.png')} alt="working-together" /></figure>

								</div>

								<div className="right">

										<h2>WORKING TOGETHER</h2>

										<ul>

												<li>Project Delivery</li>

												<li>Client Satisfaction</li>

										</ul>

								</div>

						</div>

				</section>


        {/* <!-- services end--> */}
        <div className="clearfix" />
      </Fragment>
      </div>
    )
  }
}


