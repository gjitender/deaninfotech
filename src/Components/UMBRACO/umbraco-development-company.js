import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import UmbracoDiv from './Components/UmbracoDiv';
import DeanCustomize from './Components/DeanCustomize';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet'; 

export default class UMBRACO extends PureComponent {
  render() {
    return (
      <Fragment>
         <Helmet>
            <title>Hire Umbraco Development Company – Umbraco Development Services</title>
            <meta id="meta-description" name="description"
             content="Dean Infotech is a reliable Umbraco Development Company. Hire remarkably experienced Umbraco Developers. Explore more Umbraco services here." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="Hire Umbraco, Umbraco Development, Umbraco Services" />
            <meta id="og-title" property="og:title" content="Hire Umbraco Development Company – Umbraco Development Services" />
          </Helmet>
        <Header />
        <Banner />
        <UmbracoDiv />
        <DeanCustomize />
        <Footer />
      </Fragment>
    );
  }
}
