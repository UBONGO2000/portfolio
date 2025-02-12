import { Outfit,Ovo} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Georges NTCHANGA",
  description: "Portfolio de NTCHANGA NGUETNIANG, Etudiant Développeur Web/Mobile Full-Stack.Recherche stage à Toulouse et télétravail.",
  keywords:"développeur web, développeur mobile, full-stack, react, node.js, mongodb, stage developpement web, toulouse, télétravail, portfolio, NTCHANGA NGUETNIANG, IPI Toulouse, MERN Stack, javascript, python, SQL, python, java, php, C++, Symfony, Angular",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrool-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
