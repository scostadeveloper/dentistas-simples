
/**
 * Componente Hero - Seção Principal da Landing Page
 * 
 * Esta é a primeira seção que os visitantes veem ao acessar o site.
 * Contém:
 * - Título principal e chamada para ação
 * - Botões de agendamento via WhatsApp e navegação para serviços
 * - Estatísticas da clínica (anos de experiência, pacientes, emergência)
 * - Imagem do profissional principal
 * - Background com imagem de consultório odontológico
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Shield, Clock } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const Hero = () => {
  /**
   * Função para redirecionar usuário para WhatsApp
   * Abre uma nova aba com mensagem pré-definida para agendamento
   */
  const handleWhatsAppClick = () => {
    const phoneNumber = siteConfig.contact.whatsappNumber;
    const message = "Olá! Gostaria de agendar uma avaliação odontológica.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  /**
   * Função para rolar suavemente até a seção de serviços
   * Utiliza scroll behavior smooth para melhor experiência do usuário
   */
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* === IMAGEM DE FUNDO === */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1920&q=80"
          alt="Consultório odontológico moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-dental-light/80"></div>
      </div>

      {/* === ELEMENTOS DECORATIVOS DE FUNDO === */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-dental-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-dental-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-dental-secondary rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* === CONTEÚDO PRINCIPAL === */}
          <div className="animate-slide-in-left">
            {/* Badge de qualidade */}
            <div className="inline-flex items-center space-x-2 bg-dental-accent/10 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-dental-accent" />
              <span className="text-sm font-medium text-dental-primary">Clínica 5 Estrelas</span>
            </div>

            {/* Título principal */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {siteConfig.clinicInfo.tagline.split(' ').slice(0, 2).join(' ')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dental-primary to-dental-secondary">
                {siteConfig.clinicInfo.tagline.split(' ').slice(2, 4).join(' ')}
              </span>
              {siteConfig.clinicInfo.tagline.split(' ').slice(4).join(' ')}
            </h1>

            {/* Descrição */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {siteConfig.texts.heroSubtitle}
            </p>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-dental-primary to-dental-secondary hover:from-dental-secondary hover:to-dental-primary text-white px-8 py-3"
                onClick={handleWhatsAppClick}
              >
                Agendar Avaliação
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-dental-primary text-dental-primary hover:bg-dental-primary hover:text-white px-8 py-3"
                onClick={handleScrollToServices}
              >
                Conhecer Tratamentos
              </Button>
            </div>

            {/* === ESTATÍSTICAS DA CLÍNICA === */}
            <div className="grid grid-cols-3 gap-6">
              {/* Anos de experiência */}
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-dental-accent/10 rounded-full mb-2 mx-auto">
                  <Shield className="w-6 h-6 text-dental-accent" />
                </div>
                <div className="text-2xl font-bold text-dental-primary">{siteConfig.clinicInfo.yearsOfExperience}+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>

              {/* Pacientes satisfeitos */}
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-dental-secondary/10 rounded-full mb-2 mx-auto">
                  <Star className="w-6 h-6 text-dental-secondary" />
                </div>
                <div className="text-2xl font-bold text-dental-primary">{siteConfig.clinicInfo.patientsServed}+</div>
                <div className="text-sm text-gray-600">Pacientes Satisfeitos</div>
              </div>

              {/* Atendimento de emergência */}
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-dental-primary/10 rounded-full mb-2 mx-auto">
                  <Clock className="w-6 h-6 text-dental-primary" />
                </div>
                <div className="text-2xl font-bold text-dental-primary">24h</div>
                <div className="text-sm text-gray-600">Emergências</div>
              </div>
            </div>
          </div>

          {/* === IMAGEM DO PROFISSIONAL === */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                alt="Dentista profissional sorrindo"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              
              {/* Card flutuante com informações do profissional */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-dental-primary to-dental-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {siteConfig.mainDoctor.prefix}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{siteConfig.mainDoctor.name}</div>
                    <div className="text-sm text-gray-600">{siteConfig.mainDoctor.specialty}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemento decorativo de fundo */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-r from-dental-accent to-dental-secondary opacity-20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
