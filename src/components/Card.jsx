import React from 'react'

const Card = ({ name, photo, job,desc}) => {
  return (
    <div className='bg-white w-full md:w-[30%] lg:w-1/4 max-h-[75%] md:h-full p-4 group rounded-md hover:shadow-lg transition-shadow'>
        <p className='hidden group-hover:block w-full text-sm md:text-md font-inter p-2'>{desc}</p>
        <img src={photo} alt={name} className='w-full h-[80%] object-cover group-hover:opacity-0 '/>
        <h1 className='group-hover:opacity-0 font-integral font-bold text-4xl mt-2 w-full '>{name}</h1>
        <p  className='group-hover:opacity-0  text-lg mt-2'>{job}</p>
    </div>
  )
}

export default Card