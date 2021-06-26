import React from 'react'
import Image from './control.jpg'
import './main.css'

const Main = () => {
    return (
        <div className="main">
            <div className="tagline">
                <h3>Here dreams become true</h3>
                <span>Just a click away!</span>
            </div>
            <div className="bgImg">
                <img src={Image} alt="" />
            </div>
        </div>
    )
}

export default Main
