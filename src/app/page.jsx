import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
return (
    <main className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
            {/* Card principal profissional */}
            <div className="vidro-profissional rounded-2xl p-12 animacao-sutil shadow-2xl">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">
                            Turma: <span className="font-semibold texto-gradiente-sutil">2TDS2</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-2">
                            SENAI VALINHOS
                        </h2>
                        <h3 className="text-lg md:text-xl text-slate-400 mb-8">
                            Aluno: Mateus Marcelino
                        </h3>
                    </div>

                    {/* Avatar profissional */}
                    <div className="relative mx-auto w-32 h-32 mb-8">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 opacity-20 blur-xl"></div>
                        <div className="relative">
                            <Image
                                src="https://avatars.githubusercontent.com/u/158166706?v=4"
                                alt="Foto do Aluno Mateus"
                                width={128}
                                height={128}
                                className="rounded-full border-2 border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </div>
                    </div>

                    {/* Citação elegante */}
                    <blockquote className="text-lg md:text-xl italic text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        &quot;A persistência é o caminho do êxito.&quot; 
                        <footer className="text-slate-400 text-sm mt-2 not-italic">— Charles Chaplin</footer>
                    </blockquote>

                    {/* Botões profissionais */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/apiinfo">
                            <button className="botao-profissional px-8 py-3 text-white font-medium rounded-lg text-base">
                                Sobre a API
                            </button>
                        </Link>
                        <Link href="/games">
                            <button className="botao-secundario px-8 py-3 text-white font-medium rounded-lg text-base">
                                Ver Jogos
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Cards de tecnologias */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="vidro-profissional rounded-xl p-6 card-elegante">
                    <div className="text-3xl mb-4 text-blue-400">⚡</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Next.js 15</h3>
                    <p className="text-slate-400 text-sm">Framework React moderno com App Router</p>
                </div>
                <div className="vidro-profissional rounded-xl p-6 card-elegante">
                    <div className="text-3xl mb-4 text-blue-400">🎨</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Design System</h3>
                    <p className="text-slate-400 text-sm">Interface profissional com Tailwind CSS</p>
                </div>
                <div className="vidro-profissional rounded-xl p-6 card-elegante">
                    <div className="text-3xl mb-4 text-blue-400">🔗</div>
                    <h3 className="text-lg font-semibold text-white mb-2">API Integration</h3>
                    <p className="text-slate-400 text-sm">Consumo eficiente de dados com Axios</p>
                </div>
            </div>
        </div>
    </main>
);
}
