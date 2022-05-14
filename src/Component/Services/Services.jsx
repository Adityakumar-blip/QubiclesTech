import React,{useState} from 'react'
import './Service.css'

const Services = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
    setToggleState(index);
    };

  return (
      <>
    <section>
    <div className="green">
        <div className="green-heading">
            <h3>Our</h3>
            <h1>Services</h1>
        </div>
    </div>
    </section>

    <section>
    <div className="orange">
        <div className="orange-container">
            <h3>DESIGN . DEVELOPMENT . DIGNITY</h3>
            <p>Our team of experts are equipped with the knowledge and experience needed and follows 3D method to get the job done,<br/> and are poised to deliver a wide range of services.</p>
        </div>

        <div className="orange-toggle">
        <div className="dropdown-container">
        <div className="row">
            <div className='col col-md-4 col-sm-12'>

            
       <div className="bloc-tabs">
        <h4
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Web Development Services
        </h4>
        <h4
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          App Development Services
        </h4>
        <h4
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Backend Management
        </h4>
      </div>
      </div>

<div className='col col-md-8 col-sm-12'>


<div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <div className="toggle-img">
          <img src='https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="toggle-img">
              <img src='https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="toggle-img">
              <img src='https://images.unsplash.com/photo-1652375319629-f8a7a1f84dce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
        </div>
    </div>
    </section>
    <hr/>
    <section>
    <div className="pink">
        <div className="pink-container">
            <div className="row">
                <div className="col col-md-6 col-sm-12">
                    <div className="pink-img">
                        <img src='https://images.unsplash.com/photo-1652370647274-c509ad606b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' alt='' />
                    </div>
                </div>

                <div className="col col-md-6 col-sm-12">
                <div className="pink-txt">
                <h5>Believe in us</h5>
                <h3>Say hi.</h3>
                </div>
                </div>
            </div>
        </div>
    </div>
    </section>

    </>
  )
}

export default Services