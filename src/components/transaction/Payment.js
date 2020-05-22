import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {TotalsContext} from '../../TotalsContext'

import '../../styles/Address.css'


export default function Payment() {
    const [totalContext, setTotalContext] = React.useContext(TotalsContext)

    let location = useLocation()
    // console.log("payment page: " + location.state.Customer.firstName)
    // console.log("payment page: " + location.state.Customer.lastName)

    const [Customer, setCustomer] = React.useState([
        location.state.Customer.firstName,
        location.state.Customer.lastName,
        location.state.Customer.street,
        location.state.Customer.city,
        location.state.Customer.state,
        location.state.Customer.zip
    ])


    let CustomerCC = {
        cardType: "",
        cardNumber: "",
        cardName: "",
        exDate: "",
        code: ""
    }
    const [CustomerInfo, setCustomerInfo] = React.useState(CustomerCC)


    const handleCustomerCC = (event, value) => {
        CustomerInfo[value] = event.target.value        
        console.log(CustomerCC)        
    }
    
    return (
        <div>

            <div className="checkout-address-container">
                <h1>Payment</h1>

                <div className="checkout-wrapper">

                    <div className="order-summary">
                        <h3>Order Summary</h3>

                        <p>Merchandise (1 item): {totalContext[0]}</p>
                        <p>Shipping: {totalContext[1]}</p>
                        <p>Taxes (4.5%): {totalContext[2]}</p>
                        <br />
                        <strong><p>Order Total: {totalContext[3]}</p></strong>
                    </div>


                    <div className="payment-details">
                        <h3>Payment</h3>

                        <strong><p>Card Type</p></strong>
                        <select onChange={(event)=>{handleCustomerCC(event, "cardtype")}}>
                            <option value="Visa">Visa</option>
                            <option value="Mastercard">Mastercard</option>
                            <option value="American Express">American Express</option>
                            <option value="Discover">Discover</option>
                            <option value="Apple Pay">Apple Pay</option>
                            <option value="Amazon Pay<">Amazon Pay</option>
                        </select>

                        <strong><p>Name on Card</p></strong>
                        <input type="text" required className="payment-input" defaultValue={CustomerCC.cardName} onChange={(event)=>{handleCustomerCC(event, "cardName")}} />

                        <strong><p>Card Number</p></strong>
                        <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" defaultValue={CustomerCC.cardNumber} onChange={(event)=>{handleCustomerCC(event, "cardNumber")}} className="payment-input" />

                        <strong><p>Expiration Date</p></strong>
                        <input type="text" placeholder="MM/YYYY" defaultValue={CustomerCC.exDate} onChange={(event)=>{handleCustomerCC(event, "exDate")}} className="payment-input" />

                        <strong><p>Security Code</p></strong>
                        <input type="text" placeholder="XXX" defaultValue={CustomerCC.code} onChange={(event)=>{handleCustomerCC(event, "code")}} className="payment-input" />

                    </div>
                    
                </div>

                <br />
                <button type="submit" onClick={()=>{window.history.go(-1)}}>BACK</button>


                <Link to={{pathname:"/review",
                    state: {Customer, CustomerInfo}
                }}>
                    <button type="submit">NEXT</button>
                </Link>
            </div>
        </div>
    )
}
