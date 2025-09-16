export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 to-red-300 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2 text-red-700">Página não encontrada 😢</h1>
        <p className="text-gray-700 mb-6 text-center">O conteúdo que você procura não existe ou foi removido.</p>
        <a href="/" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded transition-colors">Voltar à Home</a>
      </div>
    </main>
  );
}
