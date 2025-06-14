import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { toast } from 'sonner';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    // Adiciona um listener para o evento de carregamento do iframe do mapa
    const handleMapLoad = () => setIsMapLoaded(true);
    const mapFrame = document.querySelector('iframe[title="Localização da clínica"]');
    if (mapFrame) {
      mapFrame.addEventListener('load', handleMapLoad);
    }
    return () => {
      if (mapFrame) {
        mapFrame.removeEventListener('load', handleMapLoad);
      }
    };
  }, []);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = 'Formato inválido (11) 99999-9999';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.service) {
      newErrors.service = 'Selecione um serviço';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Por favor, corrija os erros no formulário');
      return;
    }

    setIsSubmitting(true);

    try {
      // Aqui você implementaria a lógica de envio do formulário
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulação de envio
      
      toast.success('Mensagem enviada com sucesso!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = siteConfig.contact.whatsappNumber;
    const message = "Olá! Gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const handleKeyPress = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <section 
      id="contato" 
      className="py-20 bg-gradient-to-br from-dental-light/30 to-white"
      aria-label="Seção de contato"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div 
            className="inline-block bg-dental-accent/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            role="status"
            aria-label="Seção de contato"
          >
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
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua mensagem
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    className={`border-gray-200 focus:border-dental-primary ${errors.name ? 'border-red-500' : ''}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    required
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const formatted = formatPhoneNumber(e.target.value);
                      handleInputChange({ ...e, target: { ...e.target, value: formatted } });
                    }}
                    placeholder="(11) 99999-9999"
                    className={`border-gray-200 focus:border-dental-primary ${errors.phone ? 'border-red-500' : ''}`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    required
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className={`border-gray-200 focus:border-dental-primary ${errors.email ? 'border-red-500' : ''}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  required
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Serviço de interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-primary focus:border-dental-primary ${
                    errors.service ? 'border-red-500' : ''
                  }`}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                  required
                >
                  <option value="">Selecione um serviço</option>
                  <option value="ortodontia">Ortodontia</option>
                  <option value="clareamento">Clareamento Dental</option>
                  <option value="implantes">Implantes</option>
                  <option value="estetica">Estética Dental</option>
                  <option value="odontopediatria">Odontopediatria</option>
                  <option value="periodontia">Periodontia</option>
                  <option value="outro">Outro</option>
                </select>
                {errors.service && (
                  <p id="service-error" className="mt-1 text-sm text-red-500" role="alert">{errors.service}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-nos como podemos ajudar..."
                  className={`border-gray-200 focus:border-dental-primary h-32 ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  required
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">{errors.message}</p>
                )}
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-dental-primary to-dental-secondary hover:from-dental-secondary hover:to-dental-primary text-white transition-all duration-300 transform hover:scale-105"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div 
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-dental-accent/30 transition-colors animate-slide-up cursor-pointer"
              style={{ animationDelay: '100ms' }}
              onClick={() => window.location.href = `tel:${siteConfig.contact.phone}`}
              onKeyPress={(e) => handleKeyPress(e, () => window.location.href = `tel:${siteConfig.contact.phone}`)}
              role="button"
              tabIndex={0}
              aria-label={`Ligar para ${siteConfig.contact.phone}`}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-dental-primary to-dental-secondary rounded-lg flex items-center justify-center text-white">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                  <a 
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-gray-600 hover:text-dental-primary transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <p className="text-sm text-dental-primary">Atendimento 24h para emergências</p>
                </div>
              </div>
            </div>

            <div 
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-dental-accent/30 transition-colors animate-slide-up cursor-pointer"
              style={{ animationDelay: '200ms' }}
              onClick={() => window.location.href = `mailto:${siteConfig.contact.email}`}
              onKeyPress={(e) => handleKeyPress(e, () => window.location.href = `mailto:${siteConfig.contact.email}`)}
              role="button"
              tabIndex={0}
              aria-label={`Enviar e-mail para ${siteConfig.contact.email}`}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-dental-accent to-dental-secondary rounded-lg flex items-center justify-center text-white">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-gray-600 hover:text-dental-primary transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-sm text-dental-primary">Resposta em até 2h</p>
                </div>
              </div>
            </div>

            <div 
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-dental-accent/30 transition-colors animate-slide-up cursor-pointer"
              style={{ animationDelay: '300ms' }}
              onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address.street)}`, '_blank')}
              onKeyPress={(e) => handleKeyPress(e, () => window.open(`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address.street)}`, '_blank'))}
              role="button"
              tabIndex={0}
              aria-label="Ver localização no Google Maps"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-dental-secondary to-dental-primary rounded-lg flex items-center justify-center text-white">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                  <address className="text-gray-600 not-italic">
                    {`${siteConfig.contact.address.street}, ${siteConfig.contact.address.neighborhood}, ${siteConfig.contact.address.city} - ${siteConfig.contact.address.state}, ${siteConfig.contact.address.zipCode}`}
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-dental-accent/30 transition-colors animate-slide-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-dental-primary to-dental-accent rounded-lg flex items-center justify-center text-white">
                  <Clock className="w-6 h-6" aria-hidden="true" />
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
        </div>

        {/* Map Section */}
        <div className="mt-16 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Nossa Localização
            </h3>
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
              {!isMapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-dental-primary border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197577477744!2d-46.6934013!3d-23.5646162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57c7f481ad59%3A0x786ac31c0e4d81a8!2sVila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1647881234567!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da clínica"
                aria-label="Mapa com a localização da clínica"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
