import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import DotnetNukeDiv from './Components/DotnetNukeDiv';
import DeanCustomize from './Components/DeanCustomize';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';

export default class DotNetNuke extends PureComponent {
  render() {
    return (
      <Fragment>
         <Helmet>
            <title>DotNetNuke Development Company - Hire DNN Development Company</title>
            <meta id="meta-description" name="description" content="Searching for DotNetNuke Development Company? Hidden Brains at Dean Infotech offers professional DNN development and integration services with 100% optimum quality worldwide." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="DNN Development Company, Hire DNN Services, DNN Services" />
            <meta id="og-title" property="og:title" content="DotNetNuke Development Company - Hire DNN Development Company" />
          </Helmet>
        <Header />
        <Banner />
        <DotnetNukeDiv />
        <DeanCustomize />
        <Footer />
      </Fragment>
    );
  }
}
