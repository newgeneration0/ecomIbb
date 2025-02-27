














import React from 'react'
import { FaCcMastercard, FaCcVisa, FaCircle, FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import bg from '../assets/image/bgPics.jpg'
import ProductCard from './ProductCard'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice'

function Cart() {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
     // FOR PRODUCT INTERESTED
        const products = useSelector(state => state.product)

  return (
    <div className='container bg-gray-100 py-5'>
        <div className='flex items-center justify-evenly'>
        <p className='text-xs text-black'>FREE SHIPPING ABOVE $299.00</p>
        <p className='text-xs text-black'>ESTIMATED DELIVERY TIME: 2-7 DAYS</p>
        </div>
        <h3 className='ms-40 font-bold mt-4 text-lg'>SHOPPING BAG</h3>
        {cart.products.length > 0 ?
        <div className='bg-gray-100 w-full flex justify- mt-1 px-40 space-x-4'>
            <div className='w-3/5 p-10 bg-white'>
            {cart.products.map((product)=>(
                <div key={product.id} className='flex borde items-center mb-6 p-1'>
                    <div className='me-4'>
                        <img src={product.image} alt='' className='w-44 h-34'/>
                    </div>
                    <div className='mt-5 w-full pe-'>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-black font-semibold '>{product.name}</p>
                            <button onClick={()=> dispatch(removeFromCart(product.id))}>
                                <FaTrash className='text-md text-black'/>
                            </button>
                        </div>
                        <p className='text-sm text-black font-semibold '>${product.price}.00</p>
                        <div className='flex mt-3 space-x-17'>
                            <div>
                                <p className='text-xs text-black'><span className='font-semibold'>COLOUR:</span> WHITE/RICK AND MORTY</p>
                                <p className='text-xs text-black'><span className='font-semibold'>SIZE:</span> M</p>
                            </div>
                            <div>
                                <p className='text-xs text-black'><span className='font-semibold'>COLOUR:</span> WHITE/RICK AND MORTY</p>
                                <p className='text-xs text-black'><span className='font-semibold'>SIZE:</span> M</p>
                            </div>
                        </div>

                        <div className='flex mt-5'>
                            <div className='border px-4 py-2 text-lg flex items-center justify-center me-3'>
                                <button><FaCircle className='text-black' /></button>
                            </div>
                            <div className='border px-4 py-2 text-lg flex items-center justify-center'>
                                <button className='font-bold' onClick={()=> dispatch(decreaseQuantity(product.id))}>
                                    -
                                </button>
                            </div>
                            <div className='border-y px-4 py-2 text-lg flex items-center justify-center'>
                                <p>{product.quantity}</p>
                            </div>
                            <div  className='border px-4 py-2 text-lg flex items-center justify-center'>
                                <button className='font-bold' onClick={()=> dispatch(increaseQuantity(product.id))}>
                                    +
                                </button>
                            </div>
                            <p>${(product.quantity * product.price).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>

            <div className='w-2/5 bg-white p-5 h-115'>
                <div className='flex justify-between'>
                    <span className='text-xs text-black'>DISCOUNTS</span>
                    <span className='text-xs text-black font-semibold'><a href='/' className='underline'>APPLY DISCOUNT</a></span>
                </div>
                <div className='flex justify-between mt-9 border-t-1 pt-2'>
                    <span className='text-sm text-black'>TOTAL ITEMS</span>
                    <span className='text-sm text-black'>{cart.totalQuantity}</span>
                </div>
                <div className='flex justify-between pt-2'>
                    <span className='text-sm text-black'>PURCHASE VALUE</span>
                    <span className='text-sm text-black'>$ {cart.totalPrice.toFixed(2)}</span>
                </div>
                <div className='flex justify-between pt-2'>
                    <span className='text-sm text-black'>DISCOUNT</span>
                    <span className='text-sm text-red-600'>-$ 0.00</span>
                    
                </div>
                <div className='flex justify-between py-2 border-b-1'>
                    <span className='text-sm text-black'>DELIVERY</span>
                    <span className='text-sm text-black'>FREE</span>
                </div>

                <div className='flex justify-between pt-2'>
                    <span className='text-sm text-black font-bold'>TOTAL</span>
                    <span className='text-sm text-black font-bold'>$ {cart.totalPrice.toFixed(2)}</span>
                </div>
                <div className='flex justify-center my-5'>
                    <button className='w-full bg-black text-white text-sm p-3'>PROCEED TO CHECKOUT</button>
                </div>
                <div className='mb-5'>
                    <p className='text-xs text-black font-semibold'>WE ACCEPT THE FOLLOWING:</p>
                    <div className='flex justify-around'>
                        <FaCcMastercard className='text-4xl' />
                        <FaCcVisa className='text-4xl'  />
                        <FaCcMastercard className='text-4xl' />
                        <FaCcMastercard className='text-4xl' />
                        <FaCcVisa className='text-4xl'  />
                    </div>
                </div>
                <div>
                    <p className='text-xs text-black'>PRICES AND DELIVERY COSTS ARE NOT CONFIRMED UNTIL YOU&apos;VE REACHED THE CHECKOUT</p>
                    <p className='text-xs text-black'>50 DAYS FREE RETURNS. READ MORE ABOUT <a href='/' className='underline'>RETURN AND REFUND POLICY</a></p>
                </div>
            </div>
        </div>

            
        : ( 
        <div className='flex justify-center'>
            <img src={bg} alt='' className='h-96'/>
        </div>
        )}

        <div className='mt-15 px-20'>
            <h6 className='text-black text-2xl font-semibold mb-5'>YOU MIGHT ALSO BE INTERESTED IN</h6>
            <div className='grid grid-cols-4 gap-2 pb-10 px-10'>
            {products.products.slice(0, 4).map(((product)=>(
                <ProductCard product={product} key={product.id}/>
            )))}
            </div>
        </div>
    </div>
  )
}

export default Cart