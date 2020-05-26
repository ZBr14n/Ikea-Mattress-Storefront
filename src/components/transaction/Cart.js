import React from 'react'

import {Link, Route, Switch, MemoryRouter as MemRouter} from 'react-router-dom'

import {ItemContext} from '../../ItemContext'
import {TotalsContext} from '../../TotalsContext'

import mattress from '../../data/mattress'

import Checkout from './Checkout'
import Receipt from './Receipt'
import Review from './Review'

import Table from 'react-bootstrap/Table'
import '../../styles/Cart.css'

function Cart() {
    // store product info.
    const [context, setContext] = React.useContext(ItemContext)
    const [localContext, setLocal] = React.useState(context)

    // store subtotals,shipping,taxes,grand totals
    const [totalContext, setTotalContext] = React.useContext(TotalsContext)
    
    
    // calculate price by multiplying # of products with price assoc. with item size.
    const [ItemSubtotal,setItemSubtotal] = React.useState(0)
    const [ItemQuantity,setItemQuantity] = React.useState(0)
    
    const refUpdate = React.useRef(null)

    // get # of items bought by adding the count
    
    let sumSubtotal = 0
    let subtotal = 0
    let quantity = 0
    
    


    // handle update button
    const handleUpdate = (uniqueKey, itemCount, itemPrice) => {
        let auxIndex = localContext.findIndex(entry => entry.uniqueID === uniqueKey)
        if(auxIndex > -1){
            localContext[auxIndex].count = itemCount
        }
        refUpdate.current.defaultValue = localContext[auxIndex].count 

        localContext[auxIndex]["count"] = refUpdate.current.value
        localContext[auxIndex]["ItemSubtotal"] = localContext[auxIndex]["count"] * (Number((itemPrice).replace(/[^\d.]/g, '')))

        const auxItems = [...localContext]
        setLocal(auxItems)
        // setContext(auxItems)
    }
    
    // if user clicks remove, locate the id and size of that item to delete it on the table
    const handleRemove = (key) => {
        const auxItems = [...localContext]
        auxItems.splice(key,1)

        setLocal(auxItems)        
        setContext(auxItems)
    }



    // handle shipping
    const handleShipping = (subtotal) => {
        return(subtotal < 1000 && subtotal !== 0 ? 150.00 : 0.00)        
    }
    //  handle taxes
    const handleTaxes = (subtotal) => {
        // .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        return '$' + (subtotal * .045).toFixed(2)
    }
    // handle grand total
    const handleGrandTotal = (subtotal, shipping, taxes) => {
        // return '$' + (subtotal + shipping + taxes).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")                
        return subtotal + shipping + Number((taxes.replace(/[^\d.]/g, '')))
    }
    

    // each time a user removes item, re-render the component to reflect the changes on the cart page
    React.useEffect(()=>{
        setLocal(context)        
    },[context])

    

    return (
               
            <div className="cart-container">
                <h1>Your Cart</h1>
                <div className="cart-wrapper">
                                       
                    <Table responsive className="cart-items">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Item Price</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>                                    
                            {
                                localContext.length===0 ? "Your cart is empty" :
                                localContext.map((entry,key)=>{
                                    
                                    subtotal += (Number((entry.ItemPrice).replace(/[^\d.]/g, ''))) * entry.count
                                    
                                    quantity += entry.count
                                    
                                                                        
                                    return(
                                        <>
                                            
                                            <tr key={entry.uniqueID}>
                                                <td><h4>{entry.ItemName}</h4> 
                                                    <img src={mattress[entry.uniqueID].image} width="90px" alt="usermat" />Size: {localContext[key].pdpUserOption}</td>
                                                <td>{localContext[key].ItemPrice}</td>
                                                <td>
                                                    <div className="item-quantity">
                                                        <input type="text" style={{width:'40px'}} ref={refUpdate} defaultValue={entry.count} /><br />
                                                        <button type="submit" onClick={()=>handleUpdate(entry.uniqueID, entry.count, entry.ItemPrice)} >Update</button><br />
                                                        
                                                        <div className="remove-btn" style={{fontSize:'15px',lineHeight:'2.43em',cursor:'pointer'}}>
                                                            <i class="fas fa-times" onClick={()=>handleRemove(key)}>REMOVE</i>

                                                        </div>
                                                        {/* <button id="remove-item-b" onClick={()=>handleRemove(key)}>REMOVE</button> */}
                                                    </div>
                                                </td>
                                                <td>{entry.count === 1 ? entry.ItemPrice : '$' + entry.ItemSubtotal}</td>
                                            </tr>
                                                                            
                                        </>
                                    )
                                })


                            }
                        </tbody>
                    </Table>                          
                </div>


                <div className="order-totals" style={{paddingBottom:'50px'}}>
                        <div className="totals">                        
                            {/* update totals again only if user clicks the update button; consider using ternary conditional render to decide it. */}
                            <p>Subtotal: {'$' + subtotal}</p>                                            
                            <p>Shipping: {handleShipping(subtotal) === 0.00 ? "Free" : "$150.00"} </p>
                            <p>Taxes (4.5%): {handleTaxes(subtotal)} </p>
                        </div>    
                        <strong>Total: {'$' + handleGrandTotal(subtotal,handleShipping(subtotal),handleTaxes(subtotal))}</strong>

                </div> 
                
                <Link to="/products">
                    <button type="submit">Continue Shopping</button>
                </Link>

                
                <Link to={{
                    pathname: "/checkout"                    
                }} >                
                    <button type="submit" onClick={()=>{setTotalContext([subtotal, handleShipping(subtotal),handleTaxes(subtotal),handleGrandTotal(subtotal,handleShipping(subtotal),handleTaxes(subtotal))])}}>Checkout</button>
                </Link>
                
               
                
            

            </div>
    )
}

export default Cart