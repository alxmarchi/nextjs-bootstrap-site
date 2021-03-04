import React from 'react';
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button";
import Link from "next/link";
import styled from 'styled-components'


const StyledButton = styled(Button)`
  background: brown;
  border: 2px solid brown;
  color: white;
  border-radius: 30px;
 // padding: 5px 10px;
  height: 55px;
  width: 310px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;

  &:hover {
    background: white;
    border: 2px solid red;
    color: brown;
  }
    `;

const StyledCarouselCaption = styled(Carousel.Caption)`
  top: 50%;
  transform: translateY(-50%) translateX(5%);
  bottom: initial;
`;

const Title = styled.h2`
  font-size: 68px;
  color: blacktranslateX(10px);
`;

const Text = styled.p`
  font-size: 32px;
`;

export default function CarouselBox({sliders}) {



    return (
        <Carousel>
            {sliders.map(({id, className, srcImage, alt, link}) => (
                <Carousel.Item key={id}>
                    <img
                        className={className}
                        src={srcImage}
                        alt={alt}
                    />
                    <StyledCarouselCaption  className='text-right'>
                        <Title><b>НЕТАНГИН ФИТО*</b></Title>
                        <Text>Пастилки для горла</Text>
                        <Link href={link} passHref>
                            <StyledButton >Подробнее</StyledButton>
                        </Link>
                    </StyledCarouselCaption>
                </Carousel.Item>
            ))}
         
        </Carousel>

    )
}
