import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from './Components/Banner';
import JavascriptPanel from './Components/JavascriptPanel';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';

export default class Javascript extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
            <title>JavaScript Development Company | JS Development Services</title>
            <meta id="meta-description" name="description" content="Dean infotech is top rated JavaScript Development Company With over 22+ years of industry experience providing custom JavaScript development services worldwide." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="cloud application development Company, cloud app development services, enterprise app Development Company." />
            <meta id="og-title" property="og:title" content="JavaScript Development Company | JS Development Services" />
          </Helmet>
        <Header />
        <Banner />
        <JavascriptPanel />
        <Footer />
      </Fragment>
    );
  }
}
