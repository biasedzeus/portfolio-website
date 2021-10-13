import "./MyCard.css"
import React from 'react'

const MyCard = ({image,text}) => {
    return (
        <div className="myCard">

           
            <div  className="card-body">
                <p className="card-text">{text}</p></div>
            <span id="logo">
              <img className="card-image" src={image} alt=""/>

            </span>
        </div>
    )
}

export default MyCard;
