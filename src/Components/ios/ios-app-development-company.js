import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import IosDiv from './Components/IosDiv';
import DeanExpertise from './Components/DeanExpertise';
import DeanCustomize from './Components/DeanCustomize';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';

export default class ios extends PureComponent {
  render() {
    return (
      <Fragment>
           <Helmet>
            <title>Top Ios App Development Company | Ios App Development Services India</title>
            <meta id="meta-description" name="description" content="Dean Infotech is an outstanding IOS App Development Company. Get in touch with us for custom IOS app development services and hire experienced developers for engaging business iPhone app." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="best ios app development company, custom ios app development, Mobile iPhone app, iOS App Development Company" />
            <meta id="og-title" property="og:title" content="Top Ios App Development Company | Ios App Development Services India" />
          </Helmet>
        <Header />
        <Banner />
        <IosDiv />
        <DeanExpertise />
        <DeanCustomize />
        <Footer />
      </Fragment>
    );
  }
}
