import { useState } from 'react'
import { Navbar, HeroSection, ProductSection, AboutSection } from './components';


function App() {

  return (  
  <div className="App">
    <Navbar />  
  
    <HeroSection/>
    
    <ProductSection/>
    <div className='w-full h-0 md:h-24'></div>
    <AboutSection/>

  </div>
);
}


export default App
