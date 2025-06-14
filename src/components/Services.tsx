import React, { useState } from 'react';
import { Smile, Zap, Shield, Sparkles, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/siteConfig';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: 'Ortodontia',
      description: 'Alinhamento dental com aparelhos convencionais e invisíveis para um sorriso perfeito.',
      color: 'from-dental-primary to-dental-secondary',
      tooltip: 'Tratamento para alinhar os dentes e melhorar a mordida'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Clareamento Dental',
      description: 'Tecnologia LED para um clareamento seguro e eficaz em menos tempo.',
      color: 'from-dental-accent to-dental-secondary',
      tooltip: 'Clareamento dental com tecnologia avançada LED'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Implantes',
      description: 'Implantes dentários com tecnologia 3D para substituição de dentes perdidos.',
      color: 'from-dental-secondary to-dental-primary',
      tooltip: 'Substituição de dentes perdidos com implantes modernos'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Estética Dental',
      description: 'Lentes de contato dental e facetas para um sorriso harmônico e natural.',
      color: 'from-dental-primary to-dental-accent',
      tooltip: 'Procedimentos estéticos para um sorriso mais bonito'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Odontopediatria',
      description: 'Cuidado especializado para crianças em ambiente acolhedor e divertido.',
      color: 'from-pink-400 to-dental-accent',
      tooltip: 'Cuidados odontológicos especializados para crianças'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Periodontia',
      description: 'Tratamento de gengivas e prevenção de doenças periodontais.',
      color: 'from-dental-accent to-dental-primary',
      tooltip: 'Tratamento e prevenção de doenças gengivais'
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = siteConfig.contact.whatsappNumber;
    const message = "Olá! Gostaria de agendar uma avaliação odontológica gratuita.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <section 
      id="servicos" 
      className="py-20 bg-gradient-to-br from-dental-light/30 to-white"
      aria-label="Nossos serviços"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div 
            className="inline-block bg-dental-accent/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            role="status"
            aria-label="Seção de serviços"
          >
            NOSSOS SERVIÇOS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tratamentos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dental-primary to-dental-secondary">
              personalizados
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços odontológicos com tecnologia 
            de ponta e profissionais especializados para cuidar do seu sorriso.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-dental-accent/30 hover:-translate-y-1 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                    role="article"
                    aria-label={`Serviço: ${service.title}`}
                  >
                    <div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                      aria-hidden="true"
                    >
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-dental-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button 
                        className="text-dental-primary font-medium hover:text-dental-secondary transition-colors flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
                        onClick={() => handleWhatsAppClick()}
                        onKeyDown={(e) => handleKeyPress(e, handleWhatsAppClick)}
                        aria-label={`Agendar consulta para ${service.title}`}
                      >
                        <span>Saiba mais</span>
                        <span className="text-lg" aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{service.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <div 
            className="bg-gradient-to-r from-dental-primary to-dental-secondary rounded-2xl p-8 text-white"
            role="complementary"
            aria-label="Chamada para ação"
          >
            <h3 className="text-2xl font-bold mb-4">
              Não encontrou o tratamento que procura?
            </h3>
            <p className="text-dental-light mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para avaliar seu caso e recomendar 
              o melhor tratamento para suas necessidades específicas.
            </p>
            <Button 
              className="bg-white text-dental-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
              onClick={handleWhatsAppClick}
              onKeyDown={(e) => handleKeyPress(e, handleWhatsAppClick)}
              aria-label="Agendar avaliação gratuita via WhatsApp"
            >
              Agendar Avaliação Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
