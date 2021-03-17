import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Head from './Components/Head';
import About from './Components/About';
import Services from './Components/Services';
import WhoAreWe from './Components/WhoWeAre';
import AboutDean from './Components/AboutDean';
import OurPortfolio from './Components/OurPortfolio';
import Footer from '../Footer/Footer';
// import MetaTags from 'react-meta-tags';
import {Helmet} from "react-helmet";


export default class Home extends PureComponent {
  render() {
     
   return (
      <Fragment>
         
        <Helmet>
            
             <title>Web App Design, Website Development & Cloud Services</title>
             <meta id="og-keywords" name="keywords" property="og:keywords" content="cloud application development Company, cloud app development services, enterprise app Development Company." />
            <link rel="canonical" href="https://www.deaninfotech.com/" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta id="og-title" property="og:title" content="Custom Cloud App Development and Migration Services India" />
            <meta meta id="meta-description" name="description" content="Dean Infotech – World’s leading web design, mobile app development and cloud solution company. Offer a wide range of website development services all over the globe. Hire us today." />
            <meta property="og:url" content="https://www.deaninfotech.com/" />
            <meta property="og:image" content="https://www.deaninfotech.com/images/Dean-infotech-effect-on.jpg" />
            <meta property="og:site_name" content="Dean Infotech Pvt Ltd" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content="Top Custom Cloud App Development Agency in Delhi NCR – Dean Infotech. Get set grow in web development services. Hire the best company to market your products." />
            <meta name="twitter:title" content="Custom Cloud App Development and Migration Services India" />
         
        </Helmet>
        <Header />
        <Head />
        <About />
        <Services />
        <WhoAreWe />
        <AboutDean />
        <OurPortfolio />
        <Footer abc='true' />
 
      </Fragment>
    );
  }
}
