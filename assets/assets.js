import logo from './logo.png';
import my from './moi.jpg';
import { FaCode } from "react-icons/fa6";
import { PiGraduationCap } from "react-icons/pi";
import { PiSuitcaseSimpleLight } from "react-icons/pi";

export const assets = {
    logo,
    my,
};

export const workData = [
    {
        title: 'Covid-alert',
        description: "Creation d'un site web sur la censibilisation sur le COVID ",
        image: "./covp.png",
        github:'https://github.com/UBONGO2000/COVID-Project',
        view:'view',
        link:'https://covid-project-three.vercel.app/home',
        tec: " technos :  HTML, CSS(tailwind css), javascript(Angular)",
    },
    {
        title: 'Landing-trip',
        description: 'Creattion d\'une landingpage pour un site de voyage ',
        image: '/trip.png',
        github: 'https://github.com/UBONGO2000/MES-PROJETS/tree/master/burgerphp',
        view:'view',
        tec: " technos :  HTML, CSS(tailwind css)",
        link:'https://vercel.com/ubongo2000s-projects/landing-trip'
    },
    {
        title: 'VirtualG',
        description: "Creation d'une plateforme fictive pour virtualisation.",
        image: '/virtualG.png',
        github:'https://github.com/UBONGO2000/VitualG',
        view:'view',
        tec: "technos: React js, Lucide react, tailwindcss",
        //link:''
    },
    // {
    //     title: 'UJUMBE : sociale media ',
    //     description: "Ce projet est creation d'un reseau sociale fictif type facebook creer avec le framwork python DJANGO",
    //     image: '/work-4.png',
    //     github:'https://github.com/UBONGO2000/ujumbe',
    //     view: 'view',
    //     tec: " techno :  HTML, CSS, python(django)",
    //     //link:''
    // },
    {
        title:'Blog-landingpage',
        description:" Creation d'une landing page pour blog avec trie d'articles ",
        image:'/blog.png',
        github:'https://github.com/UBONGO2000/Blog',
        view:'',
        tec:'TECHNO : HTML , CSS(tailwind css)',
        link:'https://blog-ten-plum-60.vercel.app/'
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