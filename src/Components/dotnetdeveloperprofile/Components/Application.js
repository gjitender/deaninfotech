import React, {  Fragment } from 'react';
import ApplicationForm from '../../Mailyoursynopsis/Components/ApplicationForm';


export default function Application() {
  return (
    <div>
       <Fragment>
        <section className="career-form-one p-80 career-form-on-form">

          <div className="container wow animate fadeInLeft">

            <h2 className="uppercase">Careers at Deaninfotech</h2>
           <ApplicationForm />
          </div>

        </section>

        
        <div className="clearfix" />
      </Fragment>
    </div>
  )
}


