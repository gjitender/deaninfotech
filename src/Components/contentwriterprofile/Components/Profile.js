import React, { Fragment } from "react";

export default function Profile() {
  return (
    <div>
      <Fragment>
        <section className="dean-career one p-80">
          <div className="container wow animate fadeInLeft">
            <h2 className="uppercase">Content Writer</h2>
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
                  <li>
                    Create and manage strong written content for websites,
                    newsletters, social media and other content types
                  </li>
                  <li>
                    Collaborating with campaign managers, creative team, and
                    designers
                  </li>
                  <li>Update and monitor social media channels</li>
                  <li>
                    Proofread content for errors or additions and ensure that
                    content is written per instructions
                  </li>
                  <li>Manage user-generated content on social media sites</li>
                  <li>
                    Propose new content ideas and contributes to the development
                    of the team
                  </li>
                  <li>
                    Proactive involvement in social media-driven content
                    marketing
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="career-info">
                <h3>Skill and Ability:</h3>
                <ul>
                  <li>Bachelor's/Master’s degree</li>
                  <li>Excellent verbal and written communication skills</li>
                  <li>Creative and innovative thinker and planner</li>
                  <li>
                    Able to multitask, prioritize, and manage time efficiently
                  </li>
                  <li>
                    Ability to work independently or as an active member of a
                    team
                  </li>
                  <li>Familiarity with keyword placement and SEO</li>
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
