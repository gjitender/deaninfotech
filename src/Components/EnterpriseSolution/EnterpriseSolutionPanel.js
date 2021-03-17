import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from './Components/Banner';
import EnterpriseSolutionPanel from './Components/EnterpriseSolutionPanel';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';

export default class EnterpriseSolution extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
            <title>Enterprise Solution IT Services | Cloud, CRM & ERP Solutions</title>
            <meta id="meta-description" name="description" content="Dean Infotech Enterprise Solution provides full service Cloud, CRM and ERP Solutions Company. Get a FREE quote today!" />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="cloud application development Company, cloud app development services, enterprise app Development Company." />
            <meta id="og-title" property="og:title" content="Enterprise Solution IT Services | Cloud, CRM & ERP Solutions" />
          </Helmet>
        <Header />
        <Banner />
        <EnterpriseSolutionPanel />
        <Footer />
      </Fragment>
    );
  }
}
