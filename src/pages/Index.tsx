import React, { Suspense, lazy, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/siteConfig';
import Header from '@/components/Header';
import LoadingSpinner from '@/components/LoadingSpinner';

// Lazy load components
const Hero = lazy(() => import('@/components/Hero'));
const About = lazy(() => import('@/components/About'));
const Services = lazy(() => import('@/components/Services'));
const Equipment = lazy(() => import('@/components/Equipment'));
const Gallery = lazy(() => import('@/components/Gallery'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link?.hash) {
        e.preventDefault();
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>{siteConfig.clinicInfo.name} - {siteConfig.clinicInfo.tagline}</title>
        <meta name="description" content={siteConfig.clinicInfo.description} />
        <meta name="keywords" content="dentista, odontologia, clínica odontológica, sorriso azul, tratamento dental" />
        <meta property="og:title" content={`${siteConfig.clinicInfo.name} - ${siteConfig.clinicInfo.tagline}`} />
        <meta property="og:description" content={siteConfig.clinicInfo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${siteConfig.clinicInfo.name} - ${siteConfig.clinicInfo.tagline}`} />
        <meta name="twitter:description" content={siteConfig.clinicInfo.description} />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div 
        className="min-h-screen"
        role="main"
        aria-label="Página inicial"
      >
        <Header />
        
        <Suspense fallback={<LoadingSpinner />}>
          <main className="animate-fade-in">
            <Hero />
            <About />
            <Services />
            <Equipment />
            <Gallery />
            <Testimonials />
            <Contact />
          </main>
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
