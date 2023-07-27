import React from 'react'

const ProductItem = ({sl_no, name, handleInfo, clear}) => {
  return (
    <div className='mt-[8%] md:mt-[2%] flex flex-row transition-colors hover:bg-pink hover:text-white py-6 px-6 cursor-pointer' 
    onMouseOver={handleInfo} onMouseLeave={clear}>
        <p className='text-2xl md:text-5xl mr-8'>{sl_no}</p>
        <p className='text-4xl md:text-7xl font-bold'>{name}</p>
    </div>
  )
}

export default ProductItem