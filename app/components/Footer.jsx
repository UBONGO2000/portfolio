import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/assets/assets';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';


const Footer = () => {
    const { t } = useLanguage();
    const { isDarkMode } = useDarkMode();
    
    return(
    <>

        <div className='mt-20'>

                <div className='text-center'>
                    <Link href="/">
                        <Image
                            src={isDarkMode? assets.logo_dark : assets.logo}
                            alt='my logo'
                            className='w-60 mx-auto mb-2'
                            sizes="240px"
                        />
                    </Link>
                </div>

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='mail icone' className='w-6' sizes="24px"/>
                    ntchangageorges@gmail.com
                </div>

        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2026 Georges NTCHANGA.{t.footer.rights}</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/UBONGO2000">{t.footer.github}</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/georges-ntchanga/">{t.footer.linkedin}</a></li>
                <li><a href="/mentions-legales" className="hover:text-blue-500 dark:hover:text-blue-400">{t.footer.legal}</a></li>
            </ul>
        </div>
        
        
    </>)
}


export default Footer;
