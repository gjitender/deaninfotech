import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import baseApi from '../../api';
import ImageWebp from '../../../ImageWebp'
import { Helmet } from "react-helmet";


export default class PopularPost extends Component {
    constructor(props)
    {
      super(props);
      this.state={b_blog: []};
    }
    componentDidMount(){
      axios.get(baseApi+'b_blog/fetchblog')
        .then(res => {
         
          this.setState({ b_blog: res.data.reverse() });
        })
        .catch(function (error) {
          console.log(error);
        })
        this.unmounted=false;
      
    }
    componentWillUnmount()
    {
      this.unmounted=true;
    }
    render()
    {
        return(<div>
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
             {this.state.b_blog.slice(0,5).map((object,i)=>
             {let image=baseApi+"data/"+object.image
                return(<div key={i.id}>
                    <div className="popular_post  hvr-wobble-horizontal" >
                    <Link   to={"/blog/"+object.slug} onClick={this.forceUpdate}>
            <div className="popular_img">
                <div className="fakeimg">
                <ImageWebp
                  srcWebp={image}
                  src={image}
                  className="blog1"
                  />
                  {/* <img src={image} alt="" className="blog1" /> */}
                  </div>
                </div>
                <div className="popular_content">
                <p>{object.b_title}</p></div>
                </Link>
                </div>
              </div>
                )}
              )}
          
        </div>)
    }
}