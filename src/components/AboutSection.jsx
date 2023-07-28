import React from 'react'
import Card from './Card.jsx'

const AboutSection = () => {
  return (
    <div className='md:h-screen max-w-screen bg-green' id='about_us'>
        <div className='w-[95%] md:w-[95%] pl-[5%] pt-[5%] md:pt-[2%] md:h-[80%]'>
            <h1 className='font-bold font-integral text-6xl md:text-7xl mb-6'>
                About Us
            </h1>
            <p className='mt-8 font-medium text-md pb-8'>
            At Hyper Soar, our team is dedicated to creating modern and high-performance drones that will elevate your aerial experience.</p>
            <div className='flex flex-col md:flex-row justify-evenly h-[70%] w-full gap-8 md:gap-0'>
                <Card name="Alex Turner" photo="https://ca-times.brightspotcdn.com/dims4/default/e304200/2147483647/strip/false/crop/2045x1150+0+0/resize/1486x836!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8d%2Fc3%2Fef134648d292b8e44680629c0312%2Fla-1525446840-jgf27g71ed-snap-image" job="Chief Drone Engineer" desc="Meet Alex, our brilliant mind behind HyperSoar's cutting-edge drone technology. With a passion for innovation and vast experience, Alex redefines the limits of flight and delivers top-notch performance."/>
                <Card name="Emily Chen" photo="https://sinsi.princeton.edu/sites/g/files/toruqf2066/files/styles/3x4_750w_1000h/public/people/chen_emily_edit.jpg?itok=iWd2_Wx3" job="Aerial Photographer" desc="Introducing Emily, our skilled aerial photographer who captures breathtaking shots from above. With an artist's eye and deep drone expertise, Emily creates unforgettable moments that inspire drone enthusiasts worldwide."/>
                <Card name="Neil Melendez" photo="https://www.cheatsheet.com/wp-content/uploads/2020/07/Nicholas-Gonzalez-The-Good-Doctor.jpg" job="Drone Flight Trainer" desc="Neil is our expert drone pilot and trainer. Patient and approachable, he ensures every pilot gains the skills and confidence to fly safely, fostering a thriving community of skilled drone users."/>
            </div>
        </div>
        <div className='bg-dark-gray w-full md:h-[20%] absolute flex flex-row'>
            <div className='w-[50%] flex flex-row md:gap-8'>
                <div className='ml-[8%]'>
                    <h2 className='text-pink text-xs md:text-lg mt-6 font-bold'>SUPPORT</h2>
                    <p className='text-white text-xs md:text-lg font-light hover:text-green cursor-pointer mt-2'>Refund</p>
                    <p className='text-white text-xs md:text-lg font-light hover:text-green cursor-pointer mt-2'>Returns</p>
                    <p className='text-white text-xs md:text-lg font-light hover:text-green cursor-pointer mt-2'>Terms of Service</p>
                </div>
                <div className='ml-[8%]'>
                    <h2 className='text-blue text-xs md:text-lg mt-6 font-bold'>FOLLOW US</h2>
                    <p className='text-white text-xs md:text-lg font-light hover:text-green cursor-pointer mt-2'>Meta</p>
                    <p className='text-white text-xs md:text-lg font-light hover:text-green cursor-pointer mt-2'>Instagram</p>
                </div>
            </div>
            <div className='w-[50%]'>
                <h1 className='text-white text-right mr-[5%] mt-[70%] md:mt-[12%] font-integral text-sm md:text-3xl'>Hyper Soar</h1>
            </div>
        </div>
    </div>
  )
}

export default AboutSection