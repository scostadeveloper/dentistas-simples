
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-dental-light/30 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-dental-accent/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            ENTRE EM CONTATO
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Agende sua
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dental-primary to-dental-secondary">
              consulta hoje
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para cuidar do seu sorriso. Entre em contato 
            conosco e agende sua consulta de avaliação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua mensagem
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <Input placeholder="Seu nome" className="border-gray-200 focus:border-dental-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <Input placeholder="(11) 99999-9999" className="border-gray-200 focus:border-dental-primary" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <Input type="email" placeholder="seu@email.com" className="border-gray-200 focus:border-dental-primary" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Serviço de interesse
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-primary focus:border-dental-primary">
                  <option>Selecione um serviço</option>
                  <option>Ortodontia</option>
                  <option>Clareamento Dental</option>
                  <option>Implantes</option>
                  <option>Estética Dental</option>
                  <option>Odontopediatria</option>
                  <option>Periodontia</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Conte-nos como podemos ajudar..."
                  className="border-gray-200 focus:border-dental-primary h-32"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-dental-primary to-dental-secondary hover:from-dental-secondary hover:to-dental-primary text-white">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-dental-accent/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-dental-primary to-dental-secondary rounded-lg flex items-center justify-center text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                    <p className="text-gray-600">(11) 9999-9999</p>
                    <p className="text-sm text-dental-primary">Atendimento 24h para emergências</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-dental-accent/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-dental-accent to-dental-secondary rounded-lg flex items-center justify-center text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-600">contato@dentalcare.com.br</p>
                    <p className="text-sm text-dental-primary">Resposta em até 2h</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-dental-accent/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-dental-secondary to-dental-primary rounded-lg flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">Rua das Flores, 123<br/>Vila Madalena, São Paulo - SP</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-dental-accent/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-dental-primary to-dental-accent rounded-lg flex items-center justify-center text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p className="text-dental-primary text-sm">Emergências 24h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-dental-primary to-dental-secondary rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Agende agora mesmo</h4>
              <p className="text-dental-light mb-6">
                Clique nos botões abaixo para agendar rapidamente ou tirar dúvidas.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-white text-dental-primary hover:bg-gray-100 flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Agendar via WhatsApp</span>
                </Button>
                <Button variant="outline" className="w-full bg-white text-dental-primary hover:bg-gray-100 flex items-center justify-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Online</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Nossa Localização
            </h3>
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-dental-primary" />
                <p>Mapa interativo</p>
                <p className="text-sm">Rua das Flores, 123 - Vila Madalena, São Paulo - SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
