import React from 'react'
import Image from './control.jpg'
import './main.css'

const Main = () => {
    return (
        <div className="main" id="home">
            <div className="tagline">
                <h3>Let the games begin! <span style={{ color: "orange" }}>Next generation gaming is here!</span></h3>
                <h4 className="sub-tagline">Enjoy the thrill with our exclussive collection of games which are G.O.A.T.!<br/>To experience the thrill get along alaong with us by logging in here!</h4>
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
