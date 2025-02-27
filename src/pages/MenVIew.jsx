import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { setProducts } from '../redux/ProductSlice'
import { shopData } from '../assets/shopData'

function MenView() {

    //FOR MAPPING PRODUCT FORM REDUX
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)
    useEffect(()=>{
        dispatch(setProducts(shopData))
    })

  return (
    <div className='px-10 pb-15 pt-5 bg-gray-100'>
    <div className='flex space-x-'>
        <div className='pe-30'>
            <h6 className='text-black font-semibold text-sm'>OFFERS</h6>
            <ul className='p-0 m-0 mb-5'>
                <li><a href='/' className='text-xs text-black'>DISCOUNT UP TO 90%</a></li>
            </ul>

            <h6 className='text-black font-semibold text-sm'>NEW IN</h6>
            <ul className='p-0 m-0 mb-5'>
                <li><a href='/' className='text-xs text-black'>VIEW ALL</a></li>
                <li><a href='/' className='text-xs text-black'>ACCESSORIES</a></li>
                <li><a href='/' className='text-xs text-black'>CLOTHES</a></li>
            </ul>

            <h6 className='text-black font-semibold text-sm'>TRENDING NOW</h6>
            <ul className='p-0 m-0 mb-5'>
                <li><a href='/' className='text-xs text-black'>OUTDOOR</a></li>
                <li><a href='/' className='text-xs text-black'>OUTDOOR APPAREL</a></li>
                <li><a href='/' className='text-xs text-black'>CLOTHES</a></li>
                <li><a href='/' className='text-xs text-black'>TRANSITIONAL FITS</a></li>
                <li><a href='/' className='text-xs text-black'>CORE COMFORT</a></li>
                <li><a href='/' className='text-xs text-black'>TREDNING NOW</a></li>
            </ul>

            <h6 className='text-black font-semibold text-sm'>CLOTHING</h6>
            <ul className='p-0 m-0 mb-5'>
                <li><a href='/' className='text-xs text-black'>VIEW ALL</a></li>
                <li><a href='/' className='text-xs text-black'>SHIRTS</a></li>
                <li><a href='/' className='text-xs text-black'>T-SHIRTS & TOPS</a></li>
                <li><a href='/' className='text-xs text-black'>TROUSER</a></li>
                <li><a href='/' className='text-xs text-black'>JEANS</a></li>
                <li><a href='/' className='text-xs text-black'>JACKETS & COATS</a></li>
                <li><a href='/' className='text-xs text-black'>HOODIES & SWEATSHIRTS</a></li>
                <li><a href='/' className='text-xs text-black'>SWEATER & CARDIGANS</a></li>
                <li><a href='/' className='text-xs text-black'>POLOS</a></li>
                <li><a href='/' className='text-xs text-black'>BASICS</a></li>
                <li><a href='/' className='text-xs text-black'>BLAZERS & SUITS</a></li>
                <li><a href='/' className='text-xs text-black'>SHORTS</a></li>
            </ul>
        </div>
        <div className='w-4/5'>
        <p className='text-xl font-bold mb-6'>WELCOME TO MEN FASHION HOUSE</p>
            <div className='grid grid-cols-4 gap-10 pb-10'>
            {products.products.map(((product)=>(
                <ProductCard product={product} key={product.id}/>
            )))}
            </div>
        </div>
    </div>
</div>
  )
}

export default MenView