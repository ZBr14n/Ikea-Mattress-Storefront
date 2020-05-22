import React from 'react'
import '../../styles/Receipt.css'
import {TotalsContext} from '../../TotalsContext'

export default function Receipt() {
    const [totalContext, setTotalContext] = React.useContext(TotalsContext)
    
    return (
        <div>
            
            <div className="receipt-page-container">
                <h3>PURCHASE COMPLETE</h3>
             
                <div className="receipt-page-wrapper">
                    <img src="/images/ikea-logo.jpg" width="180px" /><br />

                    <h5>Thank you for your purchase!
                    Your products will be arriving in 3-5 business days.
                    Please print your receipt for your records</h5>
                </div><br /><br />

                
                <div className="receipt-details-container">
                    <div className="receipt-details">                    
                        <div className="receipt-left">
                            <div>Subtotal</div>
                            <div>Shipping</div>
                            <div>Taxes (4.5%)</div><br />
                            <div><strong>Order Total</strong></div>
                        </div>

                        <div className="receipt-right">
                            <div>{totalContext[0]}</div>
                            <div>{totalContext[1]}</div>
                            <div>{totalContext[2]}</div><br />
                            <div><strong>{totalContext[3]}</strong></div>
                        </div>
                    </div>
                </div><br /><br />

            </div>
        </div>
    )
}
