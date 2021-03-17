import React, { PureComponent, Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';




const banner = require('./images/aboutus-banner.jpg');



export default class SiteMap extends PureComponent {
  render() {
    return (
      
      <Fragment>
         <Header />
         <section className="internal-banner sitemap_banner">
          <img src={banner} alt="" className="img-responsive" />
          
        </section>
        <div className="sitemap">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
          <h1>Home</h1>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
      <div className="col-md-4">
          <h1>WHY DEAN</h1>
        <ul>
        <li><a href="/about">About Dean</a></li>
          <li><a href="/our-team">Our Team</a></li>
           <li><a href="/testimonial">Testimonials</a></li>
            <li><a href="/quality-assurance">Quality Assurance Process</a></li>
        </ul>
      </div>
      <div className="col-md-4">
          <h1>ENTERPRISE SOLUTION</h1>
        <ul>
          <li><a href="/enterprise-software-development">ENTERPRISE SOLUTION</a></li>
        </ul>
      </div>
      <div className="clearfix"></div>

       <div className="col-md-4">
          <h1>SERVICES</h1>

        <ul>
          <li><a href="/javascript-development-company">JAVASCRIPT</a></li>
          <li><a href="/php-development-company">PHP</a></li>
          <li><a href="/laravel-development-company">Laravel</a></li>
          <li><a href="/codeigniter-development-company">CodeIgniter</a></li>
          <li><a href="/wordpress-development-Company">Wordpress</a></li>
          <li><a href="/.net-development-company">.NET</a></li>
          <li><a href="/asp.net-development-company">ASP.NET</a></li>
          <li><a href="/asp.net-mvc-development-company">ASP.NET MVC</a></li>
          <li><a href="/umbraco-development-company">UMBRACO</a></li>
          <li><a href="/nopcommerce-development-company">Nopcommerce</a></li>
          <li><a href="/dotnetnuke-development-company">DotNetNuke</a></li>
          <li><a href="/mobile-application-development">MOBILE</a></li>
          <li><a href="/android-app-development-company">Android</a></li>
          <li><a href="/ios-app-development-company">ios</a></li>
          <li><a href="/hybrid-app-development-company">Hybrid</a></li>
        </ul>
      </div>

       

      <div className="col-md-4">
          <h1>CAREER</h1>
        <ul>
          <li><a href="/career">CAREER</a></li>
          <li><a href="/mail-your-synopsis">Mail your synopsis</a></li>
          <li><a href="/web-designer-profile">Senior Web Designer</a></li>
          <li><a href="/business-development-profile">Business Development Profile</a></li>
          <li><a href="/online-bidder">Online Bidder</a></li>
          <li><a href="/.net-developer-profile">.net Developer Profile</a></li>
          <li><a href="/content-writer-profile">Content Writer Profile</a></li>
        </ul>
      </div>
      <div className="col-md-4">
          <h1>PORTFOLIO</h1>
        <ul>
          <li><a href="/portfolio">PORTFOLIO</a></li>
        </ul>
      </div>
      <div className="col-md-4">
          <h1>BLOG</h1>
        <ul>
          <li><a href="/blog">BLOG</a></li>
        </ul>
      </div>
      <div className="col-md-4">
          <h1>salesforce</h1>
        <ul>
          <li><a href="/salesforce-development-services">salesforce</a></li>
        </ul>
      </div>
      <div className="col-md-4">
          <h1>Contact</h1>
        <ul>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>


      
</div>
  </div>
</div>
        <div className="clearfix" />
        <Footer />
      </Fragment>
    );
  }
}
