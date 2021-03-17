import React, { Component, Fragment } from 'react';
import axios from 'axios';
import baseApi from '../../api';
import CommentForm from './CommentForm';
import PopularPost from '../../blog/Components/PopularPost';
import { withRouter } from 'react-router';
import LoaderPage from '../../../loader';
import {Helmet} from 'react-helmet';
import { Redirect } from 'react-router-dom';
import ImageWebp from '../../../ImageWebp';
import AdSense from 'react-adsense';

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


class BlogDivDetails extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      
          b_title:'',
          b_description:'',
          image:'',
          page_title:'',
          page_description:'',
          keyword:'',
          slug:'',
          CommentData:[]
              }
                // this.onClickLike=this.onClickLike.bind(this);
}

componentDidMount()
{
  
  
if(this.props.match.params.slug)

  axios.get(baseApi+'b_blog/blog/'+this.props.match.params.slug).then(res=>
    {
      
        this.setState({
            b_title:res.data.b_title,
            b_description:res.data.b_description,
            page_title:res.data.page_title,
            page_description:res.data.page_description,
            keyword:res.data.keyword,
            image:res.data.image,
            slug:res.data.slug,
            createdAt:res.data.createdAt

        });
     
       
      })

        .catch(function(err)
        {
            console.log(err)
        })
        axios.get(`${baseApi}b_blog/blog/${this.props.match.params.slug}/fetchComment`).then(res=>
          {
           
            this.setState({
              CommentData:res.data.CommentData,
             })
         
          })
        this.unmounted=false;
}
componentWillUnmount()
{
  this.unmounted=true;
}
  render() {
  
    let image=baseApi+"data/"+this.state.image;
    let url=window.location.href;
    let ogurl=`https://www.deaninfotech.com/blog/${this.state.slug}`
    if(this.state.slug===this.props.match.params.slug)
{
  
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
        <Helmet>
            <title>{this.state.page_title} | Dean Infotech </title>
            <meta id="og-keywords" name="keywords" property="og:keywords" content={this.state.keyword} />
            <meta id="og-title" property="og:title" content={this.state.page_title} />
            <meta id="og-site_name" property="og:site_name" content="Dean Infotech"></meta>
            <meta id="og-url" property="og:url" content={ogurl} />
            <meta id="meta-description" name="description" content={this.state.page_description} />
            <meta id="og-image" property="og:image" content={image} />
            <meta property="fb:app_id" content="965836843760876" />
            <meta id="og-type" property="og:type" content="website" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <link rel="canonical" href={ogurl}></link>
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
              <div className="card">
                <h2>{this.state.b_title}</h2>
                  <h5>
                  <ImageWebp
                  srcWebp={logo}
                  src={logo}
                  className="logo_blog"
                  />
                    {/* <img src={logo} alt="Dean Infotech" className="logo_blog" /> */}
                     Dean Infotech  <span>
                      <i className="fa fa-calendar" aria-hidden="true"></i> {dateFormat(this.state.createdAt,"fullDate")}</span></h5>
            <div className="blog_img">
            <ImageWebp
                  srcWebp={image}
                  src={image}
                  className="blog1"
                  />
              {/* <img src={image} alt="" className="blog1" /> */}
              </div>
              <div dangerouslySetInnerHTML={{__html: this.state.b_description}} className="for_description_div"></div>
                <div className="share_link_blog">
                 <span>  <FacebookShareButton url={url}
                     quote={this.state.b_title}
                    
                     hashing="#{this.state.page_description}" >
                        <i className="fa fa-facebook hvr-wobble-vertical"></i>
                     </FacebookShareButton></span>
                     <span>  <TwitterShareButton url={url}
                     title={this.state.b_title} >
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
                    </a>
                    </span>
                    
                   </div>
              </div>
              <div  className="comment_panel">
          <div className="">
          <h2 style={{marginLeft:'12px'}}>Comment</h2>
          <br/>
          
          {this.state.CommentData.user_name!==undefined ||this.state.CommentData.user_name!==''
              ?<div>    {this.state.CommentData.map((cdata,index)=>
                    {
                      return (<div style={{marginLeft:'12px'}}>
                      {cdata.enableComment!==0
                      
                                                   ?<div>
                                                    <a href={cdata.user_website?cdata.user_website:""} style={{color:'#589BC9', textDecoration: 'none'}}  target="_blank" >
                                                   <p><i style={{color:'#589BC9'}} className="fa fa-user-secret" aria-hidden="true"></i>
                                                     <i><strong style={{color:'#589BC9'}}>{cdata.user_name.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')}
                                                     </strong></i>
                                                   </p></a>
                                                   <p style={{color:'gray',fontSize:'12px',textAlign:'right'}}><i>{dateFormat(cdata.time,"dddd, mmmm dS, yyyy, h:MM:ss TT")}</i></p>
                                                   <p style={{color:'#00000',backgroundColor:'#d6eaf8',padding:'10px',borderRadius:'4px'}}>
                                                   <span style={{marginLeft:'10px'}}>{cdata.user_comment}</span>
                                                   </p>
                                                   <hr/>
                                                   </div>
                                                   :<div></div>
                      }
                                                  </div>)
                                         })}
                                    </div>
               :<div></div>  
                  }
            
              {/* <div className="comment_panel"> */}
               
              <CommentForm/></div>
                  <div className="divider_div">
                  <ImageWebp
                  srcWebp={swirly}
                  src={swirly}
                  />
                    {/* <img src={swirly} alt="" /> */}
                    </div>
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
            <h2>Recent Posts</h2>
             <PopularPost/>
            
            </div></div>
            <div className="ads_div">
            
                       <AdSense.Google
                          className="adsbygoogle"
                          style={{display:"inline-block",width:"1140px",height:"250px"}}
                          data-ad-client="ca-pub-6255094202012499"
                          data-ad-slot="7311104304"
                    />
               
                </div>
          </div></div>
        </section>
        <div className="clearfix" />
      </Fragment>
    );
  }
  else if(this.props.match.params.slug==='4-ways-create-successful-social-media-strategy-website-2017')
  {
    return <Redirect to='/blog' />
  }
  else if(this.props.match.params.slug==='cms-vs-hand-coding-right-choice-build-website')
  {
    window.location.href="/blog/cms-vs-hand-coding-which-is-the-right-choice-to-build-a-website";
  }
  else if(this.props.match.params.slug==='powerful-content-marketing-strategies-better-seo-website')
  {
    window.location.href="/blog/powerful-content-marketing-strategies-for-better-seo-for-your-website";
  }
  else if(this.props.match.params.slug==='top-3-programming-languages-build-video-streaming-website')
  {
    window.location.href="/blog/top-3-programming-languages-to-build-a-video-streaming-website";
  }
  else if(this.props.match.params.slug==='6-reasons-every-company-need-responsive-website')
  {
   window.location.href="/blog/6-reasons-why-every-company-need-a-responsive-website ";
   }
   else if(this.props.match.params.slug==='9-tips-speed-performance-magento-website')
  {
   window.location.href="/blog/9-tips-to-speed-up-the-performance-of-magento-website";
   }
   else if(this.props.match.params.slug==='framework-vs-cms-developers-choice')
   {
    window.location.href="/blog/framework-vs-cms-what-is-a-developer-s-choice";
    }
    else if(this.props.match.params.slug==='salesforce-development-leading-business-world')
  {
   window.location.href="/blog/how-is-salesforce-development-leading-the-business-world ";
   }
   else if(this.props.match.params.slug==='5-tricks-increase-content-visibility-google-knowledge-graph')
   {
    window.location.href="/blog/5-tricks-to-increase-your-content-visibility-in-google-knowledge-graph ";
    }
else if(this.props.match.params.slug==='php-vs-java-secure')
  {
   window.location.href="/blog/php-vs-java-which-is-more-secure ";
   }
else if(this.props.match.params.slug==='optimize-website-real-time-google-penguin-4-0')
   {
    window.location.href="/blog/how-to-optimize-website-with-real-time-google-penguin-4-0 ";
    }
else if(this.props.match.params.slug==='10-tactics-make-website-content-viral')
    {
     window.location.href="/blog/10-tactics-to-make-your-website-content-viral ";
     }
else if(this.props.match.params.slug==='10-amazing-facts-need-know-responsive-website')
     {
      window.location.href="/blog/10-amazing-facts-you-need-to-know-about-a-responsive-website ";
      }
else if(this.props.match.params.slug==='10-important-tips-increase-website-traffic-without-building-links')
      {
       window.location.href="/blog/10-important-tips-to-increase-website-traffic-without-building-links ";
       }
else if(this.props.match.params.slug==='6-innovative-tips-increase-ecommerce-website-sales')
       {
        window.location.href="/blog/6-innovative-tips-to-increase-ecommerce-website-sales ";
        }
   else if(this.props.match.params.slug)
  {
     return  <div style={{marginTop:'150px'}}><LoaderPage /></div>
  }
 
  else
  {
 return <Redirect to='/blog' />
    }
   
 }
}
export default withRouter(BlogDivDetails);