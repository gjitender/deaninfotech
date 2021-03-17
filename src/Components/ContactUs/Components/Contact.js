import React, { Component, Fragment } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Config from '../../config';
import ImageWebp from '../../../ImageWebp'

const recaptchaRef = React.createRef();

const title = require('../images/title.png');



export default class Contact extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      con_name: '',
      con_email: '',
      con_phone: '',
      budget: '',
      con_message: '',
      con_nameErr: '',
      con_emailErr: '',
      con_phoneErr: '',
      budgetErr: '',
      con_messageErr: '',
      isVerified : false,
      recaptchaErr:''
    }
    this.handleChange=this.handleChange.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
  verifyCallback=(response)=> {
    console.log(response)

    if (response) {
      this.setState({
        isVerified: true,
        recaptchaErr:''
      })
    }
  }
 
  ReCAPTCHALoaded=()=> {
    document.getElementById('reErr').innerHTML='';
    this.setState({
      isVerified:true,
      recaptchaErr:''
    })
  }


  onSubmit=()=>{
    let validate = this.handleValidation();
    let {con_name,con_email,con_phone,con_message,budget} = this.state;
    let data = {con_name,con_email,con_phone,con_message,budget};
    data.referrer = localStorage.referrer ? localStorage.referrer : '';
    let that = this;
    if (!validate) {
      
      let conreqObj = {
        method:'POST',  
        url:Config.auth.baseurl+'Contact',
        headers:{'Content-Type': 'application/json','Authorization':Config.auth.Authorization},
        data:data
      }
      axios(conreqObj)
      .then((res)=>{
        that.setState({
          isVerified:false,
          recaptchaErr:''
        })
        console.log(res);
        if(res.status===200){
          alert('Your Message has been Sent Successfully')
           this.setState({con_name:'',con_email:'',con_phone:'',con_message:'',budget:''});
           window.location.reload();
        }
      })

      .catch((err)=>{
      })        
    }
  }

    

  handleValidation() {
    let isError = false;

    // Google Recaptch
    if (!this.state.isVerified) {
      this.setState({
        recaptchaErr: "Verify you are human.",
      });
      isError = true;
    }

    if(this.state.con_name === '') {
      this.setState({
        con_nameErr:'Please enter your name',
      })
      isError = true
    }

    if(this.state.con_email === '') {
      this.setState({
        con_emailErr:'Please enter Valid email address',
      })
      isError = true
    }


    if(this.state.con_phone === '') {
      this.setState({
        con_phoneErr:'Please Enter Valid Phone Number',
      })
      isError = true
    }else if(isNaN(this.state.con_phone)){
        this.setState({con_phoneErr:'Please enter only numbers'});
        isError = true;
      }
   

    if(this.state.con_message === '') {
      this.setState({
        con_messageErr:'Please Enter Text Message',
      })
      isError = true
    }
    if(this.state.budget === '') {
      this.setState({
        budgetErr:'Please Select Your Budget',
      })
      isError = true
    }
      return isError;
  }


  handleChange(e){    		
    this.setState({
      [e.target.name]:e.target.value,
      [e.target.name+'Err']:'',
      recaptchaErr:''
    })
  }

  render() {
    return (
      <Fragment>
        <section className="contact-us">
          <div className="overlay-bg p-80">
            <div className="container">
              <div className="col-md-7 col-sm-6 col-xs-12 wow animate fadeInLeft">
                <div className="first-block">
                  <h2 className="uppercase">Contact Information</h2>
                  <div className="address-one">
                    <h3>US OFFICE</h3>
                    <address>
                      197 S 104th St, Suite C Louisville, CO 80027
                    </address>
                    <address>
                      6861, West Colonial Drive Orlando, Florida - 32818
                      <span> <i className="fa fa-phone" /> +1 407-634-4433</span>
                    </address>
                  </div>
                  <div className="address-two">
                    <h3>INDIA OFFICE</h3>
                    <h6 style={{color:"white"}}><b>NOIDA OFFICE</b></h6>
                    <address>
                              C25, C Block, Sector 8, Noida, Uttar Pradesh 201301
                     
                      <span><i className="fa fa-phone" /> +91 981-047-0129</span>
                    </address>
                    <h6 style={{color:"white"}}><b>FARIDABAD OFFICE</b></h6>
                    <address>
                      SCO-12, Sector-16,
                      Faridabad, Haryana - 121002
                      <span> <i className="fa fa-phone" /> +91 981-047-0129</span>
                    </address>
                   
                  
                   
                   
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-6 col-xs-12 right">
              <div className="second-block contact-form">
                        <h2>Get In Touch</h2>
                        <form id="getintouch_contact">
                           <div className="form-group">
                              <input type="text" className="form-control" required="" id="name" name="con_name" placeholder="Name" onChange={this.handleChange} value={this.state.con_name} />
                              <span className="footererror">{this.state.con_nameErr}</span>
                           </div>
                           <div className="form-group">
                              <input type="text" className="form-control" required="" id="email" name="con_email" placeholder="Email" onChange={this.handleChange} value={this.state.con_email} />
                              <span className="footererror">{this.state.con_emailErr}</span>
                           </div>
                           <div className="form-group">
                              <input type="text" className="form-control" required="" id="phone" name="con_phone" placeholder="Phone No." onChange={this.handleChange} value={this.state.con_phone} />
                              <span className="footererror">{this.state.con_phoneErr}</span>
                           </div>
                           <div className="form-group">
                              <select className="form-control" name="budget" id="header_gq_budget_range" onChange={this.handleChange} value={this.state.budget}>
                                <option value="" defaultValue="">Select your budget range*</option>
                                <option value="< $100">&lt; $100</option>
                                <option value="$100 - $500">$100 - $500</option>
                                <option value="$500 - $1,000">$500 - $1,000</option>
                                <option value="$1,000 - $2,000">$1,000 - $2,000</option>
                                <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                <option value="> $10,000">&gt; $10,000</option>
                              </select>
                              <span className="footererror">{this.state.budgetErr}</span>
                            </div>
                           <div className="form-group">
                              <textarea className="form-control" required="" id="message" name="con_message" placeholder="Message" onChange={this.handleChange} value={this.state.con_message}></textarea>
                              <span className="footererror">{this.state.con_messageErr}</span>
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
                              <span style={{ color: "red", float: 'left' }} id='reErr' >{this.state.recaptchaErr}</span>

                             </div>
                                        <div className="form-group">
                                            <input type="button" value="Submit" className="btn" id="get_in_touchsbmt" onClick = {this.onSubmit} />
                           </div>
                        </form>
                     </div>
                <div className="water">
                  <div className="dot" />
                </div>
              </div>
              <div className="row">
                <div className="address">
                <figure>
                <ImageWebp
                  srcWebp={title}
                  src={title}
                  />
                  {/* <img src={title} alt="contact" /> */}
                  </figure>
                  
                  <ul>
                    <li><mark><i className="fa fa-envelope" /></mark> <span> <cite>Email id</cite><a href="mailto:sales@deaninfotech.com">sales@deaninfotech.com</a></span></li>
                    <li><mark><i className="fa fa-phone" /></mark> <span> <cite>Phone No.</cite> +1 407-634-4433 <br />
+91 981-047-0129
                    </span>
                    </li>
                    <li><mark><i className="fa fa-skype" /></mark> <span> <cite>Skype</cite> <a href="skype:deaninfotech?call">deaninfotech</a></span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
     
        <div className="clearfix" />
      </Fragment>
    );
  }
}
