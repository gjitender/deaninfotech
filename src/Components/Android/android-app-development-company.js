import React, { Component, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import AndroidDiv from './Components/AndroidDiv';
import DeanExpertise from './Components/DeanExpertise';
import DeanCustomize from './Components/DeanCustomize';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';
 

export default class Android extends Component {
  render() {
    return (
      <Fragment>
         <Helmet>
            <title>Best Android App Development Company | Android Application Development</title>
            <meta id="meta-description" name="description" content="One of the best android application development companies in India having expert app developers team, delivers with the high quality android applications & 100% Guaranteed satisfaction." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="top android app development company, android application development services india" />
            <meta id="og-title" property="og:title" content="Best Android App Development Company | Android Application Development" />
          </Helmet>
        <Header />
        <Banner />
        <AndroidDiv />
        <DeanExpertise />
        <DeanCustomize />
        <Footer />
      </Fragment>
    );
  }
}
