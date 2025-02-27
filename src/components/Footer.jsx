import React from 'react'
import { FaFacebook, FaInstagram, FaSpotify, FaTiktok, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className='bg-gray-300 p-20'>
        <div className='flex items-cente justify-evenly'>
            <div>
                <p className='text-sm font-bold mb-3'>SHOP</p>
                <ul>
                    <li><Link to='/' className='text-xs font-semibold'>MEN</Link></li>
                    <li><Link to='/' className='text-xs font-semibold'>LADIES</Link></li>
                    <li><Link to='/' className='text-xs font-semibold'>BABY</Link></li>
                    <li><Link to='/' className='text-xs font-semibold'>KIDS</Link></li>
                    <li><Link to='/' className='text-xs font-semibold'>SHOP</Link></li>
                </ul>
            </div>

            <div>
                <p className='text-sm font-bold mb-3'>SHOP</p>
                <ul>
                    <li><Link to='/' className='text-xs font-semibold'>MEN</Link></li>
                    <li><Link to='/' className='text-xs font-semibold'>LADIES</Link></li>
                    <li><Link to='/' className='text-xs font-semibold'>BABY</Link></li>
                    <li><Link to='/' className='text-xs font-semibold'>KIDS</Link></li>
                    <li><Link to='/' className='text-xs font-semibold'>SHOP</Link></li>
                </ul>
            </div>

            <div>
                <p className='text-sm font-bold mb-3'>SHOP</p>
                <ul>
                    <li><Link to='/' className='text-xs font-semibold'>MEN</Link></li>
                    <li><Link to='/' className='text-xs font-semibold'>LADIES</Link></li>
                    <li><Link to='/' className='text-xs font-semibold'>BABY</Link></li>
                    <li><Link to='/' className='text-xs font-semibold'>KIDS</Link></li>
                    <li><Link to='/' className='text-xs font-semibold'>SHOP</Link></li>
                </ul>
            </div>

            <div>
                <p className='mb-4 text-sm font-bold'>CONTACT</p>
                <p className='text-sm font-bold mb-1'>STORE ADDRESS</p>
                <p className='text-xs font-semibold mb-4'>SHOP 1 & 2, EMIRATE MALL ILRIN, EYE-KORIN,<br/> ILORIN, KWARA, NIGERIA</p>
                <p className='text-sm font-bold mb-1'>OPERATING HOURS</p>
                <p className='text-xs font-semibold'>MONDAY - SATURDAY: 10AM - 10PM</p>
                <p className='text-xs font-semibold'>SUNDAY: 12PM - 10PM</p>
                <p className='text-xs font-semibold mt-4'>+2349071588333</p>
            </div>
        </div>

        <div className='flex items-center justify-center space-x-15 mt-9'>
            <a href='/' className='text-2xl'><FaInstagram  /></a>
            <a href='/' className='text-2xl'><FaTwitter /></a>
            <a href='/' className='text-2xl'><FaSpotify /></a>
            <a href='/' className='text-2xl'><FaFacebook /></a>
            <a href='/' className='text-2xl'><FaTiktok /></a>
        </div>

        <div className='flex items-center justify-center mt-9'>
          <p className='text-4xl text-orange-600 font-bold'>IBB</p>
        </div>

        <div className='mt-9 px-50'>
            <p className='text-black text-xs'>&copy; 2025 IB BUY BY GREATIBB. ALL RIGHT RESERVED</p>
        </div>
    </footer>
  )
}

export default Footer