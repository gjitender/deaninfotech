import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ImageWebp from '../src/ImageWebp'

const PageNotFound = require('./images/404-Page.gif');
const Banner = require('./Components/sitemap/images/aboutus-banner.jpg');

export default class NotFound extends Component {
  render() {  
    return (
      <Fragment>
        <Header />
        <section className="internal-banner sitemap_banner">
        <ImageWebp
                  srcWebp={Banner}
                  src={Banner}
                  />
          {/* <img src={Banner} alt="" className="img-responsive" /> */}
        </section>
        <NavLink to="/" className="notfount_img">
          {/* <img src={PageNotFound} alt="NotFound" /> */}
          <ImageWebp
                  srcWebp={PageNotFound}
                  src={PageNotFound}
                  />
          </NavLink>
        <Footer />
        </Fragment>
    );
  }
}
