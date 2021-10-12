import React from 'react'

const Hero = () => {
    return (
        <div className = "hero-container">
            <div className="list-wrapper">
                <li class="list-item">Contact</li>
                <li class="list-item">Projects</li>
                <li class="list-item">Resume</li>
            </div>

            <div class="name-wrapper">
                <h3><i>Hi I am,</i></h3>
                <h1>Bhanu Singh</h1>
            </div>
            <div class="devdes-container">
                <p>Developer | Designer</p>
            </div>

            <button className="resume-button">
                Resume
            </button>
        </div>
    )
}

export default Hero
