import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
return (
    <main className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
            {/* Card principal com efeito vidro */}
            <div className="vidro rounded-3xl p-12 animacao-float shadow-2xl">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            <span className="texto-gradiente">Turma: 2TDS2</span>
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-semibold text-white/90 mb-2">
                            🏫 SENAI VALINHOS
                        </h2>
                        <h3 className="text-xl md:text-2xl text-white/70 mb-8">
                            👨‍🎓 Aluno: Mateus Marcelino
                        </h3>
                    </div>

                    {/* Avatar com efeito brilhante */}
                    <div className="relative mx-auto w-48 h-48 mb-8">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse opacity-75 blur-sm"></div>
                        <div className="relative">
                            <Image
                                src="https://avatars.githubusercontent.com/u/158166706?v=4"
                                alt="Foto do Aluno Mateus"
                                width={192}
                                height={192}
                                className="rounded-full border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </div>
                    </div>

                    {/* Frase inspiradora */}
                    <blockquote className="text-xl md:text-2xl italic text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                        &quot;A persistência é o caminho do êxito.&quot; 
                        <footer className="text-white/60 text-base mt-2">– Charles Chaplin</footer>
                    </blockquote>

                    {/* Botões modernos */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/apiinfo">
                            <button className="botao-moderno px-8 py-4 text-white font-semibold rounded-full text-lg shadow-lg">
                                📚 Sobre a API
                            </button>
                        </Link>
                        <Link href="/games">
                            <button className="bg-white/10 backdrop-blur border border-white/20 px-8 py-4 text-white font-semibold rounded-full text-lg hover:bg-white/20 transition-all duration-300">
                                🎮 Ver Jogos
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Cards de recursos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="vidro rounded-2xl p-6 card-flutuante">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Next.js 15</h3>
                    <p className="text-white/70">Framework React moderno com App Router</p>
                </div>
                <div className="vidro rounded-2xl p-6 card-flutuante">
                    <div className="text-4xl mb-4">🎨</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Design Moderno</h3>
                    <p className="text-white/70">Interface elegante com Tailwind CSS</p>
                </div>
                <div className="vidro rounded-2xl p-6 card-flutuante">
                    <div className="text-4xl mb-4">🔗</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Integração API</h3>
                    <p className="text-white/70">Consumo de API REST com Axios</p>
                </div>
            </div>
        </div>
    </main>
);
}
