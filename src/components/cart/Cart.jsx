import React, { useEffect, useState } from 'react'
import emptyCartImmage from '../../../assets/images/illustration-empty-cart.svg'
import useCartStore from '../../context/CartContext'

const Cart = () => {
  const {addedProduct, remove}= useCartStore();
  const [empty, setEmpty]= useState(true);
  const [totalCount, setTotalCount]= useState(0);
  useEffect(()=>{
    
    if(addedProduct.length== 0){
      setEmpty(true);
      setTotalCount(0);
    }else{
      console.log(addedProduct);
      setEmpty(false);
      const value= addedProduct.map((pro)=> (
        pro.quantity
      ))
      const total= value.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue;
      },0);
      setTotalCount(total)
      
    }
  },[addedProduct]);
  return (
    <div className='bg-white p-5 rounded-xl'>
      <h1 className='font-rht-bold text-[#bc4800]'>Your Cart ({totalCount})</h1>
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
      <p>{prod.quantity * prod.price}</p>
      <h2>
        {prod.name}
      </h2>
      <button onClick={()=> remove(prod.name)}>remove</button>
    </div>
  ))
}
    </div>
  )
}

export default Cart