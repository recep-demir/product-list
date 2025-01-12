import ProductCard from './ProductCard'
import React from 'react'

const Products = ({products}) => {
  return (
    <div>

      {
        products.map((item)=>(
          <ProductCard products={item}/>

        ))

      }

    </div>
  )
}

export default Products