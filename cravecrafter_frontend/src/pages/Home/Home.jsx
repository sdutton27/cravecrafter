import React, { useState } from 'react'
import './home.css'
import SurpriseOrderButton from '../../components/SurpriseOrderButton/SurpriseOrderButton'
import heroImage from '../../assets/images/hero-img.jpeg'
import logo from '../../assets/images/logo-white.png'
import Navbar from '../../components/Navbar/Navbar';
import SurpriseOrderInstructions from '../../components/SurpriseOrderInstructions/SurpriseOrderInstructions'

export default function Home() {
    const [open, setOpen] = useState(false);
    const [hasBeenOpened, setHasBeenOpened] = useState(false);

    const handleClickOpenInstructions = () => {
        setOpen(true);
        setHasBeenOpened(true);
      };

    return (
        <>
            <Navbar 
                instructions={!hasBeenOpened ? handleClickOpenInstructions : ""}
                navTo={hasBeenOpened ? "/surprise-order/details" : ""}
            />
            <div style={{ position: "relative", width: '100%', display: "flex", flexDirection: "column" }}>
                {/* Hero Section */}
                <div style={{
                    position: "absolute", zIndex: "20", display: "flex",
                    flexDirection: "column", alignItems: "center", alignSelf: "center", marginTop: "60vh"
                }}>
                    <img className="w-80 p-1 md:w-[600px]" src={logo} id="home-logo" alt="CraveCrafter logo" />
                    <h3 style={{
                        color: '#FCFBFA', fontFamily: 'Epilogue',
                        fontWeight: '400', wordWrap: 'break-word', lineHeight: 2, textAlign: "center"
                    }} className="text-lg sm:text-2xl">
                        Let us do the decision making for you.
                    </h3>
                    <SurpriseOrderInstructions open={open} setOpen={setOpen}/>
                    <SurpriseOrderButton classes="m-3 h-14 px-7" 
                    instructions={!hasBeenOpened ? handleClickOpenInstructions : ""}
                    navTo={hasBeenOpened ? "/surprise-order/details" : ""}
                     />
                </div>
                <img src={heroImage} style={{ filter: 'brightness(40%)', position: "relative", objectFit: "cover", height: "100vh" }} alt="food" />
                {/* What We Offer Section */}
                <div id="about" className="pt-16 md:pt-36" style={{ width: '100%', height: '100%', paddingBottom: 160, background: '#F7F7F7', alignItems: 'center', justifyContent: "center", display: "flex", flexDirection: "column" }}>
                    <div style={{ textAlign: 'center', color: '#050312', fontSize: 32, fontFamily: 'Kanit', fontWeight: '500', textDecoration: 'underline', lineHeight: 2, wordWrap: 'break-word' }}>What We Offer</div>
                    <div style={{ alignSelf: "center", width: "80%", color: '#050312', fontSize: 16, fontFamily: 'Epilogue', fontWeight: '500', lineHeight: 2, wordWrap: 'break-word' }}>
                        Welcome to CraveCrafter, your personal choice champion!
                        Life gets busy, and we get it. That's why we've created a
                        one-of-a-kind web application that takes the hassle out of
                        decision-making. Simply connect your GrubHub account, place
                        an order, and let us surprise you with one of your favorite
                        dishes from one of your favorite local restaurants. It's
                        like a culinary adventure delivered to your doorstep!
                        Embrace the unexpected, and savor the surprise – because a
                        delightful meal is just a click away with CraveCrafter!
                    </div>
                </div>
            </div>
        </>
    )
}
