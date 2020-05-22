import React from 'react'
import {ItemContext} from '../../ItemContext'

import {Link, Route, Switch, MemoryRouter as MemRouter} from 'react-router-dom'

import Address from './Address'
import Receipt from './Receipt'
import Review from './Review'
import Payment from './Payment'

import styled from 'styled-components'
import '../../styles/Checkout.css'

const StyleLink = styled(Link)`
    
    pointer-events: none;
    padding: 10px;
    outline: none;
    color: gray;

    &:hover{
        text-decoration: none;        
    }
    &:focus{        
        color: red;

    }
`;


export default function Checkout() {


    return (
        <div className="checkout-container">
            
            <div className="checkout-nav">
                {/* <Link to="/cart">to cart</Link> */}
                <StyleLink to="/address">1. Address</StyleLink>
                <StyleLink to="/payment">2. Payment</StyleLink>            
                <StyleLink to="/review">3. Review</StyleLink>
                <StyleLink to="/receipt" id="receipt-link"></StyleLink>
            </div>




            {/* memory router */}
            <Switch>
                {/* <Route path="/checkout" component={Checkout} /> */}
                <Route path="/address" component={Address} />
                <Route path="/payment" component={Payment} />
                <Route path="/review" component={Review} />
                <Route path="/receipt" component={Receipt} />
            </Switch>
           
        </div>
    )
}
