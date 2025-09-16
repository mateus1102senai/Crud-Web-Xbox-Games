import Link from "next/link";

async function getGame(id) {
  const res = await fetch(`https://api.sampleapis.com/xbox/games/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Erro ao buscar jogo");
  return res.json();
}

export default async function GameDetail({ params }) {
  let game;
  try {
    game = await getGame(params.id);
  } catch (e) {
    // Chama notFound() do Next.js
    if (typeof notFound === 'function') return notFound();
    return <div className="text-red-600">Erro ao carregar jogo.</div>;
  }
  if (!game || !game.id) {
    if (typeof notFound === 'function') return notFound();
    return <div className="text-red-600">Jogo não encontrado.</div>;
  }
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col items-center">
        <img src={game.image} alt={game.title} className="w-48 h-48 object-cover rounded mb-4" />
        <h1 className="text-2xl font-bold mb-2 text-blue-700">{game.title}</h1>
        <p className="text-gray-700 mb-2"><b>Gênero:</b> {game.genre}</p>
        <p className="text-gray-700 mb-2"><b>Desenvolvedor:</b> {game.developer}</p>
        <p className="text-gray-700 mb-2"><b>Lançamento:</b> {game.releaseDate}</p>
        <p className="text-gray-700 mb-4 text-center">{game.description}</p>
        <div className="flex gap-4 mt-4">
          <Link href="/games" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Voltar à Listagem</Link>
          <Link href="/" className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded">Home</Link>
        </div>
      </div>
    </main>
  );
}
