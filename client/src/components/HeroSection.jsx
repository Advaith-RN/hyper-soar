import React from 'react'
import { spinner } from '../assets';

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex justify-center">
      <div className='h-[80%] w-full max-w-8xl bg-[url(./assets/hero.jpg)] bg-cover bg-center'>
        <img src={spinner} className='absolute w-[20%] invisible md:visible ml-[75%] mt-[15%] animate-spin-slow'/>
        <div className='w-full h-[70%]'></div>
        <div className='w-full h-[30%] bg-dark-gray'>
            <h1 className='text-white font-integral text-5xl md:text-9xl ml-6 pt-0'>Hyper Soar</h1>
            <div className='w-full h-[5%] mt-6 bg-green'/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection