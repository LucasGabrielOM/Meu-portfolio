import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    // Em uma aplicação real, você usaria a navegação do seu roteador
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Número 404 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-800 mb-4 animate-bounce">
            404
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Mensagem */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Opa! Página Não Encontrada
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
            A página que você está procurando pode ter sido movida, removida ou nunca existiu.
          </p>
        </div>

        {/* Ilustração */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-6">
            <div className="text-6xl">🔍</div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <ArrowLeft size={20} />
            Voltar
          </button>
          
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <Home size={20} />
            Início
          </button>
        </div>
      </div>
    </div>
  );
}