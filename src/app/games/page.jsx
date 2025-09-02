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

        {/* Grid de cards elegantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.slice(0, 12).map((game, index) => (
            <div 
              key={game.id} 
              className="group relative card-animacao"
              style={{ 
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Card principal com efeitos elegantes */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 via-slate-900/80 to-slate-800/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                
                {/* Efeito de luz superior */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                {/* Badge ID elegante */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                    <span className="text-xs font-mono text-white/80">#{game.id}</span>
                  </div>
                </div>

                {/* Conteúdo do card */}
                <div className="p-6 relative z-10">
                  {/* Título com efeito gradiente */}
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-purple-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {game.name}
                  </h3>

                  {/* Container de informações com glass effect */}
                  <div className="space-y-4">
                    
                    {/* Gêneros com badges elegantes */}
                    {game.genre && game.genre.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-slate-300 font-medium text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                          Gêneros
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {game.genre.slice(0, 3).map((genero, index) => (
                            <span 
                              key={index}
                              className="px-2.5 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full text-blue-200 text-xs font-medium backdrop-blur-sm hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 badge-hover cursor-pointer"
                            >
                              {genero}
                            </span>
                          ))}
                          {game.genre.length > 3 && (
                            <span className="px-2.5 py-1 bg-gradient-to-r from-slate-500/20 to-gray-500/20 border border-slate-400/30 rounded-full text-slate-300 text-xs backdrop-blur-sm badge-hover cursor-pointer">
                              +{game.genre.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Desenvolvedores com estilo minimalista */}
                    {game.developers && game.developers.length > 0 && (
                      <div className="bg-slate-800/30 border border-white/5 rounded-xl p-3 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          <span className="text-slate-300 font-medium text-sm">Desenvolvedores</span>
                        </div>
                        <div className="text-white font-medium text-sm">
                          {game.developers[0]}
                          {game.developers.length > 1 && (
                            <span className="text-slate-400 ml-1">
                              +{game.developers.length - 1} outros
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Publicadoras */}
                    {game.publishers && game.publishers.length > 0 && (
                      <div className="bg-slate-800/30 border border-white/5 rounded-xl p-3 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                          <span className="text-slate-300 font-medium text-sm">Publicadoras</span>
                        </div>
                        <div className="text-white font-medium text-sm">
                          {game.publishers[0]}
                          {game.publishers.length > 1 && (
                            <span className="text-slate-400 ml-1">
                              +{game.publishers.length - 1} outras
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Datas de lançamento compactas */}
                    {game.releaseDates && (
                      <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                          <span className="text-slate-300 font-medium text-sm">Lançamentos</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {game.releaseDates.NorthAmerica && (
                            <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-2 text-center">
                              <div className="text-blue-300 font-medium">América</div>
                              <div className="text-white font-mono text-[10px] mt-1">{game.releaseDates.NorthAmerica}</div>
                            </div>
                          )}
                          {game.releaseDates.Europe && (
                            <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-2 text-center">
                              <div className="text-green-300 font-medium">Europa</div>
                              <div className="text-white font-mono text-[10px] mt-1">{game.releaseDates.Europe}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Rodapé com botão elegante */}
                <div className="p-6 pt-4 border-t border-white/10 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
                  <Link 
                    href={`/games/${game.id}`}
                    className="block w-full"
                  >
                    <button className="w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-400/30 hover:border-blue-400/50 text-white py-3 rounded-xl font-medium text-sm transition-all duration-300 backdrop-blur-sm group-hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20">
                      <span className="flex items-center justify-center gap-2">
                        Ver Detalhes
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>

                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
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
