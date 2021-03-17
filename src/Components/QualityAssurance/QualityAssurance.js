import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from './Components/Banner';

import QualityCommitment from './Components/QualityCommitment';
import WhoWeAre from './Components/WhoWeAre';
import GridView from './Components/GridView';
import SuccessStory from './Components/SuccessStory';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';
export default class QualityAssurance extends PureComponent {
  render() {
    return (
      <Fragment>
           <Helmet>
            <title>Quality Commitment - Dean Infotech</title>
            <meta id="meta-description" name="description" content="We are committed to deliver the best quality work and constantly work on improving it. We use the best industry standards and guidelines in project management and software development." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="cloud application development Company, cloud app development services, enterprise app Development Company." />
            <meta id="og-title" property="og:title" content="Quality Commitment - Dean Infotech" />
          </Helmet>
        <Header />
        <Banner />
        <QualityCommitment />
        <WhoWeAre />
        <GridView />
        <SuccessStory />
        <Footer />
      </Fragment>
    );
  }
}
