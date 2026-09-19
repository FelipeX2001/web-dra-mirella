import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const bgImage = "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella/portada_mirella.JPG";

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-36 md:pt-48 pb-20 md:pb-28">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Dra. Mirella Arellano - Consultorio" 
          className="w-full h-full object-cover brightness-[0.8] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 text-white">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-block px-4 py-1 border border-white/30 backdrop-blur-sm rounded-full text-xs font-bold tracking-widest uppercase mb-6 bg-black/20">
            {t.hero.badge}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider mb-4 uppercase leading-tight drop-shadow-lg">
            {t.hero.title} <br className="hidden md:block"/> {t.hero.titleBr}
          </h1>

          <p className="text-xl md:text-2xl font-serif italic mb-6 text-secondary drop-shadow-md">
            {t.hero.subtitle}
          </p>

          <p className="text-base md:text-lg font-light mb-6 max-w-2xl text-gray-100 leading-relaxed opacity-95 drop-shadow-md">
            {t.hero.description}
          </p>

          <p className="text-sm font-medium tracking-wide mb-10 text-white/90 drop-shadow-md flex items-center gap-2">
            <span className="w-8 h-[1px] bg-secondary inline-block"></span>
            {t.hero.locations}
          </p>

          {/* Specialties Pills */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
            {t.hero.specialties.map((specialty, index) => (
              <span key={index} className="text-[10px] md:text-xs font-medium tracking-widest uppercase px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                {specialty}
              </span>
            ))}
          </div>

          <Link 
            to="/services" 
            className="inline-block text-sm md:text-base font-bold tracking-[0.2em] uppercase border-b-2 border-white pb-2 hover:text-secondary hover:border-secondary transition-colors duration-300"
          >
            {t.hero.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;