import React, {  Fragment } from 'react';
import RequestForm from '../../requestform';


export default function LaravelDiv() {
  return (
    <Fragment>
    <section className="request-form p-80">
      <div className="container wow animate fadeInLeft">
        <div className="col-md-8 col-sm-6 col-xs-12 para">
          <h2 className="uppercase">Laravel Web Development</h2>
          <p>Laravel is a MVA platform based PHP framework used in the development of web applications. It is the best PHP framework because it is used to create personalized web applications with a quick and efficient way. It hides complexities and add several ready-to-use functionalities. With the latest Laravel design, we can create codes in less time. </p>
          <p>Dean Infotech provides best Laravel solutions to fulfil your growing business demands. We have a blend of 50+ developers who are perfectly versed in their work. Our fluency in delivering the best code on time enables us to be the best in industry. We offer client-centric engagement packages that produce high-quality throughputs in cost-effective ways. </p>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12 ">
          <RequestForm />
        </div>
      </div>
    </section>
    <div className="clearfix" />
  </Fragment>
  )
}

