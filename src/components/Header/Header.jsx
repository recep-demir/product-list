import React from 'react'
import "./Header.scss"




const Header = ({categories,categoryButton,SearchInput, sortedProducts}) => {
   



    
  
  return (
    <div className="header ">
        <h1>OUR PRODUCTS</h1>

        <div className="d-flex justify-content-center flex-wrap  gap-3 my-5">

        {
            categories.map((e,index)=>(
                <button onClick={()=>categoryButton(e)}  key={index} type="button" className="btn btn-secondary btn-lg   ">{e}</button>

            ))
        }
   
        </div>

        <div className="container mt-5 w-50">
        <form className="d-flex">
        <input onChange={(e)=>SearchInput(e.target.value)} className="form-control me-2" type="search" placeholder="Ara" aria-label="Search" />
        
        <select onChange={(e) => sortedProducts(e.target.value)}  className="form-select" aria-label="Default select example">
        <option selected="">Sort by </option>
        <option value="name">Name</option>
        <option value="price">Price</option>

        </select>

        </form>
        </div>

        
        

    </div>
  )
}

export default Header