import { workData } from '@/assets/assets'
import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';


const Work = () => {
  return (
    <>
      <div id='work' className='w-full px-[12%] py-10 scroll-mt-20' >
        <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
        <h2 className='text-center text-5xl font-Ovo'>My latest Work</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-20 font-Ovo'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in web development.</p>

        <div className=' w-full grid grid-cols-1 auto-cols-[5rem] md:grid-cols-2 lg:grid-cols-3 aspect-square gap-10 my-10'>
            {workData.map((projects,index)=>(
                <div key={index} className='shadow-md  aspect-square rounded-md cursor-pointer ronded-lg hover:-translate-y-5 duration-500 hover:shadow-black dark:shadow-slate-50 dark:hover:shadow-white'>
                    
                    <div className='ronded-lg'>
                        <img src={projects.image} alt='image project' className='rounded-t-lg'></img>
                    </div>

                    <div className='p-5 text-left'>
                        <h1 className='text-bold  text-2xl font-Outfit  mb-5'>{projects.title}</h1>
                        <p className='text-gray-500 dark:text-gray-50 px-3 font-Ovo'>{projects.description}</p>
                      <div className="w-full font-bold flex flex-wrap gap-2 my-2">
                            {projects.tec.map((techno, idx) => (
                              <span
                                key={idx}
                                className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs border border-blue-300 hover:bg-blue-500 hover:text-white transition-colors duration-200"
                              >
                                #{techno}
                              </span>
                            ))}
                        </div>

                        <div className="p-5 flex flex-col md:flex-row gap-5">

                            <button className='px-5 py-2 border-2 border-gray-700 hover:bg-gray-700 hover:text-slate-50 dark:border-slate-50 dark:hover:bg-slate-50 dark:hover:text-gray-700'>
                              <a href={projects.github} className='text-xl  hover:scale-125' target='_blank'> github</a>
                            </button>
                            
                            <button className='px-5 py-2 border-2 border-gray-700 hover:bg-gray-700 hover:text-gray-50 dark:border-slate-50 dark:hover:bg-slate-50 dark:hover:text-gray-700'>
                              <a href={projects.link} className='text-xl hover:scale-125' target='_blank'> 👁️‍🗨️ View</a>

                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </>
  )
}

export default Work
