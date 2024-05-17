import React from 'react'
import Button from '../components/Button';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section id='about-us' className=' flex justify-between items-center max-lg:flex-col  gap-10 w-full max-continer'>
      <div className=' flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl  capitalize font-bold lg:max-w-lg'>
          We Provide You <span className='text-coral-red'>Super</span> <span className='text-coral-red'>Quality</span>  Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously 
          crafted footware is designed to elevate your experince,
          providing you with unmatche quality, innovation, and 
          a touch of elegance.
        </p>
        <p className=' info-text mt-6 lg:max-w-lg'>
          Our dedication to detail and excellence ensure your 
          satidfaction
        </p>
        <div className=' mt-10'>
          <Button label="View details"/>
        </div>
      </div>
      <div className=' flex flex-1 justify-center items-center'>
        <img src={shoe8} alt='shoe8' height={522} width={570}
          className=' object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality
