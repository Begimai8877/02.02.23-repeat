import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState ([])
  useEffect(()=>{
    const getdata = async()=>{
      const {data} = await axios ("https://fakestoreapi.com/products")
      setProducts(data)
    }
    getdata()
  }, [])

 
  return (
    <div className ='cards'>
        {
            products.map((el, idx) => (
              <Card key={idx} name={el.title} price = {el.price} img = {el.image}/>
            ))
        }
    </div>
  )
}

export default Home


