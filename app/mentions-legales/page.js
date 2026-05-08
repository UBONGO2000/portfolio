'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { useDarkMode } from '../context/DarkModeContext';
import Navbar from '@/app/components/Navbar';

const LegalMentions = () => {
  const { language, t } = useLanguage();
  const { isDarkMode, setIsDarkMode, isScroll } = useDarkMode();

  const content = {
    fr: {
      title: "Mentions Légales",
      lastUpdate: "Dernière mise à jour : Avril 2026",
      section1Title: "1. Éditeur du site",
      section1Content: `Le site portfolio de Georges NTCHANGA est édité par :
      
Georges NTCHANGA
Email : ntchangageorges@gmail.com
Téléphone : Disponible sur demande

Ce site est un portfolio personnel présentant mes compétences et réalisations professionnelles en tant qu'étudiant développeur web/mobile.`,
      section2Title: "2. Hébergeur",
      section2Content: `Ce site est hébergé par :
      
Vercel Inc.
4400 Barranca Pkwy
Irvine, CA 92604
États-Unis

Site web : https://vercel.com`,
      section3Title: "3. Propriété intellectuelle",
      section3Content: `L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, code source) est protégé par le droit d'auteur et le droit de la propriété intellectuelle.

Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans autorisation écrite préalable de l'auteur.

Les marques et logos présents sur ce site sont la propriété de leurs détenteurs respectifs.`,
      section4Title: "4. Responsabilité",
      section4Content: `Les informations fournies sur ce site le sont à titre purement informatif et bénévole. L'auteur s'efforce d'assurer l'exactitude des informations présentes sur le site mais ne peut garantir l'absence d'erreurs ou d'omissions.

L'auteur ne pourra être tenu responsable de l'utilisation qui pourrait être faite des informations contenues sur ce site.

Les liens externes présents sur ce site vers d'autres sites internet sont fournis à titre documentaire et ne constituent pas une approbation de ces sites.`,
      section5Title: "5. Protection des données personnelles (RGPD)",
      section5Content: `Ce site ne collecte pas de données personnelles via des formulaires autres que le formulaire de contact (uniquement votre nom, email et message).

Les données transmises via le formulaire de contact sont utilisées uniquement pour répondre à votre demande et ne sont pas conservées au-delà du temps nécessaire au traitement de votre demande.

Vous pouvez à tout moment demander la suppression de vos données en me contactant à l'adresse : ntchangageorges@gmail.com

Ce site n'utilise pas de cookies de tracking ni de cookies publicitaires.`,
      section6Title: "6. Droit applicable",
      section6Content: `Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.`,
      backToHome: "Retour à l'accueil",
    },
    en: {
      title: "Legal Notices",
      lastUpdate: "Last updated: April 2026",
      section1Title: "1. Website Editor",
      section1Content: `The Georges NTCHANGA portfolio website is edited by:

Georges NTCHANGA
Email: ntchangageorges@gmail.com
Phone: Available upon request

This website is a personal portfolio presenting my skills and professional achievements as a web/mobile developer student.`,
      section2Title: "2. Hosting",
      section2Content: `This website is hosted by:

Vercel Inc.
4400 Barranca Pkwy
Irvine, CA 92604
United States

Website: https://vercel.com`,
      section3Title: "3. Intellectual Property",
      section3Content: `All content present on this website (texts, images, logos, graphics, source code) is protected by copyright and intellectual property rights.

Any reproduction, representation, modification, publication or adaptation of all or part of the elements of the site is prohibited without prior written authorization from the author.

Trademarks and logos present on this website are the property of their respective owners.`,
      section4Title: "4. Liability",
      section4Content: `Information provided on this site is for informational purposes only. The author strives to ensure the accuracy of the information on the site but cannot guarantee the absence of errors or omissions.

The author cannot be held responsible for the use that could be made of the information contained on this site.

External links on this site to other websites are provided for documentary purposes and do not constitute endorsement of these sites.`,
      section5Title: "5. Personal Data Protection (GDPR)",
      section5Content: `This website does not collect personal data through forms other than the contact form (only your name, email and message).

Data transmitted via the contact form is used solely to respond to your request and is not retained beyond the time necessary to process your request.

You can request deletion of your data at any time by contacting me at: ntchangageorges@gmail.com

This website does not use tracking cookies or advertising cookies.`,
      section6Title: "6. Applicable Law",
      section6Content: `These legal notices are governed by French law. In case of dispute, French courts will have sole jurisdiction.`,
      backToHome: "Back to home",
    }
  };

  const c = content[language] || content.fr;

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isScroll={isScroll} />
      
      <div className="min-h-screen pt-24 px-[12%] pb-12">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white mb-8 transition-colors"
          >
            ← {c.backToHome}
          </Link>

          <h1 className="text-4xl md:text-5xl font-Ovo font-bold mb-4">{c.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-12">{c.lastUpdate}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-Ovo font-bold mb-4 text-blue-600 dark:text-blue-400">{c.section1Title}</h2>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {c.section1Content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-Ovo font-bold mb-4 text-blue-600 dark:text-blue-400">{c.section2Title}</h2>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {c.section2Content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-Ovo font-bold mb-4 text-blue-600 dark:text-blue-400">{c.section3Title}</h2>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {c.section3Content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-Ovo font-bold mb-4 text-blue-600 dark:text-blue-400">{c.section4Title}</h2>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {c.section4Content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-Ovo font-bold mb-4 text-blue-600 dark:text-blue-400">{c.section5Title}</h2>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {c.section5Content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-Ovo font-bold mb-4 text-blue-600 dark:text-blue-400">{c.section6Title}</h2>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {c.section6Content}
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

import Footer from '@/app/components/Footer';

export default LegalMentions;