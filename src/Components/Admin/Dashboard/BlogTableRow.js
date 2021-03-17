
import React, { Component } from 'react';
import axios from 'axios';
import baseApi from '../../api';
import {Link } from 'react-router-dom';
import ImageWebp from '../../../ImageWebp'

var dateFormat=require('dateformat');

class BlogTableRow extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
        this.delete = this.delete.bind(this);
   
    }
    //delete function
   delete()
    {
        axios.get(baseApi+'b_blog/delete/'+this.props.obj._id)
        .then(console.log('deleted')).catch(err=>console.log(err))
        window.location.reload();
    }


render() {
let image=baseApi+"data/"+this.props.obj.image
    return (
        <tr><td>
        {this.props.obj.b_title}</td>
       
        
           
         <td>
         <div dangerouslySetInnerHTML={{__html: this.props.obj.b_description.slice(0,100)}}></div>...</td>
         
         <td>
             <ImageWebp
        srcWebp={image}
        src={image}
        height="100px" width="200px"
        />
             {/* <img src={image} alt="img" height="100px" width="200px" /> */}
             </td> 
         <td>
              <i>  {dateFormat(this.props.obj.time,"fullDate")}</i>
        </td>
        <td>
            <a href="#" onClick={this.delete}><i className="fa fa-trash" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;
            <Link to={"/edit/"+this.props.obj._id}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>&nbsp;&nbsp;&nbsp;
            <Link to='/blog' ><i className="fa fa-eye" aria-hidden="true"></i></Link>
        </td>
            </tr>
      
    );
  }
}

export default BlogTableRow;