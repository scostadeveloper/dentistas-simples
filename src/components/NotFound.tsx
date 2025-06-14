import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div 
      className="min-h-screen bg-gray-50 flex items-center justify-center px-4"
      role="main"
      aria-label="Página não encontrada"
    >
      <div className="max-w-lg w-full text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-dental-primary animate-bounce-slow">
            404
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-dental-primary to-dental-secondary mx-auto rounded-full mb-6"></div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Página não encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-dental-primary text-white rounded-lg font-medium hover:bg-dental-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-dental-primary focus:ring-offset-2"
            role="button"
            aria-label="Voltar para a página inicial"
          >
            <Home className="w-5 h-5 mr-2" aria-hidden="true" />
            Voltar para a página inicial
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-dental-primary focus:ring-offset-2"
            role="button"
            aria-label="Voltar para a página anterior"
          >
            <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
            Voltar para a página anterior
          </button>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>
            Se você acredita que isso é um erro, por favor entre em contato conosco.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dental-primary hover:text-dental-primary/90 transition-colors"
            aria-label="Contato via WhatsApp"
          >
            Contato via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 