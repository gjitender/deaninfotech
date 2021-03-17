import React, {  Fragment } from 'react';
import Slide from 'react-reveal/Slide';
import ImageWebp from '../../../ImageWebp'


const lacoste = require('../../../images/portfolio/small/lacoste.jpg');
const archBow = require('../../../images/portfolio/small/arch-bow.jpg');
const baskin = require('../../../images/portfolio/small/baskin.jpg');
const ambient = require('../../../images/portfolio/small/ambient.jpg');
const globalhost = require('../../../images/portfolio/small/globalhost.jpg');
const prakash = require('../../../images/portfolio/small/prakash.jpg');
const phoolwala = require('../../../images/portfolio/small/phoolwala.jpg');
const floweraura = require('../../../images/portfolio/small/floweraura.jpg');
const credai = require('../../../images/portfolio/small/credai.jpg');
const fairytale = require('../../../images/portfolio/small/fairytale.jpg');
const wineMe = require('../../../images/portfolio/small/wine-me.jpg');
const PrivateCaremasterSmall = require('../../../images/portfolio/small/the_private_care_master.jpg');
const airforce=require('../../../images/portfolio/airforce.webp')
const sahil =require('../../../images/portfolio/sahil.webp')

const robovent = require('../../../images/portfolio/small/robovent.jpg');
const lifebio = require('../../../images/portfolio/small/lifebio.jpg');
const depolitie = require('../../../images/portfolio/small/depolite.jpg');
const choclate = require('../../../images/portfolio/small/choclate.jpg');
const hero = require('../../../images/portfolio/small/hero-app.jpg');
const bgoil = require('../../../images/portfolio/small/bgoil.jpg');
const wigenvy = require('../../../images/portfolio/small/wigenvy.jpg');
const active = require('../../../images/portfolio/small/active.jpg');
const otr = require('../../../images/portfolio/small/otr.jpg');
const TissotPort = require('../../../images/portfolio/small/Tissot.jpg');
const private_party_salewebp=require('../../../images/portfolio/small/private_party_sales.webp');
const private_party_sale=require('../../../images/portfolio/small/private_party_sales.jpg');
const wikiXmWebp=require('../../../images/portfolio/small/wikixm.webp');
const wikiXm=require('../../../images/portfolio/small/wikixm.jpg');

const emagine_banner=require('../../../images/portfolio/emagine_banner.webp');
const happystems_banner=require('../../../images/portfolio/happystems_banner.webp');
const sorcero_benner=require('../../../images/portfolio/sorcero_benner.webp');
const dunkindonuts_benner=require('../../../images/portfolio/dunkindonuts_benner.webp');
const nissanofqueens_benner=require('../../../images/portfolio/nissanofqueens_benner.webp');
const bgoilfieldservices_benner=require('../../../images/portfolio/bgoilfieldservices_benner.webp');


const lacostelarge = require('../../../images/portfolio/large/lacoste-large.webp');
const archandbowlarge = require('../../../images/portfolio/large/archandbow-large.webp');
const baskinlarge = require('../../../images/portfolio/large/baskin-large.webp');
const ambientlarge = require('../../../images/portfolio/large/ambient-large.webp');
const globalhostlarge = require('../../../images/portfolio/large/globalhost-large.webp');
const prakashlarge = require('../../../images/portfolio/large/prakash-large.webp');
const phoolwalalarge = require('../../../images/portfolio/large/phoolwala-large.webp');
const flowerauralarge = require('../../../images/portfolio/large/floweaura-large.webp');
const credailarge = require('../../../images/portfolio/large/credai-large.webp');
const fairytalelarge = require('../../../images/portfolio/large/fairytale-large.webp');
const wineMelarge = require('../../../images/portfolio/large/wine-large.webp');
const depolitelarge = require('../../../images/portfolio/large/depolitie-large.webp');
const roboventlarge = require('../../../images/portfolio/large/robovent-large.webp');
const lifebiolarge = require('../../../images/portfolio/large/lifebio-large.webp');
const choclatelarge = require('../../../images/portfolio/large/choclate-large.webp');
const herolarge = require('../../../images/portfolio/large/hero-img-large.webp');
const bgoillarge = require('../../../images/portfolio/large/bgoil-large.webp');
const wigenvylarge = require('../../../images/portfolio/large/wigenvy-large.webp');
const activelarge = require('../../../images/portfolio/large/active-large.webp');
const otrlarge = require('../../../images/portfolio/large/otr-large.webp');
const TissotPortLarge = require('../../../images/portfolio/large/Tissot_large.webp');
const PrivateCaremasterLarge = require('../../../images/portfolio/large/the_private_care_master_large.webp');
const airforceLarge=require('../../../images/portfolio/large/airforce_large.webp');
const sahilLarge=require('../../../images/portfolio/large/sahilLarge.webp')
const privatePartySaleWebp=require('../../../images/portfolio/large/privatePartySale.webp')
const privatePartySale=require('../../../images/portfolio/large/privatePartySale.webp')
const wikixmwebp=require('../../../images/portfolio/large/wikixm_landing.webp')
const wikixm=require('../../../images/portfolio/large/wikixm_landing.webp')

