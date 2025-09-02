export default function ApiInfo() {
    return (
        <main className="max-w-2xl mx-auto p-10 bg-gradient-to-br from-white via-green-50 to-green-100 rounded-3xl shadow-2xl mt-16 border border-green-200">
            <header className="mb-8 flex items-center gap-4">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1200px-Xbox_one_logo.svg.png"
                    alt="Xbox Logo"
                    className="h-12 w-12 drop-shadow-lg"
                />
                <h1 className="text-4xl font-black text-green-800 tracking-tight drop-shadow-sm">
                      Xbox Games
                </h1>
            </header>
            <a
                href="https://sampleapis.com/api-list/xbox"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-green-700 font-semibold underline hover:text-green-900 transition mb-6"
            >
                Documentação Oficial
            </a>
            <section className="mb-6">
                <div className="flex flex-col sm:flex-row sm:gap-10 mb-4">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-green-700">URL base:</span>
                        <span className="text-gray-900 bg-green-50 px-2 py-1 rounded-lg font-mono text-sm shadow-sm">
                            https://api.sampleapis.com/xbox/games
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-green-700">Endpoint:</span>
                        <span className="text-gray-900 bg-green-50 px-2 py-1 rounded-lg font-mono text-sm shadow-sm">
                            /xbox/games
                        </span>
                    </div>
                </div>
                <div>
                    <div className="mt-6 bg-green-50 rounded-lg p-4 shadow">
                        <span className="font-bold text-green-700 block mb-2">Exemplo de jogo:</span>
                        <ul className="list-none ml-4 text-gray-800 space-y-1">
                            <li>
                                <span className="font-semibold text-green-800">title:</span>
                                <span className="ml-2 text-gray-600">Halo Infinite</span>
                            </li>
                            <li>
                                <span className="font-semibold text-green-800">genre:</span>
                                <span className="ml-2 text-gray-600">FPS, Ação</span>
                            </li>
                            <li>
                                <span className="font-semibold text-green-800">developer:</span>
                                <span className="ml-2 text-gray-600">343 Industries</span>
                            </li>
                            <li>
                                <span className="font-semibold text-green-800">releaseDate:</span>
                                <span className="ml-2 text-gray-600">2021-12-08</span>
                            </li>
                            <li className="flex items-center">
                                <span className="font-semibold text-green-800">imageUrl:</span>
                                <span className="ml-2 text-gray-600"></span>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmYF-3eVC0Fh1Qj6YsvzzzKzsupYIEYfKjA&s"
                                    alt="Halo Infinite"
                                    className="h-10 w-10 ml-3 rounded shadow"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <footer>
                <p className="text-gray-700 text-base bg-green-50 rounded-xl px-4 py-3 shadow-inner">
                    Esta API disponibiliza uma lista de jogos de Xbox, incluindo título, gênero, desenvolvedor, data de lançamento e imagem de capa.
                </p>
            </footer>
        </main>
    );
}
