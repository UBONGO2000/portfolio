'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaChartLine,
  FaDatabase,
  FaFileExcel,
  FaGitAlt,
  FaLightbulb,
  FaMobileAlt,
  FaPlug,
  FaReact,
  FaRocket,
  FaSearch,
  FaUniversalAccess,
  FaVial,
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const getLearningIcon = (learning) => {
  const text = learning
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  if (text.includes('excel') || text.includes('xlookup') || text.includes('index/match')) return <FaFileExcel />;
  if (text.includes('dashboard') || text.includes('power bi') || text.includes('graphiques') || text.includes('charts')) return <FaChartLine />;
  if (text.includes('dataset') || text.includes('donnees') || text.includes('data') || text.includes('sql')) return <FaDatabase />;
  if (text.includes('css') || text.includes('responsive')) return <FaMobileAlt />;
  if (text.includes('react') || text.includes('etat') || text.includes('state')) return <FaReact />;
  if (text.includes('test') || text.includes('jest')) return <FaVial />;
  if (text.includes('api') || text.includes('integration')) return <FaPlug />;
  if (text.includes('deploiement') || text.includes('deployment')) return <FaRocket />;
  if (text.includes('accessibilite') || text.includes('accessibility')) return <FaUniversalAccess />;
  if (text.includes('seo')) return <FaSearch />;
  if (text.includes('git') || text.includes('github')) return <FaGitAlt />;

  return <FaLightbulb />;
};

const Learn = ({ projects = [] }) => {
  const { language, t } = useLanguage();

  const allLearnings = React.useMemo(() => {
    const learningsSet = new Set();
    const defaultLearnings = language === 'fr'
      ? [
        'Maitrise du responsive design avec Tailwind CSS',
        'Optimisation des performances web',
        'Gestion d etat avancee avec React',
        'Integration d API externes',
        'Tests automatises avec Jest',
        'Deploiement sur Vercel',
        'Accessibilite web (WCAG)',
        'Optimisation SEO',
        'Gestion de projet agile',
        'Collaboration avec Git et GitHub',
      ]
      : [
        'Mastery of responsive design with Tailwind CSS',
        'Web performance optimization',
        'Advanced state management with React',
        'External API integration',
        'Automated testing with Jest',
        'Deployment on Vercel',
        'Web accessibility (WCAG)',
        'SEO optimization',
        'Agile project management',
        'Collaboration with Git and GitHub',
      ];

    defaultLearnings.forEach((learning) => learningsSet.add(learning));

    projects.forEach((project) => {
      project.learnings?.[language]?.forEach((learning) => {
        learningsSet.add(learning);
      });

      if (project.challenges && project.challenges[language]) {
        const challengeText = project.challenges[language];
        const learnings = challengeText
          .split('.')
          .map((sentence) => sentence.trim())
          .filter((sentence) => {
            const text = sentence.toLowerCase();

            return sentence.length > 10 &&
              (
                text.includes('learn') ||
                text.includes('appris') ||
                text.includes('confronte') ||
                text.includes('pousse') ||
                text.includes('allowed me') ||
                text.includes('helped me')
              );
          });

        learnings.forEach((learning) => learningsSet.add(learning));
      }
    });

    return Array.from(learningsSet);
  }, [projects, language]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25 },
    },
  };

  return (
    <motion.section
      id="learn"
      className="w-full px-[6%] sm:px-[8%] lg:px-[12%] py-16 scroll-mt-20 bg-white dark:bg-darkTheme"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h4
        variants={titleVariants}
        className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300"
      >
        {language === 'fr' ? 'Progression' : 'Growth'}
      </motion.h4>

      <motion.h3
        variants={titleVariants}
        className="text-center text-5xl font-Ovo text-gray-950 dark:text-white"
      >
        {t.learn?.title || (language === 'fr' ? 'Ce que j ai appris' : 'What I have Learned')}
      </motion.h3>

      <motion.p
        variants={titleVariants}
        className="text-center max-w-3xl mx-auto mt-5 mb-14 font-Ovo text-lg text-gray-700 dark:text-gray-300"
      >
        {t.learn?.description || (language === 'fr'
          ? 'Au cours de mes projets, j ai acquis des competences techniques et transversales.'
          : 'Through my projects, I have gained technical and transferable skills.')}
      </motion.p>

      <ol className="max-w-4xl mx-auto space-y-4">
        {allLearnings.map((learning, index) => (
          <motion.li
            key={learning}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative overflow-hidden rounded-lg border-2 border-gray-800 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-black dark:border-white dark:bg-darkTheme dark:hover:shadow-white"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white dark:bg-white dark:text-darkTheme">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="flex min-w-0 flex-1 items-start gap-4">
                <span
                  className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-gray-300 text-xl text-gray-900 transition group-hover:bg-gray-900 group-hover:text-white dark:border-white/30 dark:text-white dark:group-hover:bg-white dark:group-hover:text-darkTheme"
                  aria-hidden="true"
                >
                  {getLearningIcon(learning)}
                </span>

                <div>
                  <p className="font-Outfit text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                    {learning}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {language === 'fr'
                      ? 'Competence consolidee au fil des projets, avec une attention portee a la qualite, la lisibilite et l experience utilisateur.'
                      : 'Skill strengthened through project work, with attention to quality, readability and user experience.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {language === 'fr'
            ? 'Chaque projet a ete une opportunite de grandir aussi bien techniquement que personnellement.'
            : 'Each project has been an opportunity to grow both technically and personally.'}
        </p>
        <a
          href="#contact"
          className="inline-block rounded-full border border-gray-800 bg-black px-8 py-3 text-white transition-colors hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white"
        >
          {language === 'fr' ? 'Me contacter' : 'Contact Me'}
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Learn;
