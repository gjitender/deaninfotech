import React ,{Component,Fragment} from 'react';
import Dashboard from './Dashboard';
import CommentTableRow from './CommentTableRow';
import baseApi from '../../api';
import axios from 'axios';
import {Helmet} from 'react-helmet';
import CurrentDate from '../CurrentDate';

export default class Comments extends Component
{
    constructor(props) {
        super(props);
        this.state = {
         
          b_blog: [],
          CommentData:[],
        title:'Comment'};
      }
      componentDidMount(){
        // axios.get(baseApi+'b_user/fetchcomment')
        //   .then(response => {
        //     this.setState({ b_user: response.data });
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   })
        axios.get(baseApi+'b_blog/fetchblog')
      .then(res => {
      
       
        this.setState({ b_blog: res.data.reverse()});
      
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
      // tabRow(){
      //   return this.state.b_user.map(function(object, i){
      //       return <CommentTableRow obj={object} key={i} />;
      //   });
      // }
      tabRow()
      {
return  this.state.b_blog.map(function(object, i)
          {
             return <Fragment>
             {object.CommentData.map(obj=>
                {
               //  console.log(`comment data is ${obj.user_name}`)
                  return <CommentTableRow obj={obj} id={object._id} />
  
                  })
                }
                </Fragment> 
        })
     
       }

 
    render()
    {
        return( <div className="admin_panel">
              <Helmet>
            <title>{this.state.title} | Dean Infotech Pvt. Ltd.</title>
            <meta id="meta-description" name="description" content={this.state.title} />
            <meta id="og-keywords" name="keywords" property="og:keywords" content={this.state.title} />
            <meta id="og-title" property="og:title" content={this.state.title} />
          </Helmet>
            <Dashboard />
            
            <div className="container" >
        <div className="col-sm-12"> <CurrentDate />
          <h3 align="center" className="admin_list_heading">Comments List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
              <th><b>Id</b></th>
                <th><b>User Name</b></th>
                <th><b>Email</b></th>
                <th><b>Website</b></th>
                <th><b>Comments</b></th>
               <th><b>Date</b></th>
                <th colSpan="2"><b>Action</b></th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>

          </table>
          
    
         </div>
      
        </div></div>
      
              )
    }
}