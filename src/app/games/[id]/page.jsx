import axios from 'axios';
import Link from 'next/link';

export default async function GameDetail({ params }) {
  const { id } = params;
  const res = await axios.get(`https://api.sampleapis.com/xbox/games/${id}`);
  const game = res.data;

  if (!game || !game.title) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-700 mb-2">Jogo não encontrado</h1>
        <Link href="/games" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Voltar à lista</Link>
      </main>
    );
  }

  return (
    <main className="max-w-xl mx-auto p-8 bg-white rounded shadow mt-10">
      <img src={game.imageUrl} alt={game.title} className="w-48 h-48 object-cover rounded mb-4 mx-auto" />
      <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
      <p className="mb-2"><strong>Gênero:</strong> {game.genre}</p>
      <p className="mb-2"><strong>Desenvolvedor:</strong> {game.developer}</p>
      <p className="mb-2"><strong>Lançamento:</strong> {game.releaseDate}</p>
      <Link href="/games" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Voltar à lista</Link>
    </main>
  );
}
