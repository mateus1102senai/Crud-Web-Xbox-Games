import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg border-b-4 border-green-500">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-green-400 transition-colors flex items-center gap-2">
          <span className="text-green-500">🎮</span>
          Xbox Games
        </Link>
        <div className="flex flex-wrap gap-4">
          <Link href="/" className="hover:text-green-400 transition-colors px-3 py-2 rounded-lg hover:bg-gray-800">
            Home
          </Link>
          <Link href="/apiinfo" className="hover:text-green-400 transition-colors px-3 py-2 rounded-lg hover:bg-gray-800">
            API Info
          </Link>
          <Link href="/games" className="hover:text-green-400 transition-colors px-3 py-2 rounded-lg hover:bg-gray-800">
            Jogos
          </Link>
          <Link href="/games/create" className="bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-lg font-semibold">
            + Novo Jogo
          </Link>
        </div>
      </div>
    </nav>
  );
}