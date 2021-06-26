import React from 'react';
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import { MdGames } from "react-icons/md";
import './sidenav.css';

const SideNav = () => {
    return (
        <div className="sidenav">
            {/* <section id="home"><h2>Home</h2></section>
            <section id="services"><h2>Services</h2></section>
            <section id="gallery"><h2>Gallery</h2></section> */}
            <ul className="sidebar">
                <li className="nav-item">
                    <a href="#home" className="nav-link">
                        <FaHome className="icon"/>
                        <span className="title">Home</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#services" className="nav-link">
                        <FaHome className="icon"/>
                        <span className="title">Services</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#gallery" className="nav-link">
                        <CgGames className="icon"/>
                        <span className="title">Games</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#footer" className="nav-link">
                        <FaPhoneAlt className="icon"/>
                        <span className="title">Contact</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideNav;