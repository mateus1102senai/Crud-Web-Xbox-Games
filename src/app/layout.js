import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Xbox Games - Portfolio Profissional",
  description: "Plataforma moderna para exploração de jogos Xbox com design profissional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="vidro-profissional sticky top-0 z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-8">
                <h1 className="text-xl font-semibold text-white flex items-center gap-2">
                  <span className="text-blue-400">🎮</span> Xbox Games
                </h1>
                <div className="hidden md:flex space-x-1">
                  <Link href="/" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-white/10">
                    Início
                  </Link>
                  <Link href="/apiinfo" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-white/10">
                    API
                  </Link>
                  <Link href="/games" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-white/10">
                    Jogos
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <span className="text-slate-400 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  Sample APIs
                </span>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
