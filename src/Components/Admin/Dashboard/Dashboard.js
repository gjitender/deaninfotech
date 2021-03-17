import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import ImageWebp from '../../../ImageWebp'

import './admin.css';

class Dashboard extends Component
{
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
     
      };
    
    render()
    { 
        const { user } = this.props.auth;
       
        return( 
        <div> 
             <nav className="navbar navbar-inverse admin_navi">
           
            <div className="container-fluid">
            <div className="navbar-header active" id="navbarSupportedContent">
            <Link to={'/dashboard'} className="navbar-brand">
            <ImageWebp
                  srcWebp={"./images/logo.png"}
                  src={"./images/logo.png"}
                  />
              {/* <img src="./images/logo.png" alt="Dean InfoTech Pvt Ltd" /> */}
              </Link>
            </div>
            
                 <ul  className="nav navbar-nav">
                
                     <li className="nav-item admin_nav">
                     <Link to={'/addnewblog'} className="nav-link">Add New Blog</Link>
                   
                     </li>
                 <li className="nav-item admin_nav">
                    <Link to={'/blogs'} className="nav-link">Blogs</Link></li>
                <li className="nav-item admin_nav">
                     <Link to={'/comments'} className="nav-link">Comments</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
      <li><span className="fa fa-user"> {user.name.split(" ")[0]}</span>&nbsp;&nbsp;
          <button onClick={this.onLogoutClick} >
           Logout</button></li>
      
    </ul>  
        </div>

</nav>

</div>)
    }
}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Dashboard);



  