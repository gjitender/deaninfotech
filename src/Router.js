import React,{Component} from 'react';
import { BrowserRouter, Route, Switch, withRouter, Redirect } from 'react-router-dom';

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Home from './Components/Home/Home';
import AboutDean from './Components/AboutDean/AboutDean';
import MeetOurTeam from './Components/MeetOurTeam/MeetOurTeam';
import Testimonial from './Components/Testimonial/Testimonial';
import QualityAssurance from './Components/QualityAssurance/QualityAssurance';
import Php from './Components/Php/php-development-company';
import DotNet from './Components/DotNet/dotnet-development-company';
import contact from './Components/ContactUs/contact';
import Mobile from './Components/Mobile/mobile-application-development';
import SalesForce from './Components/SalesForce/salesforce-development-services';
import Career from './Components/Career/Career';
import CustomerRegistration from './Components/customerregistration';
import Mailyoursynopsis from './Components/Mailyoursynopsis/Mailyoursynopsis';
import EnterpriseSolution from './Components/EnterpriseSolution/EnterpriseSolutionPanel';
import Javascript from './Components/Javascript/javascript-development-company';
import Laravel from './Components/Laravel/laravel-development-company';
import CodeIgniter from './Components/CodeIgniter/CodeIgniter';
import wordpress from './Components/wordpress/wordpress-development-Company';
import aspdotnet from './Components/aspdotnet/aspdotnet-development-company';
import dotnetmvc from './Components/dotnetmvc/asp-dotnet-mvc-development-company';
import UMBRACO from './Components/UMBRACO/umbraco-development-company';
import Nopcommerce from './Components/Nopcommerce/nopcommerce-development-company';
import DotNetNuke from './Components/DotNetNuke/dotnetnuke-development-company';
import Android from './Components/Android/android-app-development-company';
import ios from './Components/ios/ios-app-development-company';
import Hybrid from './Components/Hybrid/hybrid-app-development-company';
import webdesignerprofile from './Components/webdesignerprofile/webdesignerprofile';
import businessdevelopmentprofile from './Components/businessdevelopmentprofile/businessdevelopmentprofile';
import onlinebidder from './Components/onlinebidder/onlinebidder';
import dotnetdeveloperprofile from './Components/dotnetdeveloperprofile/dotnetdeveloperprofile';
import contentwriterprofile from './Components/contentwriterprofile/contentwriterprofile';
import RequestForm from './Components/requestform';
import Portfolio from './Components/Portfolio/portfolio';
import SiteMap from './Components/sitemap/sitemap';
import Blog from './Components/blog/blog';
import BlogDetails from './Components/blog-details/blog-details';
import DeanIntroduction from './Components/dean-introduction';
import DeanSalesforce from './Components/dean-salesforce';
import NotFound from './nofound';
//Routes for admin
import Blogs from './Components/Admin/Dashboard/Blogs';
import AddnewBlog from './Components/Admin/Dashboard/AddnewBlog';
import AddComment from './Components/Admin/Dashboard/Comments';
import EditBlog from './Components/Admin/Dashboard/editBlog';
import Search from './Components/Search/search';
import Login from "./Components/auth/Login";
import PrivateRoute from "./Components/private-route/PrivateRoute";


const referrerVal = document.referrer;
const skipReferrerDomain = ['deaninfotech.com', 'localhost'];

if( referrerVal ) {
  const isReferralExist = skipReferrerDomain.some(el => referrerVal.includes(el) );
  if( isReferralExist === false ) {
    localStorage.setItem('referrer', document.referrer);
  }
}


