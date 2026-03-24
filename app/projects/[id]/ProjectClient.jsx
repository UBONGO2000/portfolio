'use client';
import React from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { useDarkMode } from '@/app/context/DarkModeContext';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheck, FaPlay } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';

export default function ProjectClient({ project, projectId }) {
  const { language, t } = useLanguage();
  const { isDarkMode, setIsDarkMode, isScroll } = useDarkMode();

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
          Projet non trouvé
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Le projet "{projectId}" n'existe pas.
        </p>
        <Link
          href="/#work"
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retour aux projets
        </Link>
      </div>
    );
  }

  const description = project.fullDescription?.[language] || project.description;
  const features = project.features?.[language] || [];
  const challenge = project.challenges?.[language] || '';

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
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isScroll={isScroll} />

      <motion.div
        className="min-h-screen pt-20 px-[12%]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white mb-8 transition-colors"
          >
            <FaArrowLeft /> {language === 'fr' ? 'Retour' : 'Back'}
          </Link>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-4xl md:text-5xl font-Ovo font-bold mb-4">{project.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">{project.description}</p>
          </motion.div>

          {/* Project Image */}
          <motion.div variants={itemVariants} className="rounded-lg overflow-hidden shadow-lg mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-Ovo font-bold mb-4">
              {language === 'fr' ? 'Technologies' : 'Technologies'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm border border-blue-300 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-Ovo font-bold mb-4">
              {language === 'fr' ? 'Description' : 'Description'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Features */}
          {features.length > 0 && (
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-Ovo font-bold mb-4">
                {language === 'fr' ? 'Fonctionnalités' : 'Features'}
              </h2>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Challenges */}
          {challenge && (
            <motion.div variants={itemVariants} className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-Ovo font-bold mb-4">
                {language === 'fr' ? 'Défis relevés' : 'Challenges Faced'}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {challenge}
              </p>
            </motion.div>
          )}

          {/* Links */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <FaGithub /> {language === 'fr' ? 'Voir le code' : 'View Code'}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              >
                <FaPlay /> {language === 'fr' ? 'Voir la démo' : 'View Demo'}
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <FaExternalLinkAlt /> {language === 'fr' ? 'Voir le projet' : 'View Project'}
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>

      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isScroll={isScroll} />
    </>
  );
}
