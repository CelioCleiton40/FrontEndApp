import React from 'react';

interface SalaCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const SalaCard: React.FC<SalaCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">Reservar </button>
      </div>
    </div>
  );
};

export default SalaCard;