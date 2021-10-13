import "./WhatIdo.css"
import React from 'react'
import MyCard from '../MyCard/MyCard'

const WhatIdo = () => {
    return (
        <div>
            <div className="text-holder">
            <span className="first-line">What I Do? </span><span className="second-line"> Glad You Asked.</span>

            </div>
          <MyCard/>
        </div>
    )
}

export default WhatIdo
