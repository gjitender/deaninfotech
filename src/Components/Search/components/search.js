import React, { PureComponent, Fragment } from 'react';
import axios from 'axios';
import baseApi from '../../api';
import {Link } from 'react-router-dom';
import PopularPost from '../../blog/Components/PopularPost';
import { withRouter } from 'react-router';
import Pagination from "react-js-pagination";
import LoaderPage from '../../../loader';


import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
 WhatsappShareButton
  
  } from 'react-share';

var dateFormat = require('dateformat');

const logo = require('../images/logo.png');
const swirly = require('../images/swirly.png');

// const PageNotFound = require('../../../images/404-Page.gif');


class Search extends PureComponent {
  constructor(props)
  {
    super(props);
    this.state={
      
        b_blog:[],
        blogPerPage: 3,
        activePage:1,
          item:''
              }
             
}

componentDidMount()
{
    if(this.props.match.params.item)
        axios.get(baseApi+'b_blog/search/'+this.props.match.params.item).then(res=>
        {
            this.setState({b_blog:res.data});
            console.log(this.state.b_blog)
        }).catch(function(err)
        {
            console.log(err)
        })
        this.unmounted=false;
}
componentWillUnmount()
{
  this.unmounted=true;
}
handlePageChange = (pageNumber) =>
 {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
 }

render() {

    const {  activePage,  blogPerPage} = this.state;

    // Logic for displaying current todos
    const indexOfLastBlog = activePage * blogPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogPerPage;
   
    const currentBlogs =this.state.b_blog.slice(indexOfFirstBlog, indexOfLastBlog);
    const renderBlog= currentBlogs.map((blog1,index)=>{
        let image=baseApi+"data/"+blog1.image;
        let url=window.location.href+'/'+blog1._id;
        
        return (<div>
            <div className="card" key={blog1.name + index}>
            <h2><Link  to={"/blog/"+blog1.slug}>{blog1.b_title}</Link></h2>
                <h5>
                  <img src={logo} alt="Dean Infotech pvt ltd" className="logo_blog" />
                   Dean Infotech 
                   <span> 
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  {dateFormat(blog1.createdAt,"fullDate")}
                  </span></h5>
                  <div className="blog_img"><img src={image} alt="" className="blog1" /></div>
                  <p>
                  <span  className="for_description_div" dangerouslySetInnerHTML={{__html: blog1.b_description.slice(0,300)}}></span>....
                  </p>

               <div className="share_link_blog">
               <span>  <FacebookShareButton url={url}
               quote={blog1.b_title} >
                  <i className="fa fa-facebook hvr-wobble-vertical"></i>
               </FacebookShareButton></span>
               <span>  <TwitterShareButton url={url}
               quote={blog1.b_title} >
                  <i className="fa fa-twitter hvr-wobble-vertical"></i>
               </TwitterShareButton></span>
               <span>  <LinkedinShareButton url={url}
               title={this.state.b_title} >
                  <i className="fa fa-linkedin hvr-wobble-vertical" style={{background:'#4875B4',color:'white'}}></i>
               </LinkedinShareButton></span>
               <span>  <WhatsappShareButton url={url}
               title={this.state.b_title}
               separator="- " >
                  <i className="fa fa-whatsapp hvr-wobble-vertical" style={{background:'#25D366',color:'white'}}></i>
               </WhatsappShareButton></span>
               <span><a href="0#"><div className="fb-like fb_iframe_widget" 
              data-width="90" data-layout="button_count" data-href={url} fb-xfbml-state="rendered">
              <span >
              <iframe name="f2848bd73a112dc" 
              allowtransparency="true" 
              allowFullScreen="true" 
              scrolling="no" 
              allow="encrypted-media" 
              title="fb:like Facebook Social Plugin"  
              src="https://www.facebook.com/v3.1/plugins/like.php?app_id=0&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2Fd_vbiawPdxB.js%3Fversion%3D44%23cb%3Df33bda739e54cf6%26domain%3Dwww.codingmaterials.com%26origin%3Dhttps%253A%252F%252Fwww.codingmaterials.com%252Ff2b91aff96c5f42%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fwww.codingmaterials.com%2Fblog%2Fstrengthen-you-career-as-a-naturopathic-with-coding-and-billing-system-knowledge%2F&amp;layout=button_count&amp;locale=en_US&amp;ref=addtoany&amp;sdk=joey&amp;width=90" className="" width="90px" height="20px" frameBorder="0"></iframe></span></div>
              </a></span>

                <div className="read_more_blog hvr-wobble-horizontal">
                <Link className="btn btn-primary" to={"/blog/"+blog1.slug}>Read More</Link>
                </div>
               </div>
          </div>
          <div className="divider_div"><img src={swirly} alt="" /></div>
   
    </div>);
});
// Logic for displaying page numbers
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(this.state.b_blog.length / blogPerPage); i++) {
pageNumbers.push(i);
}
if(this.state.b_blog.length>0)
{
return (
    <Fragment>
     
          <section className="blog_panel p-40">
          <div className="container">
          <div className="row">
          <div className="col-sm-8">
          <div className="leftcolumn">
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

   
  <h2>Recent Posts</h2>
   <PopularPost />
   </div></div>
    </div></div>
    </section>
      <div className="clearfix" />
</Fragment>
  );

  }
  else
  {
  return (<Fragment>
    <div style={{height:'400px' ,width:'200px'}}>
     <div style={{position:'fixed',top:'20%',left:'33%', padding:'100px',marginTop:'100px',marginBottom:'100px'}} > 
    <LoaderPage type="bars" color="#1F96F3" />
      {/* <h5 style={{"text-align":"center"}}>loader</h5> */}
  </div>
  </div></Fragment>)
  
  }
}

 }

export default withRouter(Search);