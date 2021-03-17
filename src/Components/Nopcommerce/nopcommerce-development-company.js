import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import NopcommerceDiv from './Components/NopcommerceDiv';
import DeanCustomize from './Components/DeanCustomize';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet'; 
export default class Nopcommerce extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
            <title>NopCommerce Development company - NopCommerce Development</title>
            <meta id="meta-description" name="description" content="Dean Infotech is a professional nopCommerce Development Company offering nopCommerce shopping cart plugin development, Template customization & designing services by utilizing our expert nopCommerce ecommerce web design & development team." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="NopCommerce Development Company, NopCommerce Development" />
            <meta id="og-title" property="og:title" content="NopCommerce Development company - NopCommerce Development" />
          </Helmet>
        <Header />
        <Banner />
        <NopcommerceDiv />
        <DeanCustomize />
        <Footer />
      </Fragment>
    );
  }
}
