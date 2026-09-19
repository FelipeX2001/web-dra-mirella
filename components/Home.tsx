import React from 'react';
import Hero from './Hero';
import Gallery from './Gallery';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      
      {/* Services Teaser Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
                {t.services.mainTitle}
              </h2>
              <div className="w-24 h-1 bg-secondary mb-8"></div>
              <p className="text-text-light text-lg font-light leading-relaxed">
                {t.services.mainDesc}
              </p>
            </div>
            <Link 
              to="/services" 
              className="group flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase border-b border-primary pb-2 hover:text-secondary hover:border-secondary transition-all"
            >
              Ver todos los servicios
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Minimal 3-Column Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {t.services.categories.slice(0, 3).map((category, index) => (
              <Link to="/services" key={index} className="group block relative overflow-hidden">
                <div className="h-[400px] overflow-hidden mb-6 bg-gray-100">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-xl font-serif text-primary mb-2 group-hover:text-secondary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-text-muted font-bold tracking-wider uppercase">
                  Explorar
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
    </>
  );
};

export default Home;