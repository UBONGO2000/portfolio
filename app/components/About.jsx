import React from 'react'
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
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
import { MdApps } from "react-icons/md";
import { useLanguage } from '../context/LanguageContext';

const badgeClass = 'inline-flex items-center gap-2 border-2 border-gray-800 bg-gray-800 text-slate-50 text-sm sm:text-base md:text-lg px-3 py-2 sm:px-4 sm:py-2.5 dark:bg-slate-50 dark:text-gray-800';
const badgeRowClass = 'flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8';

const SkillBadges = ({ skills }) => (
  <div className={badgeRowClass}>
    {skills.map(({ icon: Icon, label }) => (
      <span key={label} className={badgeClass}>
        {Icon && <Icon />} <span>{label}</span>
      </span>
    ))}
  </div>
);

const languageSkills = [
  { icon: FaPython, label: 'Python' },
  { icon: FaJava, label: 'Java' },
  { icon: SiCplusplus, label: 'C++' },
  { icon: IoLogoJavascript, label: 'JavaScript' },
  { icon: SiPhp, label: 'PHP' },
];

const backendSkills = [
  { icon: SiDjango, label: 'Django' },
  { icon: SiSpring, label: 'Spring Boot' },
];

const frontendSkills = [
  { icon: FaReact, label: 'React' },
  { icon: FaAngular, label: 'Angular' },
  { icon: RiTailwindCssFill, label: 'Tailwind CSS' },
];

const databaseSkills = [
  { icon: TbSql, label: 'SQL' },
  { icon: DiMongodb, label: 'MongoDB' },
];

const toolSkills = [
  { icon: VscVscode, label: 'VS Code' },
  { icon: SiLibreofficeimpress, label: 'LibreOffice' },
  { icon: FaGithub, label: 'GitHub' },
  { icon: FaGitAlt, label: 'Git Bash' },
  { icon: FaDocker, label: 'Docker' },
  { icon: MdApps, label: 'Office 365' },
  { icon: SiPycharm, label: 'PyCharm' },
  { icon: SiWebstorm, label: 'WebStorm' },
  { icon: SiIntellijidea, label: 'IntelliJ IDEA' },
  { icon: null, label: 'Eclipse' },
  { icon: SiPostman, label: 'Postman' },
  { icon: SiLaragon, label: 'Laragon' },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <div id="about" className='w-full px-[6%] sm:px-[8%] lg:px-[12%] py-10 scroll-m-20'>

            <h4 className='text-center mb-2 text-lg font-Ovo'>
                {t.about.introduction}
            </h4>

            <h2 className='text-center text-4xl sm:text-5xl font-Ovo'>{t.about.title}</h2>

            <div className='mt-12 sm:mt-20 flex flex-col md:flex-row gap-10'>

            <div className='w-full justify-center'>
                <p className='mb-10 font-Ovo text-lg sm:text-xl md:text-2xl text-center'>
                {t.about.description}
                </p>

                <h3 className='mb-10 text-center text-xl sm:text-2xl font-bold font-Ovo'>{t.about.technologies}</h3>

                <h4 className='mb-4 text-center text-lg sm:text-xl font-semibold font-Ovo'>{t.about.categoryLanguages}</h4>
                <SkillBadges skills={languageSkills} />

                <h4 className='mb-4 text-center text-lg sm:text-xl font-semibold font-Ovo'>{t.about.categoryBackend}</h4>
                <SkillBadges skills={backendSkills} />

                <h4 className='mb-4 text-center text-lg sm:text-xl font-semibold font-Ovo'>{t.about.categoryFrontend}</h4>
                <SkillBadges skills={frontendSkills} />

                <h4 className='mb-4 text-center text-lg sm:text-xl font-semibold font-Ovo'>{t.about.categoryDatabases}</h4>
                <SkillBadges skills={databaseSkills} />

                <h4 className='mb-4 text-center text-lg sm:text-xl font-semibold font-Ovo'>{t.about.categoryDevTools}</h4>
                <SkillBadges skills={toolSkills} />

{/* Educations */}
                <div className='mt-10 p-5'>

                    <h3 className='mt-10 mb-10 text-center text-xl sm:text-2xl font-bold font-Ovo'>{t.about.education}</h3>

                    <div className='justify-center grid grid-cols-1 gap-4 md:grid-cols-2 md:justify-center md:items-center text-center'>

                        <div className='p-5 text-lg sm:text-2xl'>
                            <h4> 🏫  {t.about.university}</h4>
                            <p >{t.about.bachelorMath}</p>
                            <p>{t.about.years}</p>
                        </div>


                        <div className='p-5 text-lg sm:text-2xl'>
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
