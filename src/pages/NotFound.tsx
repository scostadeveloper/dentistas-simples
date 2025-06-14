import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dental-light/30 to-white px-4"
      role="main"
      aria-label="Página não encontrada"
    >
      <div className="text-center max-w-md animate-fade-in">
        <div className="mb-8">
          <h1 
            className="text-9xl font-bold text-dental-primary mb-4 animate-bounce"
            aria-label="Erro 404"
          >
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ops! Página não encontrada
          </h2>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi movida.
            <br />
            <span className="text-sm text-gray-500">
              URL tentada: {location.pathname}
            </span>
          </p>
        </div>

        <div className="space-y-4">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-dental-primary to-dental-secondary hover:from-dental-secondary hover:to-dental-primary text-white transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/" className="flex items-center justify-center space-x-2">
              <Home className="w-5 h-5" aria-hidden="true" />
              <span>Voltar para a página inicial</span>
            </Link>
          </Button>

          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full border-dental-primary text-dental-primary hover:bg-dental-primary hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
            Voltar para a página anterior
          </Button>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>
            Se você acredita que esta é uma página que deveria existir, entre em contato conosco:
          </p>
          <a 
            href={`mailto:${siteConfig.contact.email}`}
            className="text-dental-primary hover:text-dental-secondary transition-colors"
          >
            {siteConfig.contact.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
