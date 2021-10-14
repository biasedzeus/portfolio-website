import "./Hero.css"
import React from 'react';
import github from "../../GitHub_Logo_White-5.png"
import linkedIn from "../../iconmonstr-linkedin-1.png"

const Hero = () => {
    return (
        <div className = "hero-container">
            <div className="list-wrapper">
                <li className="list-item">Contact</li>
                <li className="list-item">Projects</li>
                <li className="list-item">Resume</li>
            </div>

            <div className="name-cont-wrapper">
                <h3><i>Hi I am,</i></h3>
                <h1 id="authorName">Bhanu Singh</h1>
                <div className="devdes-container">
                <p>Developer | Designer</p>
            </div>
            <div className="button-git-link">
            <button className="resume-button">
                Resume
            </button>
            <div class="githubLinkedin">
            <a href="https://github.com/biasedzeus" target="_blank" rel="noreferrer" ><img className="github-logo" src={github} alt="" srcset=""/></a>
            <span className="spanned-line">|</span>
            <a href ="https://linkedin.com/bhanusingh" target="_blank" rel="noreferrer"><img className ="linkedIn-logo" src={linkedIn} alt="" srcset=""/></a>
            </div>
            </div>

            </div>
           

           
        </div>
    )
}

export default Hero
