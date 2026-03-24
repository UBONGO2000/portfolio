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
      role: 'étudiant développeur web/mobile',
      description: "Étudiant en <b>Bachelor Développeur Web & Mobile</b> à l'IPI Toulouse, je recherche une <b>alternance ou un stage (2 à 6 mois)</b> en développement web/mobile pour approfondir mes compétences sur le terrain. Rythme proposé : <b>3 semaines en entreprise</b> / 1 semaine en école. Disponible sur <b>Toulouse, Paris, Lyon, Lille, Lannion</b>.",
      contactMe: 'Me contacter',
      myResume: 'Mon CV',
    },
    about: {
      title: 'À propos de moi',
      introduction: 'Introduction',
      description: "Curieux du développement web et logiciel, j'apprends en construisant des projets concrets : des pages web en HTML/CSS, des interfaces avec React, et des API backend en Spring Boot. Mon parcours en mathématiques à l'Université de Yaoundé 1 m'apporte une approche logique face aux problèmes, que je complète chaque jour à l'IPI.",
      technologies: 'TECHNOLOGIES',
      tools: 'OUTILS & LOGICIELS',
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
      description: "Des premières pages HTML/CSS aux applications backend, voici les projets qui jalonnent mon apprentissage. Chaque réalisation m'a permis de découvrir de nouvelles choses.",
      viewProject: 'Voir le projet',
      github: 'GitHub',
      details: 'Détails',
    },
    contact: {
      title: 'Contactez-moi',
      subtitle: 'Restons en contact',
      description: "Vous avez un projet, une opportunité d'alternance ou simplement envie d'échanger ? Mon formulaire est ouvert.",
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
      role: 'web/mobile developer student',
      description: "Studying <b>Web & Mobile Development</b> at IPI Toulouse, I'm looking for a <b>work-study placement or internship (2-6 months)</b> in web/mobile development to grow my skills in a real-world setting. Schedule: <b>3 weeks at work</b> / 1 week at school. Available in <b>Toulouse, Paris, Lyon, Lille, Lannion</b>.",
      contactMe: 'Contact me',
      myResume: 'My resume',
    },
    about: {
      title: 'About me',
      introduction: 'Introduction',
      description: "Curious about web and software development, I learn by building real projects: HTML/CSS web pages, interfaces with React, and backend APIs with Spring Boot. My mathematics background at the University of Yaoundé 1 gives me a logical approach to problems, which I keep developing every day at IPI.",
      technologies: 'TECHNOLOGIES',
      tools: 'TOOLS & SOFTWARE',
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
      description: "From first HTML/CSS pages to backend applications, here are the projects that mark my learning path. Each one helped me discover something new.",
      viewProject: 'View Project',
      github: 'GitHub',
      details: 'Details',
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
