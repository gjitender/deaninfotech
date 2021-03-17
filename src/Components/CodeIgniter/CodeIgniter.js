import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import CodeigniterDiv from './Components/CodeigniterDiv';
import DeanCustomize from './Components/DeanCustomize';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';

export default class CodeIgniter extends PureComponent {
  render() {
    return (
      <Fragment>
         <Helmet>
            <title>Codeigniter Development Services | Hire CI Development Company</title>
            <meta id="meta-description" name="description" content="Dean Infotech is a Codeigniter Development Company. We provide befitting & cost-effective Codeigniter development services worldwide." />
            <meta id="og-keywords" name="keywords" property="og:keywords" content="Codeigniter Development, Codeigniter Development Company, Hire Codeigniter Development" />
            <meta id="og-title" property="og:title" content="Codeigniter Development Services | Hire CI Development Company" />
          </Helmet>
        <Header />
        <Banner />
        <CodeigniterDiv />
        <DeanCustomize />
        <Footer />
      </Fragment>
    );
  }
}
