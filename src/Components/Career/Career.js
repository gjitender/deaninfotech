import React, { PureComponent, Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import CareerInDean from './Components/CareerInDean';
import Jobs from './Components/Jobs';
import WhyChoose from './Components/WhyChoose';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';

export default class Career extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
            <title>Career Opportunity with Dean Infotech</title>
            <meta id="meta-description" name="description" content="If you are looking for new challenges and a stimulating environment to further your professional career, we encourage you to apply." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="cloud application development Company, cloud app development services, enterprise app Development Company." />
            <meta id="og-title" property="og:title" content="Career Opportunity with Dean Infotech" />
          </Helmet>
        <Header />
        <Banner />
        <CareerInDean />
        <Jobs />
        <WhyChoose />
        <Footer />
      </Fragment>
    );
  }
}
