'use client';
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useDarkMode } from "./context/DarkModeContext";
import { projects } from "@/data/projects";

const About = dynamic(() => import("./components/About"));
const Learn = dynamic(() => import("./components/Learn"));
const Work = dynamic(() => import("./components/Work"));
const Social = dynamic(() => import("./components/Social"));
const Contact = dynamic(() => import("./components/Contact"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  const { isDarkMode, setIsDarkMode, isScroll } = useDarkMode();

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isScroll={isScroll} />
      <Header />
      <About isDarkMode={isDarkMode} />
      <Learn projects={projects} />
      <Social />
      <Work projects={projects} />
      <Contact isDarkMode={isDarkMode} />
      <Footer />
    </>
  );
}
