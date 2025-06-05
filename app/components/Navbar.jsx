import { assets } from '@/assets/assets'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";
import { IoMoonOutline,IoCloseOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";



const Navbar = ({isDarkMode,setIsDarkMode,isScroll}) => {

  const sideMenuRef = useRef();

  const openMenu = () =>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () =>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
            <Image src={assets.header_bg_color} alt='header background blur color' className='w-full'/>
        </div>
        <nav className={`w-full fixed gap-6 px-5 py-2 lg:px-8 xl:px-[8%] flex items-center justify-between z-50  ${isScroll ? "bg-white/50 backdrop-blur-lg dark:bg-darkTheme/70 dark:backdrop-blur-lg" : ""}`} >
        
            <div className='w-40'>

                <a href="#top">
                    <Image src={assets.logo} alt="firstname logo" className='w-28 cursor-pointer mr-14'/>
                </a>
                
            </div>
           

            <ul className='hidden md:flex items-center gap-10 lg:gap-16 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 dark:bg-transparent'>
                <li><a className='font-Ovo' href="#top">Home</a></li>
                <li><a className='font-Ovo' href="#about">About me</a></li>
                {/* <li><a className='font-Ovo' href="#services">Services</a></li> */}
                <li><a className='font-Ovo' href="#work">My Work</a></li>
                <li><a className='font-Ovo' href="#contact">Contact me</a></li>
            </ul>

            <div className='flex items-center gap-6'>
                {/* moon  */}
                <button className='block ' onClick={()=> setIsDarkMode(prev => !prev)}>
                    <IoMoonOutline   className={isDarkMode ? 'text-2xl' : ''}/>
                </button>

                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'> Contact<MdArrowOutward /></a>
                
                {/* menu */}
                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <IoIosMenu  className='text-3xl'/>
                </button>
            </div>


            {/* ----------------------------------------------- mobile menu --------------------------------------------------*/}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-50 transition duration-500 dark:bg-darkHover dark:text-white'>
                
                <IoCloseOutline className='text-4xl absolute right-6 top-6' onClick={closeMenu}/>
                
                <li><a onClick={closeMenu} className='font-Ovo' href="#top">Home</a></li>
                <li><a onClick={closeMenu} className='font-Ovo' href="#about">About me</a></li>
                <li><a onClick={closeMenu} className='font-Ovo' href="#services">Services</a></li>
                <li><a onClick={closeMenu} className='font-Ovo' href="#work">My Work</a></li>
                <li><a onClick={closeMenu} className='font-Ovo' href="#contact">Contact me</a></li>
            </ul>

        </nav>

        
    </>
  )
}

export default Navbar
