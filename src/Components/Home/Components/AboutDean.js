import React, { Component, Fragment } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Config from '../../config';


const recaptchaRef = React.createRef();

export default class AboutDean extends Component {

    
  constructor(props){
    super(props);

    this.state = {
        bcm_name: '',
        bcm_email: '',
        bcm_phone: '',
        bcm_address: '',
        bcm_message: '',
        bcm_nameErr: '',
        bcm_emailErr: '',
        bcm_phoneErr: '',
        bcm_addressErr: '',
        bcm_messageErr: '',
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
    let {bcm_name,bcm_email,bcm_phone,bcm_address,bcm_message} = this.state;
    let data = {bcm_name,bcm_email,bcm_phone,bcm_address,bcm_message};
    data.referrer = localStorage.referrer ? localStorage.referrer : '';
    let that = this;
    if (!validate) {
      
      let bereqObj = {
        method:'POST',  
        url:Config.auth.baseurl+'becomepartner',
        headers:{'Content-Type': 'application/json','Authorization':Config.auth.Authorization},
        data:data
      }
      axios(bereqObj)
      .then((res)=>{
        that.setState({
            isVerified:false,
            recaptchaErr:''
          })
        console.log(res);
        if(res.status===200){
          alert('Your Message has been Sent Successfully')
           this.setState({bcm_name:'',bcm_email:'',bcm_phone:'',bcm_address:'',bcm_message:''})
           document.getElementById("close_btn").click();
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

    if(this.state.bcm_name === '') {
      this.setState({
        bcm_nameErr:'Please enter your name',
      })
      isError = true
    }

    if(this.state.bcm_email === '') {
      this.setState({
        bcm_emailErr:'Please enter Valid email address',
      })
      isError = true
    }

    if(this.state.bcm_address === '') {
        this.setState({
          bcm_addressErr:'Please enter Valid address',
        })
        isError = true
      }


    if(this.state.bcm_phone === '') {
      this.setState({
        bcm_phoneErr:'Please Enter Valid Phone Number',
      })
      isError = true
    }else if(isNaN(this.state.bcm_phone)){
        this.setState({bcm_phoneErr:'Please enter only numbers'});
        isError = true;
      }
   

    if(this.state.bcm_message === '') {
      this.setState({
        bcm_messageErr:'Please Enter Text Message',
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
        // if (window.localStorage) {
        //     if (!localStorage.getItem('firstLoad')) {
        //       localStorage.firstLoad = true;
        //       window.location.reload();
        //     } else {
        //       localStorage.removeItem('firstLoad');
        //     }
        //   }
        return (
            <Fragment>
                {/* <!-- about start--> */}
                <section id='aboutTab' className="about-tab">
                    <div className="container pt-60 about-dean">
                        <div className="row">
                            <div className="col-sm-12 col-md-8 wow animate fadeInLeft">
                                <div className="dg-title04 text-left size-xl">
                                    <h3 className="title">CUSTOMER-CENTRIC & INNOVATIVE CLOUD, MOBILE & WEB SOLUTIONS</h3>
                                </div>
                                <div className="dg-tabs-top dg-tabs-top01 col-for1">
                                    <ul className="resp-tabs-list new-tab">
                                        <li className="resp-tab-active"><span>Why Us</span></li>
                                        <li><span>Project Delivery Flow</span></li>
                                        <li><span>Awards & Membership</span></li>
                                        <li><span>Become a Partner</span></li>
                                    </ul>
                                    <div className="resp-tabs-container">
                                        <div className="resp_container">
                                            <div className="resp_margin">
                                                <ul className="why-us">

                                                    <li>Team of technical experts focusing on the delivery of the custom solutions.</li>

                                                    <li>Standardized superlative solutions for different sectors.</li>

                                                    <li>All core business functions delivered under one roof.</li>

                                                    <li>Technology service providers with excellent customer service management.</li>

                                                    <li>Integration and providing customer compatible projects are the main key components of our work.</li>

                                                    <li>We run our company with unquestionable ethics.</li>

                                                    <li>We live the expectations of our clients with on-time project delivery.</li>

                                                    <li>We have full-fledged ERP solutions contributing success to many corporate. </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="resp_container">
                                            <div className="resp_margin">
                                                <div className="project">

                                                    <div className="row">

                                                        <div className="col-md-6 col-sm-6 col-xs-12">

                                                            <div className="sub">

                                                                <div className="img-block"><img src={require('../../../images/Sketching-Your-Idea.png')} alt="Sketching" />
                                                                </div>

                                                                <div className="heading">

                                                                    <h2>Sketching Your Idea</h2>

                                                                    <p>Understanding the concept to lay the foundation.</p>

                                                                </div>

                                                            </div>

                                                        </div>

                                                        <div className="col-md-6 col-sm-6 col-xs-12">

                                                            <div className="sub">

                                                                <div className="img-block"><img src={require('../../../images/Analysis-&-Prototyping.png')} alt="Prototyping" />
                                                                </div>
                                                                <div className="heading">

                                                                    <h2>Analysis &amp; Prototyping</h2>

                                                                    <p>Conceptualizing your idea through working MVP.</p>

                                                                </div>

                                                            </div>

                                                        </div>

                                                        <div className="col-md-6 col-sm-6 col-xs-12">

                                                            <div className="sub">

                                                                <div className="img-block"><img src={require('../../../images/Development-&-Implementation.png')} alt="Implementation" />
                                                                </div>
                                                                <div className="heading">

                                                                    <h2>Development &amp; Implementation</h2>

                                                                    <p>Bringing the MVP to life using business requirements.</p>

                                                                </div>

                                                            </div>

                                                        </div>

                                                        <div className="col-md-6 col-sm-6 col-xs-12">

                                                            <div className="sub">

                                                                <div className="img-block"><img src={require('../../../images/Deployment-&-Final_Launch.png')} alt="Final_Launch" />
                                                                </div>
                                                                <div className="heading">

                                                                    <h2>Deployment &amp; Final Launch</h2>

                                                                    <p>Paving the way for our customers success.</p>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="resp_container">
                                            <div className="resp_margin">
                                                <div className="awards">

                                                    <h2>Awards</h2>

                                                    <div className="row">

                                                        <div className="col-md-3 col-sm-6 col-xs-12">

                                                            <div className="sub">

                                                                <figure><img src={require('../../../images/img-1.jpg')} alt="awards" /></figure>

                                                                <h4>Most promosing technology company in 2017</h4>

                                                            </div>

                                                        </div>

                                                        <div className="col-md-3 col-sm-6 col-xs-12">

                                                            <div className="sub">

                                                                <figure><img src={require('../../../images/img-2.jpg')} alt="awards" /></figure>

                                                                <h4>Top 5 mobile app development company in 2018</h4>

                                                            </div>

                                                        </div>

                                                        <div className="col-md-3 col-sm-6 col-xs-12">

                                                            <div className="sub">

                                                                <figure><img src={require('../../../images/img-3.jpg')} alt="awards" /></figure>

                                                                <h4>Top 25 development services company in 2017</h4>

                                                            </div>

                                                        </div>

                                                        <div className="col-md-3 col-sm-6 col-xs-12">

                                                            <div className="sub">

                                                                <figure><img src={require('../../../images/img-4.jpg')} alt="awards" /></figure>

                                                                <h4>Top rated agency since past 5 year</h4>

                                                            </div>

                                                        </div>

                                                    </div>

                                                    <h2>Membership</h2>

                                                    <div className="row">

                                                        <div className="col-md-3 col-sm-6 col-xs-12">

                                                            <div className="sub">

                                                                <figure><img src={require('../../../images/member_iso.jpg')} alt="member" /></figure>

                                                            </div>

                                                        </div>

                                                        <div className="col-md-3 col-sm-6 col-xs-12">

                                                            <div className="sub">

                                                                <figure><img src={require('../../../images/member_ficci.jpg')} alt="member" /></figure>

                                                            </div>

                                                        </div>

                                                        <div className="col-md-3 col-sm-6 col-xs-12">

                                                            <div className="sub">

                                                                <figure><img src={require('../../../images/member_nassom.jpg')} alt="member" /></figure>

                                                            </div>

                                                        </div>

                                                        <div className="col-md-3 col-sm-6 col-xs-12">

                                                            <div className="sub">

                                                                <figure><img src={require('../../../images/member_tie.jpg')} alt="member" /></figure>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="resp_container">
                                            <div className="resp_margin">
                                                <div className="partner">

                                                    <div className="row"><div className="col-md-6">
                                                        <div className="box-one">
                                                            <h2>Outsourcing Partnership</h2>

                                                            <ul>

                                                                <li>You can outsource complete project or part of it</li>

                                                                <li>Your project, our top priority</li>

                                                                <li>Access of highly skilled team and state-of-the-art infrastructure</li>

                                                                <li>Great discounts in our Hourly Rates on all your projects</li>

                                                                <li>Long term partnership commitment</li>

                                                            </ul>

                                                        </div>

                                                    </div>

                                                        <div className="col-md-6">

                                                            <div className="box-two">

                                                                <h2>Referral Partnership</h2>

                                                                <ul>

                                                                    <li>Recommend us Potential clients</li>

                                                                    <li>We do proposal making &amp; follow ups</li>

                                                                    <li>Our sales experts close the deals</li>

                                                                    <li>You receive guaranteed cash commissions</li>

                                                                </ul>

                                                            </div>

                                                        </div>

                                                        <div className="col-md-12">

                                                            <h3><a href="" data-toggle="modal" data-target="#become-partner">Become a Partner</a></h3>
                                                            <div id="become-partner" className="modal fade become-partner" role="dialog">
                                                                <div className="modal-dialog">
                                                                    <div className="modal-content">

                                                                        <div className="modal-header">

                                                                            <button type="button" className="close" data-dismiss="modal" id="close_btn">×</button>

                                                                            <h4 className="modal-title">Become A Partner</h4>

                                                                        </div>

                                                                        <div className="modal-body">

                                                                            <form id="bcm_partner_form">

                                                                                <input type="text" className="form-group" name="bcm_name" placeholder="Name" id="bcm_name" onChange={this.handleChange} value={this.state.bcm_name} />
                                                                                <span className="footererror">{this.state.bcm_nameErr}</span>
                                                                                <input type="text" className="form-group" name="bcm_email" placeholder="Email" id="bcm_email" onChange={this.handleChange} value={this.state.bcm_email} />
                                                                                <span className="footererror">{this.state.bcm_emailErr}</span>
                                                                                <input type="text" className="form-group" name="bcm_phone" placeholder="Phone No." id="bcm_phone" onChange={this.handleChange} value={this.state.bcm_phone} />
                                                                                <span className="footererror">{this.state.bcm_phoneErr}</span>
                                                                                <input type="text" className="form-group" name="bcm_address" placeholder="Address" id="bcm_address" onChange={this.handleChange} value={this.state.bcm_address} />
                                                                                <span className="footererror">{this.state.bcm_addressErr}</span>          
                                                                                <textarea placeholder="Message" name="bcm_message" id="bcm_message" onChange={this.handleChange} value={this.state.bcm_message}></textarea>
                                                                                <span className="footererror">{this.state.bcm_messageErr}</span>

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
                                                                                <input type="button" value="Submit" className="btn" id="bcm_partner"  onClick = {this.onSubmit} />
                                                                            </form>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 testimonials">

                                <div className="carousel slide" data-ride="carousel" id="quote-carousel">



                                    <div className="carousel-inner text-center">



                                        <div className="item active">

                                            <blockquote>

                                                <div className="row">

                                                    <div className="col-sm-12">

                                                        <figure><img src={require('../../../images/Michael-Minihan-d-test.jpg')} alt="home03-our01" /></figure>

                                                        <p>The DeanInfoTech team was great to work with. They communicated pro-actively. There wasn't a day I didn't get an update, and most days I was updated multiple times. They read and understood the requirements

																										of the job, and were able to handle all of the issues that inevitably popped up.</p>

                                                        <small>Michael Minihan, Atlanta, United States</small>

                                                    </div>

                                                </div>

                                            </blockquote>

                                        </div>



                                        <div className="item">

                                            <blockquote>

                                                <div className="row">

                                                    <div className="col-sm-12">

                                                        <figure><img src={require('../../../images/Billie-Tarascio-d-test.jpg')} alt="home03-our01" /></figure>

                                                        <p>This team was such an amazing find. I have been looking for a team to help me with projects that are above my skill level for website development and the hit the mark. I plan to use them each and every time

																										I have a project. Take a chance, use them.</p>

                                                        <small>Billie Tarascio, Arizona, United States</small>

                                                    </div>

                                                </div>

                                            </blockquote>

                                        </div>



                                        <div className="item">

                                            <blockquote>

                                                <div className="row">

                                                    <div className="col-sm-12">

                                                        <figure><img src={require('../../../images/Daniel-Huber-d-test.jpg')} alt="home03-our01" /></figure>

                                                        <p>The whole team at Deaninfotech have been tremendous assets to my company. Attention to detail, responsive communication, professionalism, and a great work ethic! I will continue to use their services without

																										hesitation. Well done!</p>

                                                        <small>Daniel Huber, Indiana, United States</small>

                                                    </div>

                                                </div>

                                            </blockquote>

                                        </div>



                                        <div className="item">

                                            <blockquote>

                                                <div className="row">

                                                    <div className="col-sm-12">

                                                        <figure><img src={require('../../../images/beth-test.png')} alt="home03-our01" /></figure>

                                                        <p>

                                                            Ankit and the true team at Dean Infotech are excellent partners in development. I am impressed with their attention to our company's needs. They have delivered a beautiful, professional, and flexible website.

																								</p>

                                                        <small>Beth sanders, Marysville, United States</small>

                                                    </div>

                                                </div>

                                            </blockquote>

                                        </div>


                                        <div className="item">

                                            <blockquote>

                                                <div className="row">

                                                    <div className="col-sm-12">

                                                        <figure><img src={require('../../../images/hinna-zion-d-test.jpg')} alt="home03-our01" /></figure>

                                                        <p>Very quick work, very nice and friendly. Also, good at explaining my stupid questions. I will absolutely work with him again. He really goes the extra mile as well, thumbs up. I'm beyond happy with your

																										work Ankit!</p>

                                                        <small>Hanna Zion, Stockholm, Sweden</small>

                                                    </div>

                                                </div>

                                            </blockquote>

                                        </div>

                                    </div>



                                    <ol className="carousel-indicators">

                                        <li data-target="#quote-carousel" data-slide-to="0" className="active">

                                        </li>

                                        <li data-target="#quote-carousel" data-slide-to="1">

                                        </li>

                                        <li data-target="#quote-carousel" data-slide-to="2">

                                        </li>

                                        <li data-target="#quote-carousel" data-slide-to="3">

                                        </li>
                                        <li data-target="#quote-carousel" data-slide-to="4"></li>
                                    </ol>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- about end--> */}
                <div className="clearfix" />
            </Fragment>
        );
    }
}

