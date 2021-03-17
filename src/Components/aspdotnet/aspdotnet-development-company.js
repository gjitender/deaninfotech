import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import AspDiv from './Components/AspDiv';
import DeanCustomize from './Components/DeanCustomize';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';

export default class aspdotnet extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
            <title>ASP.NET Development Company | Hire ASP Dot Net Services India</title>
            <meta id="meta-description" name="description" content="Dean Infotech is a 5-star award-winning ASP.NET Development Company. Contact us today and Hire our top-rated ASP.Net Application developer for your website." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="asp.net development services, asp.net mvc Development Company" />
            <meta id="og-title" property="og:title" content="ASP.NET Development Company | Hire ASP Dot Net Services India" />
          </Helmet>
        <Header />
        <Banner />
        <AspDiv />
        <DeanCustomize />
        <Footer />
      </Fragment>
    );
  }
}
