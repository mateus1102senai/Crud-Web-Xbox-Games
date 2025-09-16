import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-2 text-blue-700">Turma: 2TDS2</h1>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Escola: SENAI VALINHOS</h2>
          <h3 className="text-lg font-medium mb-4 text-gray-600">Aluno: Mateus Marcelino</h3>
          <div className="mb-4">
            <Image
              src="/window.svg"
              alt="Avatar do Aluno"
              width={120}
              height={120}
              className="rounded-full border-4 border-blue-400 shadow-md"
            />
          </div>
          <blockquote className="italic text-center text-blue-900 mt-2">
            O sucesso é a soma de pequenos esforços repetidos dia após dia.<br />
            <span className="text-sm text-gray-500"> Robert Collier</span>
          </blockquote>
          
          <div className="mt-6 flex flex-col gap-3 w-full">
            <Link href="/games" className="bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded transition-colors">
              Ver Jogos Xbox
            </Link>
            <Link href="/apiinfo" className="bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded transition-colors">
              Informações da API
            </Link>
            <Link href="/games/create" className="bg-purple-500 hover:bg-purple-600 text-white text-center py-2 px-4 rounded transition-colors">
              Cadastrar Novo Jogo
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
