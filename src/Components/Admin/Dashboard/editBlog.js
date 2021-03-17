import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';
import baseApi from '../../api';
import {Link} from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Helmet} from 'react-helmet';
import ImageWebp from '../../../ImageWebp'


import CurrentDate from '../CurrentDate';
export default class EditBlog extends Component {
  constructor(props) {
    super(props);
   this.state={
         b_title:'',
         b_description:'',
         image:[],
         page_title:'',
         page_description:'',
         keyword:'',
          title:'Edit Blog',
          tempImg:[]
      };
      this.modules = {
		toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline','blockquote','code-block'],        // toggled buttons
            ['link'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['image'],
          
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
            
	    
          ],
  
	            };

	this.formats = [
        'header',
        'bold', 'italic', 'underline','blockquote','code-block',
	    'font',
	    'size',
	   
	    'list', 'bullet',
	    'align',
        'color', 'background',
        'link', 'image', 'video'
  	]; 
    this.onchangeb_title=this.onchangeb_title.bind(this);
    this.onchangeb_description=this.onchangeb_description.bind(this);
    this.onchangePageTitle=this.onchangePageTitle.bind(this);
    this.onchangePageDes=this.onchangePageDes.bind(this);
    this.onchangeKeyword=this.onchangeKeyword.bind(this);
    this.onchangeImage=this.onchangeImage.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  componentDidMount() {
    
      axios.get(baseApi+'b_blog/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                b_title: response.data.b_title, 
                b_description: response.data.b_description,
                page_title:response.data.page_title,
                page_description:response.data.page_description,
                keyword:response.data.keyword,
                image: response.data.image,
                tempImg:response.data.image });
            console.log(`temp image is ${this.state.tempImg}`)
              
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

    onchangeb_title(e) {
    this.setState({
        b_title: e.target.value
    });
  }
  onchangeb_description(value) {
   
     
     this.setState({
        b_description:value
    })  

  }
  onchangeImage(e) {

    this.setState({
        image: e.target.files[0]
    })
  }
  onchangePageTitle(e)
  {
      this.setState({
      page_title:e.target.value})
  }
  onchangePageDes(e)
  {
      this.setState({
      page_description:e.target.value})
  }
  onchangeKeyword(e)
  {
      this.setState({
          keyword:e.target.value})
  }

   onSubmit(e) {
 
    e.preventDefault();
    const fd = new FormData();
 
    fd.append('b_title',this.state.b_title);
    fd.append('b_description',this.state.b_description);
    fd.append('page_title',this.state.page_title);
    fd.append('page_description',this.state.page_description);
    fd.append('keyword',this.state.keyword);
  
    fd.append('Image',this.state.image);
 
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };

        axios.post(baseApi+'b_blog/update/'+this.props.match.params.id, fd,config)
        .then((res) => {
           
         
            this.props.history.push('/blogs');
             
      })  
      .catch((error) => {
      });
  
     
         
         //   window.location.reload();

}
 
  render() {
    let image=baseApi+"data/"+this.state.image;
 
    return (
        <div className="admin_panel">
           <Helmet>
            <title>{this.state.page_title} | Dean Infotech Pvt. Ltd.</title>
            <meta id="meta-description" name="description" content={this.state.page_description} />
            <meta id="og-keywords" name="keywords" property="og:keywords" content={this.state.keyword} />
            <meta id="og-title" property="og:title" content={this.state.page_title} />
          </Helmet>
             <Dashboard />
       
          
        <div className="container" >
        <div className="col-sm-12">      <CurrentDate />
            <form onSubmit={this.onSubmit} encType="multipart/form-data" >
                 <div className="form-group">
                    <label><h3>Title</h3></label>
                    <input type="text" className="form-control" value={this.state.b_title} onChange={this.onchangeb_title}/>
                </div>

                <div className="form-group">
                    <label><h4>Description</h4></label>
                    <ReactQuill 
                        value={this.state.b_description} 
                        onChange={this.onchangeb_description}
                        modules={this.modules}
                        formats={this.formats}
                        theme="snow"
                         />
                </div>
                <div className="form-group">
                    <label><h4>Image</h4></label>
                    <input type="file" className="form-Control" onChange={this.onchangeImage} name="Image" accept="image/*"/>
                    <ImageWebp
                  srcWebp={image}
                  src={image}
                  className="blog1" height="80px" width="100px"
                  />
                    {/* <img src={image} alt="" className="blog1" height="80px" width="100px" /> */}
                </div>
                <hr />
                <div className="form-group">
                    <label><h3>Page Title</h3></label>
                    <input type="text" className="form-control" value={this.state.page_title} onChange={this.onchangePageTitle}/>
                </div>
                <div className="form-group">
                    <label><h3>Page Description</h3></label>
                    <textarea className="form-control" value={this.state.page_description} onChange={this.onchangePageDes}></textarea>
                </div>
                <div className="form-group">
                    <label><h3>Keywords</h3></label>
                    <input type="text" className="form-control" value={this.state.keyword} onChange={this.onchangeKeyword}/>
                </div>
              
                <div className="form-group">
                    <input type="submit" className="btn btn-primary"  value="Update Blog" />&nbsp;&nbsp;
                    <Link to="/blogs" >Back to Blogs</Link>
                </div>

             </form>
        </div>
        </div>
                </div>)
  }
}