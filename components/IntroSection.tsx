import React from 'react';
import { useLanguage } from '../LanguageContext';

const IntroSection: React.FC = () => {
  const { t } = useLanguage();
  const imageUrl = "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella/perfil_mirella_v.JPG";

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Text Column */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider md:tracking-widest mb-10 leading-tight break-words text-primary">
            {t.intro.title} <br/> {t.intro.titleBr}
          </h2>
          <p className="text-base md:text-lg leading-loose text-text-light mb-6 font-light max-w-xl text-justify">
            {t.intro.text}
          </p>
          <p className="text-base md:text-lg leading-loose text-text-main mb-10 font-medium max-w-xl italic">
            {t.intro.subText}
          </p>
          <div>
            <a 
              href="#services" 
              className="inline-block text-xs md:text-sm font-bold tracking-[0.2em] uppercase border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors"
            >
              {t.intro.cta}
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="order-1 lg:order-2 h-[500px] md:h-[700px] w-full relative overflow-hidden shadow-2xl rounded-sm">
          <img 
            src={imageUrl} 
            alt="Dra. Mirella Arellano" 
            className="w-full h-full object-cover object-top transition-transform duration-1000 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default IntroSection;