const emagine=require('../../../images/portfolio/large/emagine_full_page.webp');
const happystems=require('../../../images/portfolio/large/happystems_full_page.webp');
const sorcero=require('../../../images/portfolio/large/sorcero_full_page.webp');

const dunkindonuts=require('../../../images/portfolio/large/dunkindonuts_full_page.webp');
const nissanofqueens=require('../../../images/portfolio/large/nissanofqueens_full_page.webp');
const bgoilfieldservices=require('../../../images/portfolio/large/bgoilfieldservices_full_page.webp');





export default function PortfolioStartnew() {
   return (
      <Fragment>
         <section className="portfolio p-80">
            <h2 className="uppercase">OUR PORTFOLIO</h2>
            <p>Dean Infotech provides end-to-end enterprise mobility solutions to empower business with extensibility and security. With the broad use of technology solutions, we provide our clients with the stock of Business Intelligence Solutions. Our customers are our top priority and their success is our objective.</p>
            <div className="grid-wrap">
               <ul className="grid " id="photos">
               <Slide top>
                  <li className="title-box">
                     <h2> "Quality <small>without</small> Compromise" </h2>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#archandbow" data-toggle="modal" href='0#'>
                        <img src={archBow} alt="archBow" />
                        <h3>archandbow</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#baskin" data-toggle="modal" href='0#'>
                        <img src={baskin} alt="baskin" />
                        <h3>baskin robbins</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#ambient" data-toggle="modal" href='0#'>
                        <img src={ambient} alt="ambient" />  
                        <h3>ambientbp</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#lacoste" data-toggle="modal" href='0#'>
                        <img src={lacoste} alt="lacoste" />
                        <h3>Lacoste</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#tissot" data-toggle="modal" href='0#'>
                        <img src={TissotPort} alt="Tissot" />
                        <h3>Tissot</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#privatecaremaster" data-toggle="modal" href='0#'>
                        <img src={PrivateCaremasterSmall} alt="private care masters" />
                        <h3>The Private Care Masters</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#prakashoffset" data-toggle="modal" href='0#'>
                        <img src={prakash} alt="prakash" />
                        <h3>prakashoffset</h3>
                     </a>
                  </li>
                  </Slide>
                 
                  <Slide top>
                  <li>
                     <a data-target="#phoolwala" data-toggle="modal" href='0#'>
                        <img src={phoolwala} alt="phoolwala" />
                        <h3>phoolwala</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#floweraura" data-toggle="modal" href='0#'>
                        <img src={floweraura} alt="floweraura" />
                        <h3>floweraura</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#depolite" data-toggle="modal" href='0#'>
                        <img src={depolitie} alt="depolitie" />
                        <h3>depolite</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#choclate" data-toggle="modal" href='0#'>
                        <img src={choclate} alt="choclate" />
                        <h3>chocolatealways</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#wiine" data-toggle="modal" href='0#'>
                        <img src={wineMe} alt="wineMe" />
                        <h3>wiine.me</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#hero" data-toggle="modal" href='0#'>
                        <img src={hero} alt="hero" />
                        <h3>hero</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#credai" data-toggle="modal" href='0#'>
                        <img src={credai} alt="credai" />
                        <h3>credai</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#robovent" data-toggle="modal" href='0#'>
                        <img src={robovent} alt="robovent" />
                        <h3>robovent</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#globalhost" data-toggle="modal" href='0#'>
                        <img src={globalhost} alt="globalhost" />
                        <h3>globalhost</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#bgoil" data-toggle="modal" href='0#'>
                        <img src={bgoil} alt="bgoil" />
                        <h3>bgoil</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#lifebio1" data-toggle="modal" href='0#'>
                        <img src={lifebio} alt="lifebio" />
                        <h3>lifebio</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#wigenvy" data-toggle="modal" href='0#'>
                        <img src={wigenvy} alt="wigenvy" />
                        <h3>wigenvy</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#active" data-toggle="modal" href='0#'>
                        <img src={active} alt="active" />
                        <h3>active</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#fairy" data-toggle="modal" href='0#'>
                        <img src={fairytale} alt="fairytale" />
                        <h3>fairytale</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#otr" data-toggle="modal" href='0#'>
                        <img src={otr} alt="otr" />
                        <h3>otr</h3>
                     </a>
                  </li>
                  </Slide>

                  <Slide top>
                  <li>
                     <a data-target="#airforce" data-toggle="modal" href='0#'>
                        <img src={airforce} alt="airforce" />
                        <h3>Airforce School</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#sahil" data-toggle="modal" href='0#'>
                        <img src={sahil} alt="sahilGraphics" />
                        <h3>Sahil Graphics</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#pps" data-toggle="modal" href='0#'>
                     <ImageWebp
                           srcWebp={private_party_salewebp}
                            src={private_party_sale}
                            alt="pps"
                            />
                        {/* <img src={sahil} alt="pps" /> */}
                        <h3>Private Party Sale</h3>
                     </a>
                  </li>
                  </Slide>
                  <Slide top>
                  <li>
                     <a data-target="#wikixm" data-toggle="modal" href='0#'>
                     <ImageWebp
                           srcWebp={wikiXmWebp}
                            src={wikiXm}
                            alt="wikixm"
                            />
                        {/* <img src={sahil} alt="sahilGraphics" /> */}
                        <h3>wikixm</h3>
                     </a>
                  </li>
                  </Slide>

                  <Slide top>
                  <li>
                     <a data-target="#nissanofqueens" data-toggle="modal" href='0#'>
                        <img src={nissanofqueens_benner} alt="nissanofqueens" />
                        <h3>Nissan of Queens</h3>
                     </a>
                  </li>
                  </Slide>

                  <Slide top>
                  <li>
                     <a data-target="#emagine" data-toggle="modal" href='0#'>
                        <img src={emagine_banner} alt="emagine" />
                        <h3>Emagine</h3>
                     </a>
                  </li>
                  </Slide>

                  <Slide top>
                  <li>
                     <a data-target="#happystems" data-toggle="modal" href='0#'>
                        <img src={happystems_banner} alt="happystems" />
                        <h3>Happystems</h3>
                     </a>
                  </li>
                  </Slide>

                  <Slide top>
                  <li>
                     <a data-target="#sorcero" data-toggle="modal" href='0#'>
                        <img src={sorcero_benner} alt="sorcero" />
                        <h3>Sorcero</h3>
                     </a>
                  </li>
                  </Slide>

                  <Slide top>
                  <li>
                     <a data-target="#dunkindonuts" data-toggle="modal" href='0#'>
                        <img src={dunkindonuts_benner} alt="dunkindonuts" />
                        <h3>Dunkindonuts</h3>
                     </a>
                  </li>
                  </Slide>

                  <Slide top>
                  <li>
                     <a data-target="#bgoilfieldservices" data-toggle="modal" href='0#'>
                        <img src={bgoilfieldservices_benner} alt="bgoilfieldservices" />
                        <h3>bg oilfield services</h3>
                     </a>
                  </li>
                  </Slide>
               </ul>
            </div>
         </section>
        
        
      <div id="lacoste" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={lacostelarge} className="img-responsive" alt="lacostelarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>Dean has created a wonderful Landing Page Website for Lacoste for its 12.12 collection. Lacoste is one of the world's most recognizable brands.</p>
                        <div className="technology">
                           <a href="0#">HTML</a>
                           <a href="0#">CSS</a>
                           <a href="0#">Jquery</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>

       
       <div id="tissot" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={TissotPortLarge} className="img-responsive" alt="Tissot" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>Dean has created a wonderful Landing Page Website for Tissot. Tissot is one of the world's most recognizable brands.</p>
                        <div className="technology">
                           <a href="0#">HTML</a>
                           <a href="0#">CSS</a>
                           <a href="0#">Jquery</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>

<div id="privatecaremaster" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={PrivateCaremasterLarge} className="img-responsive" alt="Private Care master" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>The Private Care Masters help you to find the right home care for your loved one.
This application is an introductory service which helps connect individuals with trusted, experienced and fully vetted carers in their area. </p>
                        <div className="technology">
                           <a href="0#">Android</a>
                           <a href="0#">iOS</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>



<div id="archandbow" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={archandbowlarge} className="img-responsive" alt="archandbowlarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>Dean has created a wonderful website for archandbow. This is one of the world's most recognizable brands of garment and the world’s largest garment specialty chain!</p>
                        <div className="technology">
                           <a href="0#">WP</a>
                           <a href="0#">HTML</a>
                           <a href="0#">CSS</a>
                           
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>



<div id="baskin" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={baskinlarge} className="img-responsive" alt="baskinlarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>Dean has created a wonderful website for a San Diego based outlet of Baskin-Robbins which has nearly 7,000 store locations in over 50 countries outside the US. Baskin Robbins is one of the world's most recognizable brands of ice cream treats and the world’s largest ice cream specialty chain!</p>
                        <div className="technology">
                           <a href="0#">HTML</a>
                           <a href="0#">CSS</a>
                           <a href="0#">Jquery</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>



<div id="ambient" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={ambientlarge} className="img-responsive" alt="ambientlarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>Dean cherishes its year long relationship with Ambient Bamboo Floors. Dean provides dedicated developers and designers to Ambient to manage the complete development of the website. Ambient is about hardwood bamboo flooring, trim & molding accessories, which also distributes floors domestically and internationally to homeowners and design professionals alike.</p>
                        <div className="technology">
                           <a href="0#">Core PHP</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>



<div id="floweraura" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={flowerauralarge} className="img-responsive" alt="flowerauralarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>FlowerAura is an online flower store that delivers flowers all over India. FlowerAura deliver best quality - fresh cut flowers in more than 100 cities across India. Professionals at Dean helped Floweraura in designing and developing a custom vendor management portal to cater hundreds of vendors and thousands of orders through a single interface</p>
                        <div className="technology">
                           <a href="0#">PHP</a>
                           <a href="0#">Drupal</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>



<div id="phoolwala" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={phoolwalalarge} className="img-responsive" alt="phoolwalalarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>With Google Adwords certified individuals on board, Dean successfully ran the adwords campaign for online flower store - Phoolwala.com. Through Dean's expertise, the store could see two fold rise in the online orders through the store website.</p>
                        <div className="technology">
                           <a href="0#">PHP</a>
                           <a href="0#">HTML5</a>
                           <a href="0#">website design</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>



<div id="prakashoffset" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={prakashlarge} className="img-responsive" alt="prakashlarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>Dean Created a Commercial website for Prakash who are all about the latest developments in printing technology and quality of the machine. We feel pleasure to work with one of the leading manufacturers of Web Offset Presses of India.</p>
                        <div className="technology">
                           <a href="0#">WP</a>
                           <a href="0#">HTML5</a>
                           <a href="0#">Jquery</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>


<div id="choclate" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={choclatelarge} className="img-responsive" alt="choclatelarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>Dean has created a wonderful website for choclate always. This is one of the world's most recognizable brands of choclate.</p>
                        <div className="technology">
                           <a href="0#">HTML</a>
                           <a href="0#">CSS</a>
                           <a href="0#">Jquery</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>


<div id="wiine" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={wineMelarge} className="img-responsive" alt="wineMelarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>Dean has worked on Wiine.Me which is an online wine company, covering Europe, which offers wine subscriptions, with 3 bottles, selected by sommmeliers and delivered to your door, every month.</p>
                        <div className="technology">
                           <a href="0#">WP</a>
                           <a href="0#">PHP</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>



<div id="depolite" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={depolitelarge} className="img-responsive" alt="depolitelarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>We have built this app for Belgium police. This app won the CPL award for the most innovative means of communication of the year 2017.</p>
                        <div className="technology">
                           <a href="0#">Android</a>
                           <a href="0#">iOS</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>


<div id="hero" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={herolarge} className="img-responsive" alt="herolarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>Hero Insurance app makes managing your insurance easy. Get quick access to your policy details and renewal notifications not for hero app but also for other policies a user has enrolled with.</p>
                        <div className="technology">
                           <a href="0#">Android</a>
                           <a href="0#">iOS</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>



<div id="credai" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={credailarge} className="img-responsive" alt="credailarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>Dean has built an awesome website for Confederation of Real Estate Developers' Associations of India (CREDAI) which is the apex body for private Real Estate developers in India having 11,500+ members across India.</p>
                        <div className="technology">
                           <a href="0#">PHP</a>
                           <a href="0#">PHPCodeIgniter</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>


<div id="globalhost" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={globalhostlarge} className="img-responsive" alt="globalhostlarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>The theme based website for event & concert, which provide extreme exclusive experience to peeps who are interested in events, entertainment journey. Globalhost is all about providing the Personal VIP assistance to enjoy all their accommodations. And Dean played an important role by executing this beautiful website.</p>
                        <div className="technology">
                           <a href="0#">WP</a>
                           <a href="0#">Jquery</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>


<div id="robovent" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={roboventlarge} className="img-responsive" alt="roboventlarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>Dean worked on RoboVent which is a leader in clean air solutions for industry, providing highly-efficient and effective industrial ventilation and dust collection systems for manufacturing operations across North America.</p>
                        <div className="technology">
                           <a href="0#">WP</a>
                           <a href="0#">PHP</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>


<div id="bgoil" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={bgoillarge} className="img-responsive" alt="bgoillarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>Dean has created a wonderful website for bgoilfieldservices.</p>
                        <div className="technology">
                           <a href="0#">WP</a>
                           <a href="0#">HTML5</a>
                           <a href="0#">Jquery</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>



<div id="lifebio1" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={lifebiolarge} className="img-responsive" alt="lifebiolarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>Dean has revamp one of the top health startup of the World i.e. Lifebio. LifeBio is all about life stories. It’s a communication platform that helps people to publish their biographies through journals and online system & dean played an important role in it by updating the website look & feel and making it to the next level.</p>
                        <div className="technology">
                           <a href="0#">.Net</a>
                           <a href="0#">Nopcommerce</a>
                           <a href="0#">Bootstrap</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>


<div id="wigenvy" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={wigenvylarge} className="img-responsive" alt="wigenvylarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">
                        <h3>About the Project</h3>
                        <p>Dean has created a wonderful website for wigenvy.</p>
                        <div className="technology">
                           <a href="0#">.Net</a>
                           <a href="0#">Nopcommerce</a>
                           <a href="0#">Bootstrap</a>
                        </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>


<div id="active" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={activelarge} className="img-responsive"  alt="activelarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">

                        <h3>About the Project</h3>
                        <p>Dean is proud to be associated with its long term client - Active.Net. From designing websites to CRM, Dean excels in every IT services for Activenet Realty. ActiveNet has helped countless buyers, sellers and investors make the most out of their real estate goals in the South Florida real estate market for 25 years.</p>
                        <div className="technology">
                           <a href="0#">PHP</a>
                           <a href="0#">CodeIgniter</a>
                         </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>


<div id="fairy" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={fairytalelarge} className="img-responsive" alt="fairytalelarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">

                        <h3>About the Project</h3>
                        <p>Dean worked on an Ecommerce website: My fairtalebooks.com which is all about Personalized Children's Books, Baby Books, Gifts for Kids, Personalized Music CDs and DVDs.</p>
                        <div className="technology">
                           <a href="0#">BigCommerce</a>
                         </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>



<div id="otr" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={otrlarge} className="img-responsive" alt="otrlarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">                        
                        <h3>About the Project</h3>
                        <p>Dean has created a wonderful website for otr tires.</p>
                        <div className="technology">
                           <a href="0#">WP</a>
                           <a href="0#">WooCommerce</a>
                         </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>

      <div id="airforce" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={airforceLarge} className="img-responsive" alt="airforcelarge" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">                        
                        <h3>About the Project</h3>
                        <p>Dean has created a wonderful website for Airforce School Panchwati. Air force started functioning as Air Force Vidya Mandir w.e.f. July 1986 having classes from LKG to Class V. At present, the school has 710 students on its roll and classes from LKG to IX.</p>
                        <div className="technology">
                           <a href="0#">WP</a>
                           <a href="0#">Php</a>
                           <a href="0#">HTML</a>
                           <a href="0#">CSS</a>
                           <a href="0#">Jquery</a>
                         </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
            </div>
           
         </div>
         
      </div>

      
      <div id="sahil" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={sahilLarge} className="img-responsive" alt="sahilgraphics" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">                        
                        <h3>About the Project</h3>
                        <p>Dean has created a wonderful website for Sahil Graphics. SAHIL GRAPHICS is a professional offset printing machine manufacturer, suppliers, Importers & exporters in India, specializing Mini offset printing press single color, 2 color and 4 color sheet fed offset printing machine, Web Offset News paper Printing Press, non woven bag to bag printing machines, Paper bag making machines, Paper Napkin Making machines, Paper cup forming machines, non woven Rice bag multi-colour printing machines and High Speed Non Woven Bag Making Machines importing from China.</p>
                        <div className="technology">
                           <a href="0#">WP</a>
                           <a href="0#">Php</a>
                           <a href="0#">HTML</a>
                           <a href="0#">CSS</a>
                           <a href="0#">Jquery</a>
                         </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
             
            </div>
           
         </div>
         
      </div>

      <div id="pps" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure>
                        <ImageWebp
                           srcWebp={privatePartySaleWebp}
                            src={privatePartySale}
                            className="img-responsive" 
                            />
                           {/* <img src={sahilLarge} className="img-responsive" alt="sahilgraphics" /> */}
                           </figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">                        
                        {/* <h3>About the Project</h3> */}
                        {/* <p>Dean has created a wonderful website for Sahil Graphics. SAHIL GRAPHICS is a professional offset printing machine manufacturer, suppliers, Importers & exporters in India, specializing Mini offset printing press single color, 2 color and 4 color sheet fed offset printing machine, Web Offset News paper Printing Press, non woven bag to bag printing machines, Paper bag making machines, Paper Napkin Making machines, Paper cup forming machines, non woven Rice bag multi-colour printing machines and High Speed Non Woven Bag Making Machines importing from China.</p> */}
                        <div className="technology">
                           <a href="0#">WP</a>
                           <a href="0#">Php</a>
                           <a href="0#">HTML</a>
                           <a href="0#">CSS</a>
                           <a href="0#">Jquery</a>
                         </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
             
            </div>
           
         </div>
         
      </div>
      <div id="wikixm" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure>
                        <ImageWebp
                           srcWebp={wikixmwebp}
                            src={wikixm}
                            className="img-responsive" 
                            />
                           {/* <img src={sahilLarge} className="img-responsive" alt="sahilgraphics" /> */}
                           </figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">                        
                        {/* <h3>About the Project</h3> */}
                        {/* <p>Dean has created a wonderful website for Sahil Graphics. SAHIL GRAPHICS is a professional offset printing machine manufacturer, suppliers, Importers & exporters in India, specializing Mini offset printing press single color, 2 color and 4 color sheet fed offset printing machine, Web Offset News paper Printing Press, non woven bag to bag printing machines, Paper bag making machines, Paper Napkin Making machines, Paper cup forming machines, non woven Rice bag multi-colour printing machines and High Speed Non Woven Bag Making Machines importing from China.</p> */}
                        <div className="technology">
                           <a href="0#">WP</a>
                           <a href="0#">Php</a>
                           <a href="0#">HTML</a>
                           <a href="0#">CSS</a>
                           <a href="0#">Jquery</a>
                         </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
             
            </div>
           
         </div>
         
      </div>

      <div id="emagine" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={emagine} className="img-responsive" alt="emagine" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">                        
                        <h3>About the Project</h3>
                       <p>We helped them with the UI/UX from scratch along with some framework.</p>
                        <div className="technology">
                           
                           <a href="0#">HTML</a>
                           <a href="0#">CSS</a>
                         </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
             
            </div>
           
         </div>
         
      </div>

      <div id="happystems" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={happystems} className="img-responsive" alt="happystems" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">                        
                        <h3>About the Project</h3>
                        <p>We helped them with the UI/UX from scratch along with CMS including custom modules.</p>
                        <div className="technology">
                           <a href="0#">Laravel</a>
                           <a href="0#">Bootstrap</a>
                           
                         </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
             
            </div>
           
         </div>
         
      </div>
      <div id="sorcero" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={sorcero} className="img-responsive" alt="sorcero" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">                        
                        <h3>About the Project</h3>
                        <p>Dean did a long term project and helped them out for their enterprise application.</p>
                        <div className="technology">
                           <a href="0#">Laravel</a>
                           <a href="0#">Bootstrap</a>
                         </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
             
            </div>
           
         </div>
         
      </div>
      <div id="dunkindonuts" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={dunkindonuts} className="img-responsive" alt="dunkindonuts" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">                        
                        <h3>About the Project</h3>
                        <p>We helped them with the UI/UX from scratch along with CMS (Content Management System)</p>
                        <div className="technology">
                           <a href="0#">ASP.NET</a>
                           <a href="0#">Umbraco</a>
                         </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
             
            </div>
           
         </div>
         
      </div>
      <div id="nissanofqueens" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={nissanofqueens} className="img-responsive" alt="nissanofqueens" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">                        
                        <h3>About the Project</h3>
                        <p>Dean has created a wonderful Website for Nissan, New York based Store. Nissan is one of the world's most recognizable automobile companies.</p>
                        <div className="technology">
                           <a href="0#">Wordpress </a>
                           <a href="0#">Bootstrap</a>
                         </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
             
            </div>
           
         </div>
         
      </div>
      <div id="bgoilfieldservices" className="modal animated bounceIn portfolio-popup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
         
         <div className="modal-dialog">
           
            <div className="modal-content">
               
               <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title"><img className="img-responsive" src="images/logo-footer.png" alt="logo-footer" /></h4>
               </div>
               
               
               <div className="modal-body">
                  <div className="container">
                     <div className="col-md-8 col-sm-6 col-xs-12 left">
                        <figure><img src={bgoilfieldservices} className="img-responsive" alt="bgoilfieldservices" /></figure>
                     </div>
                     <div className="col-md-4 col-sm-6 col-xs-12 right">                        
                        <h3>About the Project</h3>
                        <p>B&G Oilfield Services is a multi-service oilfield service provider with operations in North Dakota. We build there Website & Enterprise Application.</p>
                        <div className="technology">
                           <a href="0#">Wordpress </a>
                           <a href="0#">ASP.NET</a>
                           <a href="0#">Bootstrap</a>
                      
                         </div>
                        <h3>Client's Feedback</h3>
                        <div className="rating">
                           <span>5.0</span>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                        </div>
                        <h2><a href="/contact" target="_blank">Contact Us <i className="fa fa-angle-right"></i></a></h2>
                     </div>
                  </div>
                  
               </div>
             
            </div>
           
         </div>
         
      </div>

      </Fragment>
   )
}


