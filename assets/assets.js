import logo from './logo.png';
import logo_dark from './logo_dark.png';
import my from './moi.jpg';
import header_bg_color from './header-bg-color.png';
import mail_icon from './mail_icon.png'
import { FaCode } from "react-icons/fa6";
import { PiGraduationCap } from "react-icons/pi";
import { PiSuitcaseSimpleLight } from "react-icons/pi";

export const assets = {
    logo_dark,
    logo,
    my,
    header_bg_color,
    mail_icon,
};

export const workData = [
    {
        id: 'covid-alert',
        title: 'Covid-alert',
        description: "site web sur la sensibilization sur le COVID",
        image: "./covp.png",
        github:'https://github.com/UBONGO2000/COVID-Project',
        view:'view',
        link:'https://covid-project-three.vercel.app/',
        demo: 'https://covid-project-three.vercel.app/',
        tec: ['HTML' , 'Tailwind CSS', 'Angular'],
        fullDescription: {
            fr: "Covid-Alert est un site web de sensibilisation sur le COVID-19. Il fournit des informations actualisées sur la pandémie, les symptômes, les mesures de prévention et les ressources utiles. Le projet a été développé avec Angular pour le frontend et utilise une architecture moderne avec des composants réutilisables.",
            en: "Covid-Alert is a website for COVID-19 awareness. It provides updated information on the pandemic, symptoms, preventive measures, and useful resources. The project was developed with Angular for the frontend and uses a modern architecture with reusable components."
        },
        features: {
            fr: [
                "Tableau de bord avec statistiques en temps réel",
                "Informations sur les symptômes et la prévention",
                "Carte interactive des zones à risque",
                "Ressources et liens utiles"
            ],
            en: [
                "Dashboard with real-time statistics",
                "Information on symptoms and prevention",
                "Interactive map of risk zones",
                "Useful resources and links"
            ]
        },
        challenges: {
            fr: "Gestion des données en temps réel et conception d'une interface utilisateur intuitive pour présenter des informations complexes.",
            en: "Managing real-time data and designing an intuitive user interface to present complex information."
        }
    },
    {
        id: 'landing-trip',
        title: 'Landing-trip',
        description: 'Landingpage pour un site de voyage',
        image: '/trip.png',
        github: 'https://github.com/UBONGO2000/MES-PROJETS/tree/master/burgerphp',
        view:'view',
        tec: ['HTML' , 'Tailwind CSS'],
        link:'https://vercel.com/ubongo2000s-projects/landing-trip',
        demo: 'https://vercel.com/ubongo2000s-projects/landing-trip',
        fullDescription: {
            fr: "Landing-Trip est une page d'atterrissage moderne et attrayante pour un site de voyage. Elle présente des destinations populaires, des offres spéciales et incite les utilisateurs à explorer et à réserver leurs prochaines vacances.",
            en: "Landing-Trip is a modern and attractive landing page for a travel website. It showcases popular destinations, special offers, and encourages users to explore and book their next vacation."
        },
        features: {
            fr: [
                "Design moderne et responsive",
                "Galerie de destinations",
                "Section des offres spéciales",
                "Formulaire de contact simple"
            ],
            en: [
                "Modern and responsive design",
                "Destination gallery",
                "Special offers section",
                "Simple contact form"
            ]
        },
        challenges: {
            fr: "Création d'un design visuellement attrayant tout en garantissant des performances optimales et une accessibilité maximale.",
            en: "Creating a visually appealing design while ensuring optimal performance and maximum accessibility."
        }
    },
    {
        id: 'virtualg',
        title: 'VirtualG',
        description: "Plateforme fictive pour virtualisation.",
        image: '/virtualG.png',
        github:'https://github.com/UBONGO2000/VIRTUALG',
        view:'view',
        tec: ['HTML','React js' , 'Tailwind CSS', 'Lucide react'],
        link:'https://virtualg.vercel.app/',
        demo: 'https://virtualg.vercel.app/',
        fullDescription: {
            fr: "VirtualG est une plateforme fictive de virtualisation permettant aux utilisateurs de découvrir et d'explorer des environnements virtuels. Le projet démontre des compétences en React et en création d'interfaces utilisateur modernes.",
            en: "VirtualG is a fictional virtualization platform that allows users to discover and explore virtual environments. The project demonstrates skills in React and creating modern user interfaces."
        },
        features: {
            fr: [
                "Interface utilisateur moderne avec React",
                "Navigation fluide entre les environnements",
                "Animations et transitions fluides",
                "Design responsive"
            ],
            en: [
                "Modern user interface with React",
                "Smooth navigation between environments",
                "Smooth animations and transitions",
                "Responsive design"
            ]
        },
        challenges: {
            fr: "Implémentation d'une interface utilisateur réactive et fluide avec React et gestion des états complexes.",
            en: "Implementing a responsive and fluid user interface with React and managing complex states."
        }
    },
    
    {
        id: 'blog-landingpage',
        title:'Blog-landingpage',
        description:"landing page pour blog avec trie d'articles",
        image:'/blog.png',
        github:'https://github.com/UBONGO2000/Blog',
        view:'view',
        tec: ['HTML' , 'tailwind css'],
        link:'https://blog-ten-plum-60.vercel.app/',
        demo: 'https://blog-ten-plum-60.vercel.app/',
        fullDescription: {
            fr: "Blog-Landingpage est une page d'atterrissage pour un blog avec fonctionnalité de tri d'articles. Elle permet aux utilisateurs de naviguer facilement parmi les articles et de trouver le contenu qui les intéresse.",
            en: "Blog-Landingpage is a landing page for a blog with article sorting functionality. It allows users to easily browse through articles and find content that interests them."
        },
        features: {
            fr: [
                "Système de filtrage par catégorie",
                "Tri des articles par date et popularité",
                "Design épuré et moderne",
                "Animations de transition"
            ],
            en: [
                "Category filtering system",
                "Sorting articles by date and popularity",
                "Clean and modern design",
                "Transition animations"
            ]
        },
        challenges: {
            fr: "Implémentation d'un système de filtrage et de tri performant sans rechargement de page.",
            en: "Implementing an efficient filtering and sorting system without page reload."
        }
    },{
        id: 'flexneat',
        title:'flexneat',
        description:"Création d'une barre de recherche de film en utilisant l'api 'tvmaze' ",
        image:'/flex.png',
        github:'https://github.com/UBONGO2000/flexneat',
        view:'view',
        tec:['HTML' , 'CSS', 'jquery'],
        link:'https://flexneat.vercel.app/',
        demo: 'https://flexneat.vercel.app/',
        fullDescription: {
            fr: "FlexNeat est une application de recherche de films utilisant l'API TVMaze. Elle permet aux utilisateurs de rechercher des séries TV et des films, d'afficher des informations détaillées et de créer une liste de favoris.",
            en: "FlexNeat is a movie search application using the TVMaze API. It allows users to search for TV shows and movies, display detailed information, and create a favorites list."
        },
        features: {
            fr: [
                "Recherche en temps réel via l'API TVMaze",
                "Affichage des détails des séries et films",
                "Liste de favoris",
                "Interface utilisateur intuitive"
            ],
            en: [
                "Real-time search via TVMaze API",
                "Display of TV show and movie details",
                "Favorites list",
                "Intuitive user interface"
            ]
        },
        challenges: {
            fr: "Intégration efficace de l'API REST et gestion des requêtes asynchrones avec jQuery.",
            en: "Efficient integration of the REST API and handling asynchronous requests with jQuery."
        }
    },
    {
        id: 'bookingroom',
        title:'BookingRoom',
        description:"Application Spring Boot pour la réservation de salles",
        image:'/bookingroom.png',
        github:'https://github.com/UBONGO2000/BookingRoom/',
        view:'View',
        tec:['HTML' , 'CSS', 'thymeleaf','java','spring boot','postgresql','docker','spring-test','spring-security'],
        link:'https://bookingroom-qv0y.onrender.com/',
        demo: 'https://bookingroom-qv0y.onrender.com/',
        fullDescription: {
            fr: "BookingRoom est une application complète de réservation de salles développée avec Spring Boot. Elle offre une authentification sécurisée, un espace administrateur, une gestion complète des réservations et une recherche avancée. Le projet utilise PostgreSQL comme base de données et Docker pour le déploiement.",
            en: "BookingRoom is a complete room booking application developed with Spring Boot. It offers secure authentication, an admin space, complete reservation management, and advanced search. The project uses PostgreSQL as the database and Docker for deployment."
        },
        features: {
            fr: [
                "Authentification sécurisée avec Spring Security",
                "Espace administrateur complet",
                "Gestion des réservations (création, modification, annulation)",
                "Recherche avancée de salles",
                "Dockerisation de l'application"
            ],
            en: [
                "Secure authentication with Spring Security",
                "Complete admin space",
                "Reservation management (creation, modification, cancellation)",
                "Advanced room search",
                "Dockerization of the application"
            ]
        },
        challenges: {
            fr: "Implémentation d'un système d'authentification robuste et gestion des conflits de réservations simultanées.",
            en: "Implementing a robust authentication system and handling simultaneous reservation conflicts."
        }
    },


]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: <FaCode/>, iconDark: assets.code_icon_dark, title: 'Languages , Frameworks & library', description: 'HTML, CSS, JavaScript, python, JAVA, PHP, C++, Tailwindcss, Angular, SCSS, React, Next Js' },
    { icon: <PiGraduationCap/>, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Université de yaoundé 1, IPI de Toulouse ' },
    // { icon: <PiSuitcaseSimpleLight/>, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];
