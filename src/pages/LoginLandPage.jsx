import React from 'react'
import bg from '../assets/image/bgPics.jpg'
import { Link } from 'react-router-dom'

function LoginLandPage() {
  return (
    <div className='flex w-full p-20 bg-gray-100'>
       <div className='w-2/5 borde p-1'>
        <h3 className='text-lg text-black mb-3'>ENJOY THE BEST EXPERIENCE</h3>
        <p className='text-xs text-black'>LOG IN TO ENJOY A PERSONALISED EXPERIENCE AND ACCESS ALL OUR SERVICES.</p>
        <div className='mt-9 space-y-3'>
            <Link to='/login' className='flex bg-black hover:opacity-81 text-gray-100 hover:text-gray-50 w-54 py-3 text-xs items-center justify-center'>SIGN IN</Link>
            <Link to='/register' className='flex border text-gray-800 hover:text-gray-500 w-54 py-3 text-xs items-center justify-center'>BECOME A MEMBER</Link>
        </div>
       
        
       </div>

       <div className='w-3/5 p-1'>
        <img src={bg} alt='//' className='w-full' />
       </div>
    </div>
  )
}

export default LoginLandPage