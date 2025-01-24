import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';

const Noticias: React.FC = () => {
  const news = [
    { title: 'Notícia 1', description: 'Descrição da Notícia 1', imageUrl: '/images/noticia1.jpg' },
    { title: 'Notícia 2', description: 'Descrição da Notícia 2', imageUrl: '/images/noticia2.jpg' },
    { title: 'Notícia 3', description: 'Descrição da Notícia 3', imageUrl: '/images/noticia3.jpg' },
  ];

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Notícias</title>
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Últimas Notícias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {news.map((item) => (
            <NewsCard key={item.title} title={item.title} description={item.description} imageUrl={item.imageUrl} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Noticias;