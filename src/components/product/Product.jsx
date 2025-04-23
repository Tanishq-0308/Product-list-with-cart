import React, { useEffect, useState } from 'react'
import cartIcon from '../../../assets/images/icon-add-to-cart.svg';
import useCartStore from '../../context/CartContext';
import decrement from '../../../assets/images/icon-decrement-quantity.svg';
import increment from '../../../assets/images/icon-increment-quantity.svg';

  const Product = ({image, price, category, name,}) => {
    const {add, remove, addedProduct} = useCartStore();
    const product = addedProduct.find((pro)=> pro.name ===  name);
    const [showCounter, setShowCounter]= useState(true);
    const counter = product ? product.quantity : 0;


    const showButton=()=>{
      add(name, price, 'increase');
      setShowCounter(false);
    }

    const decrease =()=>{
      if(counter > 1){
        add(name, price, 'decrease');
      }else if (counter === 1){
        remove(name);
        setShowCounter(true);
      }
    }
    useEffect(()=>{
      if(counter === 0){
        setShowCounter(true);
      }
    },[counter]);

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
      <p className='text-[#af452a] font-rht-semibold'>${price}</p>
    </div>
  )
}

export default Product