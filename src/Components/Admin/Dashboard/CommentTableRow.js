
import React, { Component } from 'react';
import axios from 'axios';
import baseApi from '../../api';
import Modal from 'react-awesome-modal';
var dateFormat=require('dateformat');
class CommentTableRow extends Component {
    constructor(props) {
        super(props);
        this.state={
          user_comment:"",
          openModal: false,
          openModal1:false,
          cid: "",
          enableComment:0
        }
       this.delete = this.delete.bind(this);
       this.edit=this.edit.bind(this);
       this.onchangeUserComment=this.onchangeUserComment.bind(this);
    }
    onchangeUserComment(e) {
      this.setState({ user_comment: e.target.value})
  
    }
    //delete function
    delete()
     {
         axios.get(baseApi+'b_blog/remove/'+this.props.obj.cid)
         .then(console.log('deleted')).catch(err=>console.log(err))
      window.location.reload();
   }

   find(item)
   {
     this.setState({
          user_comment:item.user_comment,
          user_name:item.user_name,
          openModal: true,
          cid: item.cid
        })
      console.log(this.state.user_comment)
   }
   edit()
   {
    const obj = {
     user_comment: this.state.user_comment,
   };
     axios.put(`${baseApi}b_blog/editComment/${this.props.id}/${this.state.cid}`,obj)
     .then(res=>
      {
        setTimeout(function(){ alert("updated"); }, 3000);
        window.location.reload();
        console.log(`res is ${res}`);
      })
      .catch(err=>console.log(err))
   }
   live(item)
   {
    this.setState({openModal1:true, cid: item.cid,})
   }
   show(item)
   {
    this.setState({
      enableComment:1,
     
      cid: item.cid,
    })
    const obj = {
      enableComment: 1,
    };
    console.log(`enable Comment ${this.state.enableComment}`)
   axios.put(`${baseApi}b_blog/flag/${this.props.id}/${item.cid}`,obj)
    .then((res)=>
     {
       console.log(res)
       window.location.reload();
     })
     .catch(err=>console.log(err))
   }

   hide(item)
   {
            this.setState({enableComment:0,
                            cid: item.cid,
    })
            const obj = {
                        enableComment: 0,
                        };
   axios.put(`${baseApi}b_blog/flag/${this.props.id}/${item.cid}`,obj)
    .then((res)=>
     {
       console.log(res)
      window.location.reload();
 
     })
     .catch(err=>console.log(err))
   }

   closeModal() {
    this.setState({
      openModal: false,
    });
}

  render() {
    return (
      
        <tr>
          <td>
            {this.props.obj.cid}
          </td>
          <td>
          {this.props.obj.user_name}
          </td>
          <td>
            {this.props.obj.user_email}
          </td>
          <td>
            {this.props.obj.user_website}
          </td>
      
          <td>
            {this.props.obj.user_comment}
          </td>

          <td>{dateFormat(this.props.obj.time,"fullDate")}</td>
          <td>
            <button style={{margin:'5px',border:"0px"}} onClick={this.delete}><i className="fa fa-trash" aria-hidden="true"></i></button>
            <button style={{margin:'5px',border:"0px"}} value="Open" onClick={() => this.find(this.props.obj)} ><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
          {this.props.obj.enableComment===0?
                      (<button style={{margin:'5px' ,border:"0px"}} value="Open" onClick={() => this.live(this.props.obj)}>Live</button>)
                    :(<button style={{margin:'5px',border:"0px" }} onClick={() => this.hide(this.props.obj)}>Hide</button>)}
   </td>
   <Modal visible={this.state.openModal} width="600" height="270" effect="fadeInDown" onClickAway={() => this.closeModal()}>
                    <div>
                      <form style={{margin:'10px'}}>
                        <label>Comment</label>
                        <textarea rows="7" className="form-control" value={this.state.user_comment} onChange={this.onchangeUserComment} ></textarea>
                        
                        </form>
                        <button onClick={this.edit} style={{margin:'10px'}}>Save</button>
                        <button onClick={() => this.closeModal()} style={{margin:'10px'}}>Close</button>
                    </div>
  </Modal>
  <Modal visible={this.state.openModal1} width="300" height="150" effect="fadeInDown" onClickAway={() => this.closeModal()}>
                    <div>
                      <h4 style={{align:"center",margin:"20px"}}>Are You Sure ?</h4><br />
                        <button onClick={() => this.show(this.props.obj)} style={{marginLeft:'30px'}}>Yes</button>
                        <button onClick={() => this.closeModal()} style={{margin:'10px'}}>Close</button>
                    </div>
  </Modal>
        </tr>

    );
  }
}

export default CommentTableRow;