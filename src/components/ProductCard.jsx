import React from 'react'
import bg from '../assets/image/bgPics.jpg'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clickProduct } from '../redux/ProductSlice'

function ProductCard({product}) {
    
    //FOR GETTING MORE DETAILS WHEN PRODUCT IS CLICK
    const dispatch = useDispatch()
    const handleProductClick = (product) =>{
        dispatch(clickProduct(product))
    }
  return (
    <Link to={`/product/${product.id}`} onClick={handleProductClick}>
    <div className='w-71 h-96 mb-5'>
            <div 
            className='overflow-hidden group relative bg-white' 
            >
                <img 
                src={product.image} 
                alt={product.name} 
                className='w-full h-96 transform transition-transform duration-500 ease-in-out hover:scale-85'
                />
                <div className='flex items-center justify-between absolute bottom-0 w-full bg-orange-600 text-white text-xs text-cente p-5 transition-transform transform translate-y-full group-hover:translate-y-0'>
                <span className='text-md'>VIEW PRODUCT</span>
                <span className='text-lg'><FaEye /></span>
                </div>
            </div>
            <div className='ms-5 mt-1'>
                <p className='text-xs text-black font-semibold'>{product.name}</p>
                <p className='text-xs text-black'>$ {product.price}.00</p>
            </div>
        </div>
        </Link>
  )
}

export default ProductCard