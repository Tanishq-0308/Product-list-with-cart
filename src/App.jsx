import React, { useState } from 'react'
import ProductList from './components/productList/ProductList'
import Cart from './components/cart/Cart'
import { CartContextProvider } from './context/CartContext'

const App = () => {
  const [addedProduct, setAddedProduct]= useState([]);

  const add=(name, price, productdetail,  value)=>{
    const answer= addedProduct.find((pro)=> pro.name == name);

    if(value === 'increase'){
      if(answer){
        setAddedProduct((prev)=> 
          prev.map(pro=> pro.name === name ? {...pro, quantity:pro.quantity+1}: pro
          )
        );
      }else{
        setAddedProduct((prev)=> 
          [...prev,{"name":name, "price":price, "quantity":1, "productDetail": productdetail}
          ]);
      }
    }else if (value === 'decrease' && answer){
        setAddedProduct((prev)=> 
          prev.map(pro=> pro.name === name ? {...pro, quantity:pro.quantity-1}: pro
          )
      );
    }
  };

  const remove=(name)=>{
    setAddedProduct((prev) => prev.filter(pro => pro.name !== name));
  };

  const reset=()=>{
    setAddedProduct([]);
  }

  return (
    <CartContextProvider value={{add, remove, addedProduct, reset}}>
    <div className='w-[80%] pt-15 pb-25 mx-auto sm:flex gap-7'>
      <div className='md:w-[70%] sm:w-[50%] w-full mb-10 sm:mb-0'>
      <ProductList/>
      </div>
      <div className='md:w-[30%] sm:w-[50%] w-full'>
      <Cart/>
      </div>
    </div>
    </CartContextProvider>
  )
}

export default App