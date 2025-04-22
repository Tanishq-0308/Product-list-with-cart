import React, { useEffect, useState } from 'react'
import emptyCartImmage from '../../../assets/images/illustration-empty-cart.svg'
import useCartStore from '../../context/CartContext'

const Cart = () => {
  const {addedProduct}= useCartStore();
  const [empty, setEmpty]= useState(true);
  useEffect(()=>{
    
    if(addedProduct.length== 0){
      setEmpty(true);
    }else{
      console.log(addedProduct);
      setEmpty(false);
    }
  },[addedProduct]);
  return (
    <div className='bg-white p-5 rounded-xl'>
      <h1 className='font-rht-bold text-[#bc4800]'>Your Cart (0)</h1>
{
  empty ? 
      <div className='flex items-center flex-col my-5'>
      <img src={emptyCartImmage} alt="" />
      <p className='text-[#943c21] font-rht-semibold'>Your added items will appear here</p>
      </div>
  :
  addedProduct.map((prod)=>(
    <div>
      <p>{prod.quantity}</p>
      <h1>
      {prod.price}
      </h1>
      <h2>
        {prod.name}
      </h2>
    </div>
  ))
}
    </div>
  )
}

export default Cart