import React from 'react'
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

import { VscVscode } from "react-icons/vsc";
import { FaDocker } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiLibreofficeimpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPycharm } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { SiWebstorm } from "react-icons/si";
import { SiLaragon } from "react-icons/si";
import { useLanguage } from '../context/LanguageContext';


const About = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <div id="about" className='w-full px-[12%] py-10 scroll-m-20'>
            
            <h4 className='text-center mb-2 text-lg font-Ovo'>
                {t.about.introduction}
            </h4>

            <h2 className='text-center text-5xl font-Ovo'>{t.about.title}</h2>
            
            <div className='mt-20 flex flex-col md:flex-row gap-10'>
                
            <div className='w-full justify-center'>
                <p className='mb-10 font-Ovo text-2xl text-center'>
                {t.about.description}
                </p>
{/* technos */}
                <h3 className='mb-10 text-center text-2xl font-bold font-Ovo'>{t.about.technologies}</h3>

                <div className='grid sm:grid-rows-4 sm:grid-flow-col gap-4 mb-10'>

                    
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <FaPython /> <span>Python</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <FaJava /> <span>Java</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <FaPython /> <span>C++</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <IoLogoJavascript /> <span>Javascript</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <SiPhp /> <span>PHP</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <RiTailwindCssFill /> <span>Tailwind css</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <FaReact /> <span>React</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <FaAngular /> <span>Angular</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <TbSql /> <span>SQL</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <SiDjango /> <span>Django</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <SiSpring /> <span>Spring Boot</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <DiMongodb /> <span>MongoDB</span></span>
                      

                </div>

{/* Tools & Software */}
                <h3 className='mb-10 text-center text-2xl font-bold font-Ovo'>{t.about.tools}</h3>

                <div className='grid sm:grid-rows-4 sm:grid-flow-col gap-4 mb-10'>

                    
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <VscVscode /> <span>Vs code</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <SiLibreofficeimpress /> <span>Libre office</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <FaGithub /> <span>Github</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <FaGitAlt /><span>Git bash</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <FaDocker /> <span>Docker</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <RiTailwindCssFill /> <span>Office 365</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <SiPycharm /> <span>Pycharm</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <SiWebstorm /> <span>Webstorm</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <SiIntellijidea /> <span>INTELLIJ IDEA</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <span>Eclipse</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <SiPostman /> <span>Postman</span></span>
                    <span className=' flex  border-2 border-gray-800 bg-gray-800 text-slate-50 text-2xl px-5 py-3 text-center dark:bg-slate-50 dark:text-gray-800'> <SiLaragon /> <span>Laragon</span></span>
                      

                </div>

{/* Educations */}
                <div className='mt-10 p-5'>

                    <h3 className='mt-10 mb-10 text-center text-2xl font-bold font-Ovo'>{t.about.education}</h3>

                    <div className='justify-center grid grid-cols-1 gap-4 md:grid-cols-2 md:justify-center md:items-center text-center'>

                        <div className='p-5 text-2xl'>
                            <h4> 🏫  {t.about.university}</h4>
                            <p >{t.about.bachelorMath}</p>
                            <p>{t.about.years}</p>
                        </div>


                        <div className='p-5 text-2xl'>
                            <h4 > 🏫  {t.about.ipi}</h4>
                            <p>{t.about.webDev}</p>
                            <p>{t.about.present}</p>
                        </div>

                        

                    </div>
                    
                </div>
                
 
                {/* <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>

                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool,index)=>(
                        <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black'>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                        </li>
                    ))}

                </ul> */}
            </div>

            </div>
            
      </div>
    </>
  )
}

export default About
