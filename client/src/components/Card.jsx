import React from 'react'

const Card = ({ name, photo, job,desc}) => {
  return (
    <div className='bg-white h-[25rem] w-full 2xl:w-[30%] lg:w-1/2 p-4 group rounded-md hover:shadow-lg transition-shadow'>
        <p className='hidden group-hover:block w-full text-md 2xl:text-lg font-inter p-2'>{desc}</p>
        <img src={photo} alt={name} className='w-full h-[75%] object-cover group-hover:hidden group-focus:hidden '/>
        <h1 className='group-hover:hidden group-focus:hidden font-integral font-bold text-2xl xl:text-4xl mt-2 w-full'>{name}</h1>
        <p  className='group-hover:hidden group-focus:hidden  text-lg mt-2'>{job}</p>
    </div>
  )
}

export default Card