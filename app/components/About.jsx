import React from 'react'
import { infoList, toolsData } from '@/assets/assets'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiDjango } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { DiMongodb } from "react-icons/di";


const About = () => {
  return (
    <>
      <div id="about" className='w-full px-[12%] py-10 scroll-m-20'>
            
            <h4 className='text-center mb-2 text-lg font-Ovo'>
                Introduction
            </h4>

            <h2 className='text-center text-5xl font-Ovo'>About me</h2>
            
            <div className='mt-20 flex flex-col md:flex-row gap-10'>
                
            {/* <div className='w-70 sm:w-80 max-w-none'>
                <Image src={assets.my} className='rounded-lg'></Image>
            </div> */}

            <div className='w-full justify-center'>
                <p className='mb-10 font-Ovo text-xl'>
                    I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                </p>
{/* technos */}
                <h3 className='mb-10 text-center text-2xl font-bold font-Ovo'>TECHNOLOGIES</h3>

                <div className='grid grid-rows-4 grid-flow-col gap-4 mb-10'>

                    
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center'> <FaPython /> <span>Python</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center'> <FaJava /> <span>Java</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center'> <FaPython /> <span>C++</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center'> <IoLogoJavascript /> <span>Javascript</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center'> <SiPhp /> <span>PHP</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center'> <RiTailwindCssFill /> <span>Tailwind css</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center'> <FaReact /> <span>React</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center'> <FaAngular /> <span>Angular</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center'> <TbSql /> <span>SQL</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center'> <SiDjango /> <span>Django</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center'> <SiSpring /> <span>Spring Boot</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center'> <DiMongodb /> <span>MongoDB</span></span>
                    

                </div>


                <div className='mt-10 p-5'>

                    <h3 className='mt-10 mb-10 text-center text-2xl font-bold font-Ovo'>EDUCATIONS</h3>

                    <div className='justify-center flex flex-row-reverse gap-2'>

                        <div className='p-5'>
                            <h4 className='text-xl'> 🏫  IPI - Toulouse</h4>
                            <p>Bachelor 2 developpeur web</p>
                            <p>2024-présent</p>
                        </div>

                        <div className='p-5'>
                            <h4 className='text-xl'> 🏫  IPI - Toulouse</h4>
                            <p>Bachelor 1 developpeur web</p>
                            <p>2023-2024</p>
                        </div>

                        <div className='p-5'>
                            <h4 className='text-xl'> 🏫  Université de Yaoundé 1</h4>
                            <p >Licence en mathematique </p>
                            <p>2020-2023</p>
                        </div>

                    </div>
                    
                </div>
                
            

                <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>

                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool,index)=>(
                        <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black'>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                        </li>
                    ))}

                </ul>
            </div>

            </div>
            
      </div>
    </>
  )
}

export default About
