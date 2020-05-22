import React from 'react'

import '../../styles/Address.css'
import {Link} from 'react-router-dom'
import {TotalsContext} from '../../TotalsContext'


// {setTotalContext([   subtotal,    handleShipping(subtotal),   handleTaxes(subtotal),
// handleGrandTotal(subtotal,handleShipping(subtotal),handleTaxes(subtotal))])}
export default function Address() {

    const [totalContext, setTotalContext] = React.useContext(TotalsContext)
    const refInput = React.useRef(null)
    
    const checkInput = () => {
        if(refInput.current.value === ""){
            alert(`
                Error. 
                One or more fields are left blank. You will be re-directed back to fill this again.
            `)                       
            window.history.go(0)

        }else{
            window.history.go(1)
        }
    }

    let customer = {
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        zip: "",
    }
    const [Customer, setCustomer] = React.useState(customer)


    const handleCustomer = (event, value) => {
        Customer[value] = event.target.value        
        console.log(Customer)        
    }

    // const MyButton = withRouter(props => {
    //     return (
    //         <>
    //             <button type="submit" onClick={() => props.history.push(props.path)}>{props.text}</button>
    //         </>
    //     )
    // })


    


    return (
        
        <div>
            
            <div className="checkout-address-container">
                <h1>Checkout</h1>
                
                
                <div className="checkout-wrapper">

                    <div className="order-summary">
                        <h3>Order Summary</h3>

                        <p>Merchandise (1 item): {totalContext[0]}</p>
                        <p>Shipping: {totalContext[1] === 0 ? "Free" : totalContext[1]}</p>
                        <p>Taxes (4.5%): {totalContext[2]}</p>
                        <br />
                        <strong><p>Order Total: {totalContext[3]}</p></strong>
                    </div>


                    <div className="delivery-address">
                        <h3>Delivery Address</h3>
                        
                        
                        <strong><p>First Name</p></strong>
                        <input type="text" ref={refInput} className="checkout-input" defaultValue={customer.firstName} onChange={(event)=>{handleCustomer(event, "firstName")}} required />

                        <strong><p>Last Name</p></strong>
                        <input type="text" ref={refInput} className="checkout-input" defaultValue={customer.lastName} onChange={(event)=>{handleCustomer(event, "lastName")}} required />

                        <strong><p>Street</p></strong>
                        <input type="text" ref={refInput} className="checkout-input" defaultValue={customer.street} onChange={(event)=>{handleCustomer(event, "street")}} />

                        <strong><p>City</p></strong>
                        <input type="text" ref={refInput} className="checkout-input" defaultValue={customer.city} onChange={(event)=>{handleCustomer(event, "city")}} />

                        <strong><p>State</p></strong>
                        <input type="text" ref={refInput} className="checkout-input" defaultValue={customer.state} onChange={(event)=>{handleCustomer(event, "state")}} />

                        <strong><p>Zip Code</p></strong>
                        <input type="text" ref={refInput} className="checkout-input" defaultValue={customer.zip} onChange={(event)=>{handleCustomer(event, "zip")}} />
                        
                    </div>

                </div>

                {/* onClick={checkInput} */}
                <Link to={{pathname: "/payment",
                        state: {Customer}
                            }}>                
                        <button type="submit">Next</button>
                </Link>


            </div>
            
            
        </div>
    )
}
