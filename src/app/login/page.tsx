"use client"
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '../../store/useAuthStore';
import Image from 'next/image';
import logo from '../../images/logo01.svg';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      login();
      router.push('/');
    } else {
      setError('Nome de usuário ou senha incorretos');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <Head>
        <title>Login</title>
      </Head>
      <img
        src="https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Substitua pelo caminho da sua imagem de fundo
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="bg-white p-8 rounded-lg shadow-md w-96 z-10">
        <div className="text-center mb-6">
          <Image src={logo} alt="Logo" className="w-24 mx-auto mb-2" /> {/* Logo */}
          <h1 className="text-2xl font-bold">Tudo na palma da sua mão</h1> {/* Título */}
          <p className="text-gray-600 mt-2">Bem-vindo ao nosso sistema! Acesse sua conta.</p> {/* Frase de impacto */}
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div className="mb-4 text-right">
            <a href="/recover-password" className="text-blue-600 hover:underline">Esqueceu sua senha?</a> {/* Link para recuperação de senha */}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Ainda não é cliente? <a href="/register" className="text-blue-600 hover:underline">Cadastre-se clicando aqui.</a></p> {/* Link para cadastro */}
        </div>
      </div>
    </div>
  );
};

export default Login;