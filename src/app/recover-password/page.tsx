"use client"
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '../../store/useAuthStore';

const RecoverPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const sendRecoveryEmail = useAuthStore((state) => state.sendRecoveryEmail);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await sendRecoveryEmail(email);
    if (response.success) {
      setMessage('Email de recuperação enviado com sucesso!');
    } else {
      setMessage('Erro ao enviar o email. Verifique se o e-mail está correto.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Recuperar Senha</title>
      </Head>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center">Recuperar Senha</h1>
        {message && <p className="text-red-500 text-center">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition"
          >
            Enviar Email de Recuperação
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/login" className="text-blue-600 hover:underline">Voltar para Login</a>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;