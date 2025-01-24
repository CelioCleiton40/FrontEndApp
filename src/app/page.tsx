import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';
const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>App Espaço Fácil</title>
        <meta name="description" content="Um app simples com Next.js e Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Espaços Disponíveis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src="/images/sala1.jpg" alt="Sala 1" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl">Sala 1</h3>
              <p className="text-gray-600">Descrição da Sala 1.</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">Reservar</button>
            </div>
          </div>
          <div className="bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src="/images/sala2.jpg" alt="Sala 2" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl">Sala 2</h3>
              <p className="text-gray-600">Descrição da Sala 2.</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">Reservar</button>
            </div>
          </div>
          <div className="bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src="/images/sala3.jpg" alt="Sala 3" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl">Sala 3</h3>
              <p className="text-gray-600">Descrição da Sala 3.</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">Reservar</button>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gray-800">Serviços</h2>
        <div className="bg-white border rounded-lg shadow-lg p-6 mb-8">
          <img src="/images/servicos.jpg" alt="Serviços" className="w-full h-40 object-cover rounded-t-lg" />
          <p className="text-gray-600 mt-4">Descrição dos serviços oferecidos.</p>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gray-800">Notícias</h2>
        <div className="bg-white border rounded-lg shadow-lg p-6">
          <img src="/images/noticias.jpg" alt="Notícias" className="w-full h-40 object-cover rounded-t-lg" />
          <p className="text-gray-600 mt-4">Últimas notícias e atualizações.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;