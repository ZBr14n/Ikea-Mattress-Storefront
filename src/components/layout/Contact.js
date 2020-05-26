import React from 'react'
import '../../styles/Contact.css'

export default function Contact() {
    return (
        <>
            <div className="contact-us">   
            
                <form className="form-container">
                    <div className="contact-header">
                        <h1>Contact Us</h1>

                        <div style={{padding:'10px'}}>
                            <p>
                                We are here to answer any questions you may have about our products or services. Reach out to us and we'll respond as soon as we can.                
                            </p>
                        </div>
                    </div>

                    <div className="contact-fields">
                        <div className="contact-fields1">
                            <label><strong>Name:</strong></label><br />
                            <input type="text" size="40" required /><br />
                        </div>
                    

                        <div className="contact-fields2">
                            <label><strong>Email:</strong></label><br />
                            <input type="email" size="40" required /><br />
                        </div>
                    </div>

                        <br />
                        <label><strong>Message:</strong></label><br />
                        <textarea cols="60" rows="10" id="message" required></textarea><br />
                        <button type="submit">SUBMIT</button>                    
                </form>                    
            </div>
        </>
    )
}
