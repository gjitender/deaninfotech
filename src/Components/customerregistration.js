import React, { Component, Fragment } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Config from './config';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Banner from './customerbanner/Components/Banner';
import ModernDatepicker from 'react-modern-datepicker';

const recaptchaRef = React.createRef();

export default class CustomerRegistration extends Component {


  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      MarriedUnmarried: '',
      Companyname: '',
      Website: '',
      country: '',
      region: '',
      Skype: '',
      LinkedIn: '',
      Facebook: '',
      message: '',
      nameErr: '',
      emailErr: '',
      phoneErr: '',
      CompanynameErr: '',
      WebsiteErr: '',
      CountryErr: '',
      regionErr: '',
      SkypeErr: '',
      isVerified: false,
      recaptchaErr: '',
      Birthday: '',
      Anniversary: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeAnniversary = this.handleChangeAnniversary.bind(this);
    
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
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

  onSubmit = () => {
    let validate = this.handleValidation();
    let { name, email, phone, message, MarriedUnmarried, Companyname, Website, country, region, Skype, LinkedIn, Facebook, Birthday, Anniversary } = this.state;
    let data = { name, email, phone, message, MarriedUnmarried, Companyname, Website, country, region, Skype, LinkedIn, Facebook, Birthday, Anniversary };
    data.referrer = localStorage.referrer ? localStorage.referrer : '';
    let that = this;
    if (!validate) {

      let reqObj = {
        method: 'POST',
        url: Config.auth.baseurl + 'customerdetails',
        headers: { 'Content-Type': 'application/json', 'Authorization': Config.auth.Authorization },
        data: data
      }
      axios(reqObj)
        .then((res) => {
          that.setState({
            isVerified: false,
            recaptchaErr: ''
          })
          console.log(res);
          if (res.status === 200) {
            alert('Your Message has been Sent Successfully')
            this.setState({ name: '', email: '', phone: '', message: '', MarriedUnmarried: '', Companyname: '', Website: '', country: '', region: '', Skype: '', LinkedIn: '', Facebook: '', Birthday: '', Anniversary: '' });
            window.location.reload();
          }
        })

        .catch((err) => {
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

    if (this.state.name === '') {
      this.setState({
        nameErr: 'Please enter your name',
      })
      isError = true
    }

    if (this.state.email === '') {
      this.setState({
        emailErr: 'Please enter Valid email address',
      })
       isError = true
    } 


    if (this.state.phone === '') {
      this.setState({
        phoneErr: 'Please Enter Valid Phone Number',
      })
      isError = true
    } else if (isNaN(this.state.phone)) {
      this.setState({ phoneErr: 'Please enter only numbers' });
      isError = true;
    }
  
  if (this.state.Companyname === '') {
      this.setState({
        CompanynameErr: 'Please Enter Your Company Name',
      })
      isError = true
    }


    if (this.state.Website === '') {
      this.setState({
        WebsiteErr: 'Please Enter Your Website URL',
      })
      isError = true
    }


    if (this.state.country === '') {
      this.setState({
        countryErr: 'Please Select Your Country',
      })
      isError = true
    }

    if (this.state.region === '') {
      this.setState({
        regionErr: 'Please Select Your Region',
      })
      isError = true
    }


    if (this.state.Skype === '') {
      this.setState({
        SkypeErr: 'Please Enter Your Skype Id',
      })
      isError = true
    }
    return isError;
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name + 'Err']: '',
      recaptchaErr: ''
    })
  }

  handleChangeDate(date) {
    this.setState({
      Birthday: date
    });
  }
  handleChangeAnniversary(date) {
    this.setState({
      Anniversary: date
    });
  }

  marriedCheck = () => {
    if (document.getElementById('Married').toggleAttribute) {
      document.getElementById('Anniversary').style.display = 'block';
    }
  }

  unmarriedCheck = () => {
    if (document.getElementById('UnMarried').toggleAttribute) {
      document.getElementById('Anniversary').style.display = 'none';
    }
  }




