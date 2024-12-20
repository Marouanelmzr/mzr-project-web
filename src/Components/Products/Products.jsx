import React from 'react'
import products from "../../assets/data"
import Card from "../../Components/common/Card/Card"
import "./Products.css"

const Products = () => {
  return (
    <div className='Products'>
        <h1>ALL PRODUCTS</h1>
        <div className='products-items'>
      {products.map((card)=>{
        return <Card key={card.id} title={card.title} price={card.price} color={card.color}/>
      })}
      </div>
    </div>
  )
}

export default Products
