import React from 'react'
import ProductCard from './ProductCard'
import "./Products.scss"

const ProductList = ({products,sortedProducts}) => {
  return (
    
    <div className="d-flex justify-content-center">
  <div className="d-flex justify-content-center flex-wrap mt-5 gap-5 w-75">

        
        
        {
            products.map((e)=>(
                <ProductCard key={products.id} {...e}/>

            ))
        }
        
    </div>
    </div>
  )
}

export default ProductList