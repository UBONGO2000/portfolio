import React from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets'
import { MdWavingHand } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div id='top' className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4' style={{backgroundImage: "url(/header-bg-color.png)"}}>
        <div>
            <Image src={assets.my} alt="my picture" className='rounded-full w-32'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi I'm Georges NTCHANGA <MdWavingHand/>
        </h3>

        <h1 className='text sm:text-6xl lg:text-[60px] font-ovo'>
            web developper student
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, mollitia eum sit ratione quas sequi.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border rounded-full bg-black text-white flex items-center gap-2'>contact me<MdArrowOutward /></a>
            <a href="/CV_NTCHANGA_Georges.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <FaDownload/> </a>

        </div>

      </div>
    </>
  )
}

export default Header