// Check for token to keep user logged in
if (localStorage.jwtToken) {
 
  const token = localStorage.jwtToken;
  setAuthToken(token);
 
  const decoded = jwt_decode(token);
 
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000; 
  if (decoded.exp < currentTime) {
   
    store.dispatch(logoutUser());

    window.location.href = "/admin";
  }
}
class Router extends Component
{
    render()
    {
        return(
          <Provider store={store}>
            <BrowserRouter>
            <Switch>
            
            <Route exact path="/admin" component={withRouter(Login)} />
          
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutDean} />
            <Route exact path="/our-team" component={MeetOurTeam} />
            <Route exact path="/testimonial" component={Testimonial} />
            <Route exact path="/quality-assurance" component={QualityAssurance} />
            <Route exact path="/php-development-company" component={Php} />
            <Route exact path="/.net-development-company" component={DotNet} />
            <Route exact path="/contact" component={contact} />
            <Route exact path="/mobile-application-development" component={Mobile} />
            <Route exact path="/salesforce-development-services" component={SalesForce} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/Mail-your-synopsis" component={Mailyoursynopsis} />
            <Route exact path="/enterprise-software-development" component={EnterpriseSolution} />
            <Route exact path="/javascript-development-company" component={Javascript} />  
            <Route exact path="/laravel-development-company" component={Laravel} />
            <Route exact path="/codeigniter-development-company" component={CodeIgniter} />
            <Route exact path="/wordpress-development-Company" component={wordpress} />
            <Route exact path="/asp.net-development-company" component={aspdotnet} />
            <Route exact path="/asp.net-mvc-development-company" component={dotnetmvc} />
            <Route exact path="/umbraco-development-company" component={UMBRACO} />
            <Route exact path="/nopcommerce-development-company" component={Nopcommerce} />
            <Route exact path="/dean-introduction" component={DeanIntroduction} />
            <Route exact path="/dean-salesforce" component={DeanSalesforce} />
            {/* <Route exact path="/.netnuke-development-company" component={DotNetNuke} /> */}
            <Route exact path="/dotnetnuke-development-company" component={DotNetNuke} />
            <Route exact path="/android-app-development-company" component={Android} />
            <Route exact path="/ios-app-development-company" component={ios} />
            <Route exact path="/hybrid-app-development-company" component={Hybrid} />
            <Route exact path="/web-designer-profile" component={webdesignerprofile} />
            <Route exact path="/business-development-profile" component={businessdevelopmentprofile} />
            <Route exact path="/online-bidder" component={onlinebidder} />
            <Route exact path="/customer-registration-form" component={CustomerRegistration} />
            <Route exact path="/.net-developer-profile" component={dotnetdeveloperprofile} />
            <Route exact path="/content-writer-profile" component={contentwriterprofile} />
            <Route exact path="./Components/requestform" component={RequestForm} />
            <Route exact path="/sitemaps" component={SiteMap} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:slug" component={BlogDetails} />
            <Route exact path="/search/:item" component={Search} />
            <PrivateRoute exact path="/dashboard" component={Blogs} />
            <PrivateRoute exact path="/addnewblog" component={AddnewBlog} />
            <PrivateRoute exact path="/blogs" component={Blogs}  />
            <PrivateRoute exact  path="/comments" component={AddComment}  />
            <PrivateRoute exact  path="/edit/:id" component={EditBlog}  />
            
            <Redirect from='/responsive-designing' to='/' />
            <Redirect from='/seo-services' to='/' />
            <Redirect from='/kentico-development' to='/.net-development-company' />
            <Redirect from='/drupal-development' to='/' />
            <Redirect from='/wordpress-development' to='/wordpress-development-Company' />
            <Redirect from='/wordpress.html' to='/wordpress-development-Company' />
            <Redirect from='/ios8-development' to='/ios-app-development-company' />
            <Redirect from='/opencart-development' to='/' />
            <Redirect from='/email-marketing' to='/' />
            <Redirect from='/content-marketing' to='/' />
            <Redirect from='/quality-commitments' to='/quality-assurance' />
            <Redirect from='/android-design' to='/android-app-development-company' />
            <Redirect from='/development-methodology' to='/' />
            <Redirect from='/joomla-development' to='/' />
            <Redirect from='/custom-ecommerce' to='/' />
            <Redirect from='/image-editing' to='/' />
            <Redirect from='/hire-wordpress-developer' to='/wordpress-development-Company' />
            <Redirect from='/dean-e-booking' to='/' />
            <Redirect from='/android.html' to='/android-app-development-company' />
            <Redirect from='/android-app-development' to='/android-app-development-company' />
            <Redirect from='/wcf-wpf-development' to='/' />
            <Redirect from='/iphone-game-development' to='/ios-app-development-company' />
            <Redirect from='/iOS.html' to='/ios-app-development-company' />
            <Redirect from='/android-tab-development' to='/android-app-development-company' />
            <Redirect from='/laravel.html' to='/laravel-development-company' />
            <Redirect from='/laravel-web-development' to='/laravel-development-company' />
            <Redirect from='/hire-web-designer' to='/' />
            <Redirect from='/hire-iphone-app-developer' to='/ios-app-development-company' />
            <Redirect from='/hire-android-app-developer' to='/android-app-development-company' />
            <Redirect from='/android-l-app-development' to='/android-app-development-company' />
            <Redirect from='/hire-digital-marketing-specialist' to='/' />
            <Redirect from='/asp-net.html' to='/asp.net-development-company' />
            <Redirect from='/asp-net-mvc.html' to='/asp.net-development-company' />
            <Redirect from='/asp-dot-net-development' to='/asp.net-development-company' />
           
            <Redirect from='/javascript.html' to='/javascript-development-company' />
            <Redirect from='/android-games-development' to='/android-app-development-company' />
            <Redirect from='/android.html' to='/android-app-development-company' />
            <Redirect from='/mobile.html' to='/mobile-application-development' />
            <Redirect from='/application-development' to='/mobile-application-development' />
            <Redirect from='/application-development.html' to='/mobile-application-development' />
            <Redirect from='/article-writing' to='/' />
            <Redirect from='/blog-writing' to='/blog' />
            <Redirect from='/c-sharp-vb-dot-net-development' to='/.net-development-company' />
            <Redirect from='/cake-php-development' to='/php-development-company' />
            <Redirect from='/career.html' to='/career' />
            <Redirect from='/classic-asp' to='/.net-development-company' />
            <Redirect from='/codeigniter.html' to='/codeigniter-development-company' />
            <Redirect from='/codeigniter-development' to='/codeigniter-development-company' />
            <Redirect from='/contact-us' to='/contact' />
            <Redirect from='/enterprise-solution.html' to='/enterprise-software-development' />
            <Redirect from='/hybrid.html' to='/hybrid-app-development-company' />
            <Redirect from='/digital-marketing-services' to='/' />
            <Redirect from='/digital-marketing-services.html' to='/' />
            <Redirect from='/dot-net-development' to='/.net-development-company' />
            <Redirect from='/dot-net-entity-framework-development' to='/.net-development-company' />
            <Redirect from='/dot-net.html' to='/.net-development-company' />
            <Redirect from='/dot-net-mvc-framework-development' to='/asp.net-mvc-development-company' />
            <Redirect from='/dot-net-nuke.html' to='/dotnetnuke-development-company' />
            <Redirect from='/dotnetnuke-development' to='/dotnetnuke-development-company' />
            <Redirect from='/ebooking' to='/' />
            <Redirect from='/ecommerce-development' to='/' />
            <Redirect from='/ecommerce-website-development.html' to='/' />
            <Redirect from='/erp-solutions-provider-company' to='/' />
            <Redirect from='/hire-android-developer' to='/android-app-development-company' />
            <Redirect from='/hire-aspnet-developer' to='/asp.net-development-company' />
            <Redirect from='/hire-cake-php-developer' to='/php-development-company' />
            <Redirect from='/hire-content-writer' to='/' />
            <Redirect from='/hire-drupal-developer' to='/' />
            <Redirect from='/hire-ecommerce-developer' to='/' />
            <Redirect from='/hire-iphone-developer' to='/ios-app-development-company' />
            <Redirect from='/hire-joomla-developer' to='/' />
            <Redirect from='/hire-magento-developer' to='/' />
            <Redirect from='/hire-php-developer' to='/php-development-company' />
            <Redirect from='/ios7-development' to='/ios-app-development-company' />
            <Redirect from='/iphone-application-development' to='/ios-app-development-company' />
            <Redirect from='/iphone-design' to='/ios-app-development-company' />
            <Redirect from='/logo-designing' to='/' />
            <Redirect from='/magento-developement' to='/' />
            <Redirect from='/nopcommerce.html' to='/nopcommerce-development-company' />
            <Redirect from='/nopcommerce-development' to='/nopcommerce-development-company' />
            <Redirect from='/pay-per-click' to='/' />
            <Redirect from='/php.html' to='/php-development-company' />
            <Redirect from='/php-development' to='/php-development-company' />
            <Redirect from='/psd-html-development' to='/' />
            <Redirect from='/reputation-management' to='/' />
            <Redirect from='/request-proposal' to='/' />
            <Redirect from='/responsive-website-design' to='/' />
            <Redirect from='/salesforce.html' to='/salesforce-development-services' />
            <Redirect from='/salesforce-development' to='/salesforce-development-services' />
            <Redirect from='/sharepoint-development' to='/' />
            <Redirect from='/smo-services' to='/' />
            <Redirect from='/synopsis-writing' to='/' />
            <Redirect from='/umbraco-development' to='/umbraco-development-company' />
            <Redirect from='/umbraco.html' to='/umbraco-development-company' />
            <Redirect from='/web-designing' to='/' />
            <Redirect from='/windows-application-development' to='/' />
            <Redirect from='/woo-commerce-development' to='/' />
            <Redirect from='/yii-development' to='/' />
            <Redirect from='/zend-development' to='/' />
            <Redirect from='/c-sharp-vb-dot-net-development' to='/.net-development-company' />
            <Redirect from='/Portfolio' to='/portfolio' />
            <Redirect from='/portfolio.html' to='/portfolio' />
            <Redirect from='/solutions' to='/' />
            <Redirect from='/php-development-company.html' to='/php-development-company' />
            <Redirect from='/laravel-development-company.html' to='/laravel-development-company' />
            <Redirect from='/codeigniter-development-company.html' to='/codeigniter-development-company' />
            <Redirect from='/wordpress-development-Company.html' to='/wordpress-development-Company' />
            <Redirect from='/.net-development-company.html' to='/.net-development-company' />
            <Redirect from='/asp.net-development-company.html' to='/asp.net-development-' />
            <Redirect from='/asp.net-mvc-development-company.html' to='/asp.net-mvc-development-company' />
            <Redirect from='/umbraco-development-company.html' to='/umbraco-development-company' />
            <Redirect from='/nopcommerce-development-company.html' to='/nopcommerce-development-company' />
            <Redirect from='/dotnetnuke-development-company.html' to='/dotnetnuke-development-company' />
            <Redirect from='/mobile-application-development.html' to='/mobile-application-development' />
            <Redirect from='/android-app-development-company.html' to='/android-app-development-company' />
            <Redirect from='/ios-app-development-company.html' to='/ios-app-development-company' />
            <Redirect from='/hybrid-app-development-company.html' to='/hybrid-app-development-company' />
            <Redirect from='/salesforce-development-services.html' to='/salesforce-development-services' />
            <Redirect from='/blog/4-ways-create-successful-social-media-strategy-website-2017/' to='/blog' />
            
            <Redirect from='/ecommerce-website-development' to='/nopcommerce-development-company' />

            <Redirect from='/blog/6-tips-boost-sales-ecommerce-websites/' to='/blog/6-tips-how-to-boost-sales-on-ecommerce-websites' />
            <Redirect from='/blog/instagram-pinterest-really-effective-web-traffic/' to='blog/how-to-use-whatsapp-and-instagram-for-your-business-growth' />
            <Redirect from='/blog/think-best-way-design-website-ux-ui-design/' to='/blog/what-do-you-think-is-the-best-way-to-design-a-website-ux-or-ui-design' />
            
      <Route component={NotFound} />
     
    </Switch>
  </BrowserRouter>
</Provider>
        )
    }
}
export default Router;