"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Pagination } from "antd";
import Navbar from "../../components/Navbar";
import "./pagination.css";

export default function GamesList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  useEffect(() => {
    fetchGames();
  }, []);

  async function fetchGames() {
    try {
      setLoading(true);
      const res = await fetch("https://api.sampleapis.com/xbox/games", { cache: "no-store" });
      if (!res.ok) throw new Error("Erro ao buscar jogos");
      const data = await res.json();
      setGames(data);
    } catch (e) {
      setError("Erro ao carregar jogos.");
    } finally {
      setLoading(false);
    }
  }

  async function deleteGame(gameId, gameName) {
    if (!confirm(`Tem certeza que deseja deletar o jogo "${gameName}"?`)) {
      return;
    }

    try {
      const res = await fetch(`https://api.sampleapis.com/xbox/games/${gameId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (res.ok) {
        // Remove o jogo da lista local
        setGames(games.filter(game => game.id !== gameId));
        alert(`Jogo "${gameName}" deletado com sucesso!`);
      } else {
        throw new Error('Erro ao deletar jogo');
      }
    } catch (e) {
      alert('Erro ao deletar jogo. Tente novamente.');
    }
  }

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-8">Carregando jogos...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="text-red-600 text-center mt-8">{error}</div>
      </>
    );
  }

  // Calculate items to show on current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentGames = games.slice(startIndex, endIndex);
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 flex flex-col items-center">
        <div className="w-full max-w-6xl mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-green-400 flex items-center gap-3">
              🎮 <span>Jogos Xbox</span>
            </h1>
            <Link href="/games/create" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold border border-green-500 shadow-lg">
              ➕ Novo Jogo
            </Link>
          </div>
          
          {/* Pagination Controls - Moved to top */}
          <div className="flex justify-center mb-6">
            <Pagination
              total={games.length}
              showTotal={(total, range) => `${range[0]}-${range[1]} de ${total} jogos`}
              pageSize={pageSize}
              current={currentPage}
              showSizeChanger={true}
              pageSizeOptions={["4", "8", "12", "16"]}
              onChange={handlePageChange}
              onShowSizeChange={handlePageSizeChange}
              showQuickJumper={true}
              className="bg-gray-800 border border-green-500 p-4 rounded-lg shadow-lg text-white"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-8">
          {currentGames.map((game) => (
            <div key={game.id} className="bg-gray-800 border border-green-500 rounded-lg shadow-xl p-5 flex flex-col hover:shadow-2xl hover:border-green-400 transition-all duration-300">
              <div className="flex-1 mb-4">
                <h2 className="font-bold text-xl mb-3 text-center leading-tight text-green-300">{game.name}</h2>
                <div className="text-center mb-3">
                  {game.genre && game.genre.length > 0 ? (
                    <span className="text-green-400 text-sm font-medium bg-gray-700 px-2 py-1 rounded">
                      {game.genre.join(", ")}
                    </span>
                  ) : (
                    <span className="text-gray-500 text-sm bg-gray-700 px-2 py-1 rounded">Gênero não informado</span>
                  )}
                </div>
                <div className="text-center">
                  {game.developers && game.developers.length > 0 ? (
                    <span className="text-gray-300 text-xs">
                      🎯 {game.developers.join(", ")}
                    </span>
                  ) : (
                    <span className="text-gray-500 text-xs">Desenvolvedor desconhecido</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Link href={`/games/${game.id}`} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300 text-center font-semibold border border-green-500 hover:border-green-400">🎮 Ver Detalhes</Link>
                <button 
                  onClick={() => deleteGame(game.id, game.name)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-300 text-center font-semibold border border-red-500 hover:border-red-400"
                >
                  🗑️ Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
