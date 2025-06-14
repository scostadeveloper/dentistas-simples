import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Equipamentos', href: '#equipamentos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' }
  ];

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fechar menu ao mudar a rota
  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  // Função para abrir WhatsApp
  const handleWhatsAppClick = () => {
    const phoneNumber = siteConfig.contact.whatsappNumber;
    const message = "Olá! Gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-dental-primary to-dental-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">{siteConfig.clinicInfo.name[0]}</span>
            </div>
            <span className="text-xl font-bold text-dental-primary">{siteConfig.clinicInfo.name}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Menu principal">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-dental-primary transition-colors font-medium"
                aria-label={`Ir para seção ${item.name}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center space-x-2 text-sm hover:text-dental-primary transition-colors"
              aria-label={`Ligar para ${siteConfig.contact.phone}`}
            >
              <Phone className="w-4 h-4 text-dental-accent" />
              <span className="text-gray-700">{siteConfig.contact.phone}</span>
            </a>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-dental-primary to-dental-secondary hover:from-dental-secondary hover:to-dental-primary text-white"
              aria-label="Agendar consulta via WhatsApp"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            ref={menuRef}
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-100"
            role="navigation"
            aria-label="Menu mobile"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-dental-primary transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Ir para seção ${item.name}`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 px-4">
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center space-x-2 text-sm mb-4 hover:text-dental-primary transition-colors"
                  aria-label={`Ligar para ${siteConfig.contact.phone}`}
                >
                  <Phone className="w-4 h-4 text-dental-accent" />
                  <span className="text-gray-700">{siteConfig.contact.phone}</span>
                </a>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-dental-primary to-dental-secondary text-white"
                  aria-label="Agendar consulta via WhatsApp"
                >
                  Agendar Consulta
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
