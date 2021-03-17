import React, { Fragment } from 'react';
import ImageWebp from '../../../ImageWebp'

const creativeIcon = require('../image/creative-icon.png');
const awardIcon = require('../image/award-icon.png');
const rapidIcon = require('../image/rapid-icon.png');
const supportIcon = require('../image/support-icon.png');
const rightImage = require('../image/about-dean-right-img.png');



export default function LetThemKnow() {
  return (
    <div>
       <Fragment>
        {/* <!-- quality-design start--> */}
        <section className="quality-design">
          <div className="container">
            <div className="col-md-7 col-sm-6 col-xs-12 left wow animate fadeInLeft">
              <h3>We Specialize in Quality Design</h3>
              <h2>Why We’re The Best</h2>
              <div className="block-one">
                <span>
                <ImageWebp
                  srcWebp={creativeIcon}
                  src={creativeIcon}
                  />
                  {/* <img src={creativeIcon} alt="" /> */}
                  </span>
                <div className="para">
                  <h4>Creative Ideas</h4>
                  <p>Our innovative ideas help us to achieve the creative solutions to meet the bigger demands of fastly growing IT sector.</p>
                </div>
              </div>
              <div className="block-one">
                <span>
                <ImageWebp
                  srcWebp={awardIcon}
                  src={awardIcon}
                  />
                  {/* <img src={awardIcon} alt="" /> */}
                  </span>
                <div className="para">
                  <h4>Award Winning</h4>
                  <p>Our sustainable business growth and excellence in service delivery and bunch of happy clients are like best awards for our creative and results-driven approach.</p>
                </div>
              </div>
              <div className="block-one">
                <span>
                <ImageWebp
                  srcWebp={rapidIcon}
                  src={rapidIcon}
                  />
                  {/* <img src={rapidIcon} alt="" /> */}
                  </span>
                <div className="para">
                  <h4>Rapid Solution</h4>
                  <p>A well-packed energetic team of IT experts providing the most dynamic and vibrant solution in quick turnaround of time.</p>
                </div>
              </div>
              <div className="block-one">
                <span>
                <ImageWebp
                  srcWebp={supportIcon}
                  src={supportIcon}
                  />
                  {/* <img src={supportIcon} alt="" /> */}
                  </span>
                <div className="para">
                  <h4>Customer Support</h4>
                  <p>A whole hearted approach to support the customers. Following this approach helps to gain 40% of repeat clients.</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-6 col-xs-12 right">
            <ImageWebp
                  srcWebp={rightImage}
                  src={rightImage}
                  />
              {/* <img src={rightImage} alt="" /> */}
            </div>
          </div>
        </section>
        {/* <!-- quality-design end--> */}
        <div className="clearfix" alt="" />
      </Fragment>
    </div>
  )
}


