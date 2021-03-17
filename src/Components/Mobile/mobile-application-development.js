import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import MobileDiv from './Components/MobileDiv';
import DeanExpertise from './Components/DeanExpertise';
import DeanCustomize from './Components/DeanCustomize';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';

export default class Mobile extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
            <title>Mobile App Development Company – App Development Services</title>
            <meta id="meta-description" name="description" content="Searching for top rated mobile app development company in India? Dean Infotech offering all type mobile app development  services across the globe." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="Mobile app development,  Hire app development Company, App Development" />
            <meta id="og-title" property="og:title" content="Mobile App Development Company – App Development Services" />
          </Helmet>
        <Header />
        <Banner />
        <MobileDiv />
        <DeanExpertise />
        <DeanCustomize />
        <Footer />
      </Fragment>
    );
  }
}
