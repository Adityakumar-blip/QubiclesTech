import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
    const [show, setShow] = useState(false);
  return (
    <section style={{position:'sticky' ,top:'0',zIndex:'101'}}>
    <div  className='nav-wrapper container-fluid nav-bg  '>
            <div className='row'>
        <nav className=" navbar nav-container navbar-expand-lg navbar-light nav-cont  ">
            <div className="container-fluid logo-cont">
                <Link className="navbar-brand" to="/">
                <h3>Qubicles</h3>
                </Link>
                    <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={() => setShow(!show)}>
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                <div className={`collapse navbar-collapse ${show ? "show" : ""}`} 
                id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu"/>
                        <li className="nav-item">
                        <Link className="nav-link active-link " 
                        aria-current="page" 
                        to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link " to="/service">Services</Link>
                        </li>


                        <li className="nav-item">
                        <Link className="nav-link " to="/portfolio">Portfolio</Link>
                        </li>

                        
                        <li className="nav-item">
                        <Link className="nav-link " to="/team" >Team</Link>
                        </li>

                        <li className="nav-item">
                            <Link className='nav-link' to='/contactus'>Contact Us</Link>
                        
                        </li>
                </div>
            </div>
        </nav>

            </div>
        </div>
        </section>

  )
}

export default Nav