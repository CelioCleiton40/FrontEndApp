"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../images/logo01.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={50} height={50} />
          <p className="text-white text-2xl font-bold ml-2">Tudo na Palma da sua Mão!</p>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/services" className="text-white hover:text-blue-300 transition">Serviços</Link>
          <Link href="/products" className="text-white hover:text-blue-300 transition">Produtos</Link>
          <Link href="/rooms" className="text-white hover:text-blue-300 transition">Espaços</Link>
          <Link href="/news" className="text-white hover:text-blue-300 transition">Notícias</Link>
          <Link href="/login" className="text-white hover:text-blue-300 transition">Login</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? 'Fechar' : 'Menu'}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500">
          <nav className="flex flex-col items-center space-y-2 p-4">
            <Link href="/services" className="text-white hover:text-blue-300 transition">Serviços</Link>
            <Link href="/products" className="text-white hover:text-blue-300 transition">Produtos</Link>
            <Link href="/rooms" className="text-white hover:text-blue-300 transition">Espaços</Link>
            <Link href="/noticias" className="text-white hover:text-blue-300 transition">Notícias</Link>
            <Link href="/login" className="text-white hover:text-blue-300 transition">Login</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;