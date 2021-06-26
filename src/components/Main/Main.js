import React from 'react'
import Image from './control.jpg'
import './main.css'

const Main = () => {
    return (
        <div className="main">
            <div className="tagline">
                <h3>Let the games begin! <span style={{color:"orange"}}>Next generation gaming is here!</span></h3>
                <div className="btn">
                    <button className="login-btn">Login</button>
                </div>
            </div>
            {/* <div className="bgImg">
                <img src={Image} alt="" />
            </div> */}
        </div>
    )
}

export default Main
