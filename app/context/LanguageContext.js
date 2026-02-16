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
      role: 'étudiant développeur web',
      description: "Dans le cadre de ma licence, je suis actuellement à la recherche d'un contrat d'alternance ou d'un stage en alternance en développement web/mobile d'une durée de 7 à 12 mois, avec un rythme de 3 semaines en entreprise et 1 semaine en école, en présentiel ou à distance, à Toulouse, Paris, Lannion, Lille et leurs environs.",
      contactMe: 'Me contacter',
      myResume: 'Mon CV',
    },
    about: {
      title: 'À propos de moi',
      introduction: 'Introduction',
      description: "Je suis un étudiant en développement web à l'IPI à Toulouse, passionné par la création de solutions web, mobiles et logicielles impactantes. J'ai hâte de mettre mes compétences en pratique et de contribuer à des projets innovants, que ce soit à distance ou dans la région de Toulouse.",
      technologies: 'TECHNOLOGIES',
      tools: 'OUTILS & LOGICIELS',
      education: 'FORMATIONS',
      university: "Université de Yaoundé 1",
      bachelorMath: "Licence de mathématiques",
      years: "2020-2023",
      ipi: "IPI - Toulouse",
      webDev: "Bachelor développeur web/mobile",
      present: "2023-present",
    },
    work: {
      title: 'Mes projets',
      subtitle: 'Portfolio',
      description: "Bienvenue sur mon portfolio de développement web ! Explorez une collection de projets démontrant mon expertise en développement web.",
      viewProject: 'Voir le projet',
      github: 'GitHub',
      details: 'Détails',
    },
    contact: {
      title: 'Contactez-moi',
      subtitle: 'Restons en contact',
      description: "J'adorerais avoir de vos nouvelles ! Si vous avez des questions, des commentaires ou des suggestions, n'hésitez pas à utiliser le formulaire ci-dessous.",
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
      role: 'web developer student',
      description: "As part of my bachelor's degree, I am currently looking for a work-study program or work-study internship in web/mobile development lasting 7 to 12 months, with a schedule of 3 weeks in the company and 1 week at school, either in person or remotely, in Toulouse, Paris, Lannion, Lille, and the surrounding areas.",
      contactMe: 'Contact me',
      myResume: 'My resume',
    },
    about: {
      title: 'About me',
      introduction: 'Introduction',
      description: "I am a web development student at the IPI in Toulouse, passionate about creating impactful web, mobile and software solutions. I look forward to putting my skills into practice and contributing to innovative projects, whether at a distance or in the Toulouse region.",
      technologies: 'TECHNOLOGIES',
      tools: 'TOOLS & SOFTWARE',
      education: 'EDUCATIONS',
      university: 'University of Yaoundé 1',
      bachelorMath: "Bachelor's degree in mathematics",
      years: "2020-2023",
      ipi: "IPI - Toulouse",
      webDev: "Bachelor web/mobile developer",
      present: "2023-present",
    },
    work: {
      title: 'My latest Work',
      subtitle: 'My portfolio',
      description: "Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in web development.",
      viewProject: 'View Project',
      github: 'GitHub',
      details: 'Details',
    },
    contact: {
      title: 'Get in touch',
      subtitle: 'Connect with me',
      description: "I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.",
      name: 'Enter your name',
      email: 'Enter your email',
      message: 'Enter your message',
      submit: 'Submit now',
      sending: 'Sending...',
      success: 'Form Submitted Successfully',
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