  render() {
    const { country, region } = this.state;
    return (
      <Fragment>
        <Header />
        <Banner />
        <div className="customer_registration">
          <div className="container">  
            <div className="row">
              <div className="footer-info-second-block">
                <div className="col-md-1"></div>
                <div className="col-md-10 wow animate fadeInRight inner">
                 <form name="contactform" className="contactform">
                    <fieldset>
                      <div className="row">
                      
                        <div className="form-group col-md-6 col-sm-6 col-xs-12 min_h_for">
                          <input type="text" placeholder="Full Name *" name='name' onChange={this.handleChange} value={this.state.name} />
                          <span className="footererror">{this.state.nameErr}</span>
                        </div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12 min_h_for">
                          <input type="email" placeholder="Email *" name='email' onChange={this.handleChange} value={this.state.email} />
                          <span className="footererror">{this.state.emailErr}</span>
                        </div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12 min_h_for">
                          <input type="tel" placeholder="Mobile No. *" name="phone" onChange={this.handleChange} value={this.state.phone} maxlength="10" />
                          <span className="footererror">{this.state.phoneErr}</span>
                        </div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12 min_h_for">
                          <input type="text" placeholder="Company/Business *" name='Companyname' onChange={this.handleChange} value={this.state.Companyname} />
                          <span className="footererror">{this.state.CompanynameErr}</span>
                        </div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12 min_h_for">
                          <input type="url" placeholder="Website *" name='Website' onChange={this.handleChange} value={this.state.Website} />
                          <span className="footererror">{this.state.WebsiteErr}</span>
                        </div>

                        <div className="form-group col-md-6 col-sm-6 col-xs-12 min_h_for">
                          <CountryDropdown
                            value={country}
                            onChange={(val) => this.selectCountry(val)}
                            name='country'
                            defaultOptionLabel= 'Select Country *'
                          />
                          <span className="footererror">{this.state.countryErr}</span>
                        </div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12 min_h_for">
                          <RegionDropdown
                            country={country}
                            name='region'
                            value={region}
                            onChange={(val) => this.selectRegion(val)}
                            blankOptionLabel='Select Region *'
                            />
                          <span className="footererror">{this.state.regionErr}</span>
                        </div>


                        <div className="form-group col-md-6 col-sm-6 col-xs-12 min_h_for">
                          <input type="email" placeholder="Skype *" name='Skype' onChange={this.handleChange} value={this.state.Skype} />
                          <span className="footererror">{this.state.SkypeErr}</span>
                        </div>
                        <div className="clearfix"></div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12 min_h_for">
                          <input type="email" placeholder="LinkedIn" name='LinkedIn' onChange={this.handleChange} value={this.state.LinkedIn} />
                        </div>

                        <div className="form-group col-md-6 col-sm-6 col-xs-12 min_h_for">
                          <input type="email" placeholder="Facebook" name='Facebook' onChange={this.handleChange} value={this.state.Facebook} />
                        </div>

                        <div className="form-group col-md-6 col-sm-6 col-xs-12 min_h_for">
                         <ModernDatepicker
                            date={this.state.Birthday}
                            format={'DD-MM-YYYY'}
                            showBorder
                            onChange={date => this.handleChangeDate(date)}
                            placeholder={'Birthday Date'}
                            name="Birthday"
                            />
                        </div>

                        <div className="form-group col-md-6 col-sm-6 col-xs-12 min_h_for">
                         
                          <div className="radio_box">

                            <div className="col-sm-3"><input type="radio" id="UnMarried" name='MarriedUnmarried' onChange={this.handleChange} value="Unmarried" onClick={() => this.unmarriedCheck()} /><span>Unmarried</span></div>
                            <div className="col-sm-3"><input type="radio" id="Married" name='MarriedUnmarried' onChange={this.handleChange} value="Married" onClick={() => this.marriedCheck()} /><span>Married</span></div>
                            <div className="col-sm-6"></div>
                          </div>
                        </div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12 min_h_for Anniversary_div" id="Anniversary" >
                           <ModernDatepicker
                            date={this.state.Anniversary}
                            format={'DD-MM-YYYY'}
                            showBorder
                            onChange={date => this.handleChangeAnniversary(date)}
                            placeholder={'Anniversary'}
                            name="Anniversary"
                            />
                        </div>

                        <div className="form-group col-md-12 col-sm-12 col-xs-12 min_h_for">

                          <textarea placeholder="Suggestions/Feedback" name="message" onChange={this.handleChange} value={this.state.message} ></textarea>
                        </div>
                        <div className="form-group col-md-12 col-sm-12 col-xs-12 min_h_for">

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
                        <div className="form-group col-md-12 col-sm-12 col-xs-12 min_h_for">
                          <input type="button" id="submit" value="submit" onClick={this.onSubmit} className="btn-submit hvr-icon-wobble-horizontal hvr-wobble-horizontal" />
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer abc='true' />
      </Fragment>
    );
  }
}
