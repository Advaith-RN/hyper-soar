import React from 'react'

const AboutSection = () => {
  return (
    <div className='h-screen max-w-screen bg-green' id='about_us'>
        <div className='w-[90%] md:w-[50%] pl-[5%] pt-[5%] md:pt-[2%] h-[70%]'>
            <h1 className='font-bold font-integral text-6xl md:text-7xl mb-6'>
                About Us
            </h1>
            <p className='mt-[5%] font-medium text-md'>
            Welcome to Hyper Soar, your premier destination for cutting-edge drones. Whether you're a beginner or a seasoned enthusiast, our modern and high-performance drones will elevate your aerial experience. Join us and soar to new heights with Hyper Soar!</p>
        </div>
        <div className='bg-dark-gray w-full h-[30%] absolute flex flex-row'>
            <div className='w-[50%] flex flex-row md:gap-8'>
                <div className='ml-[8%]'>
                    <h2 className='text-pink text-lg mt-6 font-bold'>SUPPORT</h2>
                    <p className='text-white text-lg font-light hover:text-green cursor-pointer mt-2'>Refund</p>
                    <p className='text-white text-lg font-light hover:text-green cursor-pointer mt-2'>Returns</p>
                    <p className='text-white text-lg font-light hover:text-green cursor-pointer mt-2'>Terms of Service</p>
                </div>
                <div className='ml-[8%]'>
                    <h2 className='text-blue text-lg mt-6 font-bold'>FOLLOW US</h2>
                    <p className='text-white text-lg font-light hover:text-green cursor-pointer mt-2'>Meta</p>
                    <p className='text-white text-lg font-light hover:text-green cursor-pointer mt-2'>Instagram</p>
                </div>
            </div>
            <div className='w-[50%]'>
                <h1 className='text-white text-right mr-[5%] mt-[40%] md:mt-[20%] font-integral text-xl md:text-3xl'>Hyper Soar</h1>
            </div>
        </div>
    </div>
  )
}

export default AboutSection