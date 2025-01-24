import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const Produtos: React.FC = () => {
  const products = [
    { title: 'Produto 1', description: 'Descrição do Produto 1', imageUrl: '/images/produto1.jpg' },
    { title: 'Produto 2', description: 'Descrição do Produto 2', imageUrl: '/images/produto2.jpg' },
    { title: 'Produto 3', description: 'Descrição do Produto 3', imageUrl: '/images/produto3.jpg' },
  ];

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Produtos</title>
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Nossos Produtos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <ServiceCard key={product.title} title={product.title} description={product.description} imageUrl={product.imageUrl} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Produtos;