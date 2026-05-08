import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Social = () => {
  return (
    <>
    <div className="scrool-smooth">
        <div className='absolute left-0 buttom-0 flex flex-col gap-5 justify-center'>
            <span className='text-4xl flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black'><a target='_blank' href="https://github.com/UBONGO2000" title='github'><FaGithub/></a></span>
            <span className='text-4xl flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black text-blue-500'><a target='_blank' href="https://www.linkedin.com/in/georges-ntchanga/" title='linkding'><FaLinkedin/> </a></span>
        </div>
    </div> 
      
    </>
  )
}

export default Social;
