
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-dental-primary to-dental-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-bold">DentalCare</span>
            </div>
            <p className="text-dental-light mb-6 max-w-md">
              Há mais de 15 anos cuidando do seu sorriso com tecnologia de ponta, 
              profissionais especializados e atendimento humanizado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-dental-light hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-dental-light hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="text-dental-light hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#equipamentos" className="text-dental-light hover:text-white transition-colors">Equipamentos</a></li>
              <li><a href="#depoimentos" className="text-dental-light hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="text-dental-light hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-dental-accent" />
                <span className="text-dental-light">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-dental-accent" />
                <span className="text-dental-light">contato@dentalcare.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-dental-accent mt-1" />
                <span className="text-dental-light">
                  Rua das Flores, 123<br/>
                  Vila Madalena, São Paulo - SP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dental-light text-sm">
            © 2024 DentalCare. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-dental-light hover:text-white text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-dental-light hover:text-white text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
