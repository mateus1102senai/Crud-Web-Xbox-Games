import Link from "next/link";
import Navbar from "../../../components/Navbar";

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
    return (
      <>
        <Navbar />
        <div className="text-red-600 text-center mt-8">Erro ao carregar jogo.</div>
      </>
    );
  }
  if (!game || !game.id) {
    return (
      <>
        <Navbar />
        <div className="text-red-600 text-center mt-8">Jogo não encontrado.</div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-4 text-blue-700">{game.name}</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Informações Gerais</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Gênero:</span> {game.genre && game.genre.length > 0 ? game.genre.join(", ") : "Não informado"}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Desenvolvedores:</span> {game.developers && game.developers.length > 0 ? game.developers.join(", ") : "Não informado"}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Publishers:</span> {game.publishers && game.publishers.length > 0 ? game.publishers.join(", ") : "Não informado"}
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Datas de Lançamento</h3>
              <div className="space-y-2">
                {game.releaseDates ? (
                  <>
                    <p className="text-gray-700"><span className="font-semibold">América do Norte:</span> {game.releaseDates.NorthAmerica || "Não informado"}</p>
                    <p className="text-gray-700"><span className="font-semibold">Europa:</span> {game.releaseDates.Europe || "Não informado"}</p>
                    <p className="text-gray-700"><span className="font-semibold">Japão:</span> {game.releaseDates.Japan || "Não informado"}</p>
                    <p className="text-gray-700"><span className="font-semibold">Austrália:</span> {game.releaseDates.Australia || "Não informado"}</p>
                  </>
                ) : (
                  <p className="text-gray-500">Datas de lançamento não disponíveis</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-8 justify-center">
            <Link href="/games" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition-colors font-medium">Voltar à Listagem</Link>
            <Link href="/" className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded transition-colors font-medium">Home</Link>
          </div>
        </div>
    </main>
    </>
  );
}
