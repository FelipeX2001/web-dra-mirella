import React from 'react';
import { useLanguage } from '../LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  
  // Imágenes seleccionadas para la galería principal
  const img1 = "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella/blanqueamientos_portada.JPG";
  const img2 = "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella/carillas_dentales_portada.JPG";
  const img3 = "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella/coronas_portada.JPG";

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-6">
            {t.gallery.title}
          </h2>
          <p className="text-text-light max-w-3xl mx-auto font-light leading-relaxed">
            {t.gallery.text}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Item 1 - Blanqueamiento */}
          <div className="relative group h-[400px] overflow-hidden bg-gray-200">
            <img 
              src={img1} 
              alt="Blanqueamiento Dental" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          </div>

          {/* Item 2 - Carillas (Center CTA) */}
          <div className="relative group h-[400px] overflow-hidden bg-gray-200 flex items-center justify-center">
            <img 
              src={img2} 
              alt="Carillas Dentales" 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            <a 
              href="#services" 
              className="relative z-10 bg-white/90 text-primary px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              {t.gallery.cta}
            </a>
          </div>

          {/* Item 3 - Coronas */}
          <div className="relative group h-[400px] overflow-hidden bg-gray-200">
            <img 
              src={img3} 
              alt="Rehabilitación Oral" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;