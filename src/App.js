import React, { useState } from 'react'
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import {products,categories} from './helper/data';
import ProductList from './components/Products/ProductList';
const App = () => {
    const [FilteredProducts, setFilteredProducts] = useState(products)
    // const [sortKey, setSortKey] = useState(products)


const kategori =[]
products.forEach((e)=>{
  if(!kategori.includes(e.category)){
    kategori.push(e.category)
  }
})

const categorySelect = (item)=>{
    const filtered = products.filter((e)=>e.category===item)
      if(filtered.length===0){
        setFilteredProducts(products);
      }
      else{
        setFilteredProducts(filtered);
      }
}

const ProductSearch = (wanted)=>{
    const filteredSearch = products.filter((item)=>item.title.toLowerCase().includes(wanted.toLowerCase()))
    setFilteredProducts(filteredSearch)
}

const sortedProducts = (sortKey) => {
    const sorted = [...FilteredProducts].sort((a, b) => {
      if (sortKey === "price") {
        return a.price - b.price;
      } else if (sortKey === "name") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    setFilteredProducts(sorted);
  };


  return (
    <div>
        <Header categories={categories} categoryButton={categorySelect} SearchInput={ProductSearch} sortedProducts={sortedProducts} />
        <ProductList products={FilteredProducts}  />
    </div>
  )
}

export default App