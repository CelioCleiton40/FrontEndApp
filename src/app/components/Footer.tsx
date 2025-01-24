"use client"
import React from 'react';
import { useFooterStore } from '../../store/footerStore';

const Footer: React.FC = () => {
  const { year } = useFooterStore();

  return (
    <footer className="bg-blue-600 text-white text-center p-4">
      <p>&copy; {year} App Espaço Fácil. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;