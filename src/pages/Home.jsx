import React from 'react'
import bg from '../assets/image/bgPics.jpg'

function Home() {
  return (
    <div className=' grid place-items-center px-10 pb-15 pt-8 bg-gray-100'>
        <div className='flex justify-center space-x-10 mb-6'>
        <p className='text-xs text-black'>FREE SHIPPING FOR ORDER ABOVER $199</p>
        <p  className='text-xs text-black'>FREE AND FLEXIBLE 15 DAYS RETURN</p>
        <p  className='text-xs text-black'>ESTIMATED DELIVERY TIME: 2-7 DAYS</p>
      </div>
        <div className='bg-orange-600 w-3/5 h-138 py-10 flex items-center justify-center text-white'>
            <div>
                <p className='text-lg font-semibold text-center mb-5'>WEEKEND EXCLUSIVE</p>
                <p className='text-center text-7xl font-bold mb-5'>FLAT 15% OFF</p>
                <p className='text-center text-lg font-semibold mb-10'>WINTERWEAR & BOTTOMS AT THE BEST PRICE</p>

                <div className='flex space-x-1 items-center justify-center mb-4'>
                    <div className='bg-gray-100 hover:bg-gray-300 text-black text-xs font-bold flex items-center justify-center px-3 py-1'><a href='/men'>Men</a></div>
                    <div className='bg-gray-100 hover:bg-gray-300 text-black text-xs font-bold flex items-center justify-center px-3 py-1'><a href='/'>Ladies</a></div>
                    <div className='bg-gray-100 hover:bg-gray-300 text-black text-xs font-bold flex items-center justify-center px-3 py-1'><a href='/'>Kids & Baby</a></div>
                </div>

                <p className='text-xs text-white text-center'>VALID ONLY ON ibb.com. LIMITED-TIME OFFER.*T&Cs APPLY</p>
            </div>
        </div>

        <div 
            className='w-3/5 h-156 mt-4 px-10 py-40' 
            style={{ 
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
        >
            <a href='/'><div className=' grid place-items-cente bg-gray-900 w-48 px-5 py-3 mb-5 mx-auto'>
                <p className='text-orange-500 text-xs'>$399.00 <span className='line-through ms-2 text-white'>$599.00</span></p>
                <p className='text-white text-xs'>DOUBLE-BRESTED BLAZER</p>
            </div></a>

            <div className=''>
                <p className='text-xs text-white'>NEW ARRIVALS</p>
                <p className='text-3xl font-semibold text-white mb-4'>IN FOCUS: NEUTRAL<br/> TONES</p>
                <a href='/' className='bg-gray-100 hover:bg-gray-200 text-black font-semibold text-xs py-1 px-4'>SHOP NOW</a>
            </div>
        </div>

        <div className='bg-orange-600 w-3/5 h-auto mt-3 py-5'>
            <p className='text-center text-3xl font-bold text-white'>THE SOUND OF STYLE JUST DROPPED</p>
            <p className='text-center text-white text-sm mb-3'>WIN A FREE COUPON, GIVEWAY, UNLOCK VIP AND ACESS SO MUCH MORE</p>

            <div className='space-x-1 flex justify-center items-center'>
            <a href='/' className='bg-gray-100 hover:bg-gray-200 font-semibold text-black text-xs py-1 px-5'>BECOME A MEMBER</a>
            <a href='/' className='bg-gray-100 hover:bg-gray-200 font-semibold text-black text-xs py-1 px-5'>SHOP NOW</a>
            <a href='/' className='bg-gray-100 hover:bg-gray-200 font-semibold text-black text-xs py-1 px-5'>LEARN MORE</a>
            </div>
        </div>

        <div 
            className='w-3/5 h-156 mt-4 px- pt-9' 
            style={{ 
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
        >
            <div className='space-y- mb-4 flex justify-center'>
                <p className='text-white text-2xl font-bold'>THE NEW COLLECTION</p>
            </div>
            <div className='flex items-center justify-center'>
                <a href='/' className='text-black text-xs font-semibold py-2 px-4 bg-gray-100 hover:bg-gray-200'>EXPLORE NOW</a>
            </div>
        </div>
    </div>
  )
}

export default Home