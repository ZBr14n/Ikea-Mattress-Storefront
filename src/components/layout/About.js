import React from 'react'
import '../../styles/About.css'

export default function About() {
    return (
        <div className="about-sect">
            <div className="aboutImage">
                <img src="/images/Ingvar.jpg" width="100%" id="ingvar" alt="Ingvar" />
            </div>
            <div className="aboutStory">
                <p>
                Founded by Ingvar Kamprad in 1943 as a tiny Swedish mail-order catalogue business, today IKEA is a global home furnishing brand that lives in the hearts of the many people. Explore the IKEA story here, including our heritage, where we are today and our positive impact on people and planet.

                We’ve come a long way since Ingvar Kamprad founded IKEA in 1943. From being a tiny Swedish business, selling through a mail-order catalogue, IKEA has become one of the most well-known home furnishing brands in the world. Today, there are hundreds of IKEA stores around the globe, and more are coming. Read more about our fascinating story – from the very beginning, to what we are doing right now.
                


                The IKEA Concept starts with the idea of providing a range of home furnishing products that are affordable to the many people, not just the few. It is achieved by combining function, quality, design and value - always with sustainability in mind. The IKEA Concept exists in every part of our company, from design, sourcing, packing and distributing through to our business model. Our aim is to help more people live a better life at home.

    The IKEA name combines the initials of IKEA founder, Ingvar Kamprad, (IK) with the first letters from the names of the farm and village where he grew up - Elmtaryd and Agunnaryd (EA). The IKEA logo has hardly changed during the company's history and the 1967 version remains a consistent symbol of the IKEA business.

    In the early 1980s - with IKEA stores in 20 countries and expanding - IKEA founder, Ingvar Kamprad, realized he needed to protect the unique IKEA Concept as part of the company's growth. He wanted total independence and a long-term ownership structure, so the stock market wasn't an option. Plus, he believed that all the companies operating under the IKEA Brand had to build resources before they could expand.

    So, the IKEA franchise system was established. Today all IKEA stores (except the IKEA Delft store in the Netherlands, which is owned by Inter IKEA Systems B.V.) operate under franchise agreements.
                </p>
            </div>

            <div style={{backgroundColor: 'white'}}>
                <img src="/images/ikea-stores-map.png" width="100%" alt="map" id="ikea-map" />
                <p style={{color:'#3F48CC'}}>Current market locations</p>
                <p style={{color:'#ffc90e'}}>Future market locations</p>
            </div>
        </div>
    )
}
