import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean[]>(Array(6).fill(false));

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Empresária',
      content: 'Excelente atendimento! Fiz meu clareamento dental e o resultado superou todas as expectativas. A equipe é muito profissional e o ambiente é acolhedor.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b510?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'João Santos',
      role: 'Engenheiro',
      content: 'Depois de anos com medo de dentista, encontrei nesta clínica o cuidado que precisava. Fiz meu tratamento de canal sem dor alguma. Recomendo muito!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Ana Costa',
      role: 'Professora',
      content: 'Minha filha adora vir aqui! O atendimento infantil é excepcional. Os profissionais sabem como lidar com crianças e tornar a experiência divertida.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Carlos Oliveira',
      role: 'Advogado',
      content: 'Fiz meu implante aqui e estou impressionado com a qualidade do trabalho. Tecnologia de ponta e profissionais altamente qualificados.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Fernanda Lima',
      role: 'Designer',
      content: 'As lentes de contato dental mudaram minha vida! Agora tenho o sorriso dos meus sonhos. Atendimento impecável do início ao fim.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Roberto Mendes',
      role: 'Médico',
      content: 'Como profissional da saúde, posso afirmar que esta clínica segue os mais altos padrões de qualidade e biossegurança. Excelente trabalho!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    }
  ];

  const handleImageLoad = (index: number) => {
    setIsImageLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <section 
      id="depoimentos" 
      className="py-20 bg-gradient-to-br from-dental-light/30 to-white"
      aria-label="Depoimentos dos pacientes"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div 
            className="inline-block bg-dental-accent/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            role="status"
            aria-label="Seção de depoimentos"
          >
            DEPOIMENTOS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dental-primary to-dental-secondary">
              pacientes dizem
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos pacientes é nossa maior recompensa. 
            Veja o que eles têm a dizer sobre nossa clínica.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-dental-accent/30 relative group hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              role="article"
              aria-label={`Depoimento de ${testimonial.name}`}
            >
              {/* Quote Icon */}
              <div 
                className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r from-dental-primary to-dental-secondary rounded-full flex items-center justify-center"
                aria-hidden="true"
              >
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div 
                className="flex items-center space-x-1 mb-4 mt-2"
                role="img"
                aria-label={`${testimonial.rating} de 5 estrelas`}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                {!isImageLoaded[index] && (
                  <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
                )}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`w-12 h-12 rounded-full object-cover transition-opacity duration-300 ${
                    isImageLoaded[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center" role="listitem">
            <div className="text-3xl lg:text-4xl font-bold text-dental-primary mb-2">98%</div>
            <div className="text-gray-600">Satisfação dos Pacientes</div>
          </div>
          <div className="text-center" role="listitem">
            <div className="text-3xl lg:text-4xl font-bold text-dental-primary mb-2">2000+</div>
            <div className="text-gray-600">Sorrisos Transformados</div>
          </div>
          <div className="text-center" role="listitem">
            <div className="text-3xl lg:text-4xl font-bold text-dental-primary mb-2">15+</div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
          <div className="text-center" role="listitem">
            <div className="text-3xl lg:text-4xl font-bold text-dental-primary mb-2">5★</div>
            <div className="text-gray-600">Avaliação Média</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
