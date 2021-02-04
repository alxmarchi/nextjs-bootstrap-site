import React from 'react';
import Carousel from "react-bootstrap/Carousel"

export default function CarouselBox({sliders}) {

    return (
        <Carousel>
            {sliders.map((slider) => (
                <Carousel.Item>
                    <img
                        key={slider.id}
                        className={slider.className}
                        src={slider.srcImage}
                        alt={slider.alt}
                    />
                    <Carousel.Caption>
                        <h2>НЕТАНГИН ФИТО*</h2>
                        <p>Пастилки для горла</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
         
        </Carousel>

    )
}