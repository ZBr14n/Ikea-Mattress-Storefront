import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import styled from 'styled-components'
import './styles/Home.css'
import {Link} from 'react-router-dom'


// import PDP from './components/transaction/PDP'
import mattress from './data/mattress'

const StyleCarousel = styled(Carousel)`
    /* height: 100%; */
`;
const StyleCarouselItem = styled(Carousel.Item)`
    width: 100%;
    height: 100vh;
    
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    
    /* object-fit: cover; */    
`;

export default function Home() {
    // const [btnClick , setBtnClick] = React.useState(false)
    // let params = useParams(mattress[0].name);
    
    
    return (
        <div>                                    
            <StyleCarousel interval="2000">

                <StyleCarouselItem style={{backgroundImage: `url(${"https://www.jarrodyellets.com/images/lumbar/slide1.jpg"})`}}>
                    <div className="slide-info" >
                        <h1>Hal Kitzmiller signature mattress</h1>
                        <h5>STAY HEALTHY. SLEEP IS ESSENTIAL.</h5>

                        {/* link to individual PDP, instead of collections page */}
                        <Link to={`${'pdp'+mattress[0].index+'/'+mattress[0].name.replace(/ /g,'')}`}>
                            <Button variant="dark" size="lg">BUY NOW</Button>
                        </Link>                            
                    </div>
                </StyleCarouselItem>

                <StyleCarouselItem style={{backgroundImage: `url(${"https://www.jarrodyellets.com/images/lumbar/slide2.jpg"})`}}>
                    <div className="slide-info" >
                        <h1>BEST BEDS IN A BOX. BEST PRICES.</h1>
                        <h5>Each mattress comes with FREE no-contact delivery and a low-price guarantee.</h5>

                        <Link to="/products">
                            <Button variant="dark" size="lg">SHOP ALL MATTRESSES</Button>
                        </Link>
                    </div>
                </StyleCarouselItem>


            </StyleCarousel>



            <div className="section-2-container">
                    <div className="section-2-wrapper">

                        <div className="section-2-left">
                            <img src="images/ikea-logo.jpg" width="300px" style={{padding: '10px 10px'}} />
                            <h1>{mattress[1].name} {' '} Mattress</h1>
                            <h5>The king of air mattresses!</h5>
                            <h5>$999</h5>
                            <p>(King Mattress)</p>
                            <Link to="/pdp1/DruidiaAir">
                                <Button variant="info" size="md">BUY NOW</Button>
                            </Link>
                        </div>

                        <div className="section-2-right">
                            <div className="prd-quotes">
                                <h5>
                                Best air mattress in the galaxy
                                "After fighting Planet Spaceball all day, coming home to the Druidia Air Mattress has been a lifesaver. Every morning I awake refreshed and ready to do battle with Dark Helmet."
                                <br /><br />
                                -Lone Star-
                                </h5>
                            </div>
                            <img src="https://www.jarrodyellets.com/images/lumbar/mat1war.png" width="100%" alt="mat1" />
                        </div>
                    
                    </div>
            </div>



            <div className="section-financing">
                <span>
                    <strong><h3>Instant Financing Available - </h3></strong>
                </span>
                <span>
                    <h3>0% APR for up to 48 Months!</h3>
                </span>
                <button type="submit" id="apply-now">APPLY NOW</button>

            </div>
            <img src="https://www.jarrodyellets.com/images/lumbar/new.png" width="300px" alt="new" />



            <div className="section-3-container">

                <div className="section-3-wrapper">
                    <img src="/images/icons8-ikea.svg" width="100px" height="100px" alt="logo" />
                    <h3>NextGen</h3>
                    <h3>Memory Foam</h3>

                    <h5 style={{textAlign:'left'}}>{mattress[3].description}</h5>
                </div>


                <div className="section-3-prd-details-container">
                    <div className="section-3-prd-price">
                        <h3>{mattress[3].price[3]}</h3>
                        <p>(King Mattress}</p>
                        <Link to="/pdp3/NextGenMemoryFoam">
                            <Button variant="info" size="md">BUY NOW</Button>
                        </Link>
                    </div>

                    <div className="section-3-prd-quote">
                        <h3>The future is here</h3>
                        <p>
                            "I've been to the future, and they have nothing on the NextGen Memory Foam mattress. After being cramped in the DeLorean all day, nothing beats stretching out on the NextGen Memory Foam mattress!"
                            -Marty McFly-
                        </p>                        
                    </div>

                </div>

                <img src="https://www.jarrodyellets.com/images/lumbar/mat3phone.png" height="400" width="800" alt="mat3" />

            </div>
           
        </div>
    )
}
