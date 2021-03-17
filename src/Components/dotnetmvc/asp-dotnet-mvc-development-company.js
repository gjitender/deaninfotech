import React, { PureComponent, Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Banner from './Components/Banner';
import DotnetmvcDiv from './Components/DotnetmvcDiv';
import DeanCustomize from './Components/DeanCustomize';
// import MetaTags from 'react-meta-tags';
import {Helmet} from 'react-helmet';

export default class dotnetmvc extends PureComponent {
  
render() {

return (
      <Fragment>
        <Helmet> 
            <title>ASP.NET MVC | Hire ASP.NET MVC Developer ¦ ASP.NET MVC Services</title>
            <meta id="og-keywords" name="keywords" property="og:keywords" content="cloud application development Company, cloud app development services, enterprise app Development Company." />
            <link rel="canonical" href="https://www.deaninfotech.com/asp.net-mvc-development-company" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta id="og-title" property="og:title" content="ASP.NET MVC | Hire ASP.NET MVC Developer ¦ ASP.NET MVC Services" />
            <meta meta id="meta-description" name="description" content="Want to Hire ASP.NET MVC Development Company? Dean Infotech provides you ASP.NET MVC Services worldwide. Hire genuine 10+ ASP.NET MVC developers with 100% Guaranteed satisfaction." />
            <meta property="og:url" content="https://www.deaninfotech.com/asp.net-mvc-development-company" />
            <meta property="og:image" content="https://www.deaninfotech.com/static/media/expertise-img.2cd50122.png" />
            <meta property="og:site_name" content="Dean Infotech Pvt Ltd" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content="Want to Hire ASP.NET MVC Development Company? Dean Infotech provides you ASP.NET MVC Services worldwide. Hire genuine 10+ ASP.NET MVC developers with 100% Guaranteed satisfaction." />
            <meta name="twitter:title" content="ASP.NET MVC | Hire ASP.NET MVC Developer ¦ ASP.NET MVC Services" />
         
          </Helmet>
        <Header />
        <Banner />
        <DotnetmvcDiv />
        <DeanCustomize />
        <Footer />
      </Fragment>
    );
  }
}
