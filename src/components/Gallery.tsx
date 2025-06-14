import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean[]>(Array(6).fill(true));

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
      alt: 'Recepção moderna da clínica dental',
      category: 'Ambiente'
    },
    {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      alt: 'Consultório odontológico equipado',
      category: 'Consultório'
    },
    {
      src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      alt: 'Equipamentos odontológicos modernos',
      category: 'Equipamentos'
    },
    {
      src: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=800&q=80',
      alt: 'Área de esterilização odontológica',
      category: 'Higienização'
    },
    {
      src: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=800&q=80',
      alt: 'Consultório com vista panorâmica',
      category: 'Consultório'
    },
    {
      src: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80',
      alt: 'Área de espera confortável da clínica',
      category: 'Ambiente'
    }
  ];

  // Navegação com teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (e.key) {
        case 'Escape':
          setSelectedImage(null);
          setIsZoomed(false);
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'z':
          setIsZoomed(!isZoomed);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, isZoomed]);

  // Fechar modal ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedImage(null);
        setIsZoomed(false);
      }
    };

    if (selectedImage !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedImage]);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
      setIsZoomed(false);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
      setIsZoomed(false);
    }
  };

  const handleImageLoad = (index: number) => {
    setIsLoading(prev => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <section className="py-20 bg-white" id="galeria">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-dental-accent/10 text-dental-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            NOSSA CLÍNICA
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça nosso
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dental-primary to-dental-secondary">
              ambiente moderno
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Um espaço projetado para seu conforto e bem-estar, com tecnologia 
            de ponta e ambiente acolhedor para toda a família.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(index)}
              aria-label={`Ver imagem: ${image.alt}`}
            >
              {/* Placeholder */}
              {isLoading[index] && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}
              
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-all duration-300 ${
                  isLoading[index] ? 'opacity-0' : 'opacity-100 group-hover:scale-110'
                }`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm bg-dental-accent px-2 py-1 rounded-full mb-2 inline-block">
                    {image.category}
                  </div>
                  <div className="font-medium">{image.alt}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Visualização de imagem"
          >
            <div 
              ref={modalRef}
              className="relative max-w-4xl max-h-full"
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className={`max-w-full max-h-[80vh] object-contain rounded-lg transition-transform duration-300 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
              />
              
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setIsZoomed(false);
                }}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Fechar visualização"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Zoom Button */}
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label={isZoomed ? "Reduzir zoom" : "Aumentar zoom"}
              >
                {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm bg-dental-accent px-3 py-1 rounded-full mb-2 inline-block">
                  {galleryImages[selectedImage].category}
                </div>
                <div className="font-medium text-lg">{galleryImages[selectedImage].alt}</div>
              </div>

              {/* Keyboard Shortcuts Help */}
              <div className="absolute bottom-4 right-4 text-white/60 text-sm">
                <p>Pressione <kbd className="px-2 py-1 bg-white/10 rounded">←</kbd> <kbd className="px-2 py-1 bg-white/10 rounded">→</kbd> para navegar</p>
                <p>Pressione <kbd className="px-2 py-1 bg-white/10 rounded">Z</kbd> para zoom</p>
                <p>Pressione <kbd className="px-2 py-1 bg-white/10 rounded">ESC</kbd> para fechar</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
