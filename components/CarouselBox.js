import React from 'react';
import Carousel from "react-bootstrap/Carousel"
import orange from "../public/banner-orange.jpg"
import yellow from "../public/images/banner-limon.jpg"
import green from "../public/images/banner-mint.jpg"
import red from "../public/images/banner-strawberry.jpg"
import Image from 'next/image'



export default function CarouselBox({sliders}) {

    return (
        <Carousel>
            {sliders.map((slider) => (
                <Carousel.Item>
                    <img
                        id={slider.id}
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
           {/*<Carousel.Item>*/}
           {/*     <img*/}
           {/*     className="d-block w-100 h-20"*/}
           {/*     src="/banner-orange.jpg"*/}
           {/*     alt="Нетангин фито - пастилки для горла со вкусом апельсина"*/}
           {/*     />*/}
           {/*     <Carousel.Caption>*/}
           {/*         <h2>НЕТАНГИН ФИТО*</h2>*/}
           {/*         <p>Пастилки для горла</p>*/}
           {/*     </Carousel.Caption>*/}
           {/* </Carousel.Item> */}
           {/* <Carousel.Item>*/}
           {/*     <img*/}
           {/*     className="d-block w-100"*/}
           {/*     src={yellow}*/}
           {/*     alt="Нетангин фито - пастилки для горла со вкусом имбиря и лимона"*/}
           {/*     />*/}
           {/*     <Carousel.Caption>*/}
           {/*         <h2>НЕТАНГИН ФИТО*</h2>*/}
           {/*         <p>Пастилки для горла</p>*/}
           {/*     </Carousel.Caption>*/}
           {/* </Carousel.Item> */}
           {/* <Carousel.Item>*/}
           {/*     <img*/}
           {/*     className="d-block w-100"*/}
           {/*     src={red}*/}
           {/*     alt="Нетангин фито - пастилки для горла со вкусом клубники"*/}
           {/*     />*/}
           {/*     <Carousel.Caption>*/}
           {/*         <h2>НЕТАНГИН ФИТО*</h2>*/}
           {/*         <p>Пастилки для горла</p>*/}
           {/*     </Carousel.Caption>*/}
           {/* </Carousel.Item> */}
           {/* <Carousel.Item>*/}
           {/*     <img*/}
           {/*     className="d-block w-100"*/}
           {/*     src={green}*/}
           {/*     alt="Нетангин фито - пастилки для горла со вкусом мяты"*/}
           {/*     />*/}
           {/*     <Carousel.Caption>*/}
           {/*         <h2>НЕТАНГИН ФИТО*</h2>*/}
           {/*         <p>Пастилки для горла</p>*/}
           {/*     </Carousel.Caption>*/}
           {/* </Carousel.Item> */}
        </Carousel>

    )
}