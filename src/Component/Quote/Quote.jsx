import React,{useState} from 'react'
import './Quote.css'

const Quote = () => {
  const [userData, setUserData] = useState({
    name:"",
    email:"",
    number:"",
    message:"",
    });
    
    let name, value;
    function postUserData(event) {
      name = event.target.name;
      value = event.target.value;
  
      setUserData({ ...userData, [name]:value })
    }
  
    // connect to firebase
    const submitData = async(event) => {
      event.preventDefault();
      const {name,
      email,
      number,
      message,} = userData;
      const res = await fetch(
        'https://qubicles-62a71-default-rtdb.asia-southeast1.firebasedatabase.app/Contactus.json',{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            name,
            email,
            number,
            message,
          }),
        }
        );
  
        if(res) {
          alert("Data Stored")
        }else {
          alert("Please fill the Data")
        }
    };
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
        <input name="name" value={userData.name} type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" onChange={postUserData} />
      </p>
      
      <p class="email">
        <input name="email" value={userData.email} type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" onChange={postUserData} />
      </p>
      
      <p class="text">
        <textarea name="text" value={userData.message} class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Tell us about your need" onChange={postUserData} ></textarea>
      </p>
      
      
      <div class="submit" onClick={submitData} >
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