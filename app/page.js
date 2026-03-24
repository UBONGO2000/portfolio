'use client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useDarkMode } from "./context/DarkModeContext";
import { projects } from "@/data/projects";

export default function Home() {
  const { isDarkMode, setIsDarkMode, isScroll } = useDarkMode();

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isScroll={isScroll} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Social />
      <Work projects={projects} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
