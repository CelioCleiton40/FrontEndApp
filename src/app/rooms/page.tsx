"use client"
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SalaCard from '../components/SalaCard';
import { useStore } from '../../store/useStore';

const Salas: React.FC = () => {
  const { salas, addSala } = useStore();

  // Exemplo de como adicionar salas (pode ser feito em um formulário ou outra lógica)
  const handleAddSala = () => {
    const newSala = {
      id: salas.length + 1,
      title: `Espaços ${salas.length + 1}`,
      description: `Descrição da Sala ${salas.length + 1}`,
      imageUrl: `/images/sala${salas.length + 1}.jpg`, // Certifique-se de que as imagens existam
    };
    addSala(newSala);
  };

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Espaços Disponíveis</title>
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Espaços Disponíveis</h2>
        <button onClick={handleAddSala} className="mb-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
          Adicionar Sala
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {salas.map((sala) => (
            <SalaCard key={sala.id} title={sala.title} description={sala.description} imageUrl={sala.imageUrl} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Salas;