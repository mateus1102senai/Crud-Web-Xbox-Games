import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
        <div className="bg-gray-800 border border-green-500 rounded-xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-2 text-green-400">Turma: 2TDS2</h1>
          <h2 className="text-xl font-semibold mb-2 text-gray-300">Escola: SENAI VALINHOS</h2>
          <h3 className="text-lg font-medium mb-4 text-gray-400">Aluno: Mateus Marcelino</h3>
          <div className="mb-4">
            <Image
              src="https://avatars.githubusercontent.com/u/158166706?v=4"
              alt="Avatar do Aluno - Mateus Marcelino"
              width={120}
              height={120}
              className="rounded-full border-4 border-green-500 shadow-lg object-cover"
            />
          </div>
          <blockquote className="italic text-center text-green-300 mt-2">
            &ldquo;Power Your Dreams&rdquo; - O Xbox conecta jogadores ao redor do mundo.<br />
            <span className="text-sm text-gray-400">— Xbox Official</span>
          </blockquote>
          
          <div className="mt-6 flex flex-col gap-3 w-full">
            <Link href="/games" className="bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg transition-colors font-semibold border border-green-500">
              🎮 Ver Jogos Xbox
            </Link>
            <Link href="/apiinfo" className="bg-gray-700 hover:bg-gray-600 text-white text-center py-3 px-4 rounded-lg transition-colors font-semibold border border-gray-600">
              📋 Informações da API
            </Link>
            <Link href="/games/create" className="bg-green-500 hover:bg-green-600 text-white text-center py-3 px-4 rounded-lg transition-colors font-semibold border border-green-400">
              ➕ Cadastrar Novo Jogo
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
