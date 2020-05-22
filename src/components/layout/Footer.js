import React from 'react'
import '../../styles/Footer.css'

export default function Footer() {
    return (
        <div className="footer-container">
            
            <div className="footer-wrapper">

                <div className="footer-left">
                    <div className="footer-left1">
                        <p>129 Boston St</p>
                        <p>Boston, MA</p>
                    </div>

                    <div className="footer-left2">
                        <p>brlam@brianlam.info</p>
                        <p>212-555-2390</p>
                    </div>
                </div>


                <div className="footer-center">
                    © Brian Lam | 2020
                </div>


                <div className="footer-right">
                    <div className="cc-top">
                        <i class="fab fa-cc-visa card"></i>
                        <i class="fab fa-cc-mastercard card"></i>
                        <i class="fab fa-cc-discover card"></i>
                    </div>
                    <div className="cc-bottom">
                        <i class="fab fa-cc-amex card"></i>
                        <i class="fab fa-cc-apple-pay card"></i>
                        <i class="fab fa-cc-amazon-pay card"></i>
                    </div>
                </div>


            </div>
        </div>
    )
}
