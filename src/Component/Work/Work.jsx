import React from 'react'
import './Work.css'
import { Link } from 'react-router-dom'


const Work = () => {
  return (
      <>
    <section class="info">
  <h1> Work &mdash;</h1>
</section>
<section class="cards-wrapper">
<div class="card-grid-space">
    <div class="num">01</div>
    <a class="card" href="">
      <div>
        <h1>SpeedForce</h1>
        {/* <p>Learn about some of the most common HTML tags…</p> */}
        <div class="date">3 April 2022</div>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  <div class="card-grid-space">
    <div class="num">02</div>
    <a class="card" href="https://socialpubli.co.in/">
      <div>
        <h1>SocialPubli</h1>
        {/* <p>Learn about some of the most common HTML tags…</p> */}
        <div class="date">3 May 2022</div>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  <div class="card-grid-space">
    <div class="num">03</div>
    <a class="card" href="">
      <div>
        <h1>DridSankalp</h1>
        {/* <p>Learn how to use links and images along with file paths…</p> */}
        <div class="date">13 April 2022</div>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  {/* <!-- https://images.unsplash.com/photo-1520839090488-4a6c211e2f94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38951b8650067840307cba514b554ba5&auto=format&fit=crop&w=1350&q=80 --> */}
</section>
      </>
  )
}

export default Work