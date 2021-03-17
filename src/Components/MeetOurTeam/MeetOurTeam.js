import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from './Components/Banner';
import OurTeam from './Components/OurTeam';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';

export default class MeetOurTeam extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
            <title>Our Team - Enthusiastic, Professional & Qualified</title>
            <meta id="meta-description" name="description" content="Meet Our Team - socialize with the Director and other team members of Dean Infotech here!" />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="cloud application development Company, cloud app development services, enterprise app Development Company." />
            <meta id="og-title" property="og:title" content="Our Team - Enthusiastic, Professional & Qualified" />
          </Helmet>
        <Header />
        <Banner />
        <OurTeam />
        <Footer />
      </Fragment>
    );
  }
}
