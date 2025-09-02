import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="card-elegante p-12">
          {/* Ícone de erro elegante */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-slate-800/50 border border-white/10 rounded-full flex items-center justify-center">
              <span className="text-4xl text-slate-400">404</span>
            </div>
          </div>

          {/* Título e descrição */}
          <h1 className="text-2xl font-semibold text-white mb-4">
            Página não encontrada
          </h1>
          
          <p className="text-slate-400 mb-8 leading-relaxed">
            A página que você está procurando não existe ou foi movida para outro local.
          </p>

          {/* Botões de navegação */}
          <div className="space-y-3">
            <Link 
              href="/"
              className="botao-profissional w-full px-6 py-3 text-white rounded-lg font-medium inline-block text-center"
            >
              Voltar ao Início
            </Link>
            
            <Link 
              href="/games"
              className="bg-slate-800/50 border border-white/10 hover:bg-slate-700/50 w-full px-6 py-3 text-slate-300 hover:text-white rounded-lg font-medium inline-block text-center transition-colors"
            >
              Ver Jogos
            </Link>
          </div>

          {/* Links úteis */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-slate-500 text-sm mb-3">Páginas disponíveis:</p>
            <div className="flex justify-center gap-4 text-xs">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                Início
              </Link>
              <Link href="/games" className="text-slate-400 hover:text-white transition-colors">
                Jogos
              </Link>
              <Link href="/apiinfo" className="text-slate-400 hover:text-white transition-colors">
                API Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
