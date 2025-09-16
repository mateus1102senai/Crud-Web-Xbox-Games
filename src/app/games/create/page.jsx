"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CreateGame() {
  const [form, setForm] = useState({
    title: "",
    genre: "",
    developer: "",
    releaseDate: "",
    image: "",
    description: "",
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
    if (!form.title || !form.genre || !form.developer || !form.releaseDate || !form.image || !form.description) {
      setError("Preencha todos os campos!");
      return;
    }
    setLoading(true);
    try {
      await axios.post("https://api.sampleapis.com/xbox/games", form);
      setSuccess("Jogo criado com sucesso!");
      setTimeout(() => router.push("/games"), 1500);
    } catch (err) {
      setError("Erro ao criar jogo!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-6">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-green-700 mb-2">Cadastrar Novo Jogo</h1>
        <input name="title" placeholder="Título" value={form.title} onChange={handleChange} className="border p-2 rounded" />
        <input name="genre" placeholder="Gênero" value={form.genre} onChange={handleChange} className="border p-2 rounded" />
        <input name="developer" placeholder="Desenvolvedor" value={form.developer} onChange={handleChange} className="border p-2 rounded" />
        <input name="releaseDate" placeholder="Data de Lançamento" value={form.releaseDate} onChange={handleChange} className="border p-2 rounded" />
        <input name="image" placeholder="URL da Imagem" value={form.image} onChange={handleChange} className="border p-2 rounded" />
        <textarea name="description" placeholder="Descrição" value={form.description} onChange={handleChange} className="border p-2 rounded" />
        {error && <div className="text-red-600">{error}</div>}
        {success && <div className="text-green-600">{success}</div>}
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" disabled={loading}>{loading ? "Enviando..." : "Cadastrar"}</button>
        <button type="button" onClick={() => router.push("/games")} className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded">Voltar à Listagem</button>
      </form>
    </main>
  );
}
