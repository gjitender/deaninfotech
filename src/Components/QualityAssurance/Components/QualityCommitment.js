import React, {  Fragment } from 'react';


const commitRight = require('../images/quality-commit-right.png');


export default function QualityCommitment() {
  return (
    <Fragment>
        {/* <!-- quality-assurance start--> */}
        <section className="quality-assurance p-80">
          <div className="container">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="left-part wow animate fadeInLeft">
                <h2 className="uppercase">What makes us unique in QA?</h2>
                <h3>We deliver Quality. Our Clients experience Success</h3>
                <p>By producing a unique combination of quality and cost-effectiveness, our enterprise solutions company brings together a consistently added value, strategy, and process which deliver solutions that exceed the expectations. We use the best industry standards in project management and software development. We empower you to get the highest valued work by customizing approaches to your specific business needs.</p>
                <p>Dean Infotech’s quality assurance standards help in improving team capabilities with the assurance of customer satisfaction. We deliver the predictable quality that increases overall operational efficiency and effectiveness. Our firm is committed to providing high-quality enterprise services demonstrating leadership and innovation through continuous improvement.</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="right-part">
                <figure><img src={commitRight} alt="" /></figure>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- quality-assurance end--> */}
        <div className="clearfix" />
      </Fragment>
  )
}


