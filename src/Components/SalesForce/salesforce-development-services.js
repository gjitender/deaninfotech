import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import WhyNeedSalesForce from './Components/WhyNeedSalesForce';
import Services from './Components/Services';
import CaseStudy from './Components/CaseStudy';
import Salesforcegallery from './Components/salesforcegallery';
import ImageGallery from './Components/imagegallery';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';
export default class Php extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
            <title>Salesforce Development Services, Salesforce Development Company</title>
            <meta id="meta-description" name="description" content="DeanInfotech is a certified Salesforce Development Company offering a wide range of Salesforce cloud consulting, integration and development services. " />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="Saleforce, Hire Salesforce Developer, Salesforce Company" />
            <meta id="og-title" property="og:title" content="Salesforce Development Services, Salesforce Development Company" />
          </Helmet>
        <Header />
        <Banner />
        <WhyNeedSalesForce />
        <Services />
        <CaseStudy />
        <Salesforcegallery />
        <ImageGallery />
        <Footer />
      </Fragment>
    );
  }
}
