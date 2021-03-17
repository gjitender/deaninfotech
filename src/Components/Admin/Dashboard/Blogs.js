import React ,{Component} from 'react';
import Dashboard from './Dashboard';
import baseApi from '../../api';
import axios from 'axios';
import {Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Datatable from 'react-bs-datatable';
import CurrentDate from '../CurrentDate';
import ImageWebp from '../../../ImageWebp'

var dateFormat=require('dateformat');
export default class Blogs extends Component
{
 
    constructor(props) 
    {
        super(props);
        this.state = {
                     b_blog: [],
                     title:'Blog',
                    
                     };
   
    }
    //delete function
   deleteBlog(blog_id)
    {
      console.log(blog_id);
   axios.get(baseApi+'b_blog/delete/'+blog_id)
        .then(console.log('deleted')).catch(err=>console.log(err))
        window.location.reload();
    }

      componentDidMount(){
        axios.get(baseApi+'b_blog/fetchblog')
          .then(response => {
            this.setState({
               b_blog: response.data.reverse() ,
                });
          })
          .catch(function (error) {
            console.log(error);
          })
      }

  
    render()
    {
      const header = [
        { title:<b>Title</b>, prop: 'b_title', sortable: true, filterable: true },
        { title: <b>Description</b>, prop: 'b_description', sortable: true },
        { title: <b>Image</b>, prop: 'image' },
        {title:<b>Date</b>, prop:'createdAt'},
      {title:<b>Actions</b> ,prop:'actions'}
      
      ];
      
      let data=[];
      this.state.b_blog.map((obj,i)=>{
        let image=baseApi+"data/"+obj.image;
        let img= <ImageWebp
        srcWebp={image}
        src={image}
        height="60px" width="100px"
        />
        // <img src={image}  height="60px" width="100px" alt=""/>
        let des=<div><span className=".for_description_div_Icon" dangerouslySetInnerHTML={{__html: obj.b_description.slice(0,100)}}></span>....</div>
        let actions=<div>
                    <a href="#0" onClick={()=>this.deleteBlog(obj._id)}><i className="fa fa-trash" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;
                    <Link to={"/edit/"+obj._id}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>&nbsp;&nbsp;&nbsp;
                    <Link to='/blog' ><i className="fa fa-eye" aria-hidden="true"></i></Link></div>
        let createdAt=<i> {dateFormat(obj.createdAt,"fullDate")}</i>
        data.push({b_title:obj.b_title,b_description:des,image:img,createdAt:createdAt,actions:actions});
        return data;
      })
      const onSortFunction = {
        date(columnValue) {
          // Convert the string date format to UTC timestamp
          // So the table could sort it by number instead of by string
         // return moment(columnValue, 'Do MMMM YYYY').valueOf();
        },
      };
       
      const customLabels = {
        first: '<<',
        last: '>>',
        prev: '<',
        next: '>',
        show: 'Display',
        entries: 'rows',
        noResults: 'There is no data to be displayed',
      };
      
  
        return( <div className="admin_panel">
              <Helmet>
            <title>{this.state.title} | Dean Infotech Pvt. Ltd.</title>
            <meta id="meta-description" name="description" content={this.state.title} />
            <meta id="og-keywords" name="keywords" property="og:keywords" content={this.state.title} />
            <meta id="og-title" property="og:title" content={this.state.title} />
          </Helmet>
            <Dashboard />
           
            <div className="container">
        <div className="col-sm-12"> <CurrentDate />
            <h3 align="center" className="admin_list_heading">Blog List</h3>
            <Datatable
                 tableHeader={header}
                  tableBody={data}
                  keyName="userTable"
  tableClass="striped hover responsive"
  rowsPerPage={5}
  rowsPerPageOption={[5, 10, 15, 20]}
  initialSort={{prop: "username", isAscending: true}}
  onSort={onSortFunction}
  labels={customLabels}
/>
        </div>

         
     </div></div>
      
              )
    }
}
