import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'Quais são os horários de atendimento?',
      answer: 'Atendemos de segunda a sexta, das 8h às 20h, e aos sábados das 8h às 14h. Para emergências, temos plantão 24 horas.'
    },
    {
      question: 'Vocês aceitam planos odontológicos?',
      answer: 'Sim, trabalhamos com os principais planos odontológicos do mercado. Entre em contato para verificar se seu plano está na lista de convênios aceitos.'
    },
    {
      question: 'Como agendar uma consulta?',
      answer: 'Você pode agendar uma consulta através do WhatsApp, telefone ou pelo nosso site. Oferecemos a primeira consulta de avaliação gratuita.'
    },
    {
      question: 'Quanto tempo dura um tratamento?',
      answer: 'A duração do tratamento varia de acordo com cada caso. Na primeira consulta, realizamos uma avaliação completa e apresentamos um plano de tratamento personalizado com as estimativas de tempo.'
    },
    {
      question: 'Vocês oferecem tratamento para crianças?',
      answer: 'Sim, temos especialistas em odontopediatria e um ambiente preparado para atender crianças com conforto e segurança.'
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos cartões de crédito e débito, transferência bancária, PIX e parcelamos em até 12x sem juros.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyPress = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <section 
      id="faq" 
      className="py-20 bg-gray-50"
      aria-label="Perguntas Frequentes"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div 
            className="inline-block bg-dental-accent/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            role="status"
            aria-label="Dúvidas Comuns"
          >
            DÚVIDAS COMUNS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perguntas
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dental-primary to-dental-secondary">
              Frequentes
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços, agendamentos e procedimentos.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-dental-primary focus:ring-offset-2 rounded-xl"
                  onClick={() => toggleFAQ(index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-dental-primary transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                  aria-hidden={openIndex !== index}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <p className="text-lg text-gray-600 mb-6">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-dental-primary text-white rounded-full font-medium hover:bg-dental-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-dental-primary focus:ring-offset-2"
            role="button"
            aria-label="Agendar consulta pelo WhatsApp"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 