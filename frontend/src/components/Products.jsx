import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {BASE_URL} from '../../config.js'
import Product from './Product'


const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`



const Products = ({cat,filters,sort}) => {
    const [products ,setProducts] = useState([])
    const [filteredProducts,setFilteredProducts] = useState([])
    
    useEffect(()=>{
        const getProducts = async () => {
        try{
            const response = await axios.get(
                cat 
                ? `${BASE_URL}/product?category=${cat}` 
                : `${BASE_URL}/product`
                )
           setProducts(response.data)
           
        }
        catch(err){
            console.log(err)
        }
    }
    getProducts()
},[cat])
      
  useEffect(() => {
    cat && 
    setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    
  }, [products, cat, filters])
    
  useEffect(() => {
    if(sort === 'newest'){
        setFilteredProducts((prev) => 
        [...prev].sort((a,b) => new Date(b.createdAt)-new Date(a.createdAt))
        )
    }
    else if(sort === 'asc'){
        setFilteredProducts((prev) => 
        [...prev].sort((a,b) => a.price-b.price)
        )
    }
    else if(sort === 'dsc'){
        setFilteredProducts((prev) => 
        [...prev].sort((a,b) => b.price-a.price)
        )
    }

  },[sort,products,filters])

  
  return (
    <Container>
        {cat 
        ? filteredProducts.map((item) => <Product item={item} key={item._id} /> )
        : products.slice(0,8).map((item) => <Product item={item} key={item._id} /> )     
       }
    </Container>
  )
}

export default Products
      
       
    
 
       
           
     
