import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import DotnetDiv from './Components/DotnetDiv';
import DeanCustomize from './Components/DeanCustomize';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';
export default class DotNet extends PureComponent {
  render() {
    return (
      <Fragment>
         <Helmet>
            <title>.NET Development Company | Hire .NET Development Services</title>
            <meta id="meta-description" name="description" content=".Net development company offering .Net development, Customization and Services in India. Get perfect .Net development solutions for .Net project." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content=".Net Development Company, Hire .net developer, Dot net development company," />
            <meta id="og-title" property="og:title" content=".NET Application Development Services | Hire .NET Development Company" />
          </Helmet>
        <Header />
        <Banner />
        <DotnetDiv />
        <DeanCustomize />
        <Footer />
      </Fragment>
    );
  }
}
