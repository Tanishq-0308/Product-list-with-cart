import React from 'react'
import emptyCartImmage from '../../../assets/images/illustration-empty-cart.svg'

const Cart = () => {
  return (
    <div className='bg-white p-5 rounded-xl'>
      <h1 className='font-rht-bold text-[#bc4800]'>Your Cart (0)</h1>
      <div className='flex items-center flex-col my-5'>
      <img src={emptyCartImmage} alt="" />
      <p className='text-[#943c21] font-rht-semibold'>Your added items will appear here</p>
      </div>
    </div>
  )
}

export default Cart