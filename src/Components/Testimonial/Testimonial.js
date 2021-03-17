import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from './Components/Banner';
import WhatPeople from './Components/WhatPeople';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';
 

export default class Testimonial extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
            <title>Dean Infotech – Client Testimonials</title>
            <meta id="meta-description" name="description" content="Here is Dean infotech Client Testimonial Videos. Clients love what we do and Success Stories with Reviews for Dean Infotech." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="cloud application development Company, cloud app development services, enterprise app Development Company." />
            <meta id="og-title" property="og:title" content="Dean Infotech – Client Testimonials" />
          </Helmet>
        <Header />
        <Banner />
        <WhatPeople />
        <Footer />
      </Fragment>
    );
  }
}
