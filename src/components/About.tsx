/**
 * Componente About - Seção Sobre a Clínica
 * 
 * Esta seção apresenta informações detalhadas sobre a clínica, incluindo:
 * - Galeria de imagens do consultório
 * - Badge de anos de experiência
 * - Descrição da filosofia e metodologia da clínica
 * - Grid de características e diferenciais
 * - Cards com missão e visão da empresa
 */

import React, { useState } from 'react';
import { Award, Users, Clock, Heart, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const About = () => {
  const [imagesLoaded, setImagesLoaded] = useState({
    image1: false,
    image2: false
  });

  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleImageLoad = (imageKey: keyof typeof imagesLoaded) => {
    setImagesLoaded(prev => ({ ...prev, [imageKey]: true }));
  };

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const handleKeyPress = (event: React.KeyboardEvent, cardId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard(cardId);
    }
  };

  return (
    <section 
      id="sobre" 
      className="py-20 bg-white"
      aria-label="Sobre a clínica"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* === GALERIA DE IMAGENS === */}
          <div className="relative animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden h-64 bg-gray-100 group">
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=400&q=80"
                  alt="Consultório odontológico moderno"
                  className={`rounded-xl h-64 object-cover transition-all duration-300 group-hover:scale-110 ${
                    imagesLoaded.image1 ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad('image1')}
                />
                {!imagesLoaded.image1 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-dental-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Consultório Moderno</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden h-64 bg-gray-100 mt-8 group">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80"
                  alt="Equipamentos odontológicos modernos"
                  className={`rounded-xl h-64 object-cover transition-all duration-300 group-hover:scale-110 ${
                    imagesLoaded.image2 ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad('image2')}
                />
                {!imagesLoaded.image2 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-dental-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Equipamentos Modernos</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Badge de experiência flutuante */}
            <div 
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-dental-primary to-dental-secondary text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl animate-bounce-slow"
              role="status"
              aria-label={`${siteConfig.clinicInfo.yearsOfExperience} anos de experiência`}
            >
              <div className="text-3xl font-bold">{siteConfig.clinicInfo.yearsOfExperience}+</div>
              <div className="text-sm text-center">Anos de<br/>Experiência</div>
            </div>
          </div>

          {/* === CONTEÚDO INFORMATIVO === */}
          <div className="lg:pl-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {/* Tag identificadora */}
            <div 
              className="inline-block bg-dental-accent/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
              role="status"
              aria-label="Centro Odontológico"
            >
              CENTRO ODONTOLÓGICO
            </div>

            {/* Título principal */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Paixão pela excelência,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dental-primary to-dental-secondary">
                compromisso com o cuidado
              </span>
            </h2>

            {/* Descrição da clínica */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {siteConfig.texts.aboutDescription}
            </p>

            {/* === GRID DE CARACTERÍSTICAS === */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Certificações */}
              <div 
                className="flex items-start space-x-3 group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => toggleCard('certificacoes')}
                onKeyPress={(e) => handleKeyPress(e, 'certificacoes')}
                role="button"
                tabIndex={0}
                aria-expanded={expandedCard === 'certificacoes'}
                aria-controls="certificacoes-content"
              >
                <div className="w-10 h-10 bg-dental-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-dental-accent/20 transition-colors">
                  <Award className="w-5 h-5 text-dental-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Certificações</h3>
                  <p className="text-sm text-gray-600">Profissionais certificados e em constante atualização</p>
                  <div 
                    id="certificacoes-content"
                    className={`mt-2 text-sm text-gray-500 overflow-hidden transition-all duration-300 ${
                      expandedCard === 'certificacoes' ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p>Nossos profissionais possuem certificações internacionais e participam regularmente de congressos e cursos de atualização.</p>
                  </div>
                </div>
                <ChevronRight 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    expandedCard === 'certificacoes' ? 'transform rotate-90' : ''
                  }`}
                  aria-hidden="true"
                />
              </div>

              {/* Equipe especializada */}
              <div 
                className="flex items-start space-x-3 group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => toggleCard('equipe')}
                onKeyPress={(e) => handleKeyPress(e, 'equipe')}
                role="button"
                tabIndex={0}
                aria-expanded={expandedCard === 'equipe'}
                aria-controls="equipe-content"
              >
                <div className="w-10 h-10 bg-dental-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-dental-secondary/20 transition-colors">
                  <Users className="w-5 h-5 text-dental-secondary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Equipe Especializada</h3>
                  <p className="text-sm text-gray-600">Dentistas especializados em diversas áreas</p>
                  <div 
                    id="equipe-content"
                    className={`mt-2 text-sm text-gray-500 overflow-hidden transition-all duration-300 ${
                      expandedCard === 'equipe' ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p>Nossa equipe é composta por especialistas em ortodontia, endodontia, periodontia, implantodontia e outras áreas.</p>
                  </div>
                </div>
                <ChevronRight 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    expandedCard === 'equipe' ? 'transform rotate-90' : ''
                  }`}
                  aria-hidden="true"
                />
              </div>

              {/* Horário flexível */}
              <div 
                className="flex items-start space-x-3 group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => toggleCard('horario')}
                onKeyPress={(e) => handleKeyPress(e, 'horario')}
                role="button"
                tabIndex={0}
                aria-expanded={expandedCard === 'horario'}
                aria-controls="horario-content"
              >
                <div className="w-10 h-10 bg-dental-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-dental-primary/20 transition-colors">
                  <Clock className="w-5 h-5 text-dental-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Horário Flexível</h3>
                  <p className="text-sm text-gray-600">Atendimento nos horários que funcionam para você</p>
                  <div 
                    id="horario-content"
                    className={`mt-2 text-sm text-gray-500 overflow-hidden transition-all duration-300 ${
                      expandedCard === 'horario' ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p>Oferecemos horários flexíveis, incluindo atendimento aos sábados e plantão de emergência 24 horas.</p>
                  </div>
                </div>
                <ChevronRight 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    expandedCard === 'horario' ? 'transform rotate-90' : ''
                  }`}
                  aria-hidden="true"
                />
              </div>

              {/* Cuidado personalizado */}
              <div 
                className="flex items-start space-x-3 group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => toggleCard('cuidado')}
                onKeyPress={(e) => handleKeyPress(e, 'cuidado')}
                role="button"
                tabIndex={0}
                aria-expanded={expandedCard === 'cuidado'}
                aria-controls="cuidado-content"
              >
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                  <Heart className="w-5 h-5 text-red-500" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Cuidado Personalizado</h3>
                  <p className="text-sm text-gray-600">Tratamento humanizado e acolhedor</p>
                  <div 
                    id="cuidado-content"
                    className={`mt-2 text-sm text-gray-500 overflow-hidden transition-all duration-300 ${
                      expandedCard === 'cuidado' ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p>Desenvolvemos um plano de tratamento personalizado para cada paciente, considerando suas necessidades e expectativas.</p>
                  </div>
                </div>
                <ChevronRight 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    expandedCard === 'cuidado' ? 'transform rotate-90' : ''
                  }`}
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* === MISSÃO E VISÃO === */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card da Missão */}
              <div className="bg-gradient-to-br from-dental-light to-white p-6 rounded-xl border border-dental-accent/10 hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-dental-primary mb-2">Nossa Missão</h4>
                <p className="text-sm text-gray-600">
                  {siteConfig.texts.mission}
                </p>
              </div>

              {/* Card da Visão */}
              <div className="bg-gradient-to-br from-dental-accent/5 to-white p-6 rounded-xl border border-dental-accent/10 hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-dental-primary mb-2">Nossa Visão</h4>
                <p className="text-sm text-gray-600">
                  {siteConfig.texts.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
