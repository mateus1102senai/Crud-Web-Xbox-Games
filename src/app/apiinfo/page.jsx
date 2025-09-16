import Navbar from "../../components/Navbar";

export default function ApiInfo() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-green-700">API: Xbox Games</h1>
        <a href="https://api.sampleapis.com/xbox/games" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Documentação Oficial</a>
        <div>
          <strong>URL base:</strong> <span className="font-mono">https://api.sampleapis.com/xbox/games</span>
        </div>
        <div>
          <strong>Endpoint:</strong> <span className="font-mono">/games</span>
        </div>
        <div>
          <strong>Atributos recebidos:</strong>
          <ul className="list-disc ml-6">
            <li><code>id</code> - Número único do jogo</li>
            <li><code>name</code> - Nome do jogo</li>
            <li><code>genre</code> - Array de gêneros</li>
            <li><code>developers</code> - Array de desenvolvedores</li>
            <li><code>publishers</code> - Array de editoras</li>
            <li><code>releaseDates</code> - Objeto com datas por região (NorthAmerica, Europe, Japan, Australia)</li>
          </ul>
        </div>
        <div>
          <strong>Exemplo de resposta:</strong>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`{
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
}`}
          </pre>
        </div>
        <div>
          <strong>Descrição:</strong>
          <p className="text-gray-700">A API Xbox Games fornece uma lista completa de jogos de Xbox, incluindo nome, gêneros, desenvolvedores, editoras e datas de lançamento por região. Ideal para projetos de catalogação e busca de jogos.</p>
        </div>
        <div>
          <strong>Rotas e métodos suportados:</strong>
          <ul className="list-disc ml-6">
            <li>GET /games (listar todos os jogos)</li>
            <li>GET /games/:id (detalhes de um jogo)</li>
            <li>POST /games (criar novo jogo)</li>
          </ul>
        </div>
      </div>
    </main>
    </>
  );
}
