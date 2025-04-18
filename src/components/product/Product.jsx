import React from 'react'

  const Product = ({image, price, category, name}) => {
  return (
    <div>
      <img src={image} alt="image" className='h-[13.75rem] w-full rounded-2xl mb-4'/>
      <p className='text-[#ad8985] text-[15px]'>{category}</p>
      <p className='font-rht-bold'>{name}</p>
      <p className='text-[#af452a] font-rht-semibold'>₹{price}</p>
    </div>
  )
}

export default Product