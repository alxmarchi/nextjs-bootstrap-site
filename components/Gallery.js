import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import sert_1 from "../public/images/about/sert_1.jpg";
import sert_2 from "../public/images/about/sert_2.jpg";
import sert_3 from "../public/images/about/sert_3.jpg";
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Gallery() {

  const images =
  [
    {
      id: 1,
      src: sert_1,
      title: 'Сертификат',
      description: 'Сертификат'
    },
    {
      id: 2,
      src: sert_2,
      title: 'Сертификат2',
      description: 'Сертификат2'
    },
    {
      id: 3,
      src: sert_3,
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