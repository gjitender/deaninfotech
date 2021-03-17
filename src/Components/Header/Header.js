import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Config from '../config';


function check_checkboxes()
{
  var c = document.getElementsByClassName('checkbox2');
  for (var i = 0; i < c.length; i++)
  {
    if (c[i].checked) {return true}
  }
  return false;
}



const recaptchaRef = React.createRef();

export default class Header extends Component {
  openNav = () => {
    document.getElementById("myNav").style.height = "100%";
    document.body.style.overflow = 'hidden';
  }
  closeNav = () => {
    document.getElementById("myNav").style.height = "0%";
    document.body.style.overflow = 'visible';
  }


  
  constructor(props){
    super(props);
    this.state = {
      header_gq_name: '',
      header_gq_email: '',
      header_gq_phone: '',
      header_gq_skype: '',
      looking_for: [],
      select_your_budget_range: '',
      when_do_you_want_to_get_started: '',
      what_your_project_all_about: '',
      header_gq_attach_file: [],
      header_gq_nameErr: '',
      header_gq_emailErr: '',
      header_gq_phoneErr: '',
      header_gq_skypeErr: '',
      select_your_budget_rangeErr: '',
      when_do_you_want_to_get_startedErr: '',
      what_your_project_all_aboutErr: '',
      looking_forErr:'',
      file:null,
      isVerified : false,
      recaptchaErr:''
     
    }

    this.getFile = React.createRef();
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
  
  onSubmit=()=>{
    var  data = new FormData();
    data.append('header_gq_attach_file',this.state.file);
    data.append('header_gq_name',this.state.header_gq_name);
    data.append('header_gq_email',this.state.header_gq_email);
    data.append('header_gq_phone',this.state.header_gq_phone);
    data.append('header_gq_skype',this.state.header_gq_skype);
    data.append('looking_for',this.state.looking_for);
    data.append('select_your_budget_range',this.state.select_your_budget_range);
    data.append('when_do_you_want_to_get_started',this.state.when_do_you_want_to_get_started);
    data.append('what_your_project_all_about',this.state.what_your_project_all_about);
    let that = this;
    let validate = this.handleValidation();
    if (!validate) {

      let reqObj = {
        method:'POST',  
        url:Config.auth.baseurl+'perfectquote',
        headers:{Accept: 'application/json','Content-Type': 'multipart/form-data','Authorization':Config.auth.Authorization},
        data:data
      }
     
      axios(reqObj)
      .then((res)=>{
        that.setState({
          isVerified:false,
          recaptchaErr:''
        })
        //console.log(res);
        if(res.status===200){  
          alert('Your Message has been Sent Successfully')
           this.setState({header_gq_name:'',header_gq_email:'',header_gq_phone:'',header_gq_skype:'',looking_for:'',select_your_budget_range:'',when_do_you_want_to_get_started:'',what_your_project_all_about:'',header_gq_attach_file:''})
           document.getElementById("myNavclose").click();
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

    
    //return formIsValid;

    if(!check_checkboxes())
    console.log(this.state.looking_for);
    if(this.state.looking_for.length === 0) {
      this.setState({
        looking_forErr:'Please atleast select one service',
      })
      isError = true
    }
    else{
      this.setState({
        looking_forErr:'',
      })
    }

    if(this.state.header_gq_name === '') {
      this.setState({
        header_gq_nameErr:'Please enter your firstname',
      })
      isError = true
    }

    if(this.state.header_gq_email === '') {
      this.setState({
        header_gq_emailErr:'Please enter Valid email address',
      })
      isError = true
    }


    if(this.state.header_gq_phone === '') {
      this.setState({
        header_gq_phoneErr:'Please Enter Valid Phone Number',
      })
      isError = true
    }else if(isNaN(this.state.header_gq_phone)){
        this.setState({header_gq_phoneErr:'Please enter only numbers'});
        isError = true;
      }

      if(this.state.header_gq_skype === '') {
        this.setState({
          header_gq_skypeErr:'Please enter Valid skype Id',
        })
        isError = true
      }
     

      if(this.state.select_your_budget_range === '') {
        this.setState({
          select_your_budget_rangeErr:'Please Select Any Value',
        })
        isError = true
      }
      if(this.state.when_do_you_want_to_get_started === '') {
        this.setState({
          when_do_you_want_to_get_startedErr:'Please Select Any Value',
        })
        isError = true
      }
      if(this.state.what_your_project_all_about === '') {
        this.setState({
          what_your_project_all_aboutErr:'Please Write Something about Your Project',
        })
        isError = true
      }
     

    return isError;
    
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value,
      [e.target.name+'Err']:'',
      recaptchaErr:''
    })
    console.log(e);
  }

  checkboxes=(event)=>{
    let looking_for = document.getElementsByName('looking_for');
    let checkValues = [];
    if(looking_for.length>0){
      for (let index = 0; index < looking_for.length; index++) {
        
        if(looking_for[index].checked){
          checkValues.push(looking_for[index].value);
        }
  
      }
    }
    
    
      this.setState(prevState=>{
        return{
          looking_for:checkValues.length>0?checkValues:[],
          looking_forErr:checkValues.length>0?'':'Please atleast select one service'
        }
      }) 
  }

  render() { 
   
    return (
      <Fragment>

        <div id="myNav" className="request overlay">
          <div className="sub">
            <button className="closebtn" id="myNavclose" onClick={this.closeNav}>×</button>
            <div className="overlay-content">
              <div className="container">
                <h2>Get a perfect quote</h2>
                <div className="col-md-10 col-md-offset-1 col-sm-6 col-xs-12">
                  <div className="request-a-form">
                    <form name="header_geta_quote" id="header_geta_quote">
                      <input type="hidden" name="headergaqform" value="yes" />
                      <h2>TELL US ABOUT YOU</h2>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <input placeholder="Your Name" name="header_gq_name"type="text"  onChange={this.handleChange} value={this.state.header_gq_name} />
                        <span className="footererror">{this.state.header_gq_nameErr}</span>
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <input placeholder="Your Email" name="header_gq_email" type="email"  onChange={this.handleChange} value={this.state.header_gq_email}  />
                        <span className="footererror">{this.state.header_gq_emailErr}</span>
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <input placeholder="Phone No."  name="header_gq_phone" type="text"  onChange={this.handleChange} value={this.state.header_gq_phone} />
                        <span className="footererror">{this.state.header_gq_phoneErr}</span>
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <input placeholder="Skype ID/Whatsapp No." name="header_gq_skype" type="text"  onChange={this.handleChange} value={this.state.header_gq_skype} />
                        <span className="footererror">{this.state.header_gq_skypeErr}</span>
                      </div>
                      <h3>What are you looking for?*</h3>
                      
                      <div className="funkyradio form-group col-md-4 col-sm-6 col-xs-12">
                        <div className="funkyradio-default">
                          <input type="checkbox" className="checkbox2" name="looking_for" id="header_gq_radio1"   onChange={this.checkboxes} value="Enterprise Software Solutions" />
                          
                          <label htmlFor="header_gq_radio1">Enterprise Software Solutions</label>
                         
                        </div>
                      </div>
                      <div className="funkyradio form-group col-md-4 col-sm-6 col-xs-12">
                        <div className="funkyradio-default">
                          <input type="checkbox" className="checkbox2" name="looking_for" id="header_gq_radio2"   onChange={this.checkboxes} value="Creating a Mobile App" />
                         
                          <label htmlFor="header_gq_radio2">Creating a Mobile App</label>
                          
                        </div>
                      </div>
                      <div className="funkyradio form-group col-md-4 col-sm-6 col-xs-12">
                        <div className="funkyradio-default">
                          <input type="checkbox" className="checkbox2" name="looking_for"  id="header_gq_radio3" onChange={this.checkboxes} value="Web Development" />
                          
                          <label htmlFor="header_gq_radio3">Web Development</label>
                        </div>
                      </div>
                      <div className="funkyradio form-group col-md-4 col-sm-6 col-xs-12">
                        <div className="funkyradio-default">
                          <input type="checkbox" className="checkbox2" name="looking_for" id="header_gq_radio4"   onChange={this.checkboxes} value="Dedicated Team Service" />
                          
                          <label htmlFor="header_gq_radio4">Dedicated Team Service</label>
                        </div>
                      </div>
                      <div className="funkyradio form-group col-md-4 col-sm-6 col-xs-12">
                        <div className="funkyradio-default">
                          <input type="checkbox" className="checkbox2" name="looking_for" id="header_gq_radio5"  onChange={this.checkboxes} value="IT Consulting Services"  />
                          <label htmlFor="header_gq_radio5">IT Consulting Services</label>
                        </div>
                      </div>
                      <div className="funkyradio form-group col-md-4 col-sm-6 col-xs-12">
                        <div className="funkyradio-default">
                          <input type="checkbox" className="checkbox2" name="looking_for" id="header_gq_radio6"  onChange={this.checkboxes} value="Partnership Opportunities" />
                          <label htmlFor="header_gq_radio6">Partnership Opportunities</label>
                        </div>
                      </div>
                      <div className="funkyradio form-group col-md-12 col-sm-12 col-xs-12">
                      <span className="footererror">{this.state.looking_forErr}</span>
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <select name="select_your_budget_range" id="header_gq_budget_range" onChange={this.handleChange} value={this.state.select_your_budget_range}>
                          <option value="" defaultValue="">Select your budget range*</option>
                          <option value="< $100">&lt; $100</option>
                          <option value="$100 - $500">$100 - $500</option>
                          <option value="$500 - $1,000">$500 - $1,000</option>
                          <option value="$1,000 - $2,000">$1,000 - $2,000</option>
                          <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                          <option value="> $10,000">&gt; $10,000</option>
                        </select>
                        <span className="footererror">{this.state.select_your_budget_rangeErr}</span>
                      </div>
                      <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <select name="when_do_you_want_to_get_started" id="header_gq_get_started" onChange={this.handleChange} value={this.state.when_do_you_want_to_get_started}>
                          <option value="" defaultValue="">When do you want to get started?*</option>
                          <option value="Immediately">Immediately</option>
                          <option value="Within a Month">Within a Month</option>
                          <option value="1-3 Months">1-3 Months</option>
                          <option value="3-6 Months">3-6 Months</option>
                          <option value="6+ Months">6+ Months</option>
                        </select>
                        <span className="footererror">{this.state.when_do_you_want_to_get_startedErr}</span>
                      </div>
                      <div className="form-group col-md-12 col-sm-6 col-xs-12">
                        <input placeholder="What’s your project all about?" type="text" name="what_your_project_all_about" id="header_gq_all_about" onChange={this.handleChange} value={this.state.what_your_project_all_about} />
                        <span className="footererror">{this.state.what_your_project_all_aboutErr}</span>
                      </div>
                      <div className="form-group col-md-12 col-sm-6 col-xs-12">
                        <label className="btn-bs-file btn btn-lg btn-primary">
                          <strong><i className="fa fa-plus"></i>Attach any files you feel would be useful</strong>
                          <input type="file" ref={this.getFile} name="header_gq_attach_file" id="header_gq_attach_file" onChange={this.handleFile} />
                          
                        </label>
                      </div>
                      <div className="form-group col-md-12 col-sm-6 col-xs-12">
                     
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
                      <input type="hidden" className="hiddenRecaptcha required" name="hiddenRecaptcha_quote" id="hiddenRecaptcha_quote" aria-required="true" />
                      <div className="form-group col-md-12 col-sm-12 col-xs-12 text-center">
                        <input type="button" name="header_gq_submit" className="btn-submit" value="Let's Go!" onClick = {this.onSubmit} />
                      </div>
                    </form>
                    <div className="send-email">
                      Or send us an email at: <a href="mailto:sales@deaninfotech.com">sales@deaninfotech.com</a>
                    </div></div></div></div></div>
          </div>
        </div>
        <div className="header" />
        <header>
          <div className="navbar navbar-default navbar-static-top header" id="navbar">
            <div className="container">
              <div className="navbar-header">
                <div className="navbar-brand"><NavLink to="/"><img className="img-responsive" src={require('../../images/logo-footer.png')} alt="logo-footer" /></NavLink></div>
                <button className="navbar-toggle" data-toggle="collapse" data-target=".btnCollapse">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="collapse navbar-collapse btnCollapse">
                <div className="header-right">
                  <div className="desktop_nav">
                    <ul className="header-control2">
                      <li><NavLink to="/salesforce-development-services" onClick="window.location.reload();"> <img className="img-responsive" src={require('../../images/salesforce-icon.png')} alt="salesforce"  /> salesforce</NavLink></li>
                      <li><NavLink to="/contact" onClick="window.location.reload();">Contact</NavLink></li>
                      <li className="call contact_info" id="flip">
                        <i className="fa fa-phone" /> <i className="caret" />
                        <div className="contact-info collapse contact_info_div" id="panel">
                          <h2>Deaninfotech Contact</h2>
                          <div className="inquiry-block">
                            <ul>
                              <li><img src={require('../../images/usa-flg.png')} alt="usa-flg" /> <span> +1 407-634-4433  </span></li>
                              <li><img src={require('../../images/india-flag.png')} alt="india-flag" /> <span> +91 981-047-0129  </span></li>
                              <li><NavLink to="mailto:sales@deaninfotech.com"><i className="fa fa-envelope" />  Email id: sales@deaninfotech.com </NavLink></li>
                              <li><NavLink to="skype:deaninfotech?call"><i className="fa fa-skype" /> deaninfotech</NavLink> </li>
                            </ul>
                          </div>
                          <div className="inquiry-block">
                            <h2>For HR Inquiry</h2>
                            <ul>
                              <li> <i className="fa fa-envelope" /> <NavLink to="mailto:hr@deaninfotech.com">hr@deaninfotech.com </NavLink></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li><button className="request_btn" onClick={this.openNav}>Request a quote</button></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right ">
                      <li className="active"><NavLink to="/"  onClick="window.location.reload();">HOME</NavLink></li>
                      <li className="dropdown">
                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown">WHY DEAN<span className="caret" /></NavLink>
                        <ul className="dropdown-menu" role="menu">
                          <div className="container">
                            <div className="col-sm-3 solutions">
                              <NavLink to="/about" onClick="window.location.reload();">
                                <h4> About Dean</h4>
                                <div className="img-wrp">
                                  <img src={require('../../images/about-us.jpg')} alt="" className="image" />
                                  <div className="overlay">
                                    <div className="text">About Dean</div>
                                  </div>
                                </div>
                              </NavLink>
                            </div>
                            <div className="col-sm-3 solutions">
                              <NavLink to="/our-team" onClick="window.location.reload();">
                                <h4> Our Team</h4>
                                <div className="img-wrp">
                                  <img src={require('../../images/team.jpg')} alt="" className="image" />
                                  <div className="overlay">
                                    <div className="text">Our Team</div>
                                  </div>
                                </div>
                              </NavLink>
                            </div>
                            <div className="col-sm-3 solutions">
                              <NavLink to="/testimonial" onClick="window.location.reload();">
                                <h4> Testimonials</h4>
                                <div className="img-wrp">
                                  <img src={require('../../images/testimonials.jpg')} alt="" className="image" />
                                  <div className="overlay">
                                    <div className="text">Testimonials</div>
                                  </div>
                                </div>
                              </NavLink>
                            </div>
                            <div className="col-sm-3 solutions">
                              <NavLink to="/quality-assurance" onClick="window.location.reload();">
                                <h4> Quality Assurance Process</h4>
                                <div className="img-wrp">
                                  <img src={require('../../images/quality-assurance-process.jpg')} alt="" className="image" />
                                  <div className="overlay">
                                    <div className="text">Quality Assurance Process</div>
                                  </div>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="/enterprise-software-development" onClick="window.location.reload();">ENTERPRISE SOLUTION</NavLink>
                      </li>
                      <li className="dropdown">
                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown" >
                          SERVICES<span className="caret" />
                        </NavLink>
                        <ul className=" dropdown-menu" role="menu">
                          <div className="container">
                            <div className="col-sm-3 text-left">
                              <NavLink to="/javascript-development-company" onClick="window.location.reload();" ><h4> JAVASCRIPT</h4>
                                <div className="img-wrp">

                                  <img src={require('../../images/mean-stack.png')} alt="Avatar" className="image" />

                                  <div className="overlay">
                                    <div className="text">JAVASCRIPT</div>
                                  </div>
                                </div></NavLink>
                            </div>
                            <div className="col-sm-3 text-left">
                              <NavLink to="/php-development-company" onClick="window.location.reload();"><h4>PHP</h4></NavLink>
                              <p><NavLink to="/laravel-development-company" onClick="window.location.reload();">Laravel</NavLink></p>
                              <p><NavLink to="/codeigniter-development-company" onClick="window.location.reload();">CodeIgniter</NavLink></p>
                              <p><NavLink to="/wordpress-development-Company" onClick="window.location.reload();">Wordpress</NavLink></p>
                            </div>
                            <div className="col-sm-3 text-left">
                              <NavLink to="/.net-development-company" onClick="window.location.reload();"><h4>.NET</h4></NavLink>
                              <p><NavLink to="/asp.net-development-company" onClick="window.location.reload();">ASP.NET </NavLink></p>
                              <p><NavLink to="/asp.net-mvc-development-company" onClick="window.location.reload();">ASP.NET MVC</NavLink></p>
                              <p><NavLink to="/umbraco-development-company" onClick="window.location.reload();">UMBRACO</NavLink></p>
                              <p><NavLink to="/nopcommerce-development-company" onClick="window.location.reload();">Nopcommerce</NavLink></p>
                              <p><NavLink to="/dotnetnuke-development-company" onClick="window.location.reload();">DotNetNuke</NavLink></p>
                            </div>
                            <div className="col-sm-3 text-left">
                              <NavLink to="/mobile-application-development" onClick="window.location.reload();"><h4>MOBILE</h4></NavLink>
                              <p><NavLink to="/android-app-development-company" onClick="window.location.reload();">Android </NavLink></p>
                              <p><NavLink to="/ios-app-development-company" onClick="window.location.reload();">ios</NavLink></p>
                              <p><NavLink to="/hybrid-app-development-company" onClick="window.location.reload();">Hybrid</NavLink></p>
                            </div>
                          </div>
                        </ul>
                      </li>
                      <li><NavLink to="/portfolio" onClick="window.location.reload();">PORTFOLIO</NavLink></li>
                      <li><NavLink to="/career" onClick="window.location.reload();">CAREER</NavLink></li>
                      <li><NavLink to="/blog" onClick="window.location.reload();">BLOG</NavLink></li>
                    </ul>
                  </div>
                  <div className="mobile_nav">
                    <ul className="nav navbar-nav navbar-right">
                      <li><button className="request_btn" onClick={this.openNav}>Request a quote</button></li>
                      <li className="active"><NavLink to="/" onClick="window.location.reload();">HOME</NavLink></li>
                      <li className="dropdown">
                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown">WHY DEAN<span className="caret" /></NavLink>
                        <ul className="dropdown-menu" role="menu">
                          <div className="container">
                            <div className="col-sm-3 solutions">
                              <NavLink to="/about" onClick="window.location.reload();">
                                <h4> About Dean</h4>
                                <div className="img-wrp">
                                  <img src={require('../../images/about-us.jpg')} alt="" className="image" />
                                  <div className="overlay">
                                    <div className="text">About Dean</div>
                                  </div>
                                </div>
                              </NavLink>
                            </div>
                            <div className="col-sm-3 solutions">
                              <NavLink to="/our-team" onClick="window.location.reload();">
                                <h4> Our Team</h4>
                                <div className="img-wrp">
                                  <img src={require('../../images/team.jpg')} alt="" className="image" />
                                  <div className="overlay">
                                    <div className="text">Our Team</div>
                                  </div>
                                </div>
                              </NavLink>
                            </div>
                            <div className="col-sm-3 solutions">
                              <NavLink to="/testimonial" onClick="window.location.reload();">
                                <h4> Testimonials</h4>
                                <div className="img-wrp">
                                  <img src={require('../../images/testimonials.jpg')} alt="" className="image" />
                                  <div className="overlay">
                                    <div className="text">Testimonials</div>
                                  </div>
                                </div>
                              </NavLink>
                            </div>
                            <div className="col-sm-3 solutions">
                              <NavLink to="/quality-assurance" onClick="window.location.reload();">
                                <h4> Quality Assurance Process</h4>
                                <div className="img-wrp">
                                  <img src={require('../../images/quality-assurance-process.jpg')} alt="" className="image" />
                                  <div className="overlay">
                                    <div className="text">Quality Assurance Process</div>
                                  </div>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="/enterprise-software-development" onClick="window.location.reload();">ENTERPRISE SOLUTION</NavLink>
                      </li>
                      <li>
                        <NavLink to="/salesforce-development-services" onClick="window.location.reload();">Salesforce</NavLink>
                      </li>
                      <li className="dropdown">
                        <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown">
                          SERVICES<span className="caret" />
                        </NavLink>
                        <ul className="dropdown-menu" role="menu">
                          <div className="container">
                            <div className="col-sm-3 text-left">
                              <NavLink to="/javascript-development-company" onClick="window.location.reload();"><h4>JAVASCRIPT</h4>
                                <div className="img-wrp">

                                  <img src={'../../images/mean-stack.png'} alt="Avatar" className="image" />

                                  <div className="overlay">
                                    <div className="text">JAVASCRIPT</div>
                                  </div>
                                </div></NavLink>
                            </div>
                            <div className="col-sm-3 text-left">
                              <NavLink to="/php-development-company" onClick="window.location.reload();"><h4>PHP</h4></NavLink>
                              <p><NavLink to="/laravel-development-company" onClick="window.location.reload();">Laravel</NavLink></p>
                              <p><NavLink to="/codeigniter-development-company" onClick="window.location.reload();">CodeIgniter</NavLink></p>
                              <p><NavLink to="/wordpress-development-Company" onClick="window.location.reload();">Wordpress</NavLink></p>
                            </div>
                            <div className="col-sm-3 text-left">
                              <NavLink to="/.net-development-company" onClick="window.location.reload();"><h4>.NET</h4></NavLink>
                              <p><NavLink to="/asp.net-development-company" onClick="window.location.reload();">ASP.NET </NavLink></p>
                              <p><NavLink to="/asp.net-mvc-development-company" onClick="window.location.reload();">ASP.NET MVC</NavLink></p>
                              <p><NavLink to="/umbraco-development-company" onClick="window.location.reload();">UMBRACO</NavLink></p>
                              <p><NavLink to="/nopcommerce-development-company" onClick="window.location.reload();">Nopcommerce</NavLink></p>
                              <p><NavLink to="/dotnetnuke-development-company" onClick="window.location.reload();">DotNetNuke</NavLink></p>
                            </div>
                            <div className="col-sm-3 text-left">
                              <NavLink to="/mobile-application-development" onClick="window.location.reload();"><h4>MOBILE</h4></NavLink>
                              <p><NavLink to="/android-app-development-company" onClick="window.location.reload();">Android </NavLink></p>
                              <p><NavLink to="/ios-app-development-company" onClick="window.location.reload();">ios</NavLink></p>
                              <p><NavLink to="/hybrid-app-development-company" onClick="window.location.reload();">Hybrid</NavLink></p>
                            </div>
                          </div>
                        </ul>
                      </li>
                      <li><a href="/portfolio" onClick="window.location.reload();">PORTFOLIO</a></li>
                      <li><NavLink to="/career" onClick="window.location.reload();">CAREER</NavLink></li>
                      <li><NavLink to="/contact" onClick="window.location.reload();">Contact</NavLink></li>
                      <li><NavLink to="/blog" onClick="window.location.reload();">BLOG</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end container --> */}
          </div>
        </header>
        {/* <!-- header end--> */}
      </Fragment>
    );
  }
}
