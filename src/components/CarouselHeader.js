import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useGlobalContext } from '../context'
import lebron from '../image/lebron.png'
import Navbar from './Navbar'

const CarouselHeader = () => {


  return (
    <>
    <Navbar />
    <Carousel className='carousel '> 
    <Carousel.Item interval={4000} 
 
  style={{
    position: 'relative',
   
   
  }}>
    <img
      style={{
        height: "100%",
        width: "100%",
        backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
      }}
      className="d-block"
      src={lebron}
      alt="First slide"
    />
   <Carousel.Caption>
   <div className='carousel-item-content'>
       <button className='btn bg-light m-2 '>
          BUY NOW
        </button>
        <button className='text-light btn btn-outline-light'>
          LEARN MORE
        </button>
      
       </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000} 
   className="w-100"
  >
    <img
      className="d-block w-100"
      src={lebron}
      alt="Second slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item
   className=" w-100"
  >
    <img
      className="d-block w-100"
      src={lebron}
      alt="Third slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
    
    </>
  )
}

export default CarouselHeader