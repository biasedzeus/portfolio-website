import "./WhatIdo.css"
import React from 'react'
import MyCard from '../MyCard/MyCard'
import ideLogo from "../../ide-final-logo.png"
import penLogo from "../../pen-logo-final.png"

const WhatIdo = () => {

    const designText = "I value simple content structure,clean design patterns and ease UI .";
    const codeText = "I value simple and clean code which is easy to maintain and to refactor ."
    return (
        <div className="what-i-do-container">
            <div className="text-holder">
            <span className="first-line">What I Do? </span><span className="second-line"> Glad You Asked.</span>

            </div>
            <div class="card-holder">
          <MyCard image = {penLogo} text ={designText} />
            <MyCard image={ideLogo} text ={codeText}/>
            </div>
          
        </div>
    )
}

export default WhatIdo
