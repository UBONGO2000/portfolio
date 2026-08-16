'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useDarkMode } from '../context/DarkModeContext';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ProjectCard from '@/app/components/ProjectCard';

const byOrder = (a, b) => (a.order ?? 0) - (b.order ?? 0);

const ArchivesClient = ({ projects = [] }) => {
  const { language, t } = useLanguage();
  const { isDarkMode, setIsDarkMode, isScroll } = useDarkMode();

  const archivedProjects = projects.filter((project) => !project.featured);

  const webAppProjects = archivedProjects
    .filter((project) => project.tier === 'primary' || project.tier === 'secondary')
    .sort(byOrder);

  const dataProjects = archivedProjects
    .filter((project) => project.tier === 'data')
    .sort(byOrder);

  const learningProjects = archivedProjects
    .filter((project) => project.tier === 'learning')
    .sort(byOrder);

  const groups = [
    {
      key: 'webApps',
      items: webAppProjects,
      title: t.archives?.webApps,
      description: t.archives?.webAppsDesc,
      cols: 'md:grid-cols-2 lg:grid-cols-3',
    },
    {
      key: 'data',
      items: dataProjects,
      title: t.archives?.data,
      description: t.archives?.dataDesc,
      cols: 'md:grid-cols-2',
    },
    {
      key: 'learning',
      items: learningProjects,
      title: t.archives?.learning,
      description: t.archives?.learningDesc,
      cols: 'md:grid-cols-2 lg:grid-cols-3',
    },
  ].filter((group) => group.items.length > 0);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isScroll={isScroll} />

      <div className="min-h-screen pt-32 px-[6%] sm:px-[8%] lg:px-[12%] pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white mb-8 transition-colors"
        >
          ← {t.archives?.backToHome || (language === 'fr' ? "Retour à l'accueil" : 'Back to home')}
        </Link>

        <h1 className="text-4xl md:text-5xl font-Ovo font-bold text-center mb-4">
          {t.archives?.title || (language === 'fr' ? 'Archives des projets' : 'Project Archives')}
        </h1>

        <p className="text-center max-w-2xl mx-auto mb-16 font-Ovo text-gray-600 dark:text-gray-300">
          {t.archives?.description}
        </p>

        {groups.length > 0 ? (
          <div className="space-y-16">
            {groups.map((group) => (
              <div key={group.key}>
                <div className="mb-8 flex flex-col gap-2 border-l-4 border-gray-900 pl-5 dark:border-white">
                  <h2 className="text-2xl font-bold font-Outfit text-gray-900 dark:text-white">
                    {group.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {group.description}
                  </p>
                </div>

                <div className={`grid grid-cols-1 ${group.cols} gap-8`}>
                  {group.items.map((project, index) => (
                    <ProjectCard key={project.id || index} project={project} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400">{t.archives?.empty}</p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ArchivesClient;
