import React, {  Fragment } from 'react';
import RequestForm from '../../requestform';

const reacticon = require('../images/react.png');
const bootstrapicon = require('../images/bootstrap.png');
const angularicon = require('../images/angularjs.png');
const expressicon = require('../images/express-js.png');
const nodeicon = require('../images/node-js.png');  

const Javascriptdevelop1 = require('../images/Interactive-UI-development.png');  
const Javascriptdevelop2 = require('../images/Custom-Development.png');  
const Javascriptdevelop3 = require('../images/AJAX-Development.png');  
const Javascriptdevelop4 = require('../images/eCommerce_Development.png');  
const Javascriptdevelop5 = require('../images/ReactJS-Migration.png');  
const Javascriptdevelop6 = require('../images/Plug-In-Development.png');  
const Javascriptdevelop7 = require('../images/Web-Application-Development.png');  
const Javascriptdevelop8 = require('../images/api-developmenticon-1.png'); 
const Javascriptdevelop9 = require('../images/Real-time-App-Solutions.png'); 
const Javascriptdevelop10 = require('../images/Single-page-App-development.png'); 
const Javascriptdevelop11 = require('../images/UI-UX_Design.png'); 
const Javascriptdevelop12 = require('../images/dashboard.png');  


const custom = require('../../EnterpriseSolution/images/custom-software.png');
const consulting = require('../../EnterpriseSolution/images/consulting.png');
const crm = require('../../EnterpriseSolution/images/crm.png');

const GOALS1 = require('../images/Smile-icon.png');  
const GOALS2 = require('../images/agil-software.png');  
const GOALS3 = require('../images/creative.png');  
const GOALS4 = require('../images/Bespoke.png');  
const GOALS5 = require('../images/custom-software-2.png');  
const GOALS6 = require('../images/unparalleled-communication.png');  
const GOALS7 = require('../images/trusted-and-reliable-technology.png');  
const GOALS8 = require('../images/unmatched-security.png');  



