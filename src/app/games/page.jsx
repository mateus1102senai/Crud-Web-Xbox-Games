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
      <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
        <div className="w-full max-w-6xl mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Jogos Xbox</h1>
            <Link href="/games/create" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors font-semibold">
              + Novo Jogo
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
              className="bg-white p-4 rounded-lg shadow-sm"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-8">
          {currentGames.map((game) => (
            <div key={game.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-lg transition-shadow">
              <div className="flex-1 mb-3">
                <h2 className="font-semibold text-lg mb-2 text-center leading-tight">{game.name}</h2>
                <div className="text-center mb-2">
                  {game.genre && game.genre.length > 0 ? (
                    <span className="text-blue-600 text-sm font-medium">
                      {game.genre.join(", ")}
                    </span>
                  ) : (
                    <span className="text-gray-400 text-sm">Gênero não informado</span>
                  )}
                </div>
                <div className="text-center">
                  {game.developers && game.developers.length > 0 ? (
                    <span className="text-gray-600 text-xs">
                      Dev: {game.developers.join(", ")}
                    </span>
                  ) : (
                    <span className="text-gray-400 text-xs">Desenvolvedor desconhecido</span>
                  )}
                </div>
              </div>
              <Link href={`/games/${game.id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors text-center font-medium">Ver Detalhes</Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
