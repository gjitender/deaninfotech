import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from './Components/Banner';
import PhpDiv from './Components/PhpDiv';
import DeanCustomize from './Components/DeanCustomize';
import {Helmet} from 'react-helmet';

export default class Php extends PureComponent {
  render() {
    
    return (
      <Fragment>
        <Helmet>
            <title>Hire PHP Development Company,Custom PHP Website Development Company</title>
            <meta id="meta-description" name="description" content="DeanInfotech is an authentic PHP Development Company offering top PHP Website design & Development  Services. We offer optimum quality services with 24/7 support." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="PHP Development Company, Hire Php Development Company, PHP Development Services" />
            <meta id="og-title" property="og:title" content="Hire PHP Development Company,Custom PHP Website Development Company" />
          </Helmet>
        <Header />
        <Banner />
        <PhpDiv />
        <DeanCustomize />
        <Footer />
      </Fragment>
    );
  }
}
