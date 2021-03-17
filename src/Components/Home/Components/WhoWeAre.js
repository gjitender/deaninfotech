import React, { Component, Fragment } from 'react';



export default class WhoAreWe extends Component {
  

  componentDidMount() {
   window.addEventListener('scroll',() => {
    let nav = document.getElementById('light-bulb') 
    let scrollTop = window.pageYOffset;
    if(nav!=="NULL" && nav!==null && nav!==""){
      if (scrollTop > nav.offsetTop-100  && scrollTop < 2450  ){
        document.getElementById('light-bulb2').style.opacity = '1';
        document.getElementById('aboutInfo').style.display = 'block';
      }else{
        document.getElementById('light-bulb2').style.opacity = '0';
        document.getElementById('aboutInfo').style.display = 'none';
      }
    }
   }
  ) 
  this.unmounted=false;
  }
  componentWillUnmount()
  {
    this.unmounted=true;
  }
 
  render() {
    return (
      <Fragment>
        {/* <!-- why start--> */}
        <section className="off ui-draggable" id="light-bulb">
          <div id="light-bulb2" style={{ opacity: '0' }} />
          <div className="container switch-col">
            
            <div className="about-info" id='aboutInfo' style={{ display: 'none' }}>
              <div className="info-item item01 wow animate fadeInLeft" data-wow-delay="0.5s">
                <h3><span className="one"><img src={require('../../../images/understand-client.png')} alt="understand-client" /></span>
                 <span className="two">Understand our <br />Clients</span></h3>
                <ul>
                  <li>Call or Meeting</li>
                  <li>NDA (Non-Disclosure)</li>
                </ul>
              </div>
              <div className="info-item item02 wow animate fadeInLeft" data-wow-delay="1s">
                <h3><span className="one"><img src={require('../../../images/estimates.png')} alt="estimates" /></span>
                 <span className="two">PROJECT <br />ESTIMATES</span></h3>
                <ul>
                  <li>Gather Requirements</li>
                  <li>Perfect Proposal</li>
                </ul>
              </div>
              <div className="info-item item03 wow animate fadeInRight" data-wow-delay="1.5s">
                <h3><span className="one"><img src={require('../../../images/partnership.png')} alt="partnership" /></span> 
                <span className="two">STRATEGIC <br />PARTNERSHIP</span></h3>
                <ul>
                  <li>T&C Communicated</li>
                  <li>Project Agreement</li>
                </ul>
              </div>
              <div className="info-item item04 wow animate fadeInRight" data-wow-delay="2s">
                <h3><span className="one"><img src={require('../../../images/working-together.png')} alt="working-together" /></span>
                 <span className="two">WORKING <br />TOGETHER</span></h3>
                <ul>
                  <li>Project Delivery</li>
                  <li>Client Satisfaction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- why end--> */}
        <div className="clearfix" />
      </Fragment>
    );
  }
}
