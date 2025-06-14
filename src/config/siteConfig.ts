
/**
 * Configuração Central do Site
 * 
 * Este arquivo centraliza todas as configurações personalizáveis do site,
 * permitindo fácil adaptação para diferentes clientes dentistas.
 */

export const siteConfig = {
  // === INFORMAÇÕES DA CLÍNICA ===
  clinicInfo: {
    name: "DentalCare",
    description: "Há mais de 15 anos cuidando do seu sorriso com tecnologia de ponta",
    tagline: "Sorrisos mais brilhantes, vidas mais felizes",
    yearsOfExperience: 15,
    patientsServed: 2000,
    rating: 5,
  },

  // === CONTATO ===
  contact: {
    phone: "(11) 9999-9999",
    whatsappNumber: "5511999999999", // Formato: código do país + DDD + número
    email: "contato@dentalcare.com.br",
    address: {
      street: "Rua das Flores, 123",
      neighborhood: "Vila Madalena",
      city: "São Paulo",
      state: "SP",
      zipCode: "01234-567"
    }
  },

  // === HORÁRIOS DE FUNCIONAMENTO ===
  businessHours: {
    weekdays: "8h às 18h",
    saturday: "8h às 12h",
    sunday: "Fechado",
    emergency: "24h"
  },

  // === PROFISSIONAL PRINCIPAL ===
  mainDoctor: {
    name: "Dr. Ana Silva",
    specialty: "Especialista em Ortodontia",
    prefix: "Dr"
  },

  // === REDES SOCIAIS ===
  socialMedia: {
    facebook: "#",
    instagram: "#",
    linkedin: "#"
  },

  // === TEXTOS PERSONALIZÁVEIS ===
  texts: {
    heroSubtitle: "Transforme seu sorriso com nossa equipe especializada. Utilizamos as mais modernas técnicas e equipamentos para garantir o melhor cuidado dental.",
    aboutDescription: "Nossa clínica combina tecnologia de ponta com atendimento humanizado. Cada tratamento é personalizado para atender às necessidades específicas de cada paciente, garantindo resultados excepcionais e duradouros.",
    mission: "Transformar vidas através de sorrisos saudáveis, proporcionando tratamentos de excelência com tecnologia avançada.",
    vision: "Ser referência em odontologia, reconhecida pela qualidade, inovação e atendimento humanizado."
  },

  // === ESTATÍSTICAS ===
  stats: {
    satisfaction: "98%",
    transformedSmiles: "2000+",
    experience: "15+",
    averageRating: "5★"
  }
};

/**
 * Configuração de Serviços Oferecidos
 * 
 * Lista todos os serviços disponíveis na clínica.
 * Cada serviço pode ser habilitado/desabilitado conforme necessário.
 */
export const servicesConfig = [
  {
    id: "ortodontia",
    title: "Ortodontia",
    description: "Alinhamento dental com aparelhos convencionais e invisíveis para um sorriso perfeito.",
    icon: "Smile",
    enabled: true,
    color: "from-dental-primary to-dental-secondary"
  },
  {
    id: "clareamento",
    title: "Clareamento Dental",
    description: "Tecnologia LED para um clareamento seguro e eficaz em menos tempo.",
    icon: "Zap",
    enabled: true,
    color: "from-dental-accent to-dental-secondary"
  },
  {
    id: "implantes",
    title: "Implantes",
    description: "Implantes dentários com tecnologia 3D para substituição de dentes perdidos.",
    icon: "Shield",
    enabled: true,
    color: "from-dental-secondary to-dental-primary"
  },
  {
    id: "estetica",
    title: "Estética Dental",
    description: "Lentes de contato dental e facetas para um sorriso harmônico e natural.",
    icon: "Sparkles",
    enabled: true,
    color: "from-dental-primary to-dental-accent"
  },
  {
    id: "odontopediatria",
    title: "Odontopediatria",
    description: "Cuidado especializado para crianças em ambiente acolhedor e divertido.",
    icon: "Heart",
    enabled: true,
    color: "from-pink-400 to-dental-accent"
  },
  {
    id: "periodontia",
    title: "Periodontia",
    description: "Tratamento de gengivas e prevenção de doenças periodontais.",
    icon: "Eye",
    enabled: true,
    color: "from-dental-accent to-dental-primary"
  }
];

/**
 * Configuração de Equipamentos
 * 
 * Lista dos equipamentos e tecnologias disponíveis na clínica.
 */
export const equipmentConfig = [
  {
    id: "tomografia",
    name: "Tomografia 3D",
    description: "Diagnóstico preciso com imagens tridimensionais de alta resolução",
    icon: "Monitor",
    enabled: true
  },
  {
    id: "laser",
    name: "Laser Odontológico",
    description: "Procedimentos minimamente invasivos e cicatrização acelerada",
    icon: "Cpu",
    enabled: true
  },
  {
    id: "microscopio",
    name: "Microscópio Cirúrgico",
    description: "Precisão máxima em procedimentos endodônticos e cirúrgicos",
    icon: "Microscope",
    enabled: true
  },
  {
    id: "scanner",
    name: "Scanner Intraoral",
    description: "Moldagens digitais precisas e confortáveis para o paciente",
    icon: "Camera",
    enabled: true
  },
  {
    id: "led-clareamento",
    name: "LED para Clareamento",
    description: "Tecnologia LED para clareamento rápido e eficaz",
    icon: "Zap",
    enabled: true
  },
  {
    id: "esterilizacao",
    name: "Esterilização Avançada",
    description: "Autoclave classe B para máxima segurança e higienização",
    icon: "Shield",
    enabled: true
  }
];
