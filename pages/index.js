import Head from 'next/head'
import ToolCard from '../components/tool-card';
import Link from 'next/link'

export default function Home() {
  const tools = [
    {
      title: 'Valor por tempo de trabalho',
      description: 'Calcule o valor a ser recebido com base nas horas e minutos trabalhados.',
      link: 'ferramentas/horas-de-trabalho'
    }
  ]
  return (
    <>
      <Head>
        <title>MG ToolBox - Sua caixa de ferramentas online</title>
        <meta name='description' content='Várias ferramentas para ajudar sua vida online, calculadoras, contadores, conversores e muito mais.' />
      </Head>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tools.map(tool => (
          <Link href={tool.link} key={tool.link}>
            <a className="rounded bg-white p-5 shadow-lg border border-gray-300 transition ease-in duration-100 hover:shadow-xl transform hover:scale-105">
              <h2 className="text-xl font-bold text-indigo-600">{tool.title}</h2>
              <p className="text-gray-500 mt-2">{tool.description}</p>
            </a>
          </Link>
        ))}
      </section>
    </>
  )
}
