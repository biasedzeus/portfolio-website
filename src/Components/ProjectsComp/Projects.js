import "./Projects.css"
import React from 'react'

const Projects = () => {

    const img = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
    return (
        <div>
             <div class="project-text">
            <h1 id="recentWork">My Recent Work</h1>
            <h3 id ="paraWork">Here are few design products I've worked on recently.Want to see more? <a id= "email-me" href="www.google.com" target="_blank">Email me</a></h3>
            </div>
            <div class="projects-container">
                <div class="project-item">
                    <img id="project-image" src={img} alt="" srcset=""/>
                </div>
                <div class="project-item">
                    <a href=""><img id="project-image" src={img} alt="" srcset=""/></a>
                </div>  <div class="project-item">
                    <img id="project-image" src={img} alt="" srcset=""/>
                </div>  <div class="project-item">
                    <img id="project-image" src={img} alt="" srcset=""/>
                </div>
            </div>
    
        </div>
    )
}

export default Projects
