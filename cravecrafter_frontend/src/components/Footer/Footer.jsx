import React from 'react'
import logo from '../../assets/images/logo.png'
import { ReactComponent as LinkedIn } from '../../assets/images/linkedin.svg'

export default function Footer() {
    return (
        <div style={{ backgroundColor: 'black' }}>
            {/* <div className="logo">CraveCrafter</div> */}
            <img src={logo} className="ml-3 py-3 sm:ml-10 md:ml-20" />
            <div className="flex flex-col pb-4 sm:grid grid-cols-4 gap-1">
                <div>
                    <LinkedIn className="ml-3 w-12 sm:ml-10 md:ml-20"/>
                </div>
                <div style={{textAlign:"center"}}>
                    <span className="footer-text footer-label">Product Management</span>
                    <br/>
                    <a className="footer-text">Danny Tran</a>
                </div>
                <div style={{textAlign:"center"}}>
                    <span className="footer-text footer-label">Software Development</span>
                    <br/>
                    <a className="footer-text">Simon Dutton</a>
                    <br/>
                    <a className="footer-text">Idong Wilson</a>
                </div>
                <div style={{textAlign:"center"}}>
                    <span className="footer-text footer-label">Product Design</span>
                    <br/>
                    <a className="footer-text">Bailee Davis</a>
                </div>
            </div>
        </div>
    )
}
