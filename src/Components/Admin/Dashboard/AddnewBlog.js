import React ,{Component} from 'react';
import Dashboard from './Dashboard';
import baseApi from '../../api';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CurrentDate from '../CurrentDate';
import {Helmet} from 'react-helmet';
import './admin.css';
export default class AddnewBlog extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
         b_title:'',
         b_description:'',
         page_title:'',
         page_description:'',
         keyword:'',
         b_titleErr:'',
         b_descriptionErr:'',
         page_titleErr:'',
         page_descriptionErr:'',
         imageErr:'',
         keywordErr:'',
         image:[],
         title:'Add new Blog',
       
          
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
        'link', 'image', 'video',
        
	    'list', 'bullet',
	    'align',
        'color', 'background',
        
  	                ];
        
    this.onchangeb_title=this.onchangeb_title.bind(this);
    this.onchangeb_description=this.onchangeb_description.bind(this);
    this.onchangePageTitle=this.onchangePageTitle.bind(this);
    this.onchangePageDes=this.onchangePageDes.bind(this);
    this.onchangeKeyword=this.onchangeKeyword.bind(this);
    this.onchangeImage=this.onchangeImage.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
}

onchangeb_title(e)
    {
        this.setState({
        b_title:e.target.value,
        b_titleErr:''
      })
    }
     
onchangeImage(e)
 {
    
     this.setState({
         image:e.target.files[0],
         imageErr:''
        });
       
 }
 onchangeb_description(value)
    {
        this.setState({
            b_description:value,
            b_descriptionErr:''
                    })
    }
onchangePageTitle(e)
        {
            this.setState({
            page_title:e.target.value,
            page_titleErr:''
        })
        }
onchangePageDes(e)
        {
            this.setState({
            page_description:e.target.value,
            page_descriptionErr:''
        })
        }
onchangeKeyword(e)
        {
            this.setState({
                keyword:e.target.value,
            keywordErr:''})
        }
handleValidation()
 {  let isErr=false;
    if(this.state.b_title==='')
    {
        this.setState({b_titleErr:'Enter Blog Title'})
        isErr=true;
    }

    if(this.state.b_description==='')
    {
        this.setState({b_descriptionErr:'Enter Blog Description'})
        isErr=true;
    }
    if(this.state.page_title==='')
    {
        this.setState({page_titleErr:'Enter Blog Page Title'})
        isErr=true;
    }
    if(this.state.page_description==='')
    {
        this.setState({page_descriptionErr:'Enter Page Description'})
        isErr=false;
    }
    if(this.state.keyword==='')
    {
        this.setState({keywordErr:'Enter Keyword'})
        isErr=true
    }
    if(this.state.image.length===0)
    {
        this.setState({imageErr:'Please attach Image'})
        isErr=true
    }
     return isErr;
 }

onSubmit(e)
    {
        const Myswal=withReactContent(Swal);
          e.preventDefault();
          
          let validate = this.handleValidation();
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
          if(!validate){
          axios.post(baseApi+"b_blog/addblog",fd,config)
              .then((res) => {
                Myswal.fire({
                    title:'Hurrah',
                    text:'Blog is Added Successfully',
                    type:'success'

                  }).then((result) => {
                    window.location.reload();
                  });
                
              }).catch((error) => {
          });
        }

}


    render()
    {
        const hStyle = { color: 'red' };
        return(<div>
              <Helmet>
            <title>Add Blog | Dean Infotech Pvt. Ltd.</title>
            <meta id="meta-description" name="description" content={this.state.title} />
            <meta id="og-keywords" name="keywords" property="og:keywords" content={this.state.title} />
            <meta id="og-title" property="og:title" content={this.state.title} />
             </Helmet>
             
        <Dashboard />
        <div className="container" >
        <div className="col-sm-12">
        <CurrentDate />
                <form onSubmit={this.onSubmit} encType="multipart/form-data"  >
                 <div className="form-group">
                    <label><h3>Title</h3></label>
                    <input type="text" className="form-control" value={this.state.b_title} onChange={this.onchangeb_title}/>
                    <span style={hStyle}>{this.state.b_titleErr}</span>
                    </div>

                <div className="form-group">
                    <label><h4>Description</h4></label>
                    <ReactQuill 
                        theme="snow"
                        value={this.state.b_description} 
                        onChange={this.onchangeb_description}
                        modules={this.modules}
                     formats={this.formats}
                         />
                    <span style={hStyle}>{this.state.b_descriptionErr}</span>
                </div>
                <div className="form-group">
                    <label><h4>Image</h4></label>
                    <input type="file" className="form-Control" onChange={this.onchangeImage} name="Image"/>
                    <span style={hStyle}>{this.state.imageErr}</span>
                </div>
                <hr />
                <div className="form-group">
                    <label><h3>Page Title</h3></label>
                    <input type="text" className="form-control" value={this.state.page_title} onChange={this.onchangePageTitle}/>
                    <span style={hStyle}>{this.state.page_titleErr}</span>
                </div>
                <div className="form-group">
                    <label><h3>Page Description</h3></label>
                    <textarea className="form-control" value={this.state.page_description} onChange={this.onchangePageDes}></textarea>
                    <span style={hStyle}>{this.state.page_descriptionErr}</span>
                </div>
                <div className="form-group">
                    <label><h3>Keywords</h3></label>
                    <input type="text" className="form-control" value={this.state.keyword} onChange={this.onchangeKeyword}/>
                    <span style={hStyle}>{this.state.keywordErr}</span>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary"  value="Add Blog" />
                </div>

             </form>
        </div>
        </div>
                </div>)
    }}
