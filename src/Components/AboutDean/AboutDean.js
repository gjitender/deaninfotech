import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WeBuild from './Components/WeBuild';
import WelcomeToDean from './Components/WelcomeToDean';
import OurSkills from './Components/OurSkills';
import WhoWeAreAbout from './Components/WhoWeAreAbout';
import LetThemKnow from './Components/LetThemKnow';
// import MetaTags from 'react-meta-tags';
import {Helmet} from "react-helmet";

export default class AboutDean extends Component {

render() {
     return (
      
      <Fragment>
         <Helmet>
           <title>Dean Infotech – Offering Cloud Enterprise Solution Services</title>
            <meta  name="keywords"  content="cloud application development Company, cloud app development services, enterprise app Development Company." />
            <meta name="title" content="About Dean Infotech – Offering Cloud Enterprise Solution Services" />
            <meta name="description" content="Dean Infotech is a leading Offering Cloud Enterprise Solution development company. We offer Cloud Based Solutions and create best applications with great functionality" />
          </Helmet>
        <Header />
        <WeBuild />
        <WelcomeToDean />
        <OurSkills />
        <WhoWeAreAbout />
        <LetThemKnow />
        <Footer />
      </Fragment>
    );
  }
}
