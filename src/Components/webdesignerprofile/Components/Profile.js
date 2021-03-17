import React, { Fragment } from 'react';



export default function Profile() {
    return (
        <Fragment>
       <section className="dean-career one p-80">
                <div className="container wow animate fadeInLeft">
                    <h2 className="uppercase">Senior Web Designer</h2>
                    <p>At Dean Infotech, we recognize our human resources as the mainstay for our success. We have consciously focused on increasing the per-employee value and our unique approach has made us an employer of choice. Utmost importance is attached
                        to our ability to attract the best. We take pride in our success not only in attracting fresh talent, but also in retaining our largest asset in the form of a highly satisfied resource pool.</p>
                </div>
            </section>
            <section className="dean-career-content">
                <div className="container">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="career-info">
                            <h3>Requirements and Duties:</h3>
                            <ul>
                                <li>Good understanding of fundamentals: data structures, Object Oriented Programming concepts</li>
                                <li>Good understanding of and work experience in native frameworks in iOS SDK</li>
                                <li>Good experience in UI development: Storyboards, auto layouts, custom UI views, MVC design pattern, animations, gestures</li>
                                <li>Familiar with provision profiles, developer/distribution certificates, ad-hoc builds, AppStore procedures and working experience in deploying apps</li>
                                <li>Strong design style, including creative design solutions within the constraints of the Web/Mobile/Tablet/Social</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="career-info">
                            <h3>Skill and Ability:</h3>
                            <ul>
                                <li>Strong knowledge of Photoshop, HTML5, CSS3, Bootstrap, Jquery, JavaScript.</li>
                                <li>Knowledge of Illustrator, Adobe XD, React plus point.</li>
                                <li>Create images that identify a product or convey a message</li>
                                <li>Knowledge of wireframing for mobile app UI.</li>
                                <li>Good Communication Skill</li>
                                <li>Learning Attitude</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        <div className="clearfix" />
      </Fragment>
    )
}

