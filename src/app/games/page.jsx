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
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="vidro rounded-2xl p-12 text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-3xl font-bold text-white mb-4">Ops! Erro ao carregar jogos</h1>
          <p className="text-white/70 mb-6">Verifique se a API está funcionando corretamente</p>
          <Link href="/" className="botao-moderno px-6 py-3 text-white rounded-full font-semibold">
            🏠 Voltar ao Início
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho com estatísticas */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animacao-float">
            🎮 <span className="texto-gradiente">Coleção Xbox Games</span>
          </h1>
          <p className="text-white/70 text-lg mb-6">
            Descubra nossa incrível coleção com {games.length} jogos fantásticos
          </p>
          <div className="inline-block vidro rounded-full px-6 py-3">
            <span className="text-white font-semibold">✨ {games.length} jogos disponíveis</span>
          </div>
        </div>

        {/* Grid de jogos modernizado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {games.slice(0, 12).map((game, index) => (
            <div 
              key={game.id} 
              className="vidro rounded-3xl p-6 card-flutuante group relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Badge do ID */}
              <div className="absolute top-4 right-4 bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-white/70 text-sm font-bold">
                #{game.id}
              </div>

              <div className="space-y-4">
                {/* Título com hover effect */}
                <h2 className="text-xl font-bold text-white leading-tight group-hover:texto-gradiente transition-all duration-300">
                  {game.name}
                </h2>

                {/* Informações em pills modernas */}
                <div className="space-y-3">
                  {/* Gênero */}
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🏷️</span>
                    <div className="flex flex-wrap gap-1">
                      {game.genre && game.genre.length ? 
                        game.genre.map((g, i) => (
                          <span key={i} className="bg-purple-500/30 text-purple-200 px-2 py-1 rounded-full text-xs font-medium">
                            {g}
                          </span>
                        )) : 
                        <span className="bg-gray-500/30 text-gray-300 px-2 py-1 rounded-full text-xs">Sem gênero</span>
                      }
                    </div>
                  </div>

                  {/* Desenvolvedores */}
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">👨‍💻</span>
                    <div className="flex flex-wrap gap-1">
                      {game.developers && game.developers.length ? 
                        game.developers.slice(0, 2).map((dev, i) => (
                          <span key={i} className="bg-blue-500/30 text-blue-200 px-2 py-1 rounded-full text-xs font-medium">
                            {dev}
                          </span>
                        )) : 
                        <span className="bg-gray-500/30 text-gray-300 px-2 py-1 rounded-full text-xs">N/A</span>
                      }
                      {game.developers && game.developers.length > 2 && (
                        <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                          +{game.developers.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Publicadoras */}
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🏢</span>
                    <div className="flex flex-wrap gap-1">
                      {game.publishers && game.publishers.length ? 
                        game.publishers.slice(0, 2).map((pub, i) => (
                          <span key={i} className="bg-green-500/30 text-green-200 px-2 py-1 rounded-full text-xs font-medium">
                            {pub}
                          </span>
                        )) : 
                        <span className="bg-gray-500/30 text-gray-300 px-2 py-1 rounded-full text-xs">N/A</span>
                      }
                      {game.publishers && game.publishers.length > 2 && (
                        <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">
                          +{game.publishers.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Datas de lançamento compactas */}
                  <div className="bg-white/10 rounded-2xl p-3 space-y-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xl">📅</span>
                      <span className="text-white/80 font-medium text-sm">Lançamentos</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="text-white/60">🇺🇸 América</div>
                        <div className="text-white font-medium truncate">{game.releaseDates?.NorthAmerica || 'N/A'}</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="text-white/60">🇪🇺 Europa</div>
                        <div className="text-white font-medium truncate">{game.releaseDates?.Europe || 'N/A'}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botão de detalhes moderno */}
                <Link href={`/games/${game.id}`}>
                  <button className="w-full botao-moderno py-3 text-white font-semibold rounded-2xl text-sm group-hover:scale-105 transition-all duration-300">
                    Ver Detalhes 🚀
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer com informações */}
        <div className="text-center mt-16 pb-8">
          <div className="vidro rounded-2xl p-6 inline-block">
            <p className="text-white/60">Exibindo {Math.min(12, games.length)} de {games.length} jogos disponíveis</p>
            <p className="text-white/40 text-sm mt-2">Dados fornecidos pela Sample APIs</p>
          </div>
        </div>
      </div>
    </main>
  );
}
