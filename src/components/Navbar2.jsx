import React, { useEffect, useState } from 'react'
import { CiUser } from 'react-icons/ci';
import { FaSearch } from 'react-icons/fa';
import { GoHeart } from 'react-icons/go';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import bg from "../assets/image/bgPics.jpg"

function Navbar2() {

      const [scrolled, setScrolled] = useState(false);

      useEffect(()=>{
        const handelScroll = ()=> {
            if (window.scrollY > 0){
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        };

        window.addEventListener('scroll', handelScroll);
        return ()=>{
            window.removeEventListener('scroll', handelScroll)
        };
      }, [])

      //FOR DROPDOWN
      const [isMenDropdownVisible, setIsMenDropdownVisible] = useState(false);
      const [isWomenDropdownVisible, setIsWomenDropdownVisible] = useState(false);
      const [isChildrenDropdownVisible, setIsChildrenDropdownVisible] = useState(false);
      const [isFragnanceDropdownVisible, setIsFragnanceDropdownVisible] = useState(false);
      const [isHomeDropdownVisible, setIsHomeDropdownVisible] = useState(false);
      const [isSalesDropdownVisible, setIsSalesDropdownVisible] = useState(false);
      const [isStoriesDropdownVisible, setIsStoriesDropdownVisible] = useState(false);

      const products = useSelector(state => state.cart.products) // FOR CART LENGTH

  return (
    // className='flex justify-between items-center borde px-7 p-5'
    <nav className={`flex justify-between items-center fixed top-0 left-0 w-full py-4 px-7 transistion-all duration-300 z-10 ${scrolled ? 'bg-white text-black bg-opacity-80 shadow-lg' : 'bg-transparent text-white'}`}> 
        <div className='grid grid-flow-col items-center gap-18 borde'>
            <div>
                <a href='/' className='font-serif text-5xl font-bold'>UNCLEIB</a>
            </div>

            <div className='space-x-5 flex'>
                <div
                    className='relative fle items-cente justify-cente'
                    onMouseEnter={() => setIsMenDropdownVisible(true)}
                    onMouseLeave={() => setIsMenDropdownVisible(false)}
                >
                    <Link to="/men" className='text-xs  font-bold !no-underline ms- p-3 '>MEN</Link>
                    {isMenDropdownVisible && (<div 
                    className='fixed top-15 mt-3 bg-white w-screen left-0 px-7 py-10 flex space-x-25 border-b-5 z-50' 
                    // onMouseEnter={() => setIsDropdownVisible(true)}
                    // onMouseLeave={() => setIsDropdownVisible(false)}
                    >
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
                    className='relative fle items-cente justify-cente'
                    onMouseEnter={() => setIsWomenDropdownVisible(true)}
                    onMouseLeave={() => setIsWomenDropdownVisible(false)}
                >
                    <Link to="/men" className='text-xs font-bold !no-underline ms- p-3'>WOMEN</Link>
                    {isWomenDropdownVisible && (<div className='fixed top-15 mt-3 bg-white w-screen left-0 p-10 flex space-x-25 border-b-5 z-50'
                    //  onMouseEnter={() => setIsWomenDropdownVisible(true)}
                    // onMouseLeave={() => setIsWomenDropdownVisible(false)}
                    >
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
                    className='relative fle items-cente justify-cente'
                    onMouseEnter={() => setIsChildrenDropdownVisible(true)}
                    onMouseLeave={() => setIsChildrenDropdownVisible(false)}
                >
                    <Link to="/men" className='text-xs font-bold !no-underline ms- p-3'>CHILDREN</Link>
                    {isChildrenDropdownVisible && (<div className='fixed top-15 mt-3 bg-white w-screen left-0 p-10 flex space-x-25 border-b-5 z-50' 
                    // onMouseEnter={() => setIsDropdownVisible(true)}
                    // onMouseLeave={() => setIsDropdownVisible(false)}
                    >
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
                    className='relative fle items-cente justify-cente'
                    onMouseEnter={() => setIsFragnanceDropdownVisible(true)}
                    onMouseLeave={() => setIsFragnanceDropdownVisible(false)}
                >
                    <Link to="/men" className='text-xs font-bold !no-underline ms- p-3'>FRAGNANCE</Link>
                    {isFragnanceDropdownVisible && (<div className='fixed top-15 mt-3 bg-white w-screen left-0 p-10 flex space-x-25 border-b-5 z-50' 
                    // onMouseEnter={() => setIsDropdownVisible(true)}
                    // onMouseLeave={() => setIsDropdownVisible(false)}
                    >
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
                    className='relative fle items-cente justify-cente'
                    onMouseEnter={() => setIsHomeDropdownVisible(true)}
                    onMouseLeave={() => setIsHomeDropdownVisible(false)}
                >
                    <Link to="/men" className='text-xs font-bold !no-underline ms- p-3'>HOME AND LIFESTYLE</Link>
                    {isHomeDropdownVisible && (<div className='fixed top-15 mt-3 bg-white w-screen left-0 p-10 flex space-x-25 border-b-5 z-50' 
                    // onMouseEnter={() => setIsDropdownVisible(true)}
                    // onMouseLeave={() => setIsDropdownVisible(false)}
                    >
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
                    className='relative fle items-cente justify-cente'
                    onMouseEnter={() => setIsSalesDropdownVisible(true)}
                    onMouseLeave={() => setIsSalesDropdownVisible(false)}
                >
                    <Link to="/men" className='text-xs font-bold !no-underline ms- p-3'>SALES</Link>
                    {isSalesDropdownVisible && (<div className='fixed top-15 mt-3 bg-white w-screen left-0 p-10 flex space-x-25 border-b-5 z-50' 
                    // onMouseEnter={() => setIsDropdownVisible(true)}
                    // onMouseLeave={() => setIsDropdownVisible(false)}
                    >
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
                    className='relative fle items-cente justify-cente'
                    onMouseEnter={() => setIsStoriesDropdownVisible(true)}
                    onMouseLeave={() => setIsStoriesDropdownVisible(false)}
                >
                    <Link to="/men" className='text-xs font-bold !no-underline ms- p-3'>STORIES</Link>
                    {isStoriesDropdownVisible && (<div className='fixed top-15 mt-3 bg-white w-screen left-0 p-10 flex space-x-25 border-b-5 z-50' 
                    // onMouseEnter={() => setIsDropdownVisible(true)}
                    // onMouseLeave={() => setIsDropdownVisible(false)}
                    >
                        <div className='borde p-2'>
                            <a href='/'>
                                <img src={bg} alt='/' className='w-47 h-66'/> 
                            </a>
                            <p className='text-xs txet-black font-semibold mt-2'>FALL-WINTER 2025</p>
                        </div>

                        <div className='space-y-2'>
                            <h3 className='text-xs font-semibold mb-2'>SHOWS</h3>
                            <div className='space-y-2'>
                            <a href='/' className='text-xs text-black block'>ADVERTISING CAMPAIGNS</a>
                            <a href='/' className='text-xs text-black block'>NEWS & PROJECTS</a>
                            <a href='/' className='text-xs text-black block'>LOOKBOOKS</a>
                            <a href='/' className='text-xs text-black block'>SUSTAINABILITY</a>
                            <a href='/' className='text-xs text-black block'>UNCLE IB</a>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <h3 className='text-xs text-black font-semibold mb-2'>LATEST NEWS</h3>
                            <div className='flex gap-2'>
                                <img src={bg} alt='/' className='w-26 h-32'/> 
                                <div>
                                    <p className='text-xs text-gray-600 font-semibold'>ADVERTISING CAMPAIGNS</p>
                                    <a href='/' className='text-xs text-black'>PRINTED SILK SHIRTS</a>
                                </div>
                            </div>

                            <div className='flex gap-2'>
                                <img src={bg} alt='/' className='w-26 h-32'/> 
                                <div>
                                    <p className='text-xs text-gray-600 font-semibold'>ADVERTISING CAMPAIGNS</p>
                                    <a href='/' className='text-xs text-black'>MEDUSA BIGGIE 2025</a>
                                </div>
                            </div>

                            <div className='flex gap-2'>
                                <img src={bg} alt='/' className='w-26 h-32'/> 
                                <div>
                                    <p className='text-xs text-gray-600 font-semibold'>ADVERTISING CAMPAIGNS</p>
                                    <a href='/' className='text-xs text-black'>CHANNING TATUM FOR EROS ENERGY</a>
                                </div>
                            </div>
                        </div>

                        <div className='w-56'>
                            <h3 className='text-xs text-black font-semibold mb-2'>UNCLE IB APPOINTMENT</h3>
                            <p className='text-xs text-black'>FOR ANY INQUIRIES AND APPOINTMENT REGARDING THE UNCLE IB VCOLLECTION, PLEASE CONTACT US.</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
        

        <div className='flex space-x-5 mt-2'>
            <Link to='/'>
                <div className='grid grid-flow-col items-center gap-'>
                    <FaSearch className='text-lg font-bold' />
                    {/* <span className='text-xs font-bold'>SERACH</span> */}
                </div>
            </Link>
            <Link to='/'>
                <div className='grid grid-flow-col items-center gap-1'>
                    <GoHeart className='text-lg' />
                    <span className='text-xs font-bold'>WISHLIST</span>
                </div>
            </Link>
            <Link to='/'>
                <div className='grid grid-flow-col items-center gap-1'>
                    <CiUser className='text-lg' />
                    <span className='text-xs font-bold'>SIGN IN</span>
                </div>
            </Link>
            <Link to='/'>
                <div className='grid grid-flow-col items-center gap-1'>
                    <HiOutlineShoppingBag className='text-lg' />
                    <span className='text-xs font-bold'>SHOPPING BAG [0]</span>
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar2