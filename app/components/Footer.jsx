import React from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';


const Footer=({isDarkMode,setIsDarkMode,isScroll})=>{
    return(
    <>

        <div className='mt-20'>

                <div className='text-center'>
                    <Image src={isDarkMode? assets.logo_dark : assets.logo} alt='my logo' className='w-60 mx-auto mb-2'/>
                </div>

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='mail icone' className='w-6'/>
                    ntchangageorges@gmail.com
                </div>

        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Georges NTCHANGA.All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/UBONGO2000"></a>Github</li>
                <li><a target='_blank' href="https://www.linkedin.com/in/georges-ntchanga/"></a>Linkedin</li>
            </ul>
        </div>
        
        
    </>)
}


export default Footer;
