import React from 'react'
import { Navbar, HeroSection, ProductSection, AboutSection } from '../components';

const Home = () => {
  return (
    <>
        <Navbar />  
    
        <HeroSection/>
        
        <ProductSection/>
        <div className='w-full h-0 md:h-24'></div>
        <AboutSection/>
    </>
  )
}

export default Home