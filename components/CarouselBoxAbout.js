import React from 'react';
import Carousel from "react-bootstrap/Carousel"
import slide_about1 from "../assets/images/slide_about1.jpg"
import slide_about2 from "../assets/images/slide_about2.jpg"
import slide_about3 from "../assets/images/slide_about3.jpg"

export default function CarouselBoxAbout() {
    return (
        <Carousel>
           <Carousel.Item>
                <img
                className="d-block w-100 h-20"
                src={slide_about1}
                alt=""
                />
            
            </Carousel.Item> 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide_about2}
                alt=""
                />
               
            </Carousel.Item> 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide_about3}
                alt=""
                />
               
            </Carousel.Item> 
        </Carousel>

    )
}