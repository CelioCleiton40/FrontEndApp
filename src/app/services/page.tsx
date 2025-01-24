"use client"
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { useServiceStore } from '../../store/useServiceStore';

const Servicos: React.FC = () => {
  const { services, addServices } = useServiceStore();

  // Exemplo de como adicionar salas (pode ser feito em um formulário ou outra lógica)
  const handleAddServices = () => {
    const newServices = {
      id: services.length + 1,
      title: `Serviços ${services.length + 1}`,
      description: `Descrição do Serviço ${services.length + 1}`,
      imageUrl: `/images/services${services.length + 1}.jpg`, // Certifique-se de que as imagens existam
    };
    addServices(newServices);
  };

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Serviços</title>
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Nossos Serviços</h2>
        <button onClick={handleAddServices} className="mb-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
          Adicionar Um novo Serviço
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {services.map((service ) => (
            <ServiceCard key={service.id} title={service.title} description={service.description} imageUrl={service.imageUrl} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;