import React, { Component, Fragment } from 'react';
import axios from 'axios';
import baseApi from '../../api';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";
import { withRouter } from 'react-router';
import withReactContent from 'sweetalert2-react-content';
var uniqid = require('uniqid');
const recaptchaRef = React.createRef();
class CommentForm extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      enableComment:0,
      user_name: '',
      user_email: '',
      user_comment: '',
      user_website:'',
      user_nameErr: '',
      user_emailErr: '',
      user_commentErr: '',
      isVerified: false,
      recaptchaErr: '',
      slug:'',
      cid:uniqid(),
      time:Date.now()
     }
    this.onchangeUserName = this.onchangeUserName.bind(this);
    this.onchangeUserWebsite=this.onchangeUserWebsite.bind(this);
    this.onchangeUserEmail = this.onchangeUserEmail.bind(this);
    this.onchangeUserComment = this.onchangeUserComment.bind(this);
    this.onPostSubmit = this.onPostSubmit.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

  }
  componentDidMount()
  {
   this.setState({
     slug:this.props.match.params.slug,
    
  })
  
  }
  verifyCallback = (response) => {
    console.log(response)

    if (response) {
      this.setState({
        isVerified: true,
        recaptchaErr: ''
      })
    }
  }

  ReCAPTCHALoaded = () => {
    document.getElementById('reErr').innerHTML = '';
    this.setState({
      isVerified: true,
      recaptchaErr: ''
    })
  }

  onchangeUserName(e) {
    this.setState({
      user_name: e.target.value,
      user_nameErr:''
    })
  }
  onchangeUserEmail(e) {
    this.setState({ 
      user_email: e.target.value,
      user_emailErr:''
     })
  }
  onchangeUserComment(e) {
    this.setState({ 
      user_comment: e.target.value ,
      user_commentErr:''
    })

  }
  onchangeUserWebsite(e) {
    this.setState({ 
      user_website: e.target.value ,
      
    })

  }
  handleValidation() {
    let isErr = false;
    if (this.state.user_comment === '') {
      this.setState({ user_commentErr: 'Enter Your Comment' })
      isErr = true;
    }
    if (this.state.user_email === '') {
      this.setState({ user_emailErr: 'Enter Your Email' })
      isErr = true;
    }

     // Google Recaptch
     if (!this.state.isVerified) {
      this.setState({
        recaptchaErr: "Verify you are human.",
      });
      isErr = true;
    }
    if (this.state.user_name === '') {
      this.setState({ user_nameErr: 'Enter Your Name' })
    }
    return isErr;
  }

  onPostSubmit(e) {
     const Myswal = withReactContent(Swal);
    e.preventDefault();
    let validate = this.handleValidation();
    const obj = {
      user_name: this.state.user_name,
      user_email: this.state.user_email,
      user_comment: this.state.user_comment,
      user_website:this.state.user_website,
      recaptcha: this.state.recaptcha,
      cid:this.state.cid,
      time:this.state.time,
      enableComment:this.state.enableComment
    };
    if (!validate) {
      axios.post(`${baseApi}b_blog/blog/${this.state.slug}/postComment`,obj).then(res=>
        {
          if(res.status===200)
          {
                    Myswal.fire({
                    title:'Hurrah',
                    text:'Your Comment is posted Successfully',
                    type:'success'
                   
                  }).then((result) => {
                    window.location.reload();
                  });
            }
        })

    }
  }
  render() {
    const hStyle = { color: 'red' };
    return (<Fragment>
      <form onSubmit={this.onPostSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" name="user_name" value={this.state.user_name}
                onChange={this.onchangeUserName} />
              <span style={hStyle}>{this.state.user_nameErr}</span>
            </div></div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Your Email</label>
              <input type="text" name="user_email" value={this.state.user_email} onChange={this.onchangeUserEmail} />
              <span style={hStyle}>{this.state.user_emailErr}</span>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <label>Your website if any</label>
              <input type="text"  name="user_website" value={this.state.user_website} onChange={this.onchangeUserWebsite} />
              
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <label>Enter Your Comment</label>
              <textarea name="user_comment" value={this.state.user_comment} onChange={this.onchangeUserComment}></textarea>
              <span style={hStyle}>{this.state.user_commentErr}</span>
            </div>
            <div className="form-group">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LfxQnAUAAAAAE4UmivJIXxx3762N9ksKGY1iA9C"
                render="explicit"
                verifyCallback={this.verifyCallback}
                onloadCallback={this.ReCAPTCHALoaded}
                onChange={this.ReCAPTCHALoaded}
              />
               <span style={hStyle}>{this.state.recaptchaErr}</span>


            </div>
            <div className="clearfix"></div>
            <div className="read_more_blog hvr-wobble-horizontal comment_post">
              <button type="submit" className="btn btn-primary" >Post</button>
            </div></div>
        </div>
      </form>

    </Fragment>)
  }
}
export default withRouter(CommentForm)