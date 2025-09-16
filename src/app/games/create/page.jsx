"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Navbar from "../../../components/Navbar";

export default function CreateGame() {
  const [form, setForm] = useState({
    name: "",
    genre: "",
    developers: "",
    publishers: "",
    releaseDateNA: "",
    releaseDateEU: "",
    releaseDateJP: "",
    releaseDateAU: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.name || !form.genre || !form.developers || !form.publishers) {
      setError("Preencha pelo menos os campos obrigatórios!");
      return;
    }
    setLoading(true);
    try {
      // Transformar dados para o formato da API
      const gameData = {
        name: form.name,
        genre: form.genre.split(",").map(g => g.trim()).filter(g => g),
        developers: form.developers.split(",").map(d => d.trim()).filter(d => d),
        publishers: form.publishers.split(",").map(p => p.trim()).filter(p => p),
        releaseDates: {
          NorthAmerica: form.releaseDateNA || "Unreleased",
          Europe: form.releaseDateEU || "Unreleased", 
          Japan: form.releaseDateJP || "Unreleased",
          Australia: form.releaseDateAU || "Unreleased"
        }
      };
      await axios.post("https://api.sampleapis.com/xbox/games", gameData);
      setSuccess("Jogo criado com sucesso!");
      setTimeout(() => router.push("/games"), 1500);
    } catch (err) {
      setError("Erro ao criar jogo!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-6">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-green-700 mb-2">Cadastrar Novo Jogo</h1>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Jogo *</label>
          <input name="name" placeholder="Nome do jogo" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gêneros * (separados por vírgula)</label>
          <input name="genre" placeholder="Ex: Action, Adventure" value={form.genre} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Desenvolvedores * (separados por vírgula)</label>
          <input name="developers" placeholder="Ex: Nintendo, Game Freak" value={form.developers} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Publishers * (separados por vírgula)</label>
          <input name="publishers" placeholder="Ex: Nintendo, Sony" value={form.publishers} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">América do Norte</label>
            <input name="releaseDateNA" placeholder="Ex: Jan 1, 2024" value={form.releaseDateNA} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Europa</label>
            <input name="releaseDateEU" placeholder="Ex: Jan 1, 2024" value={form.releaseDateEU} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Japão</label>
            <input name="releaseDateJP" placeholder="Ex: Jan 1, 2024" value={form.releaseDateJP} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Austrália</label>
            <input name="releaseDateAU" placeholder="Ex: Jan 1, 2024" value={form.releaseDateAU} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
        </div>
        
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
        
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-medium" disabled={loading}>
          {loading ? "Enviando..." : "Cadastrar Jogo"}
        </button>
        <button type="button" onClick={() => router.push("/games")} className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded font-medium">
          Voltar à Listagem
        </button>
      </form>
    </main>
    </>
  );
}
