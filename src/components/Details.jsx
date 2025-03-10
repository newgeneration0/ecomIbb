import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Details() {
    const {id} = useParams()
    const products = useSelector(state => state.product.products)

    const[product, setProduct] = useState({})

    useEffect(()=>{
        const newProduct = products.find(product => product.id === parseInt(id))
        setProduct(newProduct)
    }, [products, id])
  return (
    <div>
        {product.price}
        {product.name}
        {/* ibrhim */}
    </div>
  )
}

export default Details