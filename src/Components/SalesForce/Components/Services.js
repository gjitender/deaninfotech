import React, { Fragment } from 'react';


const migration = require('../images/lightning-migration.png');
const Marketing = require('../images/Marketing.png');
const business = require('../images/business-process.png');
const customization = require('../images/Salesforce_customization.png');
const datamigration = require('../images/data-migration.png');
const development = require('../images/development.png');

const crmSales = require('../images/Sales.png');
const crmservices = require('../images/services.png');
const crmhealth = require('../images/health.png');
const crmmarketing1 = require('../images/marketing1.png');
const crmcommunity = require('../images/community.png');
const crmcommerce = require('../images/commerce.png');


export default function Services() {
	return (
		<Fragment>
       <section className="salesforce-service p-80" id="sales">
				<div className="container">
					<h2 className="uppercase">OUR SERVICES</h2>
					<p>We offer Salesforce based custom CRM solutions with unique mechanisms which can handle different business complexities. Our services include Salesforce Clouds implementation, Consultation and Enhancements.</p>
					<div className="subpart">
						<div className="col-md-4 col-sm-6 col-xs-12 left wow fadeInUp" data-wow-delay="0.1s">
							<figure><img src={migration} className="hvr-wobble-vertical" alt="lightning-migration" /></figure>
							<h3>Lightning Migration</h3>
							<p>Migrate to Lightning to speed up your processes on a better UI. We are here to help!</p>
						</div>
						<div className="col-md-4 col-sm-6 col-xs-12 left wow fadeInUp" data-wow-delay="0.2s">
							<figure><img src={Marketing} className="hvr-wobble-vertical" alt="Marketing" /></figure>
							<h3>Pardot Marketing Automation</h3>
							<p>You can easily review your marketing elements with the results and effectiveness through Pardot reporting. This may include natural search opportunities, paid and site searches. </p>
						</div>
						<div className="col-md-4 col-sm-6 col-xs-12 left wow fadeInUp" data-wow-delay="0.3s">
							<figure><img src={business} className="hvr-wobble-vertical" alt="business-process" /></figure>
							<h3>Business Process Optimization</h3>
							<p>Salesforce platform is made to run any and every business. We create a clear business plan to optimize each business process. </p>
						</div>
						<div className="col-md-4 col-sm-6 col-xs-12 left wow fadeInUp" data-wow-delay="0.4s" >
							<figure><img src={customization} className="hvr-wobble-vertical" alt="Salesforce_customization" /></figure>
							<h3>Salesforce Customization</h3>
							<p>Salesforce provides the opportunity to customize unique needs for your business processes. </p>
						</div>
						<div className="col-md-4 col-sm-6 col-xs-12 left wow fadeInUp" data-wow-delay="0.5s" >
							<figure><img src={datamigration} className="hvr-wobble-vertical" alt="data-migration" /></figure>
							<h3>Data Migration</h3>
							<p>By preparing the data for migration and then making sure it can easily be understood by Salesforce, we help to use the power of the data you have at present.</p>
						</div>
						<div className="col-md-4 col-sm-6 col-xs-12 left wow fadeInUp" data-wow-delay="0.6s">
							<figure><img src={development} className="hvr-wobble-vertical" alt="development" /></figure>
							<h3>Force.com Development</h3>
							<p>With the unrivalled Force.com experience you can accelerate the product development and deployment of cloud-based applications and websites through us. </p>
						</div>
					</div>
				</div>
			</section>
      <section className="salesforce-sucess p-80">
				<div className="container">
					<h2>Make your bussiness more agile by implementing world’s CRM</h2>
					<div className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
						<div className="blue">
							<figure className="hvr-wobble-vertical"><img src={crmSales} alt="Sales" /></figure>
							<h3>Sales</h3>
							<p>This Cloud helps in the sales process by managing customer communication with the help of interactions and data through the customer lifecycle.</p>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
						<div className="blue yellow">
							<figure className="hvr-wobble-vertical"><img src={crmservices} alt="services" /></figure>
							<h3>Services</h3>
							<p>Answer your customers concerns easily using Service Cloud and increase your customer retention rate.</p>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
						<div className="blue sky">
							<figure className="hvr-wobble-vertical"><img src={crmhealth} alt="health" /></figure>
							<h3>Health</h3>
							<p> We blaze the new paths with the Health cloud for our Healthcare customers by providing 100% custom solutions within Salesforce.</p>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
						<div className="blue purple">
							<figure className="hvr-wobble-vertical"><img src={crmmarketing1} alt="marketing1" /></figure>
							<h3>Marketing</h3>
							<p>Salesforce provides CRM platforms for the marketers to create and manage marketing relationships with customers.</p>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
						<div className="blue pink">
							<figure className="hvr-wobble-vertical"><img src={crmcommunity} alt="community" /></figure>
							<h3>Community</h3>
							<p>Salesforce provides you with the facility to create communities to meet your business needs and connect the customers.</p>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
						<div className="blue green">
							<figure className="hvr-wobble-vertical"><img src={crmcommerce} alt="commerce" /></figure>
							<h3>Commerce</h3>
							<p>You can analyze your data across commerce cloud ecosystems which unify everything to assure a smooth, personalized experience for you.</p>
						</div>
					</div>
				</div>
			</section>
        <div className="clearfix" />
      </Fragment>
	)
}


