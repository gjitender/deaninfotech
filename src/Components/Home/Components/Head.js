import React, {  Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Particles from 'react-particles-js';




export default function Head() {
  return (
    <div>
       <Fragment>
        <div className="clearfix" />
        {/* <!-- banner start--> */}
        <section className="dean-banner">
          <div className="particles-js">
            <Particles
              params={{
                particles: {
                  number: { value: 80, density: { enable: true, value_area: 800 } },
                  color: { value: '#ffffff' },
                  shape: {
                    type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 },
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false, speed: 1, opacity_min: 0.1, sync: false,
                    },
                  },
                  size: {
                    value: 5,
                    random: true,
                    anim: {
                      enable: false, speed: 40, size_min: 0.1, sync: false,
                    },
                  },
                  line_linked: {
                    enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1,
                  },
                  move: {
                    enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 },
                  },
                },
                interactivity: {
                  detect_on: 'canvas',
                  events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'bubble' }, resize: true },
                  modes: {
                    grab: { distance: 400, line_linked: { opacity: 1 } },
                    bubble: {
                      distance: 400, size: 40, duration: 2, opacity: 8, speed: 3,
                    },
                    repulse: { distance: 200, duration: 0.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 },
                  },
                },
            }}
            />
          </div>
          <div className="overlay-banner">
            <h2>Re-<span>Engineer </span> your Business with <span>Custom Enterprise Solution</span></h2>
            <p>Captivating the Dynamic Cloud Insights</p>
          
            <h6>
           <NavLink  to="/portfolio"  className="hvr-wobble-vertical portfolio">Our Portfolio</NavLink>
            <NavLink to="/contact"  className="hvr-sweep-to-right hvr-wobble-vertical">Contact Us <span className="arrowRight"></span></NavLink>
           
            </h6>
          </div>
        </section>
        {/* <!-- banner end--> */}
        <div className="clearfix" />
      </Fragment>
    </div>
  )
}


