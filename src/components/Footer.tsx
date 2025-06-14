import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-gradient-to-r from-dental-primary to-dental-secondary text-white"
      role="contentinfo"
      aria-label="Rodapé do site"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <div 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                role="img"
                aria-label="Logo da clínica"
              >
                <span className="text-white font-bold text-lg">SA</span>
              </div>
              <span className="text-2xl font-bold">{siteConfig.clinicInfo.name}</span>
            </div>
            <p className="text-dental-light mb-6 max-w-md">
              {siteConfig.clinicInfo.description}
            </p>
            <div className="flex space-x-4">
              {siteConfig.socialMedia.facebook && (
                <a 
                  href={siteConfig.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook da clínica"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              {siteConfig.socialMedia.instagram && (
                <a 
                  href={siteConfig.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram da clínica"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              {siteConfig.socialMedia.linkedin && (
                <a 
                  href={siteConfig.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn da clínica"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <nav aria-label="Links rápidos">
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#inicio" 
                    className="text-dental-light hover:text-white transition-colors"
                    aria-label="Ir para seção Início"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a 
                    href="#sobre" 
                    className="text-dental-light hover:text-white transition-colors"
                    aria-label="Ir para seção Sobre"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a 
                    href="#servicos" 
                    className="text-dental-light hover:text-white transition-colors"
                    aria-label="Ir para seção Serviços"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a 
                    href="#equipamentos" 
                    className="text-dental-light hover:text-white transition-colors"
                    aria-label="Ir para seção Equipamentos"
                  >
                    Equipamentos
                  </a>
                </li>
                <li>
                  <a 
                    href="#depoimentos" 
                    className="text-dental-light hover:text-white transition-colors"
                    aria-label="Ir para seção Depoimentos"
                  >
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a 
                    href="#contato" 
                    className="text-dental-light hover:text-white transition-colors"
                    aria-label="Ir para seção Contato"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-dental-accent" aria-hidden="true" />
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-dental-light hover:text-white transition-colors"
                  aria-label={`Ligar para ${siteConfig.contact.phone}`}
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-dental-accent" aria-hidden="true" />
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-dental-light hover:text-white transition-colors"
                  aria-label={`Enviar e-mail para ${siteConfig.contact.email}`}
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-dental-accent mt-1" aria-hidden="true" />
                <address className="text-dental-light not-italic">
                  {`${siteConfig.contact.address.street}, ${siteConfig.contact.address.neighborhood}, ${siteConfig.contact.address.city} - ${siteConfig.contact.address.state}, ${siteConfig.contact.address.zipCode}`}
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in" style={{ animationDelay: '300ms' }}>
          <p className="text-dental-light text-sm">
            © {currentYear} {siteConfig.clinicInfo.name}. Todos os direitos reservados.
          </p>
          <nav className="flex space-x-6 mt-4 md:mt-0" aria-label="Links legais">
            <a 
              href="/politica-de-privacidade" 
              className="text-dental-light hover:text-white text-sm transition-colors"
              aria-label="Política de Privacidade"
            >
              Política de Privacidade
            </a>
            <a 
              href="/termos-de-uso" 
              className="text-dental-light hover:text-white text-sm transition-colors"
              aria-label="Termos de Uso"
            >
              Termos de Uso
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
