import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import ImageWebp from '../../../ImageWebp'

const Designer = require('../images/webdesign.png');
const DesignerWhite = require('../images/webdesign-white.png');

const bussiness = require('../images/bussiness-development.png');
const bussinessWhite = require('../images/bussiness-development-white.png');

const bidder = require('../images/online-bidder.png');
const bidderWhite = require('../images/online-bidder-white.png');

const DotNet = require('../images/dot-net.png');
const DotNetWhite = require('../images/dot-net-white.png');

const cwriter = require('../images/content-writer.png');
const cwriterWhite = require('../images/content-writer-white.png');




export default function Jobs() {
  return (
    <div>
      <Fragment>
        <section className="career p-40" id="current">
          <div className="container">
            <div className="col-md-3 col-sm-6 col-xs-12 wow animate fadeInUp">
              <div className="icon">
                <div className="sub">
                  <figure>
                  <ImageWebp
                  srcWebp={Designer}
                  src={Designer}
                  />
                    {/* <img alt="" src={Designer} /> */}
                    </figure>
                  <h3>Senior  <br />Web Designer</h3>
                </div>
                <NavLink to="/web-designer-profile">
                <div className="overlay-strip">
                  <div className="text">
                    <figure>
                    <ImageWebp
                  srcWebp={DesignerWhite}
                  src={DesignerWhite}
                  />
                      {/* <img alt="" src={DesignerWhite} /> */}
                      </figure>

                     <h3>Senior  <br />Web Designer</h3>
                    <button><a href="/web-designer-profile">More Info</a></button>

                  </div>
                </div>
                </NavLink>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 wow animate fadeInUp">
              <div className="icon">
                <div className="sub">
                  <figure>
                  <ImageWebp
                  srcWebp={bussiness}
                  src={bussiness}
                  />
                    {/* <img alt="" src={bussiness} /> */}
                    </figure>
                  <h3>Team Lead <br /> Business Development</h3>
                </div>
                <NavLink to="/business-development-profile">
                <div className="overlay-strip">
                  <div className="text">
                    <figure>
                    <ImageWebp
                  srcWebp={bussinessWhite}
                  src={bussinessWhite}
                  />
                      {/* <img alt="" src={bussinessWhite} /> */}
                      </figure>

                   <h3>Team Lead <br /> Business Development</h3>
                    <button><a href="/business-development-profile">More Info</a></button>

                  </div>
                </div>
                </NavLink>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 wow animate fadeInUp">
              <div className="icon">
                <div className="sub">
                  <figure>
                  <ImageWebp
                  srcWebp={bidder}
                  src={bidder}
                  />
                    {/* <img alt="" src={bidder} /> */}
                    </figure>
                  <h3>Online Bidder</h3>
                </div>
                <NavLink to="/online-bidder">
                <div className="overlay-strip">
                  <div className="text">
                    <figure>
                    <ImageWebp
                  srcWebp={bidderWhite}
                  src={bidderWhite}
                  />
                      {/* <img alt="" src={bidderWhite} /> */}
                      </figure>

                    <h3>Online Bidder</h3>
                    <button><a href="/online-bidder">More Info</a></button>

                  </div>
                </div>
                </NavLink>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 wow animate fadeInUp">
              <div className="icon">
                <div className="sub">
                  <figure>
                  <ImageWebp
                  srcWebp={DotNet}
                  src={DotNet}
                  />
                    {/* <img alt="" src={DotNet} /> */}
                    </figure>
                  <h3>DotNet Developer <br />(MVC)</h3>
                </div>
                <NavLink to="/.net-developer-profile">
                <div className="overlay-strip">
                  <div className="text">
                    <figure>
                    <ImageWebp
                  srcWebp={DotNetWhite}
                  src={DotNetWhite}
                  />
                      {/* <img alt="" src={DotNetWhite} /> */}
                      </figure>

                    <h3>DotNet Developer <br />(MVC)</h3>
                    <button><a href="/.net-developer-profile">More Info</a></button>

                  </div>
                </div>
                </NavLink>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 wow animate fadeInUp">
              <div className="icon">
                <div className="sub">
                  <figure>
                  <ImageWebp
                  srcWebp={cwriter}
                  src={cwriter}
                  />
                    {/* <img alt="" src={cwriter} /> */}
                    </figure>
                  <h3>Content Writer</h3>
                </div>
                <NavLink to="/content-writer-profile">
                <div className="overlay-strip">
                  <div className="text">
                    <figure>
                    <ImageWebp
                  srcWebp={cwriterWhite}
                  src={cwriterWhite}
                  />
                      {/* <img alt="" src={cwriterWhite} /> */}
                      </figure>

                     <h3>Content Writer</h3>
                    <button><a href="career-2.html">More Info</a></button>

                  </div>
                </div>
                </NavLink>
              </div>
            </div>
           

          </div>
        </section>

        <div className="clearfix" />
      </Fragment>
    </div>
  )
}


