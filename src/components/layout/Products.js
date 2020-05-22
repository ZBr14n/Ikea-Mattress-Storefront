import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import mattress from '../../data/mattress'
import '../../styles/Products.css'
import {Link} from 'react-router-dom'

export default function Products() {
    
    return (
        <div>
            
            <div className="collections-container">

                <div className="collections-title">
                    <h1>Mattress Collections</h1>
                </div>

                <div className="collections-wrapper">

                    {
                        mattress.map((item, key) => (
                            <div className="mat-prds" key={key}>
                                <h3>{item.name}</h3>
                                <img src={item.image} width="250px" />
                                <h5>{item.size+' '}</h5>
                                <h3>From: {item.price[0]}</h3>
                                <Link to={`${"/pdp"+item.index+"/"+item.name.replace(/ /g,'')}`}>
                                    <Button variant="info">CHOOSE OPTIONS</Button>
                                </Link>
                                
                            </div>
                        ))
                    }                                                  
                    
                </div>
                
                
            </div>


            {/* <Carousel>
                <Carousel.Item>
                    <img src="https://www.jarrodyellets.com/images/lumbar/slide1.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://www.jarrodyellets.com/images/lumbar/slide2.jpg" />
                </Carousel.Item>
            </Carousel> */}
        </div>
    )
}
