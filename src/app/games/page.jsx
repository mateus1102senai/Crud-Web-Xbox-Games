import axios from 'axios';
import Link from 'next/link';

async function getGames() {
  try {
    const res = await axios.get('https://api.sampleapis.com/xbox/games');
    console.log('API Response:', res.data.slice(0, 2));
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
        <div className="vidro-profissional rounded-xl p-12 text-center max-w-md">
          <div className="text-4xl mb-4 text-slate-400">⚠️</div>
          <h1 className="text-2xl font-semibold text-white mb-4">Erro ao carregar jogos</h1>
          <p className="text-slate-400 mb-6">Verifique se a API está funcionando corretamente</p>
          <Link href="/" className="botao-profissional px-6 py-3 text-white rounded-lg font-medium inline-block">
            Voltar ao Início
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho profissional */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
            Coleção <span className="font-semibold texto-gradiente-sutil">Xbox Games</span>
          </h1>
          <p className="text-slate-400 text-lg mb-6">
            Explore nossa biblioteca com {games.length} títulos cuidadosamente catalogados
          </p>
          <div className="inline-block vidro-profissional rounded-full px-6 py-2 border border-white/10">
            <span className="text-slate-300 font-medium text-sm">{games.length} jogos disponíveis</span>
          </div>
        </div>

        {/* Grid profissional */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.slice(0, 12).map((game) => (
            <div 
              key={game.id} 
              className="card-elegante group hover:translate-y-[-8px] transition-all duration-500"
            >
              {/* Cabeçalho do card */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white line-clamp-2 flex-1 mr-3">
                    {game.name}
                  </h3>
                  <div className="bg-slate-800/50 border border-white/10 rounded px-2 py-1 text-xs text-slate-300 font-mono">
                    #{game.id}
                  </div>
                </div>
                
                {/* Metadados organizados */}
                <div className="space-y-3">
                  {/* Gêneros */}
                  {game.genre && game.genre.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-slate-400 font-medium text-sm">Gêneros:</span>
                      <div className="flex flex-wrap gap-1">
                        {game.genre.slice(0, 3).map((genero, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded text-blue-200 text-xs font-medium"
                          >
                            {genero}
                          </span>
                        ))}
                        {game.genre.length > 3 && (
                          <span className="px-2 py-1 bg-slate-500/20 border border-slate-400/30 rounded text-slate-300 text-xs">
                            +{game.genre.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Desenvolvedores */}
                  {game.developers && game.developers.length > 0 && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-slate-400 font-medium">Desenvolvedores:</span>
                      <span className="text-white bg-slate-800/40 px-2 py-1 rounded border border-white/10 text-xs truncate">
                        {game.developers[0]}
                        {game.developers.length > 1 && ` (+${game.developers.length - 1})`}
                      </span>
                    </div>
                  )}

                  {/* Publicadoras */}
                  {game.publishers && game.publishers.length > 0 && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-slate-400 font-medium">Publicadoras:</span>
                      <span className="text-white bg-slate-800/40 px-2 py-1 rounded border border-white/10 text-xs truncate">
                        {game.publishers[0]}
                        {game.publishers.length > 1 && ` (+${game.publishers.length - 1})`}
                      </span>
                    </div>
                  )}

                  {/* Datas de lançamento */}
                  {game.releaseDates && (
                    <div className="space-y-2">
                      <span className="text-slate-400 font-medium text-sm">Lançamento:</span>
                      <div className="grid grid-cols-2 gap-2">
                        {game.releaseDates.NorthAmerica && (
                          <div className="bg-slate-800/30 border border-white/5 rounded p-2">
                            <div className="text-slate-400 text-xs">América do Norte</div>
                            <div className="text-white text-xs font-medium">{game.releaseDates.NorthAmerica}</div>
                          </div>
                        )}
                        {game.releaseDates.Europe && (
                          <div className="bg-slate-800/30 border border-white/5 rounded p-2">
                            <div className="text-slate-400 text-xs">Europa</div>
                            <div className="text-white text-xs font-medium">{game.releaseDates.Europe}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Rodapé do card */}
              <div className="p-6 pt-4 border-t border-white/10 mt-auto">
                <Link 
                  href={`/games/${game.id}`}
                  className="botao-profissional w-full text-center py-2.5 text-white rounded-lg font-medium inline-block"
                >
                  Ver Detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas profissionais */}
        <div className="mt-16 text-center">
          <div className="vidro-profissional rounded-xl p-8 max-w-2xl mx-auto border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">Estatísticas da Coleção</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {games.length}
                </div>
                <div className="text-slate-400 text-sm">Total de Jogos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {new Set(games.flatMap(game => game.genre || [])).size}
                </div>
                <div className="text-slate-400 text-sm">Gêneros Únicos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {new Set(games.flatMap(game => game.developers || [])).size}
                </div>
                <div className="text-slate-400 text-sm">Desenvolvedoras</div>
              </div>
            </div>
          </div>

          {/* Indicador de paginação */}
          <div className="mt-8">
            <div className="vidro-profissional rounded-full px-6 py-3 inline-block border border-white/10">
              <span className="text-slate-300 text-sm">
                Exibindo {Math.min(12, games.length)} de {games.length} jogos
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
