"use client"
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '../../store/useAuthStore';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const registerUser  = useAuthStore((state) => state.registerUser );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await registerUser ({ name, email, password });
    if (response.success) {
      setMessage('Usuário criado com sucesso! Você pode fazer login agora.');
      router.push('/login');
    } else {
      setMessage('Erro ao criar usuário. Tente novamente.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Criar Novo Usuário</title>
      </Head>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center">Criar Novo Usuário</h1>
        {message && <p className="text-red-500 text-center">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value )}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition"
          >
            Criar Conta
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Já tem uma conta? <a href="/login" className="text-blue-600 hover:underline">Faça login aqui.</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;