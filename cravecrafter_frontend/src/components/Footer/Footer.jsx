import React from 'react'
import logo from '../../assets/images/logo-white.png'
import web from '../../assets/images/web.png'
import linkedin from '../../assets/images/linkedin.png'

export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'black', position: "absolute", width: "100%" }} className="footer">
            <img src={logo} className="w-48 ml-3 py-3 sm:ml-10 md:ml-20" />
            <div className="flex flex-col pb-4 sm:grid grid-cols-4 gap-1 pl-2">
                <div>
                    <img src={linkedin} className="ml-3 w-8 sm:ml-10 md:ml-20" alt="LinkedIn" />
                </div>
                <div>
                    <span className="footer-text footer-label">Product Management</span>
                    <br />
                    <div style={{ whiteSpace: "nowrap", display: "inline-block" }}>
                        <span style={{ float: "left" }} className="footer-text">Danny Tran </span>
                        <a href="https://www.linkedin.com/in/danny-tran-100al/" target="_blank" rel="noopener noreferrer"><img src={linkedin} style={{ float: "left" }} className="h-5 ml-1 mr-1" alt="LinkedIn" />
                        </a>
                        {/* <img src={web} className="h-5"></img> */}
                    </div>

                </div>
                <div>
                    <span className="footer-text footer-label">Software Development</span>
                    <br />
                    <div style={{ whiteSpace: "nowrap", display: "inline-block" }}>
                        <span style={{ float: "left" }} className="footer-text">Simon Dutton</span>
                        <a style={{ float: "left" }} href="https://www.linkedin.com/in/simondutton227/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} style={{ float: "left" }} className="h-5 ml-1 mr-1" alt="LinkedIn" />
                        </a>
                        <a style={{ float: "right" }} href="https://simondutton.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img src={web} className="h-5" />
                        </a>
                    </div>
                    <br />
                    <div style={{ whiteSpace: "nowrap", display: "inline-block" }}>
                        <span style={{ float: "left" }} className="footer-text">Idong Wilson</span>
                        <a style={{ float: "left" }} href="https://www.linkedin.com/in/idongwilson/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} style={{ float: "left" }} className="h-5 ml-1 mr-1" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
                <div>
                    <span className="footer-text footer-label">Product Design</span>
                    <br />
                    <div style={{ whiteSpace: "nowrap", display: "inline-block" }}>
                        <span style={{ float: "left" }} className="footer-text">Bailee Davis</span>
                        <a style={{ float: "left" }} href="https://www.linkedin.com/in/baileedavisux/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} style={{ float: "left" }} className="h-5 ml-1 mr-1" alt="LinkedIn" />
                        </a>
                        <a style={{ float: "right" }} href="https://www.bailee.design/" target="_blank" rel="noopener noreferrer">
                            <img src={web} className="h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
