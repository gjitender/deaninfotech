import React, { Fragment } from "react";

export default function Profile() {
  return (
    <div>
      <Fragment>
        <section className="dean-career one p-80">
          <div className="container wow animate fadeInLeft">
            <h2 className="uppercase">Bussiness Development</h2>
            <p>
              At Dean Infotech, we recognize our human resources as the mainstay
              for our success. We have consciously focused on increasing the
              per-employee value and our unique approach has made us an employer
              of choice. Utmost importance is attached to our ability to attract
              the best. We take pride in our success not only in attracting
              fresh talent, but also in retaining our largest asset in the form
              of a highly satisfied resource pool.
            </p>
          </div>
        </section>
        <section className="dean-career-content">
          <div className="container">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="career-info">
                <h3>Requirements and Duties:</h3>
                <ul>
                  <li>Identifying new sales leads</li>
                  <li>Prospecting for new clients/ lead generation</li>
                  <li>Developing customized targeted sales strategies</li>
                  <li>Responding to client requests for proposals (RFPs)</li>
                  <li>Direct communication with clients</li>
                  <li>Pitching products and/or services</li>
                  <li>
                    Answering potential client questions and follow-up with them
                  </li>
                  <li>
                    Maintaining short- and long-term business development plans
                  </li>
                  <li>
                    Understanding client needs and offering solutions and
                    support
                  </li>
                  <li>
                    Closing sales and working with client through closing
                    process
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="career-info">
                <h3>Skill and Ability:</h3>
                <ul>
                  <li>Experience with lead generation</li>
                  <li>
                    Creative talents and the ability to solve tough problems
                  </li>
                  <li>
                    Excellent verbal and written communication skills; the
                    ability to call, connect and interact with potential clients
                  </li>
                  <li>Persuasive and goal-oriented</li>
                  <li>Self-motivated and self-directed</li>
                  <li>Knowledge of sales process from initiation to close</li>
                  <li>The ability to handle pressure and meet deadlines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="clearfix" />
      </Fragment>
    </div>
  );
}
