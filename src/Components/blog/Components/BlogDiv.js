import React, { Component, Fragment } from "react";
import axios from "axios";
import baseApi from "../../api";
import PopularPost from "./PopularPost";
import LoaderPage from "../../../loader";
import ImageWebp from "../../../ImageWebp";
import AdSense from 'react-adsense';
// import SearchInput, {createFilter} from 'react-search-input';
import { Link } from "react-router-dom";
// import MetaTags from 'react-meta-tags';
import { Helmet } from "react-helmet";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";
import Pagination from "react-js-pagination";
const logo = require("../images/logo.png");
const swirly = require("../images/swirly.png");
var dateFormat = require("dateformat");

export default class BlogDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      b_blog: [],
      title: "Blog",
      blogPerPage: 3,
      activePage: 1,
      searchTerm: "",
      searchTermErr: ""
    };
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }
  onChangeSearch(e) {
    this.setState({ searchTerm: e.target.value });
  }

  
 
  componentDidMount() {
  
    axios
      .get(baseApi + "b_blog/fetchblog")
      .then(res => {
        this.setState({ b_blog: res.data.reverse() });
      })
      .catch(function(error) {
        console.log(error);
      });
    this.unmounted = false;
  }
  componentWillUnmount() {
    this.unmounted = true;
  }
  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  };

  render() {
    const { activePage, blogPerPage } = this.state;
    // Logic for displaying current todos
    const indexOfLastBlog = activePage * blogPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogPerPage;
    //currentBlogs
    // const filteredItem = this.state.b_blog.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    const currentBlogs = this.state.b_blog.slice(
      indexOfFirstBlog,
      indexOfLastBlog
    );
    const renderBlog = currentBlogs.map((blog1, index) => {
      let image = baseApi + "data/" + blog1.image;
      let url = window.location.href + "/" + blog1._id;
      return (
        <div key={index.id}>
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
          <div className="card" key={blog1.name + index}>
            <h2>
              <Link to={"/blog/" + blog1.slug}>{blog1.b_title}</Link>
            </h2>
            <h5>
              <ImageWebp srcWebp={logo} src={logo} className="logo_blog" />
              {/* <img src={logo} alt="Dean Infotech pvt ltd" className="logo_blog" /> */}
              Dean Infotech
              <span>
                <i className="fa fa-calendar" aria-hidden="true"></i>
                {dateFormat(blog1.createdAt, "fullDate")}
              </span>
            </h5>
            <div className="blog_img">
            <ImageWebp srcWebp={image} src={image} className="blog1" />
              {/* <img src={image} alt="" className="blog1" /> */}
            </div>
            <p>
              <span
                className="for_description_div"
                dangerouslySetInnerHTML={{
                  __html: blog1.b_description.slice(0, 300)
                }}
              ></span>
              ....
            </p>
            <div className="share_link_blog">
              <span>
                <FacebookShareButton url={url} quote={blog1.b_title}>
                  <i className="fa fa-facebook hvr-wobble-vertical"></i>
                </FacebookShareButton>
              </span>
              <span>
                <TwitterShareButton url={url} quote={blog1.b_title}>
                  <i className="fa fa-twitter hvr-wobble-vertical"></i>
                </TwitterShareButton>
              </span>
              <span>
                <LinkedinShareButton url={url} title={this.state.b_title}>
                  <i
                    className="fa fa-linkedin hvr-wobble-vertical"
                    style={{ background: "#4875B4", color: "white" }}
                  ></i>
                </LinkedinShareButton>
              </span>
              <span>
                <WhatsappShareButton
                  url={url}
                  title={this.state.b_title}
                  separator="- "
                >
                  <i
                    className="fa fa-whatsapp hvr-wobble-vertical"
                    style={{ background: "#25D366", color: "white" }}
                  ></i>
                </WhatsappShareButton>
              </span>
              <span>
                <a href="0#">
                  <div
                    className="fb-like fb_iframe_widget"
                    data-width="90"
                    data-layout="button_count"
                    data-href={url}
                    fb-xfbml-state="rendered"
                  >
                    <span>
                      <iframe
                        name="f2848bd73a112dc"
                        allowtransparency="true"
                        allowFullScreen="true"
                        scrolling="no"
                        allow="encrypted-media"
                        title="fb:like Facebook Social Plugin"
                        src="https://www.facebook.com/v3.1/plugins/like.php?app_id=0&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2Fd_vbiawPdxB.js%3Fversion%3D44%23cb%3Df33bda739e54cf6%26domain%3Dwww.codingmaterials.com%26origin%3Dhttps%253A%252F%252Fwww.codingmaterials.com%252Ff2b91aff96c5f42%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fwww.codingmaterials.com%2Fblog%2Fstrengthen-you-career-as-a-naturopathic-with-coding-and-billing-system-knowledge%2F&amp;layout=button_count&amp;locale=en_US&amp;ref=addtoany&amp;sdk=joey&amp;width=90"
                        className=""
                        width="90px"
                        height="20px"
                        frameBorder="0"
                      ></iframe>
                    </span>
                  </div>
                </a>
              </span>
              <div className="read_more_blog hvr-wobble-horizontal">
                <Link className="btn btn-primary" to={"/blog/" + blog1.slug}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="divider_div">
          <ImageWebp srcWebp={swirly} src={swirly} />
            {/* <img src={swirly} alt="" /> */}
          </div>
        </div>
      );
    });
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.state.b_blog.length / blogPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    if (this.state.b_blog.length > 0) {
      return (
        <Fragment>
          <Helmet>
            <title>Blog | Dean Infotech Pvt. Ltd.</title>
            <meta
              id="meta-description"
              name="description"
              content={this.state.title}
            />
            <meta
              id="og-keywords"
              name="keywords"
              property="og:keywords"
              content={this.state.title}
            />
            <meta
              id="og-title"
              property="og:title"
              content={this.state.title}
            />
          </Helmet>
          <section className="blog_panel p-40">
            <div className="container">
              <div className="row">
                <div className="col-sm-8">
                  <div className="leftcolumn">
                  <div className="ads_div">
                  
                   <AdSense.Google
                          className="adsbygoogle"
                          style={{display:"inline-block",width:"775px",height:"112px"}}
                          data-ad-client="ca-pub-6255094202012499"
                          data-ad-slot="7311104304"
                    />
                    </div>
                    {renderBlog}
                    <div align="right">
                    
                      <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={3}
                        totalItemsCount={this.state.b_blog.length}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="rightcolumn">
                  <div className="ads_div">
                    
                  <AdSense.Google
                          className="adsbygoogle"
                          style={{display:"inline-block",width:"348px",height:"300px"}}
                          data-ad-client="ca-pub-6255094202012499"
                          data-ad-slot="7311104304"
                    />
                   </div>
                    <input
                      type="text"
                      placeholder="Search"
                      style={{
                        height: "42px",
                        width: "85%",
                        marginBottom: "40px",
                        padding: "10px",
                        borderBottom: "2px #20a3f0 solid",
                        border: "1px solid #ccc",
                        borderRadius: "4px,0px,0px,4px",
                        background: "#f1f1f1",
                        borderRight: "none",
                        float: "left"
                      }}
                      value={this.state.searchTerm}
                      onChange={this.onChangeSearch}
                    />
                    <Link
                      to={"/search/" + this.state.searchTerm}
                      style={{
                        float: "left",
                        height: "43px",
                        width: "12%",
                        padding: "10px",
                        background: "#2196F3",

                        borderRadius: "0px,4px,4px,0px",
                        position: "absolute",
                        border: "1px solid #ccc",
                        borderLeft: "none"
                      }}
                    >
                      <span style={{ textAlign: "center" }}>
                        <i
                          className="fa fa-search fa-lg"
                          style={{ color: "white" }}
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                    <h2>Recent Posts</h2>
                    <PopularPost />
                  </div>
                </div>
                <div className="ads_div">
                
                
                <AdSense.Google
                          className="adsbygoogle"
                          style={{display:"inline-block",width:"1140px",height:"250px"}}
                          data-ad-client="ca-pub-6255094202012499"
                          data-ad-slot="7311104304"
                    />
                
                </div>
              </div>
            </div>
          </section>
          <div className="clearfix" />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div style={{ height: "400px", width: "200px" }}>
            <div
              style={{
                position: "fixed",
                top: "20%",
                left: "33%",
                padding: "100px",
                marginTop: "100px",
                marginBottom: "100px"
              }}
            >
              <LoaderPage type="bars" color="#1F96F3" />
            </div>
          </div>
        </Fragment>
      );
    }
  }
}
