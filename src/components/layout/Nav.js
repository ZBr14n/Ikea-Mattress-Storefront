import React from 'react'
import styled from 'styled-components'
import {Route,Switch,Link, MemoryRouter as MemRouter} from 'react-router-dom'
import Products from './Products'
import About from './About'
import Contact from './Contact'
import Home from '../../Home'
import PDP from '../transaction/PDP'
import Cart from '../transaction/Cart'
import Checkout from '../transaction/Checkout'

import {ItemContext} from '../../ItemContext'
import {TotalsContext} from '../../TotalsContext'


const StyleFirstHeader = styled.div`
    display: flex;
    justify-content: space-between;
    /* margin: 20px; */
    background-color: #353535;
    color: white;

    span{
        margin: 20px;
    }
`;
const StyleSecondHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5%;
    align-items: center;
    height: 100px;
    /* border: 3px solid red; */
    width: 100%;    
`;



const StyleSecondHeader2 = styled.div`
    display: flex;    
    /* margin-right: 23%; */
    justify-content: right;
    text-decoration: none;
`;
const StyleLink = styled(Link)`
    /* padding-right: 50%; */
    align-items: right;
    justify-content: space-around;
    margin-right: 30px;    

    outline: 0;
        
    &:hover{
        text-decoration: none;
    }

   
    /* NAV LINKS */
    /* mattress link */
    .mat-link::before{
        position: relative;
        left: -20px;
        font-family: "Font Awesome 5 Free"; 
        content: "\f236";
        font-weight: 900; 
        font-size: 30px;
        visibility: hidden;
        opacity: 0;
        transition: left 300ms, opacity 200ms, visibility 300ms;
    }
    .mat-link:hover::before{
        left: -10px;
        opacity: 1;
        visibility: visible;
    }

    /* about link */
    .about-link::before{
        position: relative;
        left: -20px;
        font-family: "Font Awesome 5 Free"; 
        content: "\f2bb";
        font-weight: 900; 
        font-size: 30px;
        visibility: hidden;
        opacity: 0;
        transition: left 300ms, opacity 200ms, visibility 300ms;
    }
    .about-link:hover::before{
        left: -10px;
        opacity: 1;
        visibility: visible;
    }


    /* contact link */
    .contact-link::before{
        position: relative;
        left: -20px;
        font-family: "Font Awesome 5 Free"; 
        content: "\f095";
        font-weight: 900; 
        font-size: 30px;
        visibility: hidden;
        opacity: 0;
        transition: left 300ms, opacity 200ms, visibility 300ms;
    }
    .contact-link:hover::before{
        left: -10px;
        opacity: 1;
        visibility: visible;
    }


    .cart-icon:hover{
        animation: cartAnim .5s;
    }
    @keyframes cartAnim{
        0% {
		transform: translate(0px);
        }
        5% {
            transform: translate(3px);
        }
        50% {
            transform: translate(-10px)
        }
        95% {
            transform: translate(2px);
        }
        100% {
            transform: translate(0px);
        }
    }
`;


export default function Nav() {

    // useContext global store to keep track of user selection.
    const [context, setContext] = React.useState([]);
    const [totalContext, setTotalsContext] = React.useState([]);

    

    return (
        <div className="nav-wrapper" >
            {/* className="nav-first-header" */}
            <StyleFirstHeader>
                <span>FREE SHIPPING ON ORDERS OVER $1000</span>
                <span>MATTRESS PROFESSIONALS SINCE 1943</span>
            </StyleFirstHeader>

            <div className="nav-second-header" style={{backgroundColor: 'gold'}}>
                
                {/* className="nav-routers" */}
                <StyleSecondHeader>
                    <a href="/">
                        <img src="images/icons8-ikea.svg" width="200px" />
                    </a>
                    {/* <StyleLink to="/">
                        <img src="images/icons8-ikea.svg" width="200px" />
                        </StyleLink> */}
                    
                    
                    <StyleSecondHeader2>
                        <StyleLink to="/products"><div className="mat-link">Mattresses</div></StyleLink>
                        <StyleLink to="/about"><div className="about-link">About</div></StyleLink>
                        <StyleLink to="/contact"><div className="contact-link">Contact</div></StyleLink>
                        <StyleLink to="/cart">
                            <div className="cart-icon">
                                <img src="images/cart_icon.png" width="40px" id="cart-icon" /><div className="cart-item-count"></div>
                            </div>
                        </StyleLink>
                    </StyleSecondHeader2>                    
                </StyleSecondHeader>

            </div>  


            <TotalsContext.Provider value={[totalContext, setTotalsContext]}>
                <ItemContext.Provider value={[context, setContext]}>                        
                    
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/products">
                            <Products />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>

                        {/* transaction routes (note: we can use another usePrams of id instead of using redux to grab the correct item to display in PDP) */}
                        <Route path="/pdp:id/:slug">
                            <PDP />
                        </Route>


                        <Route path="/cart">
                            <Cart />                            
                        </Route>
                    

                    <Route path="/checkout">
                        <MemRouter initialEntries={["/address","/review","/payment","/receipt"]}>
                                <Checkout />
                            </MemRouter>                       
                    </Route>
                    
                    
                    </Switch>
                                    
                </ItemContext.Provider>
            </TotalsContext.Provider>


                        
        </div>
    )
}
