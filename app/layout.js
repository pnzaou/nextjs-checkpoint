import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header>
            <nav className="flex justify-evenly bg-indigo-950 h-14 items-center shadow-md fixed top-0 inset-x-0 w-full z-50">
                <div className="">
                    <p className="text-white font-bold text-xl">Perrin<span className="text-red-800">.</span>Portfolio</p>
                </div>
                <div>
                    <ul className="flex list-none">
                        <li className="px-4 text-white font-bold"><Link href='/'>Accueil</Link></li>
                        <li className="px-4 text-white"><Link href="/skills">Compétences</Link></li>
                        <li className="px-4 text-white"><Link href="/projets">Projets</Link></li>
                        <li className="px-4 text-white"><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
        <main className="h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
