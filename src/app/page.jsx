import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-2 text-blue-700">Turma: 2TDS2</h1>
        <h2 className="text-2xl mb-2 text-blue-500">Escola: SENAI VALINHOS</h2>
        <h3 className="text-xl mb-4 text-gray-700">Aluno: Mateus Marcelino</h3>
            <Image
                src="https://avatars.githubusercontent.com/u/158166706?v=4"
                alt="Foto do Aluno"
                width={160}
                height={160}
                className="rounded-full border-4 border-blue-400 mb-4"
                priority
            />
        <blockquote className="italic text-lg text-gray-600 mb-8">
            &quot;A persistência é o caminho do êxito.&quot; – Charles Chaplin
        </blockquote>
        <Link href="/apiinfo">
            <span className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">
                Sobre a API
            </span>
        </Link>
    </main>
);
}
