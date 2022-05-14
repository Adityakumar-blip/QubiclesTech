import React from 'react'
import './Footer.css'
import { FaLinkedin} from 'react-icons/fa';
import { FaInstagramSquare} from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
import { RiCopyrightFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
    <div className="footer-super-container">
    <div className="footer-main-container">
        <div className="footer-options">
            <div className="footer-brand">
            <h2>Qubicles</h2>
            <p>Technologies</p>
            </div>
            <div className="footer-other">
           <p>Home</p>
           <p>Services</p>
           <p>Portfolio</p>
           <p>About</p>
           <p>Contact</p>
            </div>
        </div>
        <div className="footer-line"></div>
        <div className="copyright-options">
            <div className="footer-copyright">
            <p><RiCopyrightFill/>2022</p>
            </div>
            <div className="footer-social">
                <a href='https://www.linkedin.com/company/qubicles-technologies'><FaLinkedin/></a>
            <a to="https://instagram.com/qubicles_?igshid=YmMyMTA2M2Y="><FaInstagramSquare/></a>
            <FaTwitter/>
            </div>
        </div>
        </div>

        <div className="footer-image-container">
          <div className="footer-image">
            <h1>Believe In Us</h1>
            <a href='https://wa.me/917291921804?text=Hii Qubicles'><button type="button" class="footer-button btn btn-outline-primary">
                  Contact us
                </button></a>
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer