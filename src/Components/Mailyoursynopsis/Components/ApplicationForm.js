import React, { Component, Fragment } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Config from '../../config';


const recaptchaRef = React.createRef();


export default class ApplicationForm extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      application_select: '',
      application_name: '',
      application_email: '', 
      application_phone: '',
      application_dob: '',
      application_select_total_experience: '',
      current_company: '',
      current_designation: '',
      current_location: '',
      application_file: [],
      application_selectErr: '',
      application_nameErr: '',
      application_emailErr: '',
      application_phoneErr: '',
      application_dobErr: '',
      application_select_total_experienceErr: '',
      current_companyErr: '',
      current_designationErr: '',
      current_locationErr: '',
      file:null,
      isVerified : false,
      recaptchaErr:''
    }
    this.getFile = React.createRef();
    this.handleChange=this.handleChange.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  handleFile=(e)=> {
    var file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        file: file,
      });
    }
    reader.readAsDataURL(file)
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

    var  data = new FormData();
    data.append('application_file',this.state.file);
    data.append('application_select',this.state.application_select);
    data.append('application_name',this.state.application_name);
    data.append('application_email',this.state.application_email);
    data.append('application_phone',this.state.application_phone);
    data.append('application_dob',this.state.application_dob);
    data.append('application_select_total_experience',this.state.application_select_total_experience);
    data.append('current_company',this.state.current_company);
    data.append('current_designation',this.state.current_designation);
    data.append('current_location',this.state.current_location);
    data.append('referrer',localStorage.referrer ? localStorage.referrer : '');
    let that = this;
    
    let validate = this.handleValidation();
    if (!validate) {
      
      let carreqObj = {
        method:'POST',  
        url:Config.auth.baseurl+'career',
        headers:{Accept: 'application/json','Content-Type': 'multipart/form-data','Authorization':Config.auth.Authorization},
        data:data
      }
     
      axios(carreqObj)
      .then((res)=>{
        that.setState({
          isVerified:false,
          recaptchaErr:''
        })
        console.log(res);
        if(res.status===200){  
          alert('Your Message has been Sent Successfully')
           this.setState({application_select:'',application_name:'',application_email:'',application_phone:'',application_dob:'',application_select_total_experience:'',current_company:'',current_designation:'',current_location:'',application_file:''});
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

    if(this.state.application_select === '') {
      this.setState({
        application_selectErr:'Please Select Your Position',
      })
      isError = true
    }

    if(this.state.application_name === '') {
      this.setState({
        application_nameErr:'Please enter your name',
      })
      isError = true
    }

    if(this.state.application_email === '') {
      this.setState({
        application_emailErr:'Please enter Valid email address',
      })
      isError = true
    }


    if(this.state.application_phone === '') {
      this.setState({  
        application_phoneErr:'Please Enter Valid Phone Number',
      })
      isError = true
    }else if(isNaN(this.state.application_phone)){
        this.setState({application_phoneErr:'Please enter only numbers'});
        isError = true;
      }
   

    if(this.state.application_dob === '') {
      this.setState({
        application_dobErr:'Please Enter Your Date Of Birth',
      })
      isError = true
    }

    if(this.state.application_select_total_experience === '') {
      this.setState({
        application_select_total_experienceErr:'Please Select Your Experience',
      })
      isError = true
    }

    if(this.state.current_company === '') {
      this.setState({
        current_companyErr:'Please Enter Current Company',
      })
      isError = true
    }

    if(this.state.current_designation === '') {
      this.setState({
        current_designationErr:'Please Enter Current Designation',
      })
      isError = true
    }

    if(this.state.current_location === '') {
      this.setState({
        current_locationErr:'Please Enter Current Location',
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
        <section className="career-form-one career-form-on-form">

          <div className="container wow animate fadeInLeft">

             <form>
            <div className="form-group col-md-12 col-sm-6 col-xs-12" >
              <select className="form-control" name="application_select" onChange={this.handleChange} value={this.state.application_select}>
                        <option>Position Applied For</option>
                        <option>PHP Developer</option>
                        <option>ASP Developer</option>
                        <option>Web Desiginer/Developer(xhtml/Css)</option>
                        <option>QA Tester</option>
                        <option>Account Assistant</option>
                        <option>Business Development Executive (BDE)</option>
                        <option>Front End Developer (AngularJS / jQuery)</option>
                        <option>SEO Fresher/Trainee Jobs</option>
              </select>
              <span className="footererror">{this.state.application_selectErr}</span>
            </div>

            <div className="col-md-12">
              <h3>Personal Information :-</h3>
            </div>

            <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <input type="text" className="form-control" name="application_name" placeholder="Enter Name" onChange={this.handleChange} value={this.state.application_name} />
              <span className="footererror">{this.state.application_nameErr}</span>
            </div>

            <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <input type="text" className="form-control" name="application_email" placeholder="Email Address" onChange={this.handleChange} value={this.state.application_email} />
              <span className="footererror">{this.state.application_emailErr}</span>
            </div>

            <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <input type="text" className="form-control" name="application_phone" placeholder="Phone No." onChange={this.handleChange} value={this.state.application_phone} />
              <span className="footererror">{this.state.application_phoneErr}</span>
            </div>

            <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <input type="text" className="form-control" name="application_dob" placeholder="Date of Birth" onChange={this.handleChange} value={this.state.application_dob} />
              <span className="footererror">{this.state.application_dobErr}</span>
            </div>

            <div className="col-md-12">
              <h3>Work Experience :-</h3>
            </div>

            <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <select className="form-control" name="application_select_total_experience" onChange={this.handleChange} value={this.state.application_select_total_experience}>
                <option selected="Total Experience">Total Experience</option>
                <option>Fresher</option>
                <option>1 Year</option>
                <option>2 Year</option>
                <option>3 Year</option>
                <option>4 Year</option>
                <option>5 Year</option>
                <option>6 Year</option>
                <option>7 Year</option>
                <option>8 Year</option>
                <option>9 Year</option>
                <option>10 Year</option>
                <option>11 Year</option>
                <option>12 Year</option>
                <option>13 Year</option>
                <option>14 Year</option>
                <option>15 Year</option>
              </select>
              <span className="footererror">{this.state.application_select_total_experienceErr}</span>
            </div>

            <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <input type="text" className="form-control" name="current_company" placeholder="Current Company" onChange={this.handleChange} value={this.state.current_company} />
              <span className="footererror">{this.state.current_companyErr}</span>
            </div>

            <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <input type="text" className="form-control" name="current_designation" placeholder="Current Designation" onChange={this.handleChange} value={this.state.current_designation} />
              <span className="footererror">{this.state.current_designationErr}</span>
            </div>

            <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <input type="text" className="form-control" name="current_location" placeholder="Current Location" onChange={this.handleChange} value={this.state.current_location} />
              <span className="footererror">{this.state.current_locationErr}</span>
            </div>

            <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <input type="file" className="form-control" name="application_file" ref={this.getFile} onChange={this.handleFile} />
              
            </div>

              <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey="6LfxQnAUAAAAAE4UmivJIXxx3762N9ksKGY1iA9C"
                          render="explicit"
                          verifyCallback={this.verifyCallback}
                          onloadCallback={this.ReCAPTCHALoaded}
                          onChange={this.ReCAPTCHALoaded}
                        />   
                        <span style={{color:"red", float:'left'}} id='reErr' >{this.state.recaptchaErr}</span>
                      
            </div>

            <div className="form-group col-md-6 col-sm-6 col-xs-12">
              <input type="button" value="Submit" className="btn" onClick = {this.onSubmit} />
            </div>
            </form>
          </div>

        </section>

     

        <div className="clearfix" />
      </Fragment>
    );
  }
}
