import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';


const portfolioh1 = require('../../../images/portfolio/carousel-img11.webp');

const portfolioh2 = require('../../../images/portfolio/carousel-img14.webp');
const portfolioh3 = require('../../../images/portfolio/carousel-img19.webp');
const portfolioh4 = require('../../../images/portfolio/carousel-img08.webp');
const portfolioh5 = require('../../../images/portfolio/carousel-img20.webp');
const portfolioh6 = require('../../../images/portfolio/carousel-img15.webp');
const portfolioh7 = require('../../../images/portfolio/carousel-img25.webp');
const portfolioh8 = require('../../../images/portfolio/carousel-img07.webp');
const portfolioh9 = require('../../../images/portfolio/carousel-img17.webp');
const portfolioh10 = require('../../../images/portfolio/carousel-img24.webp');
const portfolioh11 = require('../../../images/portfolio/carousel-img18.webp');
const portfolioh12 = require('../../../images/portfolio/carousel-img12.webp');
const portfolioh13 = require('../../../images/portfolio/carousel-img23.webp');
const portfolioh14 = require('../../../images/portfolio/carousel-img06.webp');
const portfolioh15 = require('../../../images/portfolio/carousel-img04.webp');
const portfolioh16 = require('../../../images/portfolio/carousel-img21.webp');
const portfolioh17 = require('../../../images/portfolio/carousel-img03.webp');
const portfolioh18 = require('../../../images/portfolio/carousel-img09.webp');
const TissotSmall = require('../../../images/portfolio/Tissot.webp');
const PrivateCaremasterSmall = require('../../../images/portfolio/the_private_care_master.webp');
const airforce=require('../../../images/portfolio/airforce.webp')
const sahil =require('../../../images/portfolio/sahil.webp')
const private_party_sale=require('../../../images/portfolio/small/private_party_sales.webp');
const wikiXm=require('../../../images/portfolio/small/wikixm.webp');
const emagine_banner=require('../../../images/portfolio/emagine_banner.webp');
const happystems_banner=require('../../../images/portfolio/happystems_banner.webp');
const sorcero_benner=require('../../../images/portfolio/sorcero_benner.webp');
const dunkindonuts_benner=require('../../../images/portfolio/dunkindonuts_benner.webp');
const nissanofqueens_benner=require('../../../images/portfolio/nissanofqueens_benner.webp');
const bgoilfieldservices_benner=require('../../../images/portfolio/bgoilfieldservices_benner.webp');


const portfoliob1 = require('../../../images/portfolio/large/ambient-large.webp');
const portfoliob2 = require('../../../images/portfolio/large/archandbow-large.webp');
const portfoliob3 = require('../../../images/portfolio/large/phoolwala-large.webp');
const portfoliob4 = require('../../../images/portfolio/large/wine-large.webp');
const portfoliob5 = require('../../../images/portfolio/large/ticket-large.webp');
const portfoliob6 = require('../../../images/portfolio/large/choclate-large.webp');
const portfoliob7 = require('../../../images/portfolio/large/credai-large.webp');
const portfoliob8 = require('../../../images/portfolio/large/globalhost-large.webp');
const portfoliob9 = require('../../../images/portfolio/large/robovent-large.webp');
const portfoliob10 = require('../../../images/portfolio/large/depolitie-large.webp');
const portfoliob11 = require('../../../images/portfolio/large/united_business_full_page.webp');
const portfoliob12 = require('../../../images/portfolio/large/bgoil-large.webp');
const portfoliob13 = require('../../../images/portfolio/large/photo-pool-large.webp');
const portfoliob14 = require('../../../images/portfolio/large/floweaura-large.webp');
const portfoliob15 = require('../../../images/portfolio/large/prakash-large.webp');
const portfoliob16 = require('../../../images/portfolio/large/hero-img-large.webp');
const portfoliob17 = require('../../../images/portfolio/large/lacoste-large.webp');
const portfoliob18 = require('../../../images/portfolio/large/baskin-large.webp');
const TissotLarge = require('../../../images/portfolio/large/Tissot_large.webp');
const PrivateCaremasterLarge = require('../../../images/portfolio/large/the_private_care_master_large.webp');

