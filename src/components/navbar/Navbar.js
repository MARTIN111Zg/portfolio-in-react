import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navbar_logo">M G</div>
        <ul className="navbar_items">
          <li className="navbar_link">Home</li>
          <li className="navbar_link">Abouth Me</li>
          <li className="navbar_link">My Work</li>
          <li className="navbar_link">Contact</li>
        </ul>
      </div>
    </nav>
  )
}
