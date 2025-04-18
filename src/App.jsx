import React from 'react'
import ProductList from './components/productList/ProductList'
import Cart from './components/cart/Cart'

const App = () => {
  return (
    <div className='w-[80%] pt-15 mx-auto flex gap-7'>
      <div className='w-[70%]'>
      <ProductList/>
      </div>
      <div className='w-[30%]'>
      <Cart/>
      </div>
    </div>
  )
}

export default App