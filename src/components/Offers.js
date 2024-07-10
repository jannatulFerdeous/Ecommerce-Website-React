import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Offers.Module.css'

import img1 from './Assets/slide-1.jpg';
import img2 from './Assets/slide-2.jpg';

export const Offers = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel className='offer' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img  className="d-block w-100" src={img1} alt="First slide" />  
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}