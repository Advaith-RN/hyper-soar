import React from 'react'
import Card from './Card.jsx'

const AboutSection = () => {
  return (
    <div className='w-full bg-green flex flex-col items-center justify-center' id='about_us'>
        <div className='w-full px-[5%] flex flex-col pt-[5rem] md:pt-10'>
            <h1 className='font-bold font-integral text-4xl md:text-7xl'>
                About Us
            </h1>
            <p className='mt-10 font-medium text-md md:text-lg 2xl:text-xl pb-2'>
            At Hyper Soar, our team is dedicated to creating modern and high-performance drones that will elevate your aerial experience.</p>
            <div className='flex flex-col md:flex-row justify-evenly h-auto md:h-[26.5rem] w-full gap-8 py-4 px-0 xl:px-[5rem]'>
                <Card name="Alex Turner" photo="https://ca-times.brightspotcdn.com/dims4/default/e304200/2147483647/strip/false/crop/2045x1150+0+0/resize/1486x836!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8d%2Fc3%2Fef134648d292b8e44680629c0312%2Fla-1525446840-jgf27g71ed-snap-image" job="Chief Drone Engineer" desc="Meet Alex, our brilliant mind behind HyperSoar's cutting-edge drone technology. With a passion for innovation and vast experience, Alex redefines the limits of flight and delivers top-notch performance."/>
                <Card name="Emily Chen" photo="https://sinsi.princeton.edu/sites/g/files/toruqf2066/files/styles/3x4_750w_1000h/public/people/chen_emily_edit.jpg?itok=iWd2_Wx3" job="Aerial Photographer" desc="Introducing Emily, our skilled aerial photographer who captures breathtaking shots from above. With an artist's eye and deep drone expertise, Emily creates unforgettable moments that inspire drone enthusiasts worldwide."/>
                <Card name="Neil Melendez" photo="https://www.cheatsheet.com/wp-content/uploads/2020/07/Nicholas-Gonzalez-The-Good-Doctor.jpg" job="Drone Flight Trainer" desc="Neil is our expert drone pilot and trainer. Patient and approachable, he ensures every pilot gains the skills and confidence to fly safely, fostering a thriving community of skilled drone users."/>
            </div>
        </div>
        
        <div className='bg-dark-gray w-full h-[7rem] md:h-[9.5em] flex flex-row px-[4%] mt-2 py-[1%]'>
            <div className='h-full w-[50%] flex flex-row items-end gap-2 md:gap-8'>
                <div className='h-full flex flex-col justify-between'>
                    <h2 className='text-pink text-xs md:text-lg mt-6 md:mt-4 font-bold'>SUPPORT</h2>
                    <p className='text-white text-xs md:text-lg font-light hover:text-green cursor-pointer'>Refund</p>
                    <p className='text-white text-xs md:text-lg font-light hover:text-green cursor-pointer'>Returns</p>
                </div>
                <div className='h-full ml-[8%] flex flex-col justify-between'>
                    <h2 className='text-blue text-xs md:text-lg mt-6 md:mt-4 font-bold'>FOLLOW US</h2>
                    <p className='text-white text-xs md:text-lg font-light hover:text-green cursor-pointer'>Meta</p>
                    <p className='text-white text-xs md:text-lg font-light hover:text-green cursor-pointer'>Instagram</p>
                </div>
            </div>
            <div className='h-full w-[50%]'>
                <h1 className='text-white text-right h-full flex items-end justify-end font-integral text-sm md:text-3xl'>Hyper Soar</h1>
            </div>
        </div>
    </div>
  )
}

export default AboutSection