import React from 'react';
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import { GiTargetPrize } from "react-icons/gi";
import './sidenav.css';

const SideNav = () => {
    return (
        <div className="sidenav">
            <ul className="sidebar">
                <li className="nav-item">
                    <a href="#home" className="nav-link">
                        <FaHome className="icon" />
                        <span className="title">Home</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#offers" className="nav-link">
                        <GiTargetPrize className="icon" />
                        <span className="title">Contests</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#games" className="nav-link">
                        <CgGames className="icon" />
                        <span className="title">Games</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">
                        <FaPhoneAlt className="icon" />
                        <span className="title">Contact</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideNav;