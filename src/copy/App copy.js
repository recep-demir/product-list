import './App.css';
import Header from "../components/Header/Header";
import ProductList from '../components/Products/ProductList';
import {products,categories} from '../helper/data';
import React, { useState } from "react";




function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  // const [ArananKelime, setArananKelime] = useState("")

  const kategori =[]

  products.forEach((e)=>{
    if(!kategori.includes(e.category)){
      kategori.push(e.category)
    }
    
  })

  
//  item burada tiklananan buton olacak.
  const kategoriSec = (item) => {
  const filtered = products.filter((product) => product.category === item);
  if(filtered.length===0){
    setFilteredProducts(products);
  }
  else{
    setFilteredProducts(filtered);
  }
   
  }



  const arama =(aranan)=>{
    const arananKucuk = aranan.toLowerCase()
    const filterelenmis = products.filter((item)=>item.title.toLowerCase().includes(arananKucuk))

    setFilteredProducts(filterelenmis);
  }





  return (
    <div className="App">
      <Header categories={categories} kategoriBtn={kategoriSec} SearchBtn={arama}/>

      <ProductList products={filteredProducts}/>
    </div>
  );
};

export default App;
