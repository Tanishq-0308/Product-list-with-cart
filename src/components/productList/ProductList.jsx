import React from 'react'
import productList from '../../../Data'
import Product from '../product/Product'

const ProductList = () => {
  return (
    <div>
        <h1 className='text-3xl font-rht-bold mb-7'>Desserts</h1>
        <div className='grid grid-cols-3 gap-6'>
        {
            productList.map((product)=>(
                <Product key={product.name} image={product.image.desktop} name={product.name} category={product.category} price={product.price.toFixed(2)} quantity={product.quantity}/>
            ))
        }
        </div>
    </div>
  )
}

export default ProductList