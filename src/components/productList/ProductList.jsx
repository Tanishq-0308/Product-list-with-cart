import React from 'react'
import productList from '../../../Data'
import Product from '../product/Product'

const ProductList = () => {
  return (
    <div>
        <h1 className='text-3xl font-rht-bold mb-7'>Desserts</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            productList.map((product)=>(
                <Product productdetail={product} key={product.name} image={product.image.desktop} thumbnail={product.image.thumbnail} name={product.name} category={product.category} price={product.price.toFixed(2)} quantity={product.quantity}/>
            ))
        }
        </div>
    </div>
  )
}

export default ProductList