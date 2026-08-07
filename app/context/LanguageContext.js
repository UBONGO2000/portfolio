'use client'
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      work: 'Mes projets',
      contact: 'Contact',
      contactMe: 'Me contacter',
    },
    header: {
      greeting: "Bonjour, je suis Georges NTCHANGA",
      role: 'Étudiant développeur Web & Mobile',
      description: "Étudiant en <b>Bachelor Développeur Web & Mobile</b> à l'IPI Toulouse, je recherche une <b>alternance de 1 à 2 ans</b> en développement logiciel pour approfondir mes compétences suivant le rythme de <b>3 semaines en entreprise</b> et 1 semaine en école. Je suis mobile sur <b>Toulouse, Paris, Lyon, Lille, Lannion et leurs environs</b>.",
      contactMe: 'Me contacter',
      myResume: 'Mon CV',
    },
    about: {
      title: 'À propos de moi',
      introduction: 'Introduction',
      description: "Curieux de tout ce qui touche à l'informatique, j'aime comprendre comment les outils numériques sont conçus et comment ils peuvent répondre à des besoins concrets. Je suis particulièrement passionné par le développement logiciel, du frontend au backend, et mon parcours en mathématiques nourrit mon goût pour la logique, l'analyse et la résolution de problèmes, avec une curiosité qui s'étend aussi aux métiers de la data.",
      languages: 'LANGAGES',
      backend: 'BACKEND',
      frontend: 'FRONTEND',
      databases: 'BASES DE DONNÉES',
      tools: 'OUTILS & DEVOPS',
      education: 'FORMATIONS',
      university: "Université de Yaoundé 1",
      bachelorMath: "Licence de mathématiques",
      years: "2020-2023",
      ipi: "IPI - Toulouse",
      webDev: "Bachelor développeur web/mobile",
      present: "2023-présent",
    },
    work: {
      title: 'Mes projets',
      subtitle: 'Portfolio',
      description: "Des premières pages HTML/CSS aux applications backend, voici une sélection de projets qui jalonnent mon apprentissage, chacun m'ayant permis d'approfondir une technologie ou une problématique différente.",
      viewProject: 'Voir le projet',
      github: 'GitHub',
      details: 'Détails',
    },
    learn: {
      title: 'Ce que j\'ai appris',
      description: 'Au cours de mes projets, j\'ai acquis des compétences techniques et transversales qui vont au-delà de la simple programmation.',
    },
    contact: {
      title: 'Contactez-moi',
      subtitle: 'Restons en contact',
      description: "Vous avez un projet, une opportunité d'alternance ou simplement envie d'échanger ? N'hésitez pas à m'écrire.",
      name: 'Entrez votre nom',
      email: 'Entrez votre email',
      message: 'Entrez votre message',
      submit: 'Envoyer',
      sending: 'Envoi en cours...',
      success: 'Formulaire envoyé avec succès !',
    },
    footer: {
      rights: 'Tous droits réservés.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      legal: 'Mentions légales',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About me',
      work: 'My Work',
      contact: 'Contact',
      contactMe: 'Contact me',
    },
    header: {
      greeting: "Hi, I'm Georges NTCHANGA",
      role: 'Web & Mobile Developer Student',
      description: "Studying <b>Web & Mobile Development</b> at IPI Toulouse, I'm looking for a <b>1 to 2-year work-study placement</b> in software development to deepen my skills on a schedule of <b>3 weeks in a company</b> and 1 week at school. I am mobile across <b>Toulouse, Paris, Lyon, Lille, Lannion and their surrounding areas</b>.",
      contactMe: 'Contact me',
      myResume: 'My resume',
    },
    about: {
      title: 'About me',
      introduction: 'Introduction',
      description: "Curious about everything related to computer science, I enjoy understanding how digital tools are designed and how they can solve real needs. I am especially passionate about software development, from frontend to backend, and my mathematics background strengthens my taste for logic, analysis and problem solving, with a curiosity that also extends to data-related roles.",
      languages: 'LANGUAGES',
      backend: 'BACKEND',
      frontend: 'FRONTEND',
      databases: 'DATABASES',
      tools: 'TOOLS & DEVOPS',
      education: 'EDUCATION',
      university: 'University of Yaoundé 1',
      bachelorMath: "Bachelor's degree in mathematics",
      years: "2020-2023",
      ipi: "IPI - Toulouse",
      webDev: "Bachelor web/mobile developer",
      present: "2023-present",
    },
    work: {
      title: 'My Projects',
      subtitle: 'My portfolio',
      description: "From first HTML/CSS pages to backend applications, here's a selection of projects that mark my learning path, each one deepening my understanding of a different technology or challenge.",
      viewProject: 'View Project',
      github: 'GitHub',
      details: 'Details',
    },
    learn: {
      title: 'What I\'ve Learned',
      description: 'Through my projects, I\'ve gained technical and transferable skills that go beyond simple programming.',
    },
    contact: {
      title: 'Get in touch',
      subtitle: "Let's connect",
      description: "Got a project, a work-study opportunity, or just want to chat? My inbox is open.",
      name: 'Enter your name',
      email: 'Enter your email',
      message: 'Enter your message',
      submit: 'Send message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
    },
    footer: {
      rights: 'All rights reserved.',
      github: 'Github',
      linkedin: 'Linkedin',
      legal: 'Legal notice',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
