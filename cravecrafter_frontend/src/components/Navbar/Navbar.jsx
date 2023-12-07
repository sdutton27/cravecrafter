import React from 'react'
import SurpriseOrderButton from '../SurpriseOrderButton/SurpriseOrderButton'
import CartButton from '../CartButton/CartButton'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import './navbar.css'
import logoWhite from '../../assets/images/logo-white.png'
import logoBlack from '../../assets/images/logo-black.png'
import ProfileButton from '../ProfileButton/ProfileButton'

export default function Navbar({instructions="", navTo="/surprise-order/details"}) {
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
    <div id="navbar" style={{
      position: 'absolute', zIndex: "10", display: "flex",
      height: '56px', width: '100%',
      backgroundColor: (location === '' ? "transparent" : "#FCFBFA")
    }}>
      <div id="left-nav" style={{ display: "flex", alignSelf: "center" }}>
        {location === '' ? (
          <Link to='/'><img src={logoWhite} className="w-46 mt-4 mb-2 m:m-4 w-64 
          hover:scale-105 transform transition duration-200" />
          </Link>
        ) : (
          <Link to='/'><img src={logoBlack} className="w-46 mt-4 mb-2 m:m-4 w-64
           hover:scale-105 transform transition duration-200" />
          </Link>
        )}
      </div>
      <div id="right-nav" style={{ display: "flex", alignItems: "center" }} className="flex flex-wrap md:flex-nowrap">
        {location === '' ? (
          <Scroll.Link to="about" spy={true} smooth={true} duration={500}
            className="nav-link cursor-pointer hover:scale-105 transform transition duration-200 text-[#FCFBFA] hover:text-[#FE5100]">
            About</Scroll.Link>
        ) : (
          <Scroll.Link to="about" onClick={goToHomeAndScroll} spy={true}
            smooth={true} duration={500} className="nav-link cursor-pointer hover:scale-105 transform transition duration-200 text-[#050312] hover:text-[#FE5100]"
            // style={{ color: "#050312" }}
            >
            About</Scroll.Link>
        )}
        <Link to="/favorites" className={"nav-link hover:scale-105 hover:text-[#FE5100] transform transition duration-200 " +
          (location === '' ? "text-[#FCFBFA]" : "text-[#050312]")}
      //   style={{ color: (location === '' ? "#FCFBFA" : "#050312"), 
        
      // }}
        >
          Favorites
          </Link>
        <SurpriseOrderButton classes=" h-10 px-5" instructions={instructions} navTo={navTo} />
        <CartButton classes="h-10 px-5 hover:scale-105 transform transition duration-200" />
        <ProfileButton classes="h-10 w-10 hover:scale-105 transform transition duration-200" />
      </div>
    </div>
  )
}
