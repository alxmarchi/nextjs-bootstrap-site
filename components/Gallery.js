import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Gallery() {

  const images =
  [
    {
      id: 1,
      src: "/images/about/sert_1.jpg",
      title: 'Сертификат',
      description: 'Сертификат'
    },
    {
      id: 2,
      src: "/images/about/sert_2.jpg",
      title: 'Сертификат2',
      description: 'Сертификат2'
    },
    {
      id: 3,
      src: "/images/about/sert_3.jpg",
      title: 'image title',
      description: 'Сертификат'
    }
  ];

function getImages (images) {
  return (
    images.array.forEach(element => {
      <a href={element.src}>
      <img src={element.src} 
      alt="Umbrella" />
    </a>
    })
  )

}


  
    return (
       
          <SRLWrapper>
        
    <div class="container">
    <Row>
    { images.map(({id, src, title, description}) => 
            
            <div class="col-sm">
            <Image 
            key={id} 
            src={src} 
            title={title} 
            alt={description} 
            thumbnail
            />
            </div>
            )}
   
  
   </Row>
</div>
        </SRLWrapper>
    
 

    )
};