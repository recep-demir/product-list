
import React from 'react'

const ProductCard = ({products}) => {
  return (
    <div className="card">
        <div className="price">{products.price} $</div>
        <img src={products.image} width="400px" alt="" />
        <h2>{products.title}</h2>
    </div>
  )
}

export default ProductCard