const airforceLarge=require('../../../images/portfolio/large/airforce_large.webp');
const sahilLarge=require('../../../images/portfolio/large/sahilLarge.webp')
const privatePartySale=require('../../../images/portfolio/large/privatePartySale.webp')
const wikixm=require('../../../images/portfolio/large/wikixm_landing.webp')

const emagine=require('../../../images/portfolio/large/emagine_full_page.webp');
const happystems=require('../../../images/portfolio/large/happystems_full_page.webp');
const sorcero=require('../../../images/portfolio/large/sorcero_full_page.webp');

const dunkindonuts=require('../../../images/portfolio/large/dunkindonuts_full_page.webp');
const nissanofqueens=require('../../../images/portfolio/large/nissanofqueens_full_page.webp');
const bgoilfieldservices=require('../../../images/portfolio/large/bgoilfieldservices_full_page.webp');



export default function OurPortfolio() {
  
  return (
    <div>
       <Fragment>
        {/* <!-- portfolio start--> */}
        <section className="dean-portfolio">
          <div className="container">
            <h2>OUR PORTFOLIO</h2>
          </div>
        </section>
        <section className="portfolio-carousel">
          <div className="owl-carousel dg-carousel10 portfolios" data-autoplay="true" data-items="4" data-margin="0">
            <div className="item">
              <div className="dg-imagebox07">
                <div className="pic">
                
                  <img alt="Paper Pouch" src={portfolioh1} />
                  </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-1" role="button" className="btn btn-default" data-toggle="modal">
                        Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              <div className="dg-imagebox07">
              <div className="pic">
             
                <img alt="Paper Pouch" src={portfolioh2} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-2" role="button" className="btn btn-default" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
            </div>
            <div className="item">
              <div className="dg-imagebox07">
              <div className="pic">
            
                <img alt="Paper Pouch" src={portfolioh3} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-3" role="button" className="btn btn-default" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              <div className="dg-imagebox07">
              <div className="pic">
             
                <img alt="Paper Pouch" src={portfolioh4} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-4" role="button" className="btn btn-default" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
            </div>
            <div className="item">
              <div className="dg-imagebox07">
              <div className="pic">
              
                <img alt="Paper Pouch" src={portfolioh5} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-5" role="button" className="btn btn-default" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              <div className="dg-imagebox07">
              <div className="pic">
             
                <img alt="Paper Pouch" src={portfolioh6} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-6" role="button" className="btn btn-default" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
            </div>
            <div className="item">
              <div className="dg-imagebox07">
              <div className="pic">
             
                <img alt="Paper Pouch" src={portfolioh7} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-7" role="button" className="btn btn-default" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              <div className="dg-imagebox07">
              <div className="pic">
              
                <img alt="Paper Pouch" src={portfolioh8} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-8" role="button" className="btn btn-default" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
            </div>
            <div className="item">
              <div className="dg-imagebox07">
              <div className="pic">
             
                <img alt="Paper Pouch" src={portfolioh9} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-9" role="button" className="btn btn-default" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              <div className="dg-imagebox07">
              <div className="pic">
             
                <img alt="Paper Pouch" src={portfolioh10} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-10" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              </div>
              <div className="item">
               <div className="dg-imagebox07">
              <div className="pic">
             
                <img alt="Paper Pouch" src={portfolioh11} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-11" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>

               <div className="dg-imagebox07">
              <div className="pic">
             
                <img alt="Paper Pouch" src={portfolioh12} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-12" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              </div>
              <div className="item">
              <div className="dg-imagebox07">
              <div className="pic">
             
                <img alt="Paper Pouch" src={portfolioh13} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-13" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              <div className="dg-imagebox07">
              <div className="pic">
              
                <img alt="Paper Pouch" src={portfolioh14} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-14" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              </div>
              <div className="item">
              <div className="dg-imagebox07">
              <div className="pic">
             
                <img alt="Paper Pouch" src={portfolioh15} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-15" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              <div className="dg-imagebox07">
              <div className="pic">
              
                <img alt="Paper Pouch" src={portfolioh16} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-16" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              </div>
              <div className="item">
              <div className="dg-imagebox07">
              <div className="pic">
             
                <img alt="Paper Pouch" src={portfolioh17} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-17" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              <div className="dg-imagebox07">
              <div className="pic">
            
                <img alt="Paper Pouch" src={portfolioh18} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-18" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
            </div>
            <div className="item">
              <div className="dg-imagebox07">
              <div className="pic">
                <img alt="Tissot" src={TissotSmall} /></div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-19" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              <div className="dg-imagebox07">
              <div className="pic"><img alt="the private care master" src={PrivateCaremasterSmall} /></div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-20" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              
            </div>
            <div className="item">
              <div className="dg-imagebox07">
              <div className="pic">
              
                <img alt="Airforce" src={airforce} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-21" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              <div className="dg-imagebox07">
              <div className="pic"><img alt="sahil graphics" src={sahil} /></div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-22" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              
            </div>
            <div className="item">
              <div className="dg-imagebox07">
              <div className="pic">
                
                <img alt="Airforce" src={airforce} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#wiki" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              <div className="dg-imagebox07">
              <div className="pic">
             
                <img alt="sahil graphics" src={sahil} />
                </div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#pps" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
                </div>
                <div className="item">
              <div className="dg-imagebox07">
              <div className="pic"><img alt="happystems" src={happystems_banner} /></div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-happystems" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>

              <div className="dg-imagebox07">
              <div className="pic"><img alt="emagine" src={emagine_banner} /></div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-emagine" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>
              </div>

              <div className="item">
              <div className="dg-imagebox07">
              <div className="pic"><img alt="sorcero" src={sorcero_benner} /></div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-sorcero" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>

              <div className="dg-imagebox07">
              <div className="pic"><img alt="dunkindonuts" src={dunkindonuts_benner} /></div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-dunkindonuts" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>


              
            </div>
            <div className="item">
            <div className="dg-imagebox07">
              <div className="pic"><img alt="nissanofqueens" src={nissanofqueens_benner} /></div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-nissanofqueens" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>

              <div className="dg-imagebox07">
              <div className="pic"><img alt="bgoilfieldservices" src={bgoilfieldservices_benner} /></div>
                <div className="content">
                  <div className="center">
                    <h6 className="title">
                      <NavLink to="#portfoliomodel-bgoilfieldservices" role="button" className="btn btn-default" data-options="showDelay:200; hideDelay:50" data-toggle="modal">
                      Click Here
                      </NavLink>
                    </h6>
                  </div>
                </div>
                <div className="bg bg-blue"></div>
              </div>


              </div>

          </div>
        </section>
        {/* <!-- portfolio end--> */}
        <div className="clearfix" />
        <div id="portfoliomodel-1" data-options="showDelay:200; hideDelay:50" className=" modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob1} alt="ambient" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean cherishes its year long relationship with <a href="https://www.ambientbp.com/" target="_blank">Ambient Bamboo Floors</a>. Dean provides dedicated developers and 
                      designers to Ambient to manage the complete development of the website. Ambient is about hardwood bamboo flooring,
                       trim & molding accessories, which also distributes floors domestically and internationally to homeowners and 
                       design professionals alike.</p>
                       
                    <ul>
                      <li>Core PHP</li>
                      
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-2" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob2} alt="archandbow" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean has created a wonderful website for archandbow. This is one of the world's most recognizable brands of garment 
                      and the world’s largest garment specialty chain!</p>
                    <ul>
                      <li>WP</li>
                      <li>HTML</li>
                      <li>Jquery</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-3" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob3} alt="phoolwala" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>With Google Adwords certified individuals on board, Dean successfully ran the adwords campaign for online flower 
                      store - Phoolwala.com. Through Dean's expertise, the store could see two fold rise in the online orders through the store website.</p>
                    <ul>
                      <li>PHP</li>
                      <li>HTML5</li>
                      <li>website design</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-4" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob4} alt="wine" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean has worked on Wiine.Me which is an online wine company, covering Europe, which offers wine subscriptions, with 3 bottles,
                       selected by sommmeliers and delivered to your door, every month.</p>
                    <ul>
                      <li>WP</li>
                      <li>PHP</li>
                      
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-5" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob5} alt="ticket Selection" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean has created a wonderful website for ticketeselection which is based in US.</p>
                    <ul>
                      <li>WP</li>
                      <li>HTML5</li>
                      <li>CSS3</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-6" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob6} alt="choclate" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean has created a wonderful website for choclate always. This is one of the world's most recognizable brands of choclate.</p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Jquery</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-7" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob7} alt="credai" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean has built an awesome website for Confederation of Real Estate Developers' Associations of India (CREDAI) 
                      which is the apex body for private Real Estate developers in India having 11,500+ members across India.</p>
                    <ul>
                      <li>PHP</li>
                      <li>PHPCodeIgniter</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-8" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob8} alt="globalhost" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>The theme based website for event & concert, which provide extreme exclusive experience to peeps
                       who are interested in events, entertainment journey. Globalhost is all about providing the Personal VIP 
                       assistance to enjoy all their accommodations.
                       And Dean played an important role by executing this beautiful website.</p>
                    <ul>
                      <li>WP</li>
                      <li>Jquery</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-9" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob9} alt="robovent" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean worked on RoboVent which is a leader in clean air solutions for industry, providing highly-efficient and effective industrial 
                      ventilation and dust collection systems for manufacturing operations across North America.</p>
                    <ul>
                      <li>WP</li>
                      <li>PHP</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-10" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className="left-panel col-sm-8">
                  <figure><img src={portfoliob10} alt="depolitie" /></figure>
                </div>
                <div className="right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>We have built this app for Belgium police. This app won the CPL award for the most innovative means of communication of the year 2017.</p>
                    <ul>
                      <li>Android</li>
                      <li>iOS</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-11" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob11} alt="United Business" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>We helped them with CMS (Content Management System)</p>
                    <ul>
                      <li>LARAVEL</li>
                      <li>BOOTSTRAP</li>
                     
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-12" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob12} alt="bgoil" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean has created a wonderful website for bgoilfieldservices.</p>
                    <ul>
                      <li>WP</li>
                      <li>HTML5</li>
                      <li>Jquery</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-13" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob13} alt="pool" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p></p>
                    <ul>
                      <li>Android</li>
                      <li>iOS</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-14" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob14} alt="floweaura" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>FlowerAura is an online flower store that delivers flowers all over India. FlowerAura deliver best 
                      quality - fresh cut flowers in more than 100 cities across India. Professionals at Dean helped Floweraura in 
                      designing and developing a custom vendor management portal to cater hundreds of vendors and thousands of orders 
                      through a single interface</p>
                    <ul>
                      <li>PHP</li>
                      <li>Drupal</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-15" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob15} alt="prakash" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean Created a Commercial website for Prakash who are all about the latest developments in printing technology and quality of the machine. 
                      We feel pleasure to work with one of the leading manufacturers of Web Offset Presses of India.</p>
                    <ul>
                      <li>WP</li>
                      <li>HTML5</li>
                      <li>Jquery</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-16" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob16} alt="hero" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Hero Insurance app makes managing your insurance easy. Get quick access to your policy details and renewal 
                      notifications not for hero app but also for other policies a user has enrolled with.</p>
                    <ul>
                      <li>Android</li>
                      <li>iOS</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-17" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob17} alt="lacoste" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean has created a wonderful Landing Page Website for Lacoste for its 12.12 collection. Lacoste is one of the world's most recognizable brands.</p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Jquery</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>

        <div id="portfoliomodel-18" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={portfoliob18} alt="baskin" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean has created a wonderful website for a San Diego based outlet of Baskin-Robbins which has nearly 7,000 
                      store locations in over 50 countries outside the US. Baskin Robbins is one of the world's most recognizable 
                      brands of ice cream treats and the world’s largest ice cream specialty chain!</p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Jquery</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>

        <div id="portfoliomodel-19" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={TissotLarge} alt="Tissot" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean has created a wonderful Landing Page Website for Tissot. Tissot is one of the world's most recognizable brands.</p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Jquery</li>
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-20" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={PrivateCaremasterLarge} alt="private care master" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>The Private Care Masters help you to find the right home care for your loved one.
This application is an introductory service which helps connect individuals with trusted, experienced and fully vetted carers in their area. </p>
                    <ul>
                      <li>Android</li>
                      <li>iOS</li>
                     
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-21" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={airforceLarge} alt="Airforce School" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean has created a wonderful website for Airforce School Panchwati. Air force started functioning as Air Force Vidya Mandir w.e.f. July 1986 having classes from LKG to Class V. At present, the school has 710 students on its roll and classes from LKG to IX. </p>
                    <ul>
                      <li>Wordpress</li>
                      <li>PHP</li>
                      <li>HTML</li>
                       <li>CSS</li>
                    
                         
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>

        <div id="portfoliomodel-22" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure>
                  
                    <img src={sahilLarge} alt="Sahil Graphics" />
                    </figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean has created a wonderful website for Sahil Graphics. SAHIL GRAPHICS is a professional offset printing machine manufacturer, suppliers, Importers & exporters in India, specializing Mini offset printing press single color, 2 color and 4 color sheet fed offset printing machine, Web Offset News paper Printing Press, non woven bag to bag printing machines, Paper bag making machines, Paper Napkin Making machines, Paper cup forming machines, non woven Rice bag multi-colour printing machines and High Speed Non Woven Bag Making Machines importing from China. </p>
                    <ul>
                      <li>Wordpress</li>
                      <li>PHP</li>
                      <li>HTML</li>
                       <li>CSS</li>
                    
                         
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="pps" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure>
                  
                    <img src={sahilLarge} alt="Sahil Graphics" />
                    </figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section">
                    
                    <img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    {/* <h3>About the Project pps</h3> */}
                    {/* <p>Dean has created a wonderful website for Sahil Graphics. SAHIL GRAPHICS is a professional offset printing machine manufacturer, suppliers, Importers & exporters in India, specializing Mini offset printing press single color, 2 color and 4 color sheet fed offset printing machine, Web Offset News paper Printing Press, non woven bag to bag printing machines, Paper bag making machines, Paper Napkin Making machines, Paper cup forming machines, non woven Rice bag multi-colour printing machines and High Speed Non Woven Bag Making Machines importing from China. </p> */}
                    <ul>
                      <li>Wordpress</li>
                      <li>PHP</li>
                      <li>HTML</li>
                       <li>CSS</li>
                    
                         
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port">
                      
                      <img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="wiki" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure>
                  
                    <img src={sahilLarge} alt="Sahil Graphics" />
                    </figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section">
                    
                    <img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    {/* <h3>About the Project pps</h3> */}
                    {/* <p>Dean has created a wonderful website for Sahil Graphics. SAHIL GRAPHICS is a professional offset printing machine manufacturer, suppliers, Importers & exporters in India, specializing Mini offset printing press single color, 2 color and 4 color sheet fed offset printing machine, Web Offset News paper Printing Press, non woven bag to bag printing machines, Paper bag making machines, Paper Napkin Making machines, Paper cup forming machines, non woven Rice bag multi-colour printing machines and High Speed Non Woven Bag Making Machines importing from China. </p> */}
                    <ul>
                      <li>Wordpress</li>
                      <li>PHP</li>
                      <li>HTML</li>
                       <li>CSS</li>
                    
                         
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port">
                      
                      <img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>

        <div id="portfoliomodel-happystems" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={happystems} alt="happystems" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>We helped them with the UI/UX from scratch along with CMS including custom modules.</p>
                    <ul>


                      <li>LARAVEL</li>
                       <li>Bootstrap</li>
                    
                         
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-emagine" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={emagine} alt="emagine" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>We helped them with the UI/UX from scratch along with some framework.</p>
                    <ul>
                     
                      <li>HTML</li>
                       <li>CSS</li>
                    
                         
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>
        <div id="portfoliomodel-sorcero" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={sorcero} alt="sorcero" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean did a long term project and helped them out for their enterprise application</p>
                    <ul>
                     
                      <li>LARAVEL</li>
                       <li>Bootstrap</li>
                    
                         
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>


        <div id="portfoliomodel-dunkindonuts" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={dunkindonuts} alt="dunkindonuts" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>We helped them with the UI/UX from scratch along with CMS (Content Management System)</p>
                    <ul>
                     
                      <li>ASP.NET</li>
                       <li>Umbraco</li>
                    
                         
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>

        <div id="portfoliomodel-nissanofqueens" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={nissanofqueens} alt="nissanofqueens" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>Dean has created a wonderful Website for Nissan, New York based Store. Nissan is one of the world's most recognizable automobile companies.</p>
                    <ul>
                     
                      <li>Wordpress </li>
                       <li>Bootstrap</li>
                    
                         
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>

        <div id="portfoliomodel-bgoilfieldservices" data-options="showDelay:200; hideDelay:50" className="modal" data-easein="swoopIn" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog home-popup portfolio-model">
            <div className="modal-content">
            <div className="modal-header home-page"> <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                     ×
                  </button></div>
              <div className="modal-body">
             
                <div className=" left-panel col-sm-8">
                  <figure><img src={bgoilfieldservices} alt="bgoilfieldservices" /></figure>
                </div>
                <div className=" right-panel col-sm-4">
                 
                  <div className="logo-section"><img src={require('../../../images/logo-popup.png')} alt="logo" /></div>
                 
                  <div className="about-project-pop">
                    <h3>About the Project</h3>
                    <p>B&G Oilfield Services is a multi-service oilfield service provider with operations in North Dakota. We build there Website & Enterprise Application.</p>
                    <ul>
                     
                      <li>WP</li>
                       <li> ASP.NET</li>
                       <li>Bootstrap</li>
                    
                         
                    </ul>
                  </div>
                  <div className="about-project-pop">
                    <h3> Clients Feedback</h3>
                    <figure className="rating-popup-port"><img src={require('../../../images/popup-rating-img.webp')} alt="popup rating" /></figure>
                  </div>
                  <h5><a href="/contact"  className="hire-me-button btn hvr-wobble-vertical">Contact Us</a></h5>
                </div>
              </div>
              <div className="modal-footer" />
            </div>
          </div>
        </div>




        <section className="dean-video p-80">

						<div className="container">

						

								<div className="col-md-4 col-sm-4 col-xs-12 left">

										<div className="video">

												<iframe rel="nofollow" src="https://www.youtube.com/embed/rYKzAe2FuzI?autoplay=0&showinfo=0&controls=0&rel=0" title="abc"  allowFullScreen="" height="315"></iframe>

										</div>

								</div>

								<div className="col-md-4 col-sm-4 col-xs-12 left">

										<div className="video">

												<iframe src="https://www.youtube.com/embed/nL3VwIWV1bo?rel=0&autoplay=0&showinfo=0&controls=0" title="abcd" allowFullScreen="" height="315"></iframe>

										</div>

								</div>
                <div className="col-md-4 col-sm-4 col-xs-12 left">

										<div className="video" id="playerWrap">

												<iframe src="https://www.youtube.com/embed/3f31OKv5z9g?rel=0&autoplay=0&showinfo=0&controls=0" title="abcd" allowFullScreen="" height="315"></iframe>

										</div>

								</div>

						</div>

				</section>
      </Fragment>
    </div>
  )
}



