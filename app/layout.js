import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { DarkModeProvider } from "./context/DarkModeContext";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Georges NTCHANGA - Développeur Web & Mobile",
  description: "Étudiant en Bachelor Développeur Web & Mobile à l'IPI Toulouse. Spécialisé en React, Angular, Spring Boot. Découvrez mon portfolio et mes projets.",
  keywords: ["développeur web", "développeur mobile", "portfolio", "React", "Angular", "Spring Boot", "JavaScript", "IPI Toulouse"],
  author: "Georges NTCHANGA",
  openGraph: {
    title: "Georges NTCHANGA - Développeur Web & Mobile",
    description: "Étudiant en Bachelor Développeur Web & Mobile à l'IPI Toulouse. Spécialisé en React, Angular, Spring Boot.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-white dark:bg-darkTheme dark:text-white`}
      >
        <DarkModeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
