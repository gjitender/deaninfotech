import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import LaravelDiv from './Components/LaravelDiv';
import DeanCustomize from './Components/DeanCustomize';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';
export default class Laravel extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
            <title>Hire Laravel Development Company | Laravel - Web Development Services</title>
            <meta id="meta-description" name="description" content="Dean Infotech is a laravel development company in India. Offering larval web development services across to World. Explore more Laravel services here." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="laravel Development Company in india, best laravel Development Company, laravel application Development Company" />
            <meta id="og-title" property="og:title" content="Hire Laravel Development Company | Laravel - Web Development Services" />
          </Helmet>
        <Header />
        <Banner />
        <LaravelDiv />
        <DeanCustomize />
        <Footer />
      </Fragment>
    );
  }
}
