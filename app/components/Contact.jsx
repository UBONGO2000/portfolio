'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState("");
  const { t } = useLanguage();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(t.contact.sending);
    const formData = new FormData(event.target);

    formData.append("access_key", "bbebcc02-62e4-4c78-8769-edc89eabefc3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(t.contact.success);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <motion.div 
        id='contact' 
        className='w-full px-[12%] py-10 scrooll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h4 variants={itemVariants} className='text-center mb-2 text-lg font-Ovo'>
          {t.contact.subtitle}
        </motion.h4>

        <motion.h2 variants={itemVariants} className='text-center text-5xl font-Ovo'>
          {t.contact.title}
        </motion.h2>

        <motion.p variants={itemVariants} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
          {t.contact.description}
        </motion.p>

        <motion.form 
          variants={itemVariants}
          onSubmit={onSubmit} 
          className='max-w-2xl mx-auto'
        >
          <motion.div 
            className='grid grid-cols-auto gap-6 mt-10 mb-8'
            variants={itemVariants}
          >
            <motion.input 
              type="text" 
              placeholder={t.contact.name} 
              name='name' 
              required 
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkTheme dark:border-white/50'
              whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
            />
            <motion.input 
              type="email" 
              placeholder={t.contact.email} 
              name='email' 
              required 
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkTheme dark:border-white/50'
              whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
            />
          </motion.div>

          <motion.textarea 
            rows="6" 
            placeholder={t.contact.message} 
            name='message' 
            required 
            className='w-full p-4 outline-nome border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkTheme dark:border-white/50'
            whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
          ></motion.textarea>

          <motion.button 
            type="submit" 
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-black/80 duration-500 dark:bg-slate-50 dark:text-black/80 dark:hover:bg-transparent dark:hover:text-slate-50'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.contact.submit}
          </motion.button>

          <motion.p 
            className='mt-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: result ? 1 : 0 }}
          >
            {result}
          </motion.p>
        </motion.form>
      </motion.div>
    </>
  );
};

export default Contact;
