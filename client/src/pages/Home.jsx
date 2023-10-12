import React from 'react'
import { Navbar, HeroSection, ProductSection, AboutSection } from '../components';
import transition from '../transition.jsx'

const Home = ({isLoggedIn}) => {
  return (
    <>
        <Navbar isLoggedIn={isLoggedIn}/>  
        {isLoggedIn && <div className='w-screen flex align-middle items-center justify-center h-24 bg-blue'>LOGGED IN!</div>}
        <HeroSection/>
        
        <ProductSection/>
        <div className='w-full h-0 md:h-24'></div>
        <AboutSection/>
    </>
  )
}

export default transition(Home)