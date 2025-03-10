import React from 'react'
// import bg from '../assets/image/bgPics.jpg'
import { FaEye, FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToFavourites, removeFromFavourites } from '../redux/FavouriteSlice';
import { GoHeart } from 'react-icons/go';
// import { useDispatch } from 'react-redux'
// import { clickProduct } from '../redux/ProductSlice'


function ProductCard({product}) {
   const dispatch = useDispatch();
   const favourites = useSelector((state)=> state.favourites.favourites);
   const isFavourite = favourites.some((item)=> item.id===product.id)

   const handleFavouritesToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if(isFavourite){
      dispatch(removeFromFavourites(product.id))
    } else  {
      dispatch(addToFavourites(product));
    }
   }
    //FOR GETTING MORE DETAILS WHEN PRODUCT IS CLICK
    // const dispatch = useDispatch()
    // const handleProductClick = (product) =>{
    //     dispatch(clickProduct(product))
    // }
  return (
    // <Link to={`/product/${product.id}`} onClick={handleProductClick}>
    <Link to={`/product/${product.id}`}>
      <div className='w-71 h-96 mb-5'>
              <div 
              className='overflow-hidden group relative bg-white' 
              >
                  <img 
                  src={product.image} 
                  alt={product.name} 
                  className='w-full h-96 transform transition-transform duration-500 ease-in-out hover:scale-85'
                  />
                  <button onClick={handleFavouritesToggle} type='button' className='absolute top-3 right-2'><FaHeart className={` hover:text-red-500 ${isFavourite ? "text-red-500" : "text-white"}`}/></button>
                  <div className='flex items-center justify-between absolute bottom-0 w-full bg-orange-600 text-white text-xs text-cente p-5 transition-transform transform translate-y-full group-hover:translate-y-0'>
                  <span className='text-md'>VIEW PRODUCT</span>
                  <span className='text-lg'><FaEye /></span>
                  </div>
              </div>
              <div className='ms-5 mt-1 flex'>
                  <p className='text-xs text-black font-semibold'>{product.name}</p>
                  <p className='text-xs text-black'>$ {product.price}.00</p>
                  {/* <button onClick={handleFavouritesToggle} className={`p-2 ${isFavourite ? "bg-red-500" : "bg-blue-500"}`}>fav</button> */}
              </div>
      </div>
    </Link>
  )
}

export default ProductCard