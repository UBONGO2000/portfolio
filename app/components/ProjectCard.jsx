'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

/**
 * ProjectCard - A reusable component for displaying project cards
 * 
 * @param {Object} project - Project object
 * @param {number} index - Index for animation delay
 */
const ProjectCard = ({ project, index = 0 }) => {
  const { language, t } = useLanguage();

  // Handle GitHub click
  const handleGithubClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Handle Demo click
  const handleDemoClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="shadow-md rounded-lg overflow-hidden cursor-pointer hover:-translate-y-2 duration-500 hover:shadow-black dark:shadow-slate-50 dark:hover:shadow-white group bg-white dark:bg-gray-800"
    >
      {/* Project Image - Link to detail */}
      <Link href={`/projects/${project.id}`} className="block overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Project Content */}
      <div className="p-5">
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-xl font-bold font-Outfit mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
        </Link>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.map((techno, idx) => (
            <span
              key={idx}
              className="rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 text-xs font-medium border border-blue-300 dark:border-blue-700"
            >
              {techno}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          {/* GitHub Button */}
          {project.github && (
            <button
              onClick={(e) => handleGithubClick(e, project.github)}
              className="flex items-center gap-2 px-4 py-2 text-sm border-2 border-gray-700 dark:border-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-800 rounded-lg transition-colors"
              aria-label={language === 'fr' ? 'Voir le code source' : 'View source code'}
            >
              <FaGithub className="text-lg" />
              <span className="hidden sm:inline">Code</span>
            </button>
          )}

          {/* Demo Button */}
          {project.demo && (
            <button
              onClick={(e) => handleDemoClick(e, project.demo)}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-green-600 text-white hover:bg-green-700 rounded-lg transition-colors"
              aria-label={language === 'fr' ? 'Voir la démo' : 'View demo'}
            >
              <FaExternalLinkAlt className="text-lg" />
              <span className="hidden sm:inline">Demo</span>
            </button>
          )}

          {/* Details Button - Links to detail page */}
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center gap-2 px-4 py-2 text-sm border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-colors"
            aria-label={language === 'fr' ? 'Voir les détails' : 'View details'}
          >
            <FaInfoCircle className="text-lg" />
            <span className="hidden sm:inline">
              {t.work?.details || (language === 'fr' ? 'Détails' : 'Details')}
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
