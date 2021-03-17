import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import HybridDiv from './Components/HybridDiv';
import DeanExpertise from './Components/DeanExpertise';
import DeanCustomize from './Components/DeanCustomize';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';

export default class Hybrid extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
            <title>Hybrid App Development Company in India| Hire Hybrid App Developer</title>
            <meta id="meta-description" name="description" content="Hire outstanding Hybrid App Developers, Dean Infotech has many talented IOS mobile developers for building apps for businesses and entrepreneurs at Very befitting & cost-effective." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="Hybrid App Development Company, hire hybrid app developer services, hybrid mobile app development" />
            <meta id="og-title" property="og:title" content="Hybrid App Development Company in India| Hire Hybrid App Developer" />
          </Helmet>
        <Header />
        <Banner />
        <HybridDiv />
        <DeanExpertise />
        <DeanCustomize />
        <Footer />
      </Fragment>
    );
  }
}
