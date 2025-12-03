import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Social = () => {
  return (
    <>
    {/* <div className='w-full mt-5 justify-center items-center '>
        <h4 className='text-center mb-2 text-lg font-Ovo'>My web presence</h4>
        <h2 className='text-center text-5xl font-Ovo'>lien de mes reseaux scociaux</h2>
        <ul className='mt-6 flex  gap-5 justify-center '>
            <li className='text-4xl flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black'><a href="" title='github'><FaGithub/></a></li>
            <li className='text-4xl flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black text-blue-500'><a href="" title='linkding'><FaLinkedin/> </a></li>
        </ul></div> */}

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
