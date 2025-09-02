import axios from 'axios';
import Link from 'next/link';

async function getGames() {
  try {
    const res = await axios.get('https://api.sampleapis.com/xbox/games');
    console.log('API Response:', res.data.slice(0, 2)); // Debug: mostrar primeiros 2 jogos
    return res.data;
  } catch (error) {
    console.error('Erro na API:', error);
    return [];
  }
}

export default async function GamesPage() {
  const games = await getGames();
  
  if (!games || games.length === 0) {
    return (
      <main className="p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">Erro ao carregar jogos</h1>
        <p>Verifique se a API está funcionando</p>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Xbox Games ({games.length} jogos)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.slice(0, 12).map((game) => (
          <div key={game.id} className="bg-white rounded shadow p-4 border">
            <h2 className="text-xl font-bold mb-2 text-blue-600">{game.name}</h2>
            <div className="space-y-2 text-sm">
              <p><strong>Gênero:</strong> {game.genre && game.genre.length ? game.genre.join(', ') : 'N/A'}</p>
              <p><strong>Desenvolvedores:</strong> {game.developers && game.developers.length ? game.developers.join(', ') : 'N/A'}</p>
              <p><strong>Publicadoras:</strong> {game.publishers && game.publishers.length ? game.publishers.join(', ') : 'N/A'}</p>
              <div>
                <strong>Lançamento:</strong>
                <ul className="list-disc ml-4 text-xs">
                  <li>Japão: {game.releaseDates?.Japan || 'N/A'}</li>
                  <li>América do Norte: {game.releaseDates?.NorthAmerica || 'N/A'}</li>
                  <li>Europa: {game.releaseDates?.Europe || 'N/A'}</li>
                  <li>Austrália: {game.releaseDates?.Australia || 'N/A'}</li>
                </ul>
              </div>
            </div>
            <Link href={`/games/${game.id}`} className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
