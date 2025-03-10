import React, { useEffect, useState } from 'react'
import { FaAngleDown, FaAngleUp, FaInfoCircle, FaRuler } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { addToCart } from '../redux/CartSlice';
// import { addToFavourites } from '../redux/FavouriteSlice';
// import { addToFavourites, removeFromFavourites } from '../redux/FavouriteSlice';

function ProductDetail() {

    const dispatch = useDispatch()
    const handleAddToCart = (e, product)=>{
        // e.stopPropagation()
        e.preventDefault()
        dispatch(addToCart(product))
        alert('added to shopping bag!')
    }

    //FOR DESCRIPTTION, MATERIAL, AND CARE TOGGLE
    const [descriptionToggle, setDescriptionToggle] = useState(false);
    const [materialToggle, setMaterialToggle] = useState(false);
    const [careToggle, setCareToggle] = useState(false);

    //FOR PRODUCT INTERESTED
    const interestedProducts = useSelector(state => state.product)
    

    //FOR GETTING MORE DETAILS WHEN PRODUCT IS CLICK
     const {id} = useParams()
      const products = useSelector(state => state.product.products)
  
      const[product, setProduct] = useState({})
  
      useEffect(()=>{
          const newProduct = products.find(product => product.id === parseInt(id))
          setProduct(newProduct)
      }, [products, id])


      // const favourites = useSelector((state) => state.favourites.favourites)
      // const isFavourite = favourites.some((item)=>item.id === product.id)

      // const favourites = favourites.some((item) => item.id === product.id) || []

      // const isFavourite = favourites.some((item) => item.id === product.id)

    // const {id} = useParams();
    // const product = useSelector((state) =>
    //     state.product.products.find((product) => product.id === parseInt(id))
    // );
    // if(!product){
    //     return<div className='mt-30 mx-5'>
    //     <p className='text-2xl '>PRODUCT NOT FOUND</p>
    //     <a href="/shop" className='text-black text-sm'>CONTINUE SHOPPING</a>
    //     </div>;
    // }

  return (
    <div className='mx-5 my-10'>
        <div className='flex w-full px-20'>
            <div className='w-1/2 bd-white px-'>
                <img src={product.image} alt='//' className='pb-2'/>
                <img src={product.image} alt='//' className='pb-2'/>
                <img src={product.image} alt='//' className='pb-2'/>
                <img src={product.image} alt='//' className='pb-2'/>
            </div>

            <div className='w-1/2 bg-white mt-8 px-10'>
                <p className='text-black text-md font-semibold mb-1'>{product.name}</p>
                <p className='text-black text-sm'>$ {product.price}.00</p>
                <p className='text-black text-xs mt-10'>SIZES:</p>
                <div className='flex gap-x-3 mt-2'>
                    <button className='bg-white border text-black w-19 h-9 text-sm'>XS</button>
                    <button className='bg-white border text-black w-19 h-9 text-sm'>S</button>
                    <button className='bg-white border text-black w-19 h-9 text-sm'>M</button>
                    <button className='bg-white border text-black w-19 h-9 text-sm'>L</button>
                    <button className='bg-white border text-black w-19 h-9 text-sm'>XL</button>
                    <button className='bg-white border text-black w-19 h-9 text-sm'>2XL</button>
                    <button className='bg-white border text-black w-19 h-9 text-sm'>3XL</button>
                    <button className='bg-white border text-black w-19 h-9 text-sm'>4XL</button>
                </div>
                <a href='/' className='flex mt-5 text-xs underline'><FaRuler className='text-lg me-1' />SIZE GUIDE</a>
                <button 
                onClick={(e)=>{handleAddToCart(e, product)}}
                className='bg-white hover:bg-black text-black hover:text-white text-sm border-1  mt-7 flex w-5/5 justify-center items-center h-13'
                >
                    ADD TO SHOPPING BAG
                </button>
                <button  className='bg-black hover:bg-white text-white hover:text-black text-sm border-1 border-black mt-7 flex w-5/5 justify-center items-center h-13'>BUY IT NOW</button>
                {/* <button 
                onClick={()=>dispatch(isFavourite ? removeFromFavourites(product.id) : addToFavourites(product))} 
                 className='bg-black hover:bg-white text-white hover:text-black text-sm border-1 border-black mt-7 flex w-5/5 justify-center items-center h-13'>add to favourites</button> */}
                 {/* <button onClick={dispatch(addToFavourites(product))} disabled={isFavourite}>{isFavourite ? 'added to fav' : "add to fav"}</button> */}
                <div className='flex mt-12 text-xs items-center text-black'><FaInfoCircle className='me-1'/>DELIVERY TIME: 2-7 DAYS (IT DEPENDS ON LOCATION MOST TIMES)</div>
                <p className='text-black text-xs mt-2'>CASH ON DELIVERY OPTION AVAILABLE</p>

                <div className='mt-10'>
                    <div className='border-y-1 p-1'>
                        <div className='flex justify-between p-2' onClick={()=>setDescriptionToggle(!descriptionToggle)}>
                            <p className='text-sm pt-1 font-semibold'>DESCRIPTION & FIT</p>
                            {descriptionToggle ? <FaAngleDown className='text-xl'/> : <FaAngleUp className='text-lg' />}
                        </div>
                        <div className={`space-y-5 mb-4 px-3 ${descriptionToggle ? "" : 'hidden'}`}>
                            <p className='text-gray-500 text-xs font-bold'>{product.descriptionHead}</p>
                            <p className='text-xs text-black'>{product.description}</p>
                        </div>
                    </div>
                    <div className='boder-y-1 p-1'>
                        <div className='flex justify-between p-2' onClick={()=>setMaterialToggle(!materialToggle)}>
                            <p className='text-sm pt-1 font-semibold'>MATERIAL</p>
                            {materialToggle ? <FaAngleDown className='text-xl'/> : <FaAngleUp className='text-lg' />}
                        </div>
                        <div className={`space-y-5 mb-4 px-3 ${materialToggle ? "" : 'hidden'}`}>
                            <p className='text-gray-500 text-xs font-bold'>{product.materialHead}</p>
                            <p className='text-xs text-black'>{product.material}</p>
                        </div>
                    </div>
                    <div className='border-y-1 p-1'>
                        <div className='flex justify-between p-2' onClick={()=>setCareToggle(!careToggle)}>
                            <p className='text-sm pt-1 font-semibold'>CARE GUIDE</p>
                            {careToggle ? <FaAngleDown className='text-xl'/> : <FaAngleUp className='text-lg' />}
                        </div>
                        <div className={`space-y-5 mb-4 px-3 ${careToggle ? "" : 'hidden'}`}>
                            <p className='text-gray-500 text-xs font-bold'>NEW ARRIVAL</p>
                            <p className='text-xs text-black'>{product.care}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-15 px-20'>
            <h6 className='text-black text-2xl font-semibold mb-5'>YOU MIGHT ALSO BE INTERESTED IN</h6>
            <div className='grid grid-cols-4 gap-2 pb-10 px-10'>
            {interestedProducts.products.slice(4, 8).map(((product)=>(
                <ProductCard product={product} key={product.id}/>
            )))}
            </div>
        </div>
    </div>
  )
}

export default ProductDetail