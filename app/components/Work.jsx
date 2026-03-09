'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

/**
 * Work - Component displaying the portfolio projects section
 * Uses dynamic project data loaded at build time
 */
const Work = ({ projects = [] }) => {
  const { language, t } = useLanguage();

  // Animation variants for section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Section Title */}
      <motion.h4
        variants={titleVariants}
        className="text-center mb-2 text-lg font-Ovo"
      >
        {t.work?.subtitle || (language === 'fr' ? 'Mon portfolio' : 'My portfolio')}
      </motion.h4>

      <motion.h2
        variants={titleVariants}
        className="text-center text-5xl font-Ovo"
      >
        {t.work?.title || (language === 'fr' ? 'Projets récents' : 'Recent Projects')}
      </motion.h2>

      <motion.p
        variants={titleVariants}
        className="text-center max-w-2xl mx-auto mt-5 mb-20 font-Ovo"
      >
        {t.work?.description || (language === 'fr' ? 'Découvrez mes projets récents' : 'Discover my recent projects')}
      </motion.p>

      {/* Projects Grid */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 dark:text-gray-400">
            {language === 'fr'
              ? 'Aucun projet disponible pour le moment.'
              : 'No projects available at the moment.'}
          </p>
        </div>
      )}

      {/* Call to Action */}
      {projects.length > 0 && (
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {language === 'fr'
              ? 'Vous souhaitez voir plus de mes projets ?'
              : 'Want to see more of my projects?'}
          </p>
          <a
            href="https://github.com/UBONGO2000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-black/80 dark:hover:bg-gray-200 transition-colors"
          >
            {language === 'fr' ? 'Voir GitHub' : 'View GitHub'}
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Work;
