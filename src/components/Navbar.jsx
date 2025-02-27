import React, { useState } from 'react'
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


function Navbar() {

  //FOR DROPDOWN
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const products = useSelector(state => state.cart.products)

  return (
    <nav className='relative bg-gray-100 py-5'>
      <div className='flex items-center justify-between px-4'>
        <div className='space-x-5'>
          <Link to='/' className='text-xs text-black font-bold !no-underline'>SUSTAINABLITY</Link>
          <Link to='/' className='text-xs text-black font-bold !no-underline'>CUSTOMER SERVICE</Link>
          <Link to='/' className='text-xs text-black font-bold !no-underline'>NEWSLETTER</Link>
        </div>

        <div>
          <a href='/' className='text-4xl text-orange-600 font-bold'>IBB</a>
        </div>

        <div className='flex space-x-6'>
          <Link to='/loginlandpage' className='text-xs text-black font-bold flex !no-underline'><FaUser className='text-xl pe-1' /> SIGN IN</Link>
          <Link to='/favourite' className='text-xs text-black font-bold flex !no-underline'><FaUser className='text-xl pe-1' /> FAVOURITES</Link>
          <Link to='/cart' className='text-xs text-black font-bold flex !no-underline'>
            <FaShoppingBag className='text-xl pe-1'/> 
            SHOPPING BAG ({products.length > 0 && (
              <span>
              {products.length}
              </span>
            )})
          </Link>
        </div>
      </div>

      <div className='flex items-center justify-center mt-7 p- border- space-x-9'>
        <div className='flex space-x-9 mx- border- pe-'>
          <div
          className='relative flex items-center justify-center'
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <Link to="/men" className='text-xs text-black font-bold !no-underline ms- p-3'>MEN</Link>
          {isDropdownVisible && (<div className='fixed mt-1 h-auto z-10 bg-gray-100 w-screen left-0 py-3 top-32 flex justify-center space-x-25 border-b-5' onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}>
            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>OFFERS</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>BASICS: STARTING FROM $19</a>
                  <a href='/' className='!no-underline text-black block'>SHIRTS: STARTING FROM $50</a>
                  <a href='/' className='!no-underline text-black block'>SALE: UP TO 70%</a>
                </div>
              </div>

              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>NEW IN</p>
                <div className='space-y-2'>
                  <a href='/menview' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>ACCESSORIES</a>
                  <a href='/' className='!no-underline text-black block'>CLOTHES</a>
                </div>
              </div>

              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>TRENDING NOW</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>OUTDOOR APPAREL</a>
                  <a href='/' className='!no-underline text-black block'>TRANSITIONAL FIT</a>
                  <a href='/' className='!no-underline text-black block'>CORE COMFORT</a>
                  <a href='/' className='!no-underline text-black block'>TRENDING NOW</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>CLOTHING</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>SHIRTS</a>
                  <a href='/' className='!no-underline text-black block'>T-SHIRTS & TOPS</a>
                  <a href='/' className='!no-underline text-black block'>TROUSER</a>
                  <a href='/' className='!no-underline text-black block'>JEANS</a>
                  <a href='/' className='!no-underline text-black block'>JACKETS & COATS</a>
                  <a href='/' className='!no-underline text-black block'>HOODIES & SWEATSHIRTS</a>
                  <a href='/' className='!no-underline text-black block'>SWEATERS & CARDIGAN</a>
                  <a href='/' className='!no-underline text-black block'>POLOS</a>
                  <a href='/' className='!no-underline text-black block'>BASICS</a>
                  <a href='/' className='!no-underline text-black block'>BLAZERS & SUITS</a>
                  <a href='/' className='!no-underline text-black block'>SHORTS</a>
                  <a href='/' className='!no-underline text-black block'>UNDERWEAR</a>
                  <a href='/' className='!no-underline text-black block'>PREMIUM SELECTION</a>
                  <a href='/' className='!no-underline text-black block'>SLEEPWEAR & LOUNGEWEAR</a>
                  <a href='/' className='!no-underline text-black block'>SWIMWEAR</a>
                  <a href='/' className='!no-underline text-black block'>SOCKS</a>
                  <a href='/' className='!no-underline text-black block'>SPORT</a>
                  <a href='/' className='!no-underline text-black block'></a>
                  <a href='/' className='!no-underline text-black block'>CARE PRODUCTS</a>
                  <a href='/' className='!no-underline text-black block'>SALE</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>ACCESSORIES</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>BAGS</a>
                  <a href='/' className='!no-underline text-black block'>BELTS & SUSPENDER</a>
                  <a href='/' className='!no-underline text-black block'>GLOVES</a>
                  <a href='/' className='!no-underline text-black block'>HATS & CAPS</a>
                  <a href='/' className='!no-underline text-black block'>JEWELLERY</a>
                  <a href='/' className='!no-underline text-black block'>SCARVES</a>
                  <a href='/' className='!no-underline text-black block'>SUNGLASSES</a>
                  <a href='/' className='!no-underline text-black block'>TIES & BOWTIES</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>SPORT</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>NEW IN</a>
                  <a href='/' className='!no-underline text-black block'>TOP</a>
                  <a href='/' className='!no-underline text-black block'>SWEATSHIRTS & HOODIES</a>
                  <a href='/' className='!no-underline text-black block'>TROUSERS & JOGGERS</a>
                  <a href='/' className='!no-underline text-black block'>SHORTS</a>
                  <a href='/' className='!no-underline text-black block'>OUTERWEAR</a>
                  <a href='/' className='!no-underline text-black block'>ACCESSORIES & EQUIPMENT</a>
                  <a href='/' className='!no-underline text-black block'>SPORT SOCKS</a>
                  <a href='/' className='!no-underline text-black block'>TRAINING & GYM</a>
                  <a href='/' className='!no-underline text-black block'>RUNNING</a>
                </div>
              </div>
            </div>
          </div>)}
          </div>

          <div
          className='relative flex items-center justify-center'
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <Link to="/" className='text-xs text-black font-bold !no-underline ms- p-3'>LADIES</Link>
          {isDropdownVisible && (<div className='fixed mt-1 h-auto bg-gray-100 w-screen left-0 py-3 top-30 flex items-cente justify-center space-x-25' onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}>
            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>OFFERS</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>BASICS: STARTING FROM $19</a>
                  <a href='/' className='!no-underline text-black block'>SHIRTS: STARTING FROM $50</a>
                  <a href='/' className='!no-underline text-black block'>SALE: UP TO 70%</a>
                </div>
              </div>

              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>NEW IN</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>ACCESSORIES</a>
                  <a href='/' className='!no-underline text-black block'>CLOTHES</a>
                </div>
              </div>

              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>TRENDING NOW</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>OUTDOOR APPAREL</a>
                  <a href='/' className='!no-underline text-black block'>TRANSITIONAL FIT</a>
                  <a href='/' className='!no-underline text-black block'>CORE COMFORT</a>
                  <a href='/' className='!no-underline text-black block'>TRENDING NOW</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>CLOTHING</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>SHIRTS</a>
                  <a href='/' className='!no-underline text-black block'>T-SHIRTS & TOPS</a>
                  <a href='/' className='!no-underline text-black block'>TROUSER</a>
                  <a href='/' className='!no-underline text-black block'>JEANS</a>
                  <a href='/' className='!no-underline text-black block'>JACKETS & COATS</a>
                  <a href='/' className='!no-underline text-black block'>HOODIES & SWEATSHIRTS</a>
                  <a href='/' className='!no-underline text-black block'>SWEATERS & CARDIGAN</a>
                  <a href='/' className='!no-underline text-black block'>POLOS</a>
                  <a href='/' className='!no-underline text-black block'>BASICS</a>
                  <a href='/' className='!no-underline text-black block'>BLAZERS & SUITS</a>
                  <a href='/' className='!no-underline text-black block'>SHORTS</a>
                  <a href='/' className='!no-underline text-black block'>UNDERWEAR</a>
                  <a href='/' className='!no-underline text-black block'>PREMIUM SELECTION</a>
                  <a href='/' className='!no-underline text-black block'>SLEEPWEAR & LOUNGEWEAR</a>
                  <a href='/' className='!no-underline text-black block'>SWIMWEAR</a>
                  <a href='/' className='!no-underline text-black block'>SOCKS</a>
                  <a href='/' className='!no-underline text-black block'>SPORT</a>
                  <a href='/' className='!no-underline text-black block'></a>
                  <a href='/' className='!no-underline text-black block'>CARE PRODUCTS</a>
                  <a href='/' className='!no-underline text-black block'>SALE</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>ACCESSORIES</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>BAGS</a>
                  <a href='/' className='!no-underline text-black block'>BELTS & SUSPENDER</a>
                  <a href='/' className='!no-underline text-black block'>GLOVES</a>
                  <a href='/' className='!no-underline text-black block'>HATS & CAPS</a>
                  <a href='/' className='!no-underline text-black block'>JEWELLERY</a>
                  <a href='/' className='!no-underline text-black block'>SCARVES</a>
                  <a href='/' className='!no-underline text-black block'>SUNGLASSES</a>
                  <a href='/' className='!no-underline text-black block'>TIES & BOWTIES</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>SPORT</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>NEW IN</a>
                  <a href='/' className='!no-underline text-black block'>TOP</a>
                  <a href='/' className='!no-underline text-black block'>SWEATSHIRTS & HOODIES</a>
                  <a href='/' className='!no-underline text-black block'>TROUSERS & JOGGERS</a>
                  <a href='/' className='!no-underline text-black block'>SHORTS</a>
                  <a href='/' className='!no-underline text-black block'>OUTERWEAR</a>
                  <a href='/' className='!no-underline text-black block'>ACCESSORIES & EQUIPMENT</a>
                  <a href='/' className='!no-underline text-black block'>SPORT SOCKS</a>
                  <a href='/' className='!no-underline text-black block'>TRAINING & GYM</a>
                  <a href='/' className='!no-underline text-black block'>RUNNING</a>
                </div>
              </div>
            </div>
          </div>)}
          </div>

          <div
          className='relative flex items-center justify-center'
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <Link to="/" className='text-xs text-black font-bold !no-underline ms- p-3'>BABY</Link>
          {isDropdownVisible && (<div className='fixed mt-1 h-auto bg-gray-100 w-screen left-0 py-3 top-30 flex items-cente justify-center space-x-25' onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}>
            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>OFFERS</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>BASICS: STARTING FROM $19</a>
                  <a href='/' className='!no-underline text-black block'>SHIRTS: STARTING FROM $50</a>
                  <a href='/' className='!no-underline text-black block'>SALE: UP TO 70%</a>
                </div>
              </div>

              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>NEW IN</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>ACCESSORIES</a>
                  <a href='/' className='!no-underline text-black block'>CLOTHES</a>
                </div>
              </div>

              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>TRENDING NOW</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>OUTDOOR APPAREL</a>
                  <a href='/' className='!no-underline text-black block'>TRANSITIONAL FIT</a>
                  <a href='/' className='!no-underline text-black block'>CORE COMFORT</a>
                  <a href='/' className='!no-underline text-black block'>TRENDING NOW</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>CLOTHING</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>SHIRTS</a>
                  <a href='/' className='!no-underline text-black block'>T-SHIRTS & TOPS</a>
                  <a href='/' className='!no-underline text-black block'>TROUSER</a>
                  <a href='/' className='!no-underline text-black block'>JEANS</a>
                  <a href='/' className='!no-underline text-black block'>JACKETS & COATS</a>
                  <a href='/' className='!no-underline text-black block'>HOODIES & SWEATSHIRTS</a>
                  <a href='/' className='!no-underline text-black block'>SWEATERS & CARDIGAN</a>
                  <a href='/' className='!no-underline text-black block'>POLOS</a>
                  <a href='/' className='!no-underline text-black block'>BASICS</a>
                  <a href='/' className='!no-underline text-black block'>BLAZERS & SUITS</a>
                  <a href='/' className='!no-underline text-black block'>SHORTS</a>
                  <a href='/' className='!no-underline text-black block'>UNDERWEAR</a>
                  <a href='/' className='!no-underline text-black block'>PREMIUM SELECTION</a>
                  <a href='/' className='!no-underline text-black block'>SLEEPWEAR & LOUNGEWEAR</a>
                  <a href='/' className='!no-underline text-black block'>SWIMWEAR</a>
                  <a href='/' className='!no-underline text-black block'>SOCKS</a>
                  <a href='/' className='!no-underline text-black block'>SPORT</a>
                  <a href='/' className='!no-underline text-black block'></a>
                  <a href='/' className='!no-underline text-black block'>CARE PRODUCTS</a>
                  <a href='/' className='!no-underline text-black block'>SALE</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>ACCESSORIES</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>BAGS</a>
                  <a href='/' className='!no-underline text-black block'>BELTS & SUSPENDER</a>
                  <a href='/' className='!no-underline text-black block'>GLOVES</a>
                  <a href='/' className='!no-underline text-black block'>HATS & CAPS</a>
                  <a href='/' className='!no-underline text-black block'>JEWELLERY</a>
                  <a href='/' className='!no-underline text-black block'>SCARVES</a>
                  <a href='/' className='!no-underline text-black block'>SUNGLASSES</a>
                  <a href='/' className='!no-underline text-black block'>TIES & BOWTIES</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>SPORT</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>NEW IN</a>
                  <a href='/' className='!no-underline text-black block'>TOP</a>
                  <a href='/' className='!no-underline text-black block'>SWEATSHIRTS & HOODIES</a>
                  <a href='/' className='!no-underline text-black block'>TROUSERS & JOGGERS</a>
                  <a href='/' className='!no-underline text-black block'>SHORTS</a>
                  <a href='/' className='!no-underline text-black block'>OUTERWEAR</a>
                  <a href='/' className='!no-underline text-black block'>ACCESSORIES & EQUIPMENT</a>
                  <a href='/' className='!no-underline text-black block'>SPORT SOCKS</a>
                  <a href='/' className='!no-underline text-black block'>TRAINING & GYM</a>
                  <a href='/' className='!no-underline text-black block'>RUNNING</a>
                </div>
              </div>
            </div>
          </div>)}
          </div>

          <div
          className='relative flex items-center justify-center'
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <Link to="/" className='text-xs text-black font-bold !no-underline ms- p-3'>KIDS</Link>
          {isDropdownVisible && (<div className='fixed mt-1 h-auto bg-gray-100 w-screen left-0 py-3 top-30 flex items-cente justify-center space-x-25' onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}>
            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>OFFERS</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>BASICS: STARTING FROM $19</a>
                  <a href='/' className='!no-underline text-black block'>SHIRTS: STARTING FROM $50</a>
                  <a href='/' className='!no-underline text-black block'>SALE: UP TO 70%</a>
                </div>
              </div>

              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>NEW IN</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>ACCESSORIES</a>
                  <a href='/' className='!no-underline text-black block'>CLOTHES</a>
                </div>
              </div>

              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>TRENDING NOW</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>OUTDOOR APPAREL</a>
                  <a href='/' className='!no-underline text-black block'>TRANSITIONAL FIT</a>
                  <a href='/' className='!no-underline text-black block'>CORE COMFORT</a>
                  <a href='/' className='!no-underline text-black block'>TRENDING NOW</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>CLOTHING</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>SHIRTS</a>
                  <a href='/' className='!no-underline text-black block'>T-SHIRTS & TOPS</a>
                  <a href='/' className='!no-underline text-black block'>TROUSER</a>
                  <a href='/' className='!no-underline text-black block'>JEANS</a>
                  <a href='/' className='!no-underline text-black block'>JACKETS & COATS</a>
                  <a href='/' className='!no-underline text-black block'>HOODIES & SWEATSHIRTS</a>
                  <a href='/' className='!no-underline text-black block'>SWEATERS & CARDIGAN</a>
                  <a href='/' className='!no-underline text-black block'>POLOS</a>
                  <a href='/' className='!no-underline text-black block'>BASICS</a>
                  <a href='/' className='!no-underline text-black block'>BLAZERS & SUITS</a>
                  <a href='/' className='!no-underline text-black block'>SHORTS</a>
                  <a href='/' className='!no-underline text-black block'>UNDERWEAR</a>
                  <a href='/' className='!no-underline text-black block'>PREMIUM SELECTION</a>
                  <a href='/' className='!no-underline text-black block'>SLEEPWEAR & LOUNGEWEAR</a>
                  <a href='/' className='!no-underline text-black block'>SWIMWEAR</a>
                  <a href='/' className='!no-underline text-black block'>SOCKS</a>
                  <a href='/' className='!no-underline text-black block'>SPORT</a>
                  <a href='/' className='!no-underline text-black block'></a>
                  <a href='/' className='!no-underline text-black block'>CARE PRODUCTS</a>
                  <a href='/' className='!no-underline text-black block'>SALE</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>ACCESSORIES</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>BAGS</a>
                  <a href='/' className='!no-underline text-black block'>BELTS & SUSPENDER</a>
                  <a href='/' className='!no-underline text-black block'>GLOVES</a>
                  <a href='/' className='!no-underline text-black block'>HATS & CAPS</a>
                  <a href='/' className='!no-underline text-black block'>JEWELLERY</a>
                  <a href='/' className='!no-underline text-black block'>SCARVES</a>
                  <a href='/' className='!no-underline text-black block'>SUNGLASSES</a>
                  <a href='/' className='!no-underline text-black block'>TIES & BOWTIES</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>SPORT</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>NEW IN</a>
                  <a href='/' className='!no-underline text-black block'>TOP</a>
                  <a href='/' className='!no-underline text-black block'>SWEATSHIRTS & HOODIES</a>
                  <a href='/' className='!no-underline text-black block'>TROUSERS & JOGGERS</a>
                  <a href='/' className='!no-underline text-black block'>SHORTS</a>
                  <a href='/' className='!no-underline text-black block'>OUTERWEAR</a>
                  <a href='/' className='!no-underline text-black block'>ACCESSORIES & EQUIPMENT</a>
                  <a href='/' className='!no-underline text-black block'>SPORT SOCKS</a>
                  <a href='/' className='!no-underline text-black block'>TRAINING & GYM</a>
                  <a href='/' className='!no-underline text-black block'>RUNNING</a>
                </div>
              </div>
            </div>
          </div>)}
          </div>

          <div
          className='relative flex items-center justify-center'
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <Link to="/" className='text-xs text-black font-bold !no-underline ms- p-3'>HOME</Link>
          {isDropdownVisible && (<div className='fixed mt-1 h-auto bg-gray-100 w-screen left-0 py-3 top-30 flex items-cente justify-center space-x-25' onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}>
            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>OFFERS</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>BASICS: STARTING FROM $19</a>
                  <a href='/' className='!no-underline text-black block'>SHIRTS: STARTING FROM $50</a>
                  <a href='/' className='!no-underline text-black block'>SALE: UP TO 70%</a>
                </div>
              </div>

              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>NEW IN</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>ACCESSORIES</a>
                  <a href='/' className='!no-underline text-black block'>CLOTHES</a>
                </div>
              </div>

              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>TRENDING NOW</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>OUTDOOR APPAREL</a>
                  <a href='/' className='!no-underline text-black block'>TRANSITIONAL FIT</a>
                  <a href='/' className='!no-underline text-black block'>CORE COMFORT</a>
                  <a href='/' className='!no-underline text-black block'>TRENDING NOW</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>CLOTHING</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>SHIRTS</a>
                  <a href='/' className='!no-underline text-black block'>T-SHIRTS & TOPS</a>
                  <a href='/' className='!no-underline text-black block'>TROUSER</a>
                  <a href='/' className='!no-underline text-black block'>JEANS</a>
                  <a href='/' className='!no-underline text-black block'>JACKETS & COATS</a>
                  <a href='/' className='!no-underline text-black block'>HOODIES & SWEATSHIRTS</a>
                  <a href='/' className='!no-underline text-black block'>SWEATERS & CARDIGAN</a>
                  <a href='/' className='!no-underline text-black block'>POLOS</a>
                  <a href='/' className='!no-underline text-black block'>BASICS</a>
                  <a href='/' className='!no-underline text-black block'>BLAZERS & SUITS</a>
                  <a href='/' className='!no-underline text-black block'>SHORTS</a>
                  <a href='/' className='!no-underline text-black block'>UNDERWEAR</a>
                  <a href='/' className='!no-underline text-black block'>PREMIUM SELECTION</a>
                  <a href='/' className='!no-underline text-black block'>SLEEPWEAR & LOUNGEWEAR</a>
                  <a href='/' className='!no-underline text-black block'>SWIMWEAR</a>
                  <a href='/' className='!no-underline text-black block'>SOCKS</a>
                  <a href='/' className='!no-underline text-black block'>SPORT</a>
                  <a href='/' className='!no-underline text-black block'></a>
                  <a href='/' className='!no-underline text-black block'>CARE PRODUCTS</a>
                  <a href='/' className='!no-underline text-black block'>SALE</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>ACCESSORIES</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>BAGS</a>
                  <a href='/' className='!no-underline text-black block'>BELTS & SUSPENDER</a>
                  <a href='/' className='!no-underline text-black block'>GLOVES</a>
                  <a href='/' className='!no-underline text-black block'>HATS & CAPS</a>
                  <a href='/' className='!no-underline text-black block'>JEWELLERY</a>
                  <a href='/' className='!no-underline text-black block'>SCARVES</a>
                  <a href='/' className='!no-underline text-black block'>SUNGLASSES</a>
                  <a href='/' className='!no-underline text-black block'>TIES & BOWTIES</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>SPORT</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>NEW IN</a>
                  <a href='/' className='!no-underline text-black block'>TOP</a>
                  <a href='/' className='!no-underline text-black block'>SWEATSHIRTS & HOODIES</a>
                  <a href='/' className='!no-underline text-black block'>TROUSERS & JOGGERS</a>
                  <a href='/' className='!no-underline text-black block'>SHORTS</a>
                  <a href='/' className='!no-underline text-black block'>OUTERWEAR</a>
                  <a href='/' className='!no-underline text-black block'>ACCESSORIES & EQUIPMENT</a>
                  <a href='/' className='!no-underline text-black block'>SPORT SOCKS</a>
                  <a href='/' className='!no-underline text-black block'>TRAINING & GYM</a>
                  <a href='/' className='!no-underline text-black block'>RUNNING</a>
                </div>
              </div>
            </div>
          </div>)}
          </div>

          <div
          className='relative flex items-center justify-center'
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <Link to="/" className='text-xs text-black font-bold !no-underline ms- p-3'>SALE</Link>
          {isDropdownVisible && (<div className='fixed mt-1 h-auto bg-gray-100 w-screen left-0 py-3 top-30 flex items-cente justify-center space-x-25' onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}>
            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>OFFERS</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>BASICS: STARTING FROM $19</a>
                  <a href='/' className='!no-underline text-black block'>SHIRTS: STARTING FROM $50</a>
                  <a href='/' className='!no-underline text-black block'>SALE: UP TO 70%</a>
                </div>
              </div>

              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>NEW IN</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>ACCESSORIES</a>
                  <a href='/' className='!no-underline text-black block'>CLOTHES</a>
                </div>
              </div>

              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>TRENDING NOW</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>OUTDOOR APPAREL</a>
                  <a href='/' className='!no-underline text-black block'>TRANSITIONAL FIT</a>
                  <a href='/' className='!no-underline text-black block'>CORE COMFORT</a>
                  <a href='/' className='!no-underline text-black block'>TRENDING NOW</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>CLOTHING</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>SHIRTS</a>
                  <a href='/' className='!no-underline text-black block'>T-SHIRTS & TOPS</a>
                  <a href='/' className='!no-underline text-black block'>TROUSER</a>
                  <a href='/' className='!no-underline text-black block'>JEANS</a>
                  <a href='/' className='!no-underline text-black block'>JACKETS & COATS</a>
                  <a href='/' className='!no-underline text-black block'>HOODIES & SWEATSHIRTS</a>
                  <a href='/' className='!no-underline text-black block'>SWEATERS & CARDIGAN</a>
                  <a href='/' className='!no-underline text-black block'>POLOS</a>
                  <a href='/' className='!no-underline text-black block'>BASICS</a>
                  <a href='/' className='!no-underline text-black block'>BLAZERS & SUITS</a>
                  <a href='/' className='!no-underline text-black block'>SHORTS</a>
                  <a href='/' className='!no-underline text-black block'>UNDERWEAR</a>
                  <a href='/' className='!no-underline text-black block'>PREMIUM SELECTION</a>
                  <a href='/' className='!no-underline text-black block'>SLEEPWEAR & LOUNGEWEAR</a>
                  <a href='/' className='!no-underline text-black block'>SWIMWEAR</a>
                  <a href='/' className='!no-underline text-black block'>SOCKS</a>
                  <a href='/' className='!no-underline text-black block'>SPORT</a>
                  <a href='/' className='!no-underline text-black block'></a>
                  <a href='/' className='!no-underline text-black block'>CARE PRODUCTS</a>
                  <a href='/' className='!no-underline text-black block'>SALE</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>ACCESSORIES</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>BAGS</a>
                  <a href='/' className='!no-underline text-black block'>BELTS & SUSPENDER</a>
                  <a href='/' className='!no-underline text-black block'>GLOVES</a>
                  <a href='/' className='!no-underline text-black block'>HATS & CAPS</a>
                  <a href='/' className='!no-underline text-black block'>JEWELLERY</a>
                  <a href='/' className='!no-underline text-black block'>SCARVES</a>
                  <a href='/' className='!no-underline text-black block'>SUNGLASSES</a>
                  <a href='/' className='!no-underline text-black block'>TIES & BOWTIES</a>
                </div>
              </div>
            </div>

            <div className='space-y-7'>
              <div className='text-black mx- text-xs'>
                <p className='font-bold mb-2'>SPORT</p>
                <div className='space-y-2'>
                  <a href='/' className='!no-underline text-black block'>VIEW ALL</a>
                  <a href='/' className='!no-underline text-black block'>NEW IN</a>
                  <a href='/' className='!no-underline text-black block'>TOP</a>
                  <a href='/' className='!no-underline text-black block'>SWEATSHIRTS & HOODIES</a>
                  <a href='/' className='!no-underline text-black block'>TROUSERS & JOGGERS</a>
                  <a href='/' className='!no-underline text-black block'>SHORTS</a>
                  <a href='/' className='!no-underline text-black block'>OUTERWEAR</a>
                  <a href='/' className='!no-underline text-black block'>ACCESSORIES & EQUIPMENT</a>
                  <a href='/' className='!no-underline text-black block'>SPORT SOCKS</a>
                  <a href='/' className='!no-underline text-black block'>TRAINING & GYM</a>
                  <a href='/' className='!no-underline text-black block'>RUNNING</a>
                </div>
              </div>
            </div>
          </div>)}
          </div>
        </div>

        <div className='flex mx-aut ps-15'>
          <form>
            <input type='text' placeholder="SEARCH" className=' text-xs text-black border-b-1 border-black py-1 px-2'/>
            <button className=''><FaSearch className='absolute top- bottom-8 right-95  text-md text-black'/></button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar