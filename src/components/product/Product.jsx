import React, { useEffect, useState } from 'react'
import cartIcon from '../../../assets/images/icon-add-to-cart.svg';
import useCartStore from '../../context/CartContext';
import decrement from '../../../assets/images/icon-decrement-quantity.svg';
import increment from '../../../assets/images/icon-increment-quantity.svg';

  const Product = ({image, price, category, name, quantity}) => {
    const {add, remove} = useCartStore();
    const [showCounter, setShowCounter]= useState(true);
    const [counter, setCounter]=useState(quantity);
    const showButton=()=>{
      // console.log(counter);
      add(name, price, quantity, 'increase');
      setShowCounter(false);
      setCounter(prev=> prev+1);
      // console.log(counter);
      
    }

    const decrease =()=>{
      if(counter > 1){
        add(name, price, quantity, 'decrease');
        setCounter(prev=>prev-1);
      }else if (counter === 1){
        remove(name);
        setCounter(0);
        setShowCounter(true);
      }

    }

  return (
    <div>
      <div className='relative'>
      <img src={image} alt="image" className='h-[13.75rem] relative w-full rounded-2xl mb-7 object-cover'/>
      {
        showCounter ? 
      <button onClick={showButton} className='flex items-center justify-center gap-2 absolute bg-white left-1/2 -translate-x-1/2 -bottom-4 border border-amber-900 px-6 py-2 rounded-3xl w-[60%]'>
        <img src={cartIcon} alt="" className='font-rht-semibold h-5'/>
        <p className='font-rht-semibold text-[0.7rem]'>Add to Cart</p>
      </button>
          :
      <div className='flex items-center justify-between absolute bg-[#c73a0f] left-1/2 -translate-x-1/2 -bottom-4 border-amber-900 px-2 py-2 rounded-3xl w-[60%]'>
          <img onClick={decrease} src={decrement} alt="-" className='border-white border rounded-4xl p-1.5 py-2.5'/>
          <p className='text-white '>
          {counter}
          </p>
          <img onClick={showButton} src={increment} alt="+" className='border-white border rounded-4xl p-1.5'/>
      </div>
      }
      </div>
      <p className='text-[#ad8985] text-[14px]'>{category}</p>
      <p className='font-rht-bold'>{name}</p>
      <p className='text-[#af452a] font-rht-semibold'>₹{price}</p>
    </div>
  )
}

export default Product