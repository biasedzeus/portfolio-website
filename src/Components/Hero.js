import React from 'react';
import github from "../GitHub_Logo_White-5.png"
import linkedIn from "../iconmonstr-linkedin-1.png"

const Hero = () => {
    return (
        <div className = "hero-container">
            <div className="list-wrapper">
                <li class="list-item">Contact</li>
                <li class="list-item">Projects</li>
                <li class="list-item">Resume</li>
            </div>

            <div class="name-cont-wrapper">
                <h3><i>Hi I am,</i></h3>
                <h1>Bhanu Singh</h1>
                <div class="devdes-container">
                <p>Developer | Designer</p>
            </div>
            <div class="button-git-link">
            <button className="resume-button">
                Resume
            </button>
            <img src={github} alt="" srcset=""/>
            <img src={linkedIn} alt="" srcset=""/>
            </div>

            </div>
           

           
        </div>
    )
}

export default Hero
