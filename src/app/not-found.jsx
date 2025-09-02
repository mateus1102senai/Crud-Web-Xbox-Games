export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <h1 className="text-3xl font-bold text-red-700 mb-2">Página não encontrada 😢</h1>
      <p className="mb-4 text-red-500">O conteúdo que você procura não existe ou foi removido.</p>
      <a href="/" className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700">Voltar à Home</a>
    </main>
  );
}
