import React from 'react'

const ProductCard = ({price, title, image, id}) => {
  return (
    <div>
  <div key={id} className="card  " style={{ width: "18rem" }}>

      <div className="price">
      <h4 className="card-title ">
        {price} $
      </h4>
    </div>
    <img src={image} className="card-img-top" alt="..." />
    <div className="card-body d-flex justify-content-center">
      <h5 >
        {title}
      </h5>
    </div>
  </div>
    </div>
  )
}

export default ProductCard