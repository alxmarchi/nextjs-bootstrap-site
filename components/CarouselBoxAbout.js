import React from 'react';
import Carousel from "react-bootstrap/Carousel"

export default function CarouselBoxAbout() {
    return (
        <Carousel>
           <Carousel.Item>
                <img
                className="d-block w-100 h-20"
                src="/images/about/slide_about1.jpg"
                alt=""
                />
            
            </Carousel.Item> 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/about/slide_about2.jpg"
                alt=""
                />
               
            </Carousel.Item> 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/about/slide_about3.jpg"
                alt=""
                />
               
            </Carousel.Item> 
        </Carousel>

    )
}