import React from 'react'
import cartIcon from '../../../assets/images/icon-add-to-cart.svg';

  const Product = ({image, price, category, name}) => {
  return (
    <div>
      <div className='relative'>
      <img src={image} alt="image" className='h-[13.75rem] relative w-full rounded-2xl mb-7 object-cover'/>
      <button className='flex items-center justify-center gap-2 absolute bg-white left-1/2 -translate-x-1/2 -bottom-4 border border-amber-900 px-6 py-2 rounded-3xl w-[60%]'>
        <img src={cartIcon} alt="" className='font-rht-semibold h-5'/>
        <p className='font-rht-semibold text-[0.7rem]'>Add to Cart</p>
      </button>
      </div>
      <p className='text-[#ad8985] text-[14px]'>{category}</p>
      <p className='font-rht-bold'>{name}</p>
      <p className='text-[#af452a] font-rht-semibold'>₹{price}</p>
    </div>
  )
}

export default Product