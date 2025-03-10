import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavourites } from '../redux/FavouriteSlice';
import { FaTrash } from 'react-icons/fa6';

function Favourite() {

        const dispatch = useDispatch()
        const favourites = useSelector((state)=> state.favourites.favourites);
        const handleRemoveFromFavourites = (productId) => {
            dispatch(removeFromFavourites(productId))
        }
    
  return (
    <div className='bg-gray-100'>
        <div className='text-center mb-1'>
            <h2 className='text-2xl font-bold'>WISHLISTS</h2>
        </div>
        <div className='text-right mb-3'>
            <p className='text-gray-600 text-xs'>2 items</p>  
        </div>
        {favourites.length === 0 ? (
            <p>no favorites yet </p>
        ) : (
            <div className='grid grid-cols-4 gap-y-7 gap-x-1 borde px-10 pb-10 pt-1'>
            {favourites.map((product) => (
            <div key={product.id} className='borde w-76 p-1'>
               <div className='relative w-full'>
                <img src={product.image} alt={product.price} className='h-85 object-cove w-full'/>
                <button onClick={()=>handleRemoveFromFavourites(product.id)} className='absolute bottom-3 right-3 bg-white p-2 rounded-2xl hover:opacity-50 cursor-pointer'><FaTrash className='text-md'/></button>
               </div>
               <div className='mt-1'>
                <p className='text-xs'>{product.name}</p>
                <p className='text-sm font-semibold'>${(product.price).toFixed(2)}</p>
                <p className='mt-3 text-xs'>Colour: BLack</p>
               </div>
               <button className='mt-3 text-xs border p-5 bg-black hover:opacity-81 text-white font-semibold w-full cursor-pointer'>ADD TO SHOPPING BAG</button>
            </div>
            ))}
        </div>
        )}
    </div>
  )
}

export default Favourite