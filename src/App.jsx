import React, { useState } from 'react'
import ProductList from './components/productList/ProductList'
import Cart from './components/cart/Cart'
import { CartContextProvider } from './context/CartContext'

const App = () => {
  const [addedProduct, setAddedProduct]= useState([]);

  const add=(name, price, value)=>{
    const answer= addedProduct.find((pro)=> pro.name == name);

    if(value === 'increase'){
      if(answer){
        setAddedProduct((prev)=> 
          prev.map(pro=> pro.name === name ? {...pro, quantity:pro.quantity+1}: pro
          )
        );
      }else{
        setAddedProduct((prev)=> 
          [...prev,{"name":name, "price":price, "quantity":1}
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

  return (
    <CartContextProvider value={{add, remove, addedProduct}}>
    <div className='w-[80%] pt-15 mx-auto flex gap-7'>
      <div className='w-[70%]'>
      <ProductList/>
      </div>
      <div className='w-[30%]'>
      <Cart/>
      </div>
    </div>
    </CartContextProvider>
  )
}

export default App