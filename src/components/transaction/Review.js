import React from 'react'
import {useLocation,Link} from 'react-router-dom'
import '../../styles/Address.css'
import { TotalsContext } from '../../TotalsContext'


export default function Review() {
    const [totalContext, setTotalContext] = React.useContext(TotalsContext)

    let location = useLocation()
    // console.log("review page: " + location.state.Customer[0])
    // console.log("review page: " + location.state.Customer[1])
    
    return (
        <div>

            <div className="checkout-address-container">
                <h1>Payment</h1>

                <div className="review-wrapper">

                    <div className="order-summary">
                        <h3>Order Summary</h3>

                        <p>Merchandise (1 item): {totalContext[0]}</p>
                        <p>Shipping: {totalContext[1]}</p>
                        <p>Taxes (4.5%): {totalContext[2]}</p>
                        <br />
                        <strong><p>Order Total: {totalContext[3]}</p></strong>
                    </div>


                    <div className="review-details">
                        <h3>Review Payment</h3>

                        <p>Name:</p>
                        <p>{location.state.Customer[0] + " " + location.state.Customer[1]}</p>


                        <p>Address:</p>
                        <p>{location.state.Customer[2]}</p><br />
                        <p>{location.state.Customer[3] + " " + location.state.Customer[4] + " " + location.state.Customer[5]}</p>

                        <p>Card Type:</p>
                        <p>{location.state.CustomerInfo.cardType}</p>

                        <p>Card Number:</p>
                        <p>{location.state.CustomerInfo.cardNumber}</p>

                        <p>Name on Card:</p>
                        <p>{location.state.CustomerInfo.cardName}</p>

                        <p>Expiration Date:</p>
                        <p>{location.state.CustomerInfo.exDate}</p>

                        <p>Security Code:</p>
                        <p>{location.state.CustomerInfo.code}</p>

                    </div>
                    
                </div>


                <button type="submit" onClick={()=>{window.history.go(-1)}}>BACK</button>


                <Link to="/receipt">
                    <button type="submit">NEXT</button>
                </Link>
            </div>
        </div>

    )
}
