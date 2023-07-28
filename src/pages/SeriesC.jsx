import React from 'react'
import { logo } from '../assets';
import { Link } from 'react-router-dom'

const SeriesC = () => {
  return (
    <div className='md:h-screen'>
        <div className="w-full flex flex-row justify-between mt-[1%]">
            <Link to='/'>
                <img
                    src={logo}
                    className="pl-2 md:pl-8 h-128 object-contain"
                    alt="Logo"
                />
            </Link>
        </div>
        <div className='h-[91%] justify-center flex flex-col items-center'>
            <div className='h-[70%] w-[95%] flex md:flex-row flex-col'>
                <div className='w-full md:w-[50%]'>
                    <img src='../products/droneC.png' className='w-[90%] object-contain'/>
                </div>
                <div className='w-full md:w-[50%] flex flex-col justify-center items-center'>
                    <p className='text-2xl font-medium text-center w-full'>Let's just say, this Icarus will not fall from the sky.</p>
                    <div className='flex flex-row mt-[20%] gap-16'>
                        <img src='../categories/lightweight.png' className='w-20 md:w-36'/>
                        <img src='../categories/quickcharge.png' className='w-20 md:w-36'/>
                        <img src='../categories/maxtime.png' className='w-20 md:w-36'/>
                    </div>
                </div>
            </div>
            <div className='h-[30%] w-[95%] bg-dark-gray mb-[2%] md:mt-0 mt-[10%] p-4'>
                <h1 className='text-white font-integral text-7xl md:text-9xl pl-[3%]'>Icarus</h1>
                <h2 className='text-green pl-[3%] font-inter mt-6 text-3xl'>Series C</h2>
            </div>
        </div>
    </div>
  )
}

export default SeriesC