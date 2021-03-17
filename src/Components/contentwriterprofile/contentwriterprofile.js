import React, { PureComponent, Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import Profile from './Components/Profile';
import Application from './Components/Application';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';

export default class contentwriterprofile extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
            <title>Website Design Development Company in India Delhi NCR - Dean Infotech</title>
            <meta id="meta-description" name="description" content="Dean Infotech – World’s leading Cloud Enterprise Development Company offers a wide range of cloud computing consulting services for developing and managing applications and infrastructures." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="cloud application development Company, cloud app development services, enterprise app Development Company." />
            <meta id="og-title" property="og:title" content="Website Design Development Company in India Delhi NCR - Dean Infotech" />
          </Helmet>
        <Header />
        <Banner />
        <Profile />
        <Application />
        <Footer />
      </Fragment>
    );
  }
}
