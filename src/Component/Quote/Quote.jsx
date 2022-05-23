import React from 'react'
import './Quote.css'

const Quote = () => {
  return (
   <div className="quote">
       <h1>Request a quote</h1>
       <div className="quote-container">
           <div className="row">
               <div className="col col-md-6 col-sm-12">
                <div className="quote-img">
                    <img src='https://images.unsplash.com/photo-1652740739863-0beea1da51b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                </div>
               </div>

               <div className="col col-md-6 col-sm-12">
               <div id="form-main">
  <div id="form-div">
    <form class="form" id="form1">
      
      <p class="name">
        <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
      </p>
      
      <p class="email">
        <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
      </p>
      
      <p class="text">
        <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Tell us about your need"></textarea>
      </p>
      
      
      <div class="submit">
        <input type="submit" value="SEND" id="button-blue"/>
        <div class="ease"></div>
      </div>
    </form>
  </div>
  </div>
               </div>
           </div>
       </div>
   </div>
  )
}

export default Quote