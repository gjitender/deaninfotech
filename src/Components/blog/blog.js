import React, { Component, Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BlogDiv from "./Components/BlogDiv";
import ImageWebp from "../../ImageWebp";
import { Helmet } from "react-helmet";

const banner = require("../sitemap/images/aboutus-banner.jpg");

export default class Blog extends Component {
  render() {
    return (
      <Fragment>
        <Helmet
          script={[  
            {
              "data-ad-client": "ca-pub-6255094202012499",
              src:
                "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
              async: true,
            },
          ]}
        />
        <Header />
        <section className="internal-banner sitemap_banner blog_banner">
          <ImageWebp srcWebp={banner} src={banner} className="img-responsive" />
          {/* <img src={banner} alt="" className="img-responsive" /> */}
        </section>
        <BlogDiv />
        <Footer />
      </Fragment>
    );
  }
}