export default function JavascriptPanel() {
    return (
        <div>
             <Fragment>
      
      <section className="javascript p-80">
                <div className="container">
                    <div className="col-md-8 col-sm-6 col-xs-12 left wow animate fadeInLeft">
                        <h2 className="uppercase">Javascript</h2>
                        <p>JavaScript is a dynamic computer programming language which is used as a part of web pages. It offers standardization, speed and increased functionality which is used to satisfy the needs of an organization. JavaScript can be used
                            in development services ranging from online web applications to complex enterprise web solutions.</p>
                        <p>
                            Dean Infotech has expertise in creating state-of-the-art high-performance applications which are made with the help of JavaScript. JavaScript is rapidly rising to the top of other programming languages and consolidate its position as the major player
                            in the Software Development Industry. We offer integrated JavaScript Development with the number of server-side technologies like Java, PHP and ASP.NET etc. With the use of JavaScript, we offer a wide range of frameworks including
                            ReactJS, Angular JS.
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 right wow animate fadeInRight">
                        <RequestForm />
                    </div>
                </div>
            </section>

            <section className="java-tab p-80" id="java">
                <div className="container">
                    <ul className="nav nav-tabs responsive-tabs">
                        <li className="active"><a data-toggle="tab" href="#react" aria-expanded="true"> <img src={reacticon} alt="icon" /> <span>React</span> </a></li>
                        <li className=""><a data-toggle="tab" href="#bootstrap" aria-expanded="false"><img src={bootstrapicon} alt="icon" /> <span>Bootstrap</span> </a></li>
                        <li className=""><a data-toggle="tab" href="#angular" aria-expanded="false"><img src={angularicon} alt="icon" /><span>Angular</span> </a></li>
                        <li className=""><a data-toggle="tab" href="#express" aria-expanded="false"> <img src={expressicon} alt="icon" /> <span>Express</span> </a></li>
                        <li className=""><a data-toggle="tab" href="#node" aria-expanded="false"> <img src={nodeicon} alt="icon" /><span>Node</span></a></li>
                        <li className=""><a data-toggle="tab" href="#native" aria-expanded="false"><img src={reacticon} alt="icon" /><span>React Native</span> </a></li>
                    </ul>
                    <div className="tab-content">
                        <div id="react" className="tab-pane fade active in">
                            <h2>React</h2>
                            <p>React is a flexible and declarative JavaScript library that is used for building interfaces. It allows us to create reusable UI components which are used to develop powerful interactive applications. When we design the views
                                in our applications, ReactJS will render the right components when your data changes. It is used in various social media sites like Facebook and Instagram due to its reusable UI components.
                            </p>
                            <p>
                                React has already hit the point of the mainstream in big enterprise solution companies. Our team of IT professionals makes the use of ReactJS to build big apps and implement the consistent look of the whole project. With ReactJS you can select individual
                                components and examine their current properties and state. Each component has its own logic and controls of rendering and it depends on you where you want to use it.
                            </p>
                        </div>
                        <div id="bootstrap" className="tab-pane fade">
                            <h2>Bootstrap</h2>
                            <p>Bootstrap is the most popular network used for faster and easier web development. It is a powerful front-end framework which includes HTML and CSS based design templates used to develop the responsive mobile-first website.
                                Combination of Bootstrap components will create a consistent design for pages. Common UI components like Buttons, Forms, Tabs, Navigations and JavaScript extensions are all designed with Bootstrap.
                            </p>
                            <p>
                                With the help of Bootstrap, we create responsive layouts with less effort and provide the creative work to our clients. With the use of this technology network, web pages can appear more appropriately on different devices with screen resolutions without
                                any change in the markup. These web pages are consistent throughout the development. It is compatible with all modern browsers like Mozilla Firefox, Google Chrome, Safari and Internet Explorer.
                            </p>
                        </div>
                        <div id="angular" className="tab-pane fade">
                            <h2>Angular</h2>
                            <p>Angular JS extends HTML with the new attributes with directives which are designed for building web-apps. It is a JavaScript framework which can be added to the HTML page with script tag. As we know that HTML is great for declaring
                                static documents while Angular JS lets you extend the HTML vocabulary of your application. Angular JS works well with other libraries and it is fully extensible.
                            </p>
                            <p>
                                Angular JS is used for front-end development in most of the enterprise solutions companies. With its full-featured JavaScript Framework, it is used to enhance simplicity and efficiency at work. Our IT professionals make the use of Angular JS due to its
                                intuitiveness and rich features to deliver the work to clients.
                            </p>
                        </div>
                        <div id="express" className="tab-pane fade">
                            <h2>Express</h2>
                            <p>
                                Open source software, Express is a web application framework for Node JS that is designed to build a single page, multipage and Hybrid web applications. With a myriad of HTTP utility methods, it is used to create a robust API quickly and easily. Express
                                provides robust features for developing web and mobile applications.
                            </p>
                            <p>
                                Dean Infotech uses Express JS Development services with demonstrated expertise in delivering high-performance solutions to customers. We make the use of Express in real-time applications for fast seeking and scalable solutions. If you are looking for
                                the finest applications in Express.JS then you can connect with us. Our experts will help you by providing the best web-based solutions for different platforms.
                            </p>
                        </div>
                        <div id="node" className="tab-pane fade">
                            <h2>Node</h2>
                            <p>
                                Node.JS is a framework to run JavaScript on the server side. It is just like a hosting environment that runs locally or on the server. Node JS is the largest ecosystem of open source libraries in the world as it uses even driven model. It is basically
                                a platform built on Chrome JavaScript runtime used for scalable network applications.
                            </p>
                            <p>
                                With the use of Node JS frameworks we create stunning web applications with tried and tested solutions. Node JS provides the set of features like API creation, Routing and middleware integration. You can leverage the value of your business by using Node.JS
                                frameworks for building web applications.
                            </p>
                        </div>
                        <div id="native" className="tab-pane fade">
                            <h2>Native</h2>
                            <p>
                                React Native is generally used to build apps for iOS and Android. We follow the futuristic approach in the mobile applications to deliver the best work to our customers. React is an open source JavaScript library used for the development of web applications.
                                We build cross-platform applications for iOS and Android with the help of React Native framework of JavaScript.
                            </p>
                            <p>Our team of professionals uses React Native to its full potential to develop a perfect mobile app design for our users. We offer customized solutions with different API’s and with different codes. React native is used for building
                                a real-time mobile app with a native look. With its reusability and efficiency, it is used in many enterprise solution companies to speed up development in the variety of ways. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="node p-80">
                <div className="container">
                    <h2>Javascript Development</h2>
                    <div className="wow animate fadeInLeft col-md-12 col-sm-12 col-xs-12">
                        <div className="col-md-2 col-sm-6 col-xs-12">
                            <div className="sub hvr-wobble-vertical">
                                <figure><img src={Javascriptdevelop1} alt="Interactive-UI-development" /></figure>
                                <h3>Interactive UI development</h3>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12">
                            <div className="sub hvr-wobble-vertical">
                                <figure><img src={Javascriptdevelop2} alt="Custom-Development" /></figure>
                                <h3>Custom Development</h3>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12">
                            <div className="sub hvr-wobble-vertical">
                                <figure><img src={Javascriptdevelop3} alt="AJAX-Development" /></figure>
                                <h3>AJAX Development</h3>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12">
                            <div className="sub hvr-wobble-vertical">
                                <figure><img src={Javascriptdevelop4} alt="eCommerce_Development" /></figure>
                                <h3>eCommerce Development</h3>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12">
                            <div className="sub hvr-wobble-vertical">
                                <figure><img src={Javascriptdevelop5} alt="ReactJS-Migration" /></figure>
                                <h3>ReactJS Migration</h3>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12">
                            <div className="sub hvr-wobble-vertical">
                                <figure><img src={Javascriptdevelop6} alt="Plug-In-Development" /></figure>
                                <h3>Plug-In Development</h3>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12">
                            <div className="sub hvr-wobble-vertical">
                                <figure><img src={Javascriptdevelop7} alt="Web-Application-Development" /></figure>
                                <h3>Web Application Development</h3>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12">
                            <div className="sub hvr-wobble-vertical">
                                <figure><img src={Javascriptdevelop8} alt="api-developmenticon-1" /></figure>
                                <h3>API Development
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12">
                            <div className="sub hvr-wobble-vertical">
                                <figure><img src={Javascriptdevelop9} alt="Real-time-App-Solutions" /></figure>
                                <h3>Real-time App Solutions</h3>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12">
                            <div className="sub hvr-wobble-vertical">
                                <figure><img src={Javascriptdevelop10} alt="Single-page-App-development" /></figure>
                                <h3>Single page App Development</h3>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12">
                            <div className="sub hvr-wobble-vertical">
                                <figure><img src={Javascriptdevelop11} alt="UI-UX_Design" /></figure>
                                <h3>UI/UX Design</h3>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12">
                            <div className="sub hvr-wobble-vertical">
                                <figure><img src={Javascriptdevelop12} alt="dashboard" /></figure>
                                <h3>Dashboard Development</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

              <section className="enterprise-services p-80" id="enterprise">
               <div className="container">
                  <h2 className="uppercase">Enterprise Software Services</h2>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                     <div className="blue wow animate fadeInUp">
                        <figure className="hvr-wobble-vertical"><img src={custom} alt="custom-software" /></figure>
                        <h3>Custom Software</h3>
                        <p> We offer custom software services to meet your specific needs with less cost.</p>
                     </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                     <div className="blue yellow wow animate fadeInUp">
                        <figure className="hvr-wobble-vertical"><img src={consulting} alt="consulting" /></figure>
                        <h3>Consulting</h3>
                        <p>Our team of experts will assess your application and provide you with the best strategic consulting on different facets of application.</p>
                     </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                     <div className="blue sky wow animate fadeInUp">
                        <figure className="hvr-wobble-vertical"><img src={crm} alt="crm" /></figure>
                        <h3>CRM/ERP</h3>
                        <p>With our agile functionalities we integrate the tools that are adaptable to every need for your Business.</p>
                     </div>
                  </div>
               </div>
            </section>

            <section className="happy-client p-80">
               <div className="container">
               <h2 className="uppercase">NEED HELP TO ACHIEVE YOUR GOALS?</h2>
               <p>WE USES UPGRADED TECHNOLOGIES TO MEET YOUR BUSINESS REQUIREMENTS</p>
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="sub wow animate fadeInUp">
                     <figure><img src={GOALS1} alt="Smile-icon" /></figure>
                     <h3>Happy Customers</h3>
                     <p>We fulfil the requirements of our customers by using different plans and strategies to deliver the work on time and make customers happy.</p>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="sub wow animate fadeInUp">
                     <figure><img src={GOALS2} alt="agil-software" /></figure>
                     <h3>Agile Software Dev Team</h3>
                     <p>We provide agile software development solutions that are transformative and help clients to accelerate time to market.</p>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="sub wow animate fadeInUp">
                     <figure><img src={GOALS3} alt="creative" /></figure>
                     <h3>Creative yet effective approach</h3>
                     <p>We deliver creative and cost effective solutions with the modern approach and creative formats.</p>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="sub wow animate fadeInUp">
                     <figure><img src={GOALS4} alt="Bespoke" /></figure>
                     <h3>Bespoke Software Solutions</h3>
                     <p>With the precise software solutions for web and cloud mobile, we deliver solutions that are rich in quality.</p>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="sub wow animate fadeInUp">
                     <figure><img src={GOALS5} alt="custom-software-2" /></figure>
                     <h3>Customized Software Development</h3>
                     <p>We offer customized software development services which can devise the effective solution for your business.</p>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="sub wow animate fadeInUp">
                     <figure><img src={GOALS6} alt="unparalleled-communication" /></figure>
                     <h3>Unparalleled Communication</h3>
                     <p>We employ a dedicated team to get connected with our clients for project discussions.</p>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="sub wow animate fadeInUp">
                     <figure><img src={GOALS7} alt="trusted-and-reliable-technology" /></figure>
                     <h3>Trusted and Reliable Technology</h3>
                     <p>Our most trusted and reliable ways to work with the clients makes them happier.</p>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="sub wow animate fadeInUp">
                     <figure><img src={GOALS8} alt="unmatched-security" /></figure>
                     <h3>Unmatched <br />Security</h3>
                     <p>We offer software solutions with the effective security and less complexity.</p>
                  </div>
               </div>
               </div>
            </section>
           
       
        {/* <!-- testimonial end--> */}
        <div className="clearfix" />
      </Fragment>
        </div>
    )
}


