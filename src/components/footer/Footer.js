import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-main" id="contact">
            <div className="footer-icon">
                <svg height="80" width="80">
                    <circle cx="27" cy="40" r="25" stroke="white" strokeWidth="2" fill="none"></circle>
                </svg>
                <FaInstagram className="i follow-icon" />
            </div>

            <div className="footer-icon">
                <svg height="80" width="80">
                    <circle cx="27" cy="40" r="25" stroke="white" strokeWidth="2" fill="none"></circle>
                </svg>
                <FaFacebook className="i follow-icon" />
            </div>

            <div className="footer-icon">
                <svg height="80" width="80">
                    <circle cx="27" cy="40" r="25" stroke="white" strokeWidth="2" fill="none"></circle>
                </svg>
                <FaTwitter className="i follow-icon" />
            </div>

            <div className="footer-icon">
                <svg height="80" width="80">
                    <circle cx="27" cy="40" r="25" stroke="white" strokeWidth="2" fill="none"></circle>
                </svg>
                <FaWhatsapp className="i follow-icon" />
            </div>
        </div>
    )
}

export default Footer;