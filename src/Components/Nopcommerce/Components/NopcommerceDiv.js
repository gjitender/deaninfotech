import React, {  Fragment } from 'react';
import RequestForm from '../../requestform';


export default function NopcommerceDiv() {
  return (
    <Fragment>
       <section className="net-request-form p-80">
                <div className="container wow animate fadeInLeft">
                    <div className="col-md-8 col-sm-12 col-xs-12 second-block">
                        <h2 className="uppercase">NOPCOMMERECE DEVELOPMENT</h2>
                        <p>Nopcommerce is an e-commerce platform which is flexible, reliable and adapting and is blessed with the multitude of features. We have a wide range of platforms available for those who are looking to expand their business and wish to have their own e-commerce venture.</p>
                        <p>At Dean Infotech, our experts with technical skills work with the updated features of Nopcommerce to manage backend operations. We make the use of extensive functionalities to manage your business in a flawless manner.</p>
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

