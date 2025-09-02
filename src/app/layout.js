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
  title: "Xbox Games - Coleção Moderna de Jogos",
  description: "Explore nossa incrível coleção de jogos Xbox com design moderno e elegante",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="vidro sticky top-0 z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-8">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                  🎮 <span className="texto-gradiente">Xbox Games</span>
                </h1>
                <div className="hidden md:flex space-x-6">
                  <Link href="/" className="text-white/80 hover:text-white transition-all duration-200 font-medium px-4 py-2 rounded-full hover:bg-white/10">
                    🏠 Início
                  </Link>
                  <Link href="/apiinfo" className="text-white/80 hover:text-white transition-all duration-200 font-medium px-4 py-2 rounded-full hover:bg-white/10">
                    📚 Sobre a API
                  </Link>
                  <Link href="/games" className="text-white/80 hover:text-white transition-all duration-200 font-medium px-4 py-2 rounded-full hover:bg-white/10">
                    🎮 Jogos
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <span className="text-white/60 text-sm bg-white/10 px-3 py-1 rounded-full">
                  💫 Powered by Sample APIs
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
