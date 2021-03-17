import React, { Component, Fragment } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Config from './config';



const recaptchaRef = React.createRef();






export default class RequestForm extends Component {

    
constructor(props){
    super(props);

    this.state = {
      usname: '',
      usemail: '',
      us_phone_number: '',
      select_cat: '',
      budget: "",
      usnameErr: '',
      usemailErr: '',
      phoneErr: '',
      budgetErr: '',
      select_catErr: '',
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
    let {usname,usemail,us_phone_number,select_cat,budget} = this.state;
    let data = {usname,usemail,us_phone_number,select_cat,budget};

    data.referrer = localStorage.referrer ? localStorage.referrer : '';

    let that = this;
    if (!validate) {
      
      let userreqObj = {
        method:'POST',  
        url:Config.auth.baseurl+'request',
        headers:{'Content-Type': 'application/json','Authorization':Config.auth.Authorization},
        data:data
      }
      axios(userreqObj)
      .then((res)=>{
        that.setState({
          isVerified:false,
          recaptchaErr:''
        })
        console.log(res);
        if(res.status===200){
          alert('Your Message has been Sent Successfully')
           this.setState({usname:'',usemail:'',us_phone_number:'',select_cat:'', budget:''});
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

    if(this.state.usname === '') {
      this.setState({
        usnameErr:'Please enter your name',
      })
      isError = true
    }

    if(this.state.usemail === '') {
      this.setState({
        usemailErr:'Please enter Valid email address',
      })
      isError = true
    }


    if(this.state.us_phone_number === '') {
      this.setState({
        us_phone_numberErr:'Please Enter Valid Phone Number',
      })
      isError = true
    }else if(isNaN(this.state.us_phone_number)){
        this.setState({us_phone_numberErr:'Please enter only numbers'});
        isError = true;
      }
   

    if(this.state.select_cat === '') {
      this.setState({
        select_catErr:'Please Select Something',
      })
      isError = true
    }

    if(this.state.budget === '') {
      this.setState({
        budgetErr:"Please Select Your Budget",
      });
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
      
     
                        <form id="getfreequote">
                            <h2>Request a Free Quote</h2>
                            <div className="form-group">
                                <input type="text" placeholder="Name" id="usname" name="usname" onChange={this.handleChange} value={this.state.usname} />
                                <span className="footererror">{this.state.usnameErr}</span>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Email" id="usemail" name="usemail" onChange={this.handleChange} value={this.state.usemail} />
                                <span className="footererror">{this.state.usemailErr}</span>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Phone Number" id="us_phone_number" name="us_phone_number" onChange={this.handleChange} value={this.state.us_phone_number} />
                                <span className="footererror">{this.state.us_phone_numberErr}</span>
                            </div>
                            <div className="form-group">
                                <select id="select_cat" name="select_cat"  onChange={this.handleChange} value={this.state.select_cat}>
                                <option value="Select Service">Select Any Service</option>
                           <option value="PHP Web Apps">PHP Web Apps</option>
                           <option value=".Net Web Apps">.Net Web Apps</option>
                           <option value="Mobile Apps">Mobile Apps</option>
                           <option value="Web Designing">Web Designing</option>
                           <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                        <span className="footererror">{this.state.select_catErr}</span>
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
                            <div className="form-group col-for">
                                <input type="button" value="Submit" onClick = {this.onSubmit} id="getfreequotebutton" className="btn" />
                            </div>
                        </form>
                    
        
      </Fragment>
    );
  }
}
