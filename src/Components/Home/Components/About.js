import React, { PureComponent, Fragment } from 'react';
import ImageWebp from '../../../ImageWebp'


export default class About extends PureComponent {

  componentDidMount(){
   var ulTag = document.getElementById('for-movement');
   var imgTag = ulTag.getElementsByTagName('img');
   for (let index = 0; index < imgTag.length; index++) {
    imgTag[index].setAttribute('class','hvr-wobble-vertical');
   }
   this.unmounted=false;
  }
componentWillUnmount()
{
  this.unmounted=true;
}
 
  render() {
    return (
      <Fragment>
        <section className="dean-company p-40">
          <div  id="for-movement" className="container">
            <div className="col-md-6 left-part wow animate fadeInLeft">
              <h2>About Company</h2>
              <p>Dean Infotech Pvt. Ltd since its inception in 1996, has transformed itself from a computer training institute to a complete Information Technology service and solutions providing company. By using creativity of advance technology to provide unique solutions our clients refer to Dean Infotech as the ‘Dean of Information Technology.</p>
              
              <div className="certified_img"><img className="hvr-wobble-vertical" src={require("../../../images/certifications.webp")} alt="certified" /></div>
                
              <h3>WE HAVE BEEN FEATURED ON</h3>
              <ul>
                <li>
                  <ImageWebp
                  srcWebp={require("../../../images/economic-time.png")}
                  data-src={require("../../../images/economic-time.png")}
                  className="lazyload"
                  />
                  {/* <img src={require("../../../images/economic-time.png")} alt="economic-time" /> */}
                  </li>
                <li><img src={require("../../../images/fox.png")} alt="fox" /></li>
                <li><img src={require("../../../images/silicon.png")} alt="silicon" /></li>
                <li><img src={require("../../../images/cnn.png")} alt="cnn" /></li>
              </ul>
            </div>
            <div className="col-md-6 right-part wow animate fadeInRight">
              <h2>OUR CLIENTS</h2>
              <div className="dg-clients01 color-white">
                <div className="col-sm-4"><a href="/portfolio"> <img alt="Logo" src={require("../../../images/lacoste.png")} /></a></div>
                <div className="col-sm-4"><a href="/portfolio"><img alt="Logo" src={require("../../../images/baskin.png")} /></a></div>
                <div className="col-sm-4"><a href="/portfolio"><img alt="Logo" src={require("../../../images/dunkin-donald.png")} /></a></div>
                <div className="col-sm-4"><a href="/portfolio"><img alt="Logo" src={require("../../../images/tissot_logo.png")} /></a></div>
                <div className="col-sm-4"><a href="/portfolio"><img alt="Logo" src={require("../../../images/afspanchwati_logo.png")} /></a></div>
                <div className="col-sm-4"><a href="/portfolio"><img alt="Logo" src={require("../../../images/nisan.png")} /></a></div>
                <div className="col-sm-4"><a href="/portfolio"><img alt="Logo" src={require("../../../images/hero-app.png")} /></a></div>
                <div className="col-sm-4"><a href="/portfolio"><img alt="Logo" src={require("../../../images/apollo-tyre.png")} /></a></div>
                <div className="col-sm-4"><a href="/portfolio"><img alt="Logo" src={require("../../../images/bg-oil.png")} /></a></div>
                <div className="col-sm-4"><a href="/portfolio"><img alt="Logo" src={require("../../../images/credai.png")} /></a></div>
                <div className="col-sm-4"><a href="/portfolio"><img alt="Logo" src={require("../../../images/united_business_logo.png")} /></a></div>
                <div className="col-sm-4"><a href="/portfolio"><img alt="Logo" src={require("../../../images/wyne.png")} /></a></div>
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
