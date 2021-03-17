import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import WordPressDiv from './Components/WordPressDiv';
import DeanCustomize from './Components/DeanCustomize';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';
export default class wordpress extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
            <title>Wordpress Development Company India - Custom WordPress Services</title>
            <meta id="meta-description" name="description" content="Dean Infotech is a Wordpress Web Development Company in India with 50+ expert developers offering Custom Wordpress development Services worldwide." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="WordPress Development Company, Hire WordPress Developer , WordPress Development" />
            <meta id="og-title" property="og:title" content="Wordpress Development Company India - Custom WordPress Services" />
          </Helmet>
        <Header />
        <Banner />
        <WordPressDiv />
        <DeanCustomize />
        <Footer />
      </Fragment>
    );
  }
}
