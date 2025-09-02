import Link from 'next/link';

export default function ApiInfoPage() {
  const apiInfo = {
    nome: "Xbox Games API",
    url: "https://api.sampleapis.com/xbox/games",
    descricao: "API pública que fornece informações sobre jogos do Xbox",
    endpoints: [
      {
        metodo: "GET",
        rota: "/xbox/games",
        descricao: "Lista todos os jogos disponíveis",
        exemplo: "https://api.sampleapis.com/xbox/games"
      },
      {
        metodo: "GET", 
        rota: "/xbox/games/:id",
        descricao: "Obtém detalhes de um jogo específico pelo ID",
        exemplo: "https://api.sampleapis.com/xbox/games/1"
      }
    ],
    campos: [
      { nome: "id", tipo: "number", descricao: "Identificador único do jogo" },
      { nome: "name", tipo: "string", descricao: "Nome do jogo" },
      { nome: "genre", tipo: "array", descricao: "Lista de gêneros do jogo" },
      { nome: "developers", tipo: "array", descricao: "Lista de desenvolvedores" },
      { nome: "publishers", tipo: "array", descricao: "Lista de publicadoras" },
      { nome: "releaseDates", tipo: "object", descricao: "Datas de lançamento por região" }
    ]
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
            Informações da <span className="font-semibold texto-gradiente-sutil">API</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Documentação completa da API utilizada neste projeto
          </p>
        </div>

        {/* Card principal */}
        <div className="card-elegante mb-8">
          <div className="p-8">
            {/* Informações básicas */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {apiInfo.nome}
              </h2>
              
              <div className="space-y-4">
                <div className="bg-slate-800/40 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-slate-400 font-medium text-sm">URL Base:</span>
                  </div>
                  <code className="text-blue-300 font-mono text-sm bg-slate-900/50 px-3 py-1 rounded">
                    {apiInfo.url}
                  </code>
                </div>
                
                <p className="text-slate-300 leading-relaxed">
                  {apiInfo.descricao}
                </p>
              </div>
            </div>

            {/* Endpoints */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Endpoints Disponíveis
              </h3>
              
              <div className="space-y-4">
                {apiInfo.endpoints.map((endpoint, index) => (
                  <div 
                    key={index}
                    className="vidro-profissional rounded-lg p-6 border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-green-500/20 border border-green-400/30 px-3 py-1 rounded text-green-200 font-mono text-sm">
                        {endpoint.metodo}
                      </span>
                      <code className="text-blue-300 font-mono">
                        {endpoint.rota}
                      </code>
                    </div>
                    
                    <p className="text-slate-300 mb-3">
                      {endpoint.descricao}
                    </p>
                    
                    <div className="bg-slate-900/50 rounded p-3">
                      <div className="text-slate-400 text-xs mb-1">Exemplo:</div>
                      <code className="text-blue-300 font-mono text-sm">
                        {endpoint.exemplo}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Estrutura dos dados */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Estrutura dos Dados
              </h3>
              
              <div className="vidro-profissional rounded-lg p-6 border border-white/10">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-2 text-slate-400 font-medium">Campo</th>
                        <th className="text-left py-3 px-2 text-slate-400 font-medium">Tipo</th>
                        <th className="text-left py-3 px-2 text-slate-400 font-medium">Descrição</th>
                      </tr>
                    </thead>
                    <tbody>
                      {apiInfo.campos.map((campo, index) => (
                        <tr key={index} className="border-b border-white/5 last:border-b-0">
                          <td className="py-3 px-2">
                            <code className="text-blue-300 font-mono">{campo.nome}</code>
                          </td>
                          <td className="py-3 px-2">
                            <span className="bg-orange-500/20 border border-orange-400/30 px-2 py-1 rounded text-orange-200 text-xs">
                              {campo.tipo}
                            </span>
                          </td>
                          <td className="py-3 px-2 text-slate-300">
                            {campo.descricao}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Exemplo de resposta */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Exemplo de Resposta
              </h3>
              
              <div className="vidro-profissional rounded-lg p-6 border border-white/10">
                <pre className="text-sm text-slate-300 overflow-x-auto">
                  <code>{`{
  "id": 1,
  "name": "#killallzombies....",
  "genre": [],
  "developers": ["Beatshapers"],
  "publishers": ["Digerati"],
  "releaseDates": {
    "Japan": "Unreleased",
    "NorthAmerica": "Aug 9, 2016",
    "Europe": "Aug 9, 2016",
    "Australia": "Aug 9, 2016"
  }
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Rodapé com navegação */}
          <div className="p-8 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/games"
                className="botao-profissional px-6 py-3 text-white rounded-lg font-medium text-center"
              >
                Ver Jogos da API
              </Link>
              <a 
                href={apiInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 border border-white/10 hover:bg-slate-700/50 px-6 py-3 text-slate-300 hover:text-white rounded-lg font-medium text-center transition-colors"
              >
                Abrir API ↗
              </a>
            </div>
          </div>
        </div>

        {/* Informações adicionais */}
        <div className="text-center">
          <div className="vidro-profissional rounded-xl p-6 border border-white/10 inline-block">
            <h4 className="text-white font-medium mb-2">Sobre a API</h4>
            <p className="text-slate-400 text-sm">
              Esta é uma API pública gratuita fornecida pela SampleAPIs.<br/>
              Dados utilizados apenas para fins educacionais e demonstração.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
