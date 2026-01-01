import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ilham Muhamad Suparyono | Software Engineer & Web Developer",
  description:
    "I'm Ilham, a passionate Software Engineer crafting clean, scalable, and creative web applications using modern technologies like React, Next.js, and TypeScript.",
  keywords: [
    "Ilham",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Portfolio",
  ],
  authors: [{ name: "Ilham" }],

};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={poppins.className}
      >
        
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
