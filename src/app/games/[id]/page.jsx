import axios from 'axios';
import Link from 'next/link';

async function getGame(id) {
  try {
    const res = await axios.get(`https://api.sampleapis.com/xbox/games/${id}`);
    return res.data;
  } catch (error) {
    console.error('Erro ao buscar jogo:', error);
    return null;
  }
}

export default async function GameDetail({ params }) {
  const { id } = await params;
  const game = await getGame(id);

  if (!game || !game.name) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="vidro-profissional rounded-xl p-12 text-center max-w-md">
          <div className="text-4xl mb-4 text-slate-400">🎮</div>
          <h1 className="text-2xl font-semibold text-white mb-4">Jogo não encontrado</h1>
          <p className="text-slate-400 mb-6">
            O jogo com ID #{id} não foi encontrado ou não está disponível.
          </p>
          <Link href="/games" className="botao-profissional px-6 py-3 text-white rounded-lg font-medium inline-block">
            Voltar aos Jogos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Navegação */}
        <div className="mb-8">
          <Link 
            href="/games" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            ← Voltar aos Jogos
          </Link>
        </div>

        {/* Card principal do jogo */}
        <div className="card-elegante">
          {/* Cabeçalho */}
          <div className="p-8 pb-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {game.name}
                </h1>
                <div className="flex items-center gap-3 text-sm">
                  <span className="bg-slate-800/50 border border-white/10 rounded px-3 py-1 text-slate-300 font-mono">
                    ID: #{game.id}
                  </span>
                </div>
              </div>
            </div>

            {/* Grid de informações */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Coluna da esquerda - Informações básicas */}
              <div className="space-y-6">
                {/* Gêneros */}
                {game.genre && game.genre.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Gêneros</h3>
                    <div className="flex flex-wrap gap-2">
                      {game.genre.map((genero, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-lg text-blue-200 font-medium"
                        >
                          {genero}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Desenvolvedores */}
                {game.developers && game.developers.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Desenvolvedores</h3>
                    <div className="space-y-2">
                      {game.developers.map((dev, index) => (
                        <div 
                          key={index}
                          className="bg-slate-800/40 border border-white/10 rounded-lg px-4 py-2"
                        >
                          <span className="text-white font-medium">{dev}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Publicadoras */}
                {game.publishers && game.publishers.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Publicadoras</h3>
                    <div className="space-y-2">
                      {game.publishers.map((pub, index) => (
                        <div 
                          key={index}
                          className="bg-slate-800/40 border border-white/10 rounded-lg px-4 py-2"
                        >
                          <span className="text-white font-medium">{pub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Coluna da direita - Datas de lançamento */}
              <div className="space-y-6">
                {game.releaseDates && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Datas de Lançamento</h3>
                    <div className="vidro-profissional rounded-lg p-6 border border-white/10">
                      <div className="space-y-4">
                        {game.releaseDates.NorthAmerica && (
                          <div className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-500/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                                <span className="text-blue-200 text-sm font-bold">US</span>
                              </div>
                              <div>
                                <div className="text-white font-medium">América do Norte</div>
                                <div className="text-slate-400 text-sm">Estados Unidos e Canadá</div>
                              </div>
                            </div>
                            <div className="text-white font-mono text-sm">
                              {game.releaseDates.NorthAmerica}
                            </div>
                          </div>
                        )}

                        {game.releaseDates.Europe && (
                          <div className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-green-500/20 border border-green-400/30 rounded-lg flex items-center justify-center">
                                <span className="text-green-200 text-sm font-bold">EU</span>
                              </div>
                              <div>
                                <div className="text-white font-medium">Europa</div>
                                <div className="text-slate-400 text-sm">União Europeia</div>
                              </div>
                            </div>
                            <div className="text-white font-mono text-sm">
                              {game.releaseDates.Europe}
                            </div>
                          </div>
                        )}

                        {game.releaseDates.Japan && (
                          <div className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-red-500/20 border border-red-400/30 rounded-lg flex items-center justify-center">
                                <span className="text-red-200 text-sm font-bold">JP</span>
                              </div>
                              <div>
                                <div className="text-white font-medium">Japão</div>
                                <div className="text-slate-400 text-sm">Mercado japonês</div>
                              </div>
                            </div>
                            <div className="text-white font-mono text-sm">
                              {game.releaseDates.Japan}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Informações adicionais */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Informações Técnicas</h3>
                  <div className="vidro-profissional rounded-lg p-6 border border-white/10 space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-b-0">
                      <span className="text-slate-400">Plataforma</span>
                      <span className="text-white font-medium">Xbox</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-b-0">
                      <span className="text-slate-400">Tipo</span>
                      <span className="text-white font-medium">Console Game</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-400">Status</span>
                      <span className="px-2 py-1 bg-green-500/20 border border-green-400/30 rounded text-green-200 text-xs font-medium">
                        Disponível
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rodapé com ações */}
          <div className="p-8 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/games"
                className="botao-profissional px-6 py-3 text-white rounded-lg font-medium text-center"
              >
                ← Voltar aos Jogos
              </Link>
              <Link 
                href="/apiinfo"
                className="bg-slate-800/50 border border-white/10 hover:bg-slate-700/50 px-6 py-3 text-slate-300 hover:text-white rounded-lg font-medium text-center transition-colors"
              >
                Ver Informações da API
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
