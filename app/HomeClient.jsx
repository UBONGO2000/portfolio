'use client';
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useDarkMode } from "./context/DarkModeContext";

const About = dynamic(() => import("./components/About"));
const Work = dynamic(() => import("./components/Work"));
const Social = dynamic(() => import("./components/Social"));
const Contact = dynamic(() => import("./components/Contact"));
const Footer = dynamic(() => import("./components/Footer"));

export default function HomeClient({ projects }) {
  const { isDarkMode, setIsDarkMode, isScroll } = useDarkMode();

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isScroll={isScroll} />
      <Header />
      <About isDarkMode={isDarkMode} />
      <Social />
      <Work projects={projects} />
      <Contact isDarkMode={isDarkMode} />
      <Footer />
    </>
  );
}
