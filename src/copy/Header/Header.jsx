
import React from 'react'

const Header = ({categories,kategoriBtn,SearchBtn}) => {
    console.log(categories)
  return (
    <div className="header">
         <h1>ProductList</h1>

<div className="button">
    {
        categories.map((e)=>(
            <button onClick={()=>kategoriBtn(e)} >{e}</button>
        ))
    }
 </div>
 <input type="search" placeholder='search' onChange={(e)=>SearchBtn(e.target.value)}/>

    </div>
 


  )
}

export default Header