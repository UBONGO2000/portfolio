import { assets } from '@/assets/assets'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";
import { IoMoonOutline,IoCloseOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";



const Navbar = () => {

  const sideMenuRef = useRef();

  const openMenu = () =>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () =>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  return (
    <>
        <nav className='w-full fixed gap-6 px-5 py-2 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 bg-white bg-opacity-50 backdrop-blur-lg ' >
        
            <div className='w-40'>
                <span>
                    <Image src={assets.logo} alt="firstname logo"></Image>
                </span>
            </div>
           

            <ul className='hidden md:flex items-center gap-10 lg:gap-16 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
                <li><a className='font-Ovo' href="#top">Home</a></li>
                <li><a className='font-Ovo' href="#about">About me</a></li>
                {/* <li><a className='font-Ovo' href="#services">Services</a></li> */}
                <li><a className='font-Ovo' href="#work">My Work</a></li>
                <li><a className='font-Ovo' href="#contact">Contact me</a></li>
            </ul>

            <div className='flex items-center gap-6'>
                {/* moon  */}
                <button className='hidden'>
                    <IoMoonOutline  className='text-2xl'/>
                </button>

                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full ml-4'> Contact<MdArrowOutward /></a>
                
                {/* menu */}
                <button className='md:hidden block ml-3' onClick={openMenu}>
                    <IoIosMenu  className='text-3xl'/>
                </button>
            </div>


            {/* ----------------------------------------------- mobile menu --------------------------------------------------*/}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-blue-50 transition duration-500 '>
                
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
