import React, { useState } from 'react';
import { Monitor, Cpu, Microscope, Camera, Zap, Shield } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const Equipment = () => {
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  const equipment = [
    {
      icon: <Monitor className="w-6 h-6" aria-hidden="true" />,
      name: 'Tomografia 3D',
      description: 'Diagnóstico preciso com imagens tridimensionais de alta resolução',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Cpu className="w-6 h-6" aria-hidden="true" />,
      name: 'Laser Odontológico',
      description: 'Procedimentos minimamente invasivos e cicatrização acelerada',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Microscope className="w-6 h-6" aria-hidden="true" />,
      name: 'Microscópio Cirúrgico',
      description: 'Precisão máxima em procedimentos endodônticos e cirúrgicos',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Camera className="w-6 h-6" aria-hidden="true" />,
      name: 'Scanner Intraoral',
      description: 'Moldagens digitais precisas e confortáveis para o paciente',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Zap className="w-6 h-6" aria-hidden="true" />,
      name: 'LED para Clareamento',
      description: 'Tecnologia LED para clareamento rápido e eficaz',
      image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: <Shield className="w-6 h-6" aria-hidden="true" />,
      name: 'Esterilização Avançada',
      description: 'Autoclave classe B para máxima segurança e higienização',
      image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section 
      id="equipamentos" 
      className="py-20 bg-white"
      aria-label="Equipamentos da clínica"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div 
            className="inline-block bg-dental-accent/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            role="status"
            aria-label="Tecnologia Avançada"
          >
            TECNOLOGIA AVANÇADA
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Equipamentos de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dental-primary to-dental-secondary">
              última geração
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Investimos constantemente em tecnologia de ponta para oferecer 
            tratamentos mais precisos, confortáveis e eficazes.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-dental-light/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-dental-accent/30 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ${
                    imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                />
                {!imagesLoaded[index] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-dental-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                  <div className="text-dental-primary">
                    {item.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-dental-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Benefits */}
        <div className="mt-16 bg-gradient-to-r from-dental-primary to-dental-secondary rounded-2xl p-8 lg:p-12 text-white animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Por que investimos em tecnologia?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-2 h-2 bg-dental-accent rounded-full group-hover:scale-150 transition-transform"></div>
                  <span>Diagnósticos mais precisos e detalhados</span>
                </div>
                <div className="flex items-center space-x-3 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-2 h-2 bg-dental-accent rounded-full group-hover:scale-150 transition-transform"></div>
                  <span>Tratamentos menos invasivos e mais confortáveis</span>
                </div>
                <div className="flex items-center space-x-3 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-2 h-2 bg-dental-accent rounded-full group-hover:scale-150 transition-transform"></div>
                  <span>Resultados mais previsíveis e duradouros</span>
                </div>
                <div className="flex items-center space-x-3 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-2 h-2 bg-dental-accent rounded-full group-hover:scale-150 transition-transform"></div>
                  <span>Menor tempo de recuperação</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-6xl font-bold mb-2 animate-bounce-slow">{siteConfig.stats.satisfaction}%</div>
              <div className="text-dental-light">dos nossos pacientes recomendam nossos tratamentos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
