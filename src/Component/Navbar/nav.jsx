import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const nav = () => {
  return (
    <>
  <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
      <label class="logo">Qubicles</label>
      <ul>
        <li><Link  to="/">Home</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><a href="https://wa.me/917291921804?text=Hii Qubicles ">Contact</a></li>
      </ul>
    </nav>

    </>
  )
}

export default nav