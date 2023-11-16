import React from 'react'
import SurpriseOrderButton from '../SurpriseOrderButton/SurpriseOrderButton'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div id="navbar" style={{position: 'absolute', zIndex: "10", display: "flex", 
                height: '50px', width: '100%'}}>
        <div id="left-nav" style={{display: "flex"}}>
        <Link to="/" className="logo">CraveCrafter</Link>
        </div>
        <div id="right-nav" style={{display: "flex"}}>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
        <SurpriseOrderButton/>
        </div>
    </div>
  )
}
