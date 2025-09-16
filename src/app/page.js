import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2 text-blue-700">Turma: 3º Ano DS</h1>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Escola: ETEC Exemplo</h2>
        <h3 className="text-lg font-medium mb-4 text-gray-600">Aluno: Seu Nome Completo</h3>
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
      </div>
    </main>
  );
}
