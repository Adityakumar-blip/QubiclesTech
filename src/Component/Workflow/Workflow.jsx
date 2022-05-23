import React from 'react'
import './Workflow.css'

import Slide from 'react-reveal/Slide'

const Workflow = () => {
  return (
    <div className="workflow">
        <h1>Our Workflow</h1>
    <div class="wrapper">
    <div class="center-line">
    </div>
    <div class="row row-1">
    <Slide left>
      <section>
        <i class="icon fa-solid fa-1"></i>
        <div class="details">
          <span class="title">Brainstroming & Ideation</span>
        </div>
      </section>
    </Slide>
    </div>
    <div class="row row-2">
    <Slide right>
    <section>
        <i class="icon fa-solid fa-2"></i>
        <div class="details">
          <span class="title">Reaserch</span>
        </div>
      </section>
    </Slide>
    </div>
    <div class="row row-1">
    <Slide left>
    <section>
        <i class="icon fa-solid fa-3"></i>
        <div class="details">
          <span class="title">Planning</span>
        </div>
      </section>
    </Slide>
    </div>
    <div class="row row-2">
    <Slide right>
    <section>
        <i class="icon fa-solid fa-4"></i>
        <div class="details">
          <span class="title">Design</span>
        </div>
      </section>
    </Slide>
    </div>
    <div class="row row-1">
    <Slide left>
    <section>
        <i class="icon fa-solid fa-5"></i>
        <div class="details">
          <span class="title">Development</span>
        </div>
      </section>
    </Slide>
    </div>
    <div class="row row-2">
    <Slide right>
    <section>
        <i class="icon fa-solid fa-6"></i>
        <div class="details">
          <span class="title">Delivery</span>
        </div>
      </section>
    </Slide>
    </div>
    <div class="row row-1">
    <Slide left>
    <section>
        <i class="icon fa-solid fa-7"></i>
        <div class="details">
          <span class="title">24/7 Support</span>
        </div>
      </section>
    </Slide>
    </div>
  </div>
  </div>
  )
}

export default Workflow