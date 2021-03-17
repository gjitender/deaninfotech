import React, { Component,Fragment } from "react";
import { Link } from "react-router-dom";
import Flip from 'react-reveal/Flip';
import {Helmet} from 'react-helmet';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import ImageWebp from '../../ImageWebp'
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      title:'Admin'
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    this.unmounted=false;
  }
componentWillUnmount()
{
  this.unmounted=true;
}
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      

      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
 

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <Fragment>
          <Helmet>
            <title>{this.state.title} | Dean Infotech Pvt. Ltd.</title>
            <meta id="meta-description" name="description" content={this.state.title} />
            <meta id="og-keywords" name="keywords" property="og:keywords" content={this.state.title} />
            <meta id="og-title" property="og:title" content={this.state.title} />
          </Helmet>
      <div className="" id="d_login">
        <div className="wrapperlogin">
          <div className="containerlogin">
            <div className="logo_panel">
              <a href="/admin">
              <ImageWebp
                  srcWebp={"./images/logo.png"}
                  src={"./images/logo.png" }
                  />
                {/* <img src="./images/logo.png" alt="prop" /> */}
              </a>
            </div>  

            <Flip right >
           
              <div className="">
                <div id='id' className="">
                  <h3 className="">
                  Admin Panel
                  </h3>
                </div>
                <form className="form" onSubmit={this.onSubmit}>
                  <div className="">
                  <b><span className="">
                  {errors.email}
                  {errors.emailnotfound}
                </span></b>
                    <input 
                     onChange={this.onChange}
                     value={this.state.email}
                     error={errors.email}
                     placeholder="Enter Email"
                     id="email"
                     type="email"
                     className={classnames("", {
                       invalid: errors.email || errors.emailnotfound
                     })} />
                  </div>
                  
                  <div className="">
                  <b><span className="text-danger">
                  {errors.password}
                  {errors.passwordincorrect}
                </span></b>
                    <input 
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password || errors.passwordincorrect
                    })}
                      placeholder="Enter Password"/>
                  </div>
                 
                  <div className="row m-login__form-sub">
              </div>
                  <div className="m-login__form m-form" >
                  <div className="m-login__form-action">
                  <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large btn-primary"
                >
                  Login
                </button>
                                
                  </div>
                </div>
                </form>
               
              </div>
          
            </Flip>
            <Link to="/" className="btn-flat waves-effect">
              Return to Site
            </Link>
         
          </div>
          <ul className="bg-bubbles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
        </div>
      </div>
    
  
      </Fragment>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
