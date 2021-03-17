import React, { Fragment } from 'react';
import RequestForm from '../../requestform';


export default function UmbracoDiv() {
  return (
    <Fragment>
    <section className="net-request-form p-80">
             <div className="container wow animate fadeInLeft">
                 <div className="col-md-8 col-sm-12 col-xs-12 second-block">
                     <h2 className="uppercase">UMBRACO DEVELOPMENT</h2>
                     <p>Umbraco is the simplest and most flexible content management system which facilitates the use of modern and custom controls in .NET. It provides you with extraordinary features and also supports the end users by managing all your digital contents and publishes it over the web.</p>
                     <p>Dean Infotech specializes in Umbraco Development with the most passionate team for Umbraco Development who provides rich customized web services. We have a remarkable experience in building websites with the use of Umbraco Framework with great flexibility and editing experience.</p>
                 </div>
                 <div className="col-md-4 col-sm-12 col-xs-12 first-block">
                   <RequestForm />
                 </div>
             </div>
         </section>
     <div className="clearfix" />
   </Fragment>
  )
}

