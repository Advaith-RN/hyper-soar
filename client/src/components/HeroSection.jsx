import React from 'react'
import { spinner } from '../assets';

const HeroSection = () => {
  return (
    <div className="h-[calc(100svh)] md:h-[calc(100svh-6rem)] w-full flex items-center justify-center px-3 md:px-10 pt-3 pb-[1rem] md:pb-[3rem] z-[10]">
      <div className='mt-2 h-[100%] w-full max-w-8xl bg-[url(./assets/hero.jpg)] bg-cover bg-center'>
        <img src={spinner} className='absolute w-[20%] invisible md:visible right-[2.5rem] mt-[15%] animate-spin-slow'/>
        <div className='w-full h-[70%]'></div>
        <div className='w-full h-[30%] bg-dark-gray'>
            <h1 className='text-white font-integral text-5xl md:text-7xl 2xl:text-9xl ml-6 pt-0'>Hyper Soar</h1>
            <div className='w-full h-[5%] mt-12 2xl:mt-10 bg-green'/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection