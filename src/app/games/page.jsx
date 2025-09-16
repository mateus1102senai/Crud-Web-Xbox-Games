import Link from "next/link";

async function getGames() {
  const res = await fetch("https://api.sampleapis.com/xbox/games", { cache: "no-store" });
  if (!res.ok) throw new Error("Erro ao buscar jogos");
  return res.json();
}

export default async function GamesList() {
  let games = [];
  try {
    games = await getGames();
  } catch (e) {
    return <div className="text-red-600">Erro ao carregar jogos.</div>;
  }
  return (
    <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Jogos Xbox</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {games.slice(0, 12).map((game) => (
          <div key={game.id} className="bg-white rounded shadow p-4 flex flex-col items-center">
            <img src={game.image} alt={game.title} className="w-32 h-32 object-cover rounded mb-2" />
            <h2 className="font-semibold text-lg mb-1 text-center">{game.title}</h2>
            <p className="text-gray-600 text-sm mb-2 text-center">{game.genre}</p>
            <Link href={`/games/${game.id}`} className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded transition-colors">Detalhes</Link>
          </div>
        ))}
      </div>
      <Link href="/" className="mt-8 text-blue-700 underline">Voltar à Home</Link>
    </main>
  );
}
