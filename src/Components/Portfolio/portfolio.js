import React, { PureComponent, Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from './Components/Banner';
import PortfolioStartnew from './Components/PortfolioStartnew';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';
export default class Portfolio extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
            <title>Mobile App & Salesforce Portfolio by Dean Infotech</title>
            <meta id="meta-description" name="description" content="Check out Dean Infotech Mobile App & Salesforce Portfolio. That would be helpful in decision making." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="Mobile App & Salesforce Portfolio by Dean Infotech." />
            <meta id="og-title" property="og:title" content="Mobile App & Salesforce Portfolio by Dean Infotech." />
          </Helmet>
        <Header />
        <Banner />
        <PortfolioStartnew />
       
        <Footer />
      </Fragment>
    );
  }
}
