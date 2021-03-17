import React, { Component, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import Contact from './Components/Contact';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';

export default class contact extends Component {
  render() {
    return (
      <Fragment>
         <Helmet>
            <title>Contact Dean for Web and Software App Development</title>
            <meta id="meta-description" name="description" content="Contact Dean Infotech to know more about our Project timeline, Packages, Web Development Packages, Salesfoce Packages, Dot Net Packages, Laravel Packages etc." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="cloud application development Company, cloud app development services, enterprise app Development Company." />
            <meta id="og-title" property="og:title" content="Contact Dean for Web and Software App Development" />
          </Helmet>
        <Header />
        <Banner />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}
