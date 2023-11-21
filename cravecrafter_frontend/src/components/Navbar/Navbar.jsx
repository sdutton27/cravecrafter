import React from 'react'
import SurpriseOrderButton from '../SurpriseOrderButton/SurpriseOrderButton'
import CartButton from '../CartButton/CartButton'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import './navbar.css'
import logo from '../../assets/images/logo-white.png'
import ProfileButton from '../ProfileButton/ProfileButton'

export default function Navbar() {
  const path = useLocation().pathname;
  const location = path.split('/')[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  // const closeMobile = () => {};
  const goToHomeAndScroll = async () => {
    // await closeMobile();
    await navigate('/');
    scroller.scrollTo('about', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50
    });
  };

  return (
    <div id="navbar" style={{position: 'absolute', zIndex: "10", display: "flex", 
                height: '50px', width: '100%'}}>
        <div id="left-nav" style={{display: "flex", alignSelf:"center"}}>
        <Link to='/'><img src={logo} className="w-46 mt-4 mb-2 m:m-0 w-64"/></Link>
        </div>
        <div id="right-nav" style={{display: "flex"}} className="flex flex-wrap md:flex-nowrap">
        {location === '' ? (
          <Scroll.Link to="about" spy={true} smooth={true} duration={500} className="nav-link cursor-pointer">About</Scroll.Link>
        ) : (
          <Scroll.Link to="about" onClick={goToHomeAndScroll} spy={true} smooth={true} duration={500} className="nav-link cursor-pointer">About</Scroll.Link>
        )}
        <Link to="/favorites" className="nav-link">Favorites</Link>
        <SurpriseOrderButton classes="mt-[5px] h-12 px-5"/>
        {/* <div> */}
        <CartButton classes="mt-[5px] h-12 px-5"/>
        <ProfileButton classes="mt-[5px] h-12 w-12" />
        {/* <ProfileButton id="profile-button"/> */}
        {/* </div> */}
        </div>
    </div>
  )
}
