import React, { PureComponent, Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Search from './components/search';
// import MetaTags from 'react-meta-tags';

const banner = require('../sitemap/images/aboutus-banner.jpg');

export default class Blog extends PureComponent {
  render() {
    return (
      <Fragment>
        {/* <MetaTags>
            <title>Best Hire Laravel Application Developer | Laravel Development Company</title>
            <meta id="meta-description" name="description" content="Dean Infotech is one of the leading Laravel Web Development Company. Our dedicated teams are capable in executing high quality of Laravel application development projects at Very Affordable Rate." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="laravel Development Company in india, best laravel Development Company, laravel application Development Company" />
            <meta id="og-title" property="og:title" content="Best Hire Laravel Application Developer | Laravel Development Company" />
          </MetaTags> */}
        <Header />
        <section className="internal-banner sitemap_banner blog_banner">
          <img src={banner} alt="" className="img-responsive" />
          
        </section>
        <Search />
        <Footer />
      </Fragment>
    );
  }
}
