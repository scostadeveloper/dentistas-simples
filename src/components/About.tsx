
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

import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* === GALERIA DE IMAGENS === */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=400&q=80"
                alt="Consultório odontológico moderno"
                className="rounded-xl h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80"
                alt="Equipamentos odontológicos modernos"
                className="rounded-xl h-64 object-cover mt-8"
              />
            </div>
            
            {/* Badge de experiência flutuante */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-dental-primary to-dental-secondary text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl">
              <div className="text-3xl font-bold">{siteConfig.clinicInfo.yearsOfExperience}+</div>
              <div className="text-sm text-center">Anos de<br/>Experiência</div>
            </div>
          </div>

          {/* === CONTEÚDO INFORMATIVO === */}
          <div className="lg:pl-8">
            {/* Tag identificadora */}
            <div className="inline-block bg-dental-accent/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
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
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-dental-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-dental-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Certificações</h3>
                  <p className="text-sm text-gray-600">Profissionais certificados e em constante atualização</p>
                </div>
              </div>

              {/* Equipe especializada */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-dental-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-dental-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Equipe Especializada</h3>
                  <p className="text-sm text-gray-600">Dentistas especializados em diversas áreas</p>
                </div>
              </div>

              {/* Horário flexível */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-dental-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-dental-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Horário Flexível</h3>
                  <p className="text-sm text-gray-600">Atendimento nos horários que funcionam para você</p>
                </div>
              </div>

              {/* Cuidado personalizado */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Cuidado Personalizado</h3>
                  <p className="text-sm text-gray-600">Tratamento humanizado e acolhedor</p>
                </div>
              </div>
            </div>

            {/* === MISSÃO E VISÃO === */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card da Missão */}
              <div className="bg-gradient-to-br from-dental-light to-white p-6 rounded-xl border border-dental-accent/10">
                <h4 className="font-semibold text-dental-primary mb-2">Nossa Missão</h4>
                <p className="text-sm text-gray-600">
                  {siteConfig.texts.mission}
                </p>
              </div>

              {/* Card da Visão */}
              <div className="bg-gradient-to-br from-dental-accent/5 to-white p-6 rounded-xl border border-dental-accent/10">
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
