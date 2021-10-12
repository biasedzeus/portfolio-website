import "./Contact.css"
import React from 'react'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="email-wrapper">
                <h2>Email</h2>
                <div className="email-input">
                    <input className="email-input-box" type="text"/>
                </div>
            </div>

            <div className="msg-container">
                <h2>Message</h2>
                <div className="msg-input">
                    <input className="msg-input-box" type="text"/>
                </div>

            </div>

            <div class="button-container">
                <button className="send-msg">

                 SEND MESSAGE
                </button>
            </div>
            
        </div>
    )
}

export default Contact
