'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { MdWavingHand } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Header = () => {
  const { t } = useLanguage();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 200 }
    }
  };

  return (
    <>
      <motion.div 
        id='top' 
        className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div variants={imageVariants}>
          <Image 
            src={assets.my} 
            alt="my picture" 
            className='rounded-full w-32'
          />
        </motion.div>

        {/* Greeting */}
        <motion.h3 
          variants={itemVariants}
          className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
        >
          Hi I'm Georges NTCHANGA <MdWavingHand/>
        </motion.h3>

        {/* Role Title */}
        <motion.h1 
          variants={itemVariants}
          className='text-3xl sm:text-6xl lg:text-[60px] font-ovo'
        >
          {t.header.role}
        </motion.h1>

        {/* Description */}
        <motion.div
          variants={itemVariants}
          className='max-w-2xl mx-auto my-4 font-Ovo text-xl'
          dangerouslySetInnerHTML={{ __html: t.header.description }}
        />

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className='flex flex-col sm:flex-row items-center gap-4 mt-4'
        >
          <motion.a 
            href="#contact" 
            className='px-10 py-3 border rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.header.contactMe}<MdArrowOutward />
          </motion.a>
          <motion.a 
            href="/CV_NTCHANGA_Georges.pdf" 
            download 
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.header.myResume} <FaDownload/>
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Header;
