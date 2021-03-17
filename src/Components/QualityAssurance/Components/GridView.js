import React, {  Fragment } from 'react';


const grid = require('../images/grid.png');


export default function GridView() {
  return (
    <Fragment>
    {/* <!-- grid-view start--> */}
    <section className="grid-view p-40">
      <div className="container">
        <img src={grid} alt="" className="img-responsive wow animate fadeInLeft" />
      </div>
    </section>
    {/* <!-- grid-view end--> */}
  </Fragment>
  )
}


