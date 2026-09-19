import React from 'react';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-32">
        
        {/* 3.1 The Mirella Experience */}
        <section id="experience" className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-primary mb-6">
            {t.about.experience.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-serif italic text-secondary mb-8">
            {t.about.experience.subtitle}
          </h2>
          <p className="text-base md:text-lg text-text-light font-light leading-relaxed">
            {t.about.experience.text}
          </p>
        </section>

        {/* 3.2 Nuestra Filosofía */}
        <section id="philosophy" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-primary mb-8">
              {t.about.philosophy.title}
            </h2>
            <p className="text-base md:text-lg text-text-light font-light leading-relaxed mb-8">
              {t.about.philosophy.text}
            </p>
            <ul className="space-y-4">
              {t.about.philosophy.list.map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-primary font-medium">
                  <span className="w-8 h-[1px] bg-secondary inline-block"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[500px] bg-surface shadow-xl p-4">
            {/* Using an existing image or generic placeholder for aesthetics */}
            <img 
              src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella/carillas_dentales_portada.JPG" 
              alt="Filosofía" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </section>

        {/* 3.3 Maestros Ceramistas */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-[500px] bg-surface relative overflow-hidden">
            <img 
              src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella_2/WhatsApp%20Image%202026-05-23%20at%2019.22.51.jpeg" 
              alt="Maestros Ceramistas" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-primary mb-8">
              {t.about.ceramists.title}
            </h2>
            <p className="text-base md:text-lg text-text-light font-light leading-relaxed">
              {t.about.ceramists.text}
            </p>
          </div>
        </section>

        {/* 3.4 Somos Dra. Mirella Arellano */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-primary mb-8">
              {t.about.drMirella.title}
            </h2>
            <p className="text-base md:text-lg text-text-light font-light leading-relaxed">
              {t.about.drMirella.text}
            </p>
          </div>
          <div className="order-1 lg:order-2 h-[600px] bg-surface relative overflow-hidden">
             <img 
              src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella_2/WhatsApp%20Image%202026-05-23%20at%2019.22.50%20(1).jpeg" 
              alt="Equipo Dra. Mirella Arellano" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </section>

        {/* 3.5 Por Qué Elegirnos */}
        <section id="why-us" className="bg-primary text-white py-24 px-6 md:px-16 mx-[-1.5rem] md:mx-0">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-16 text-center">
              {t.about.whyUs.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {t.about.whyUs.list.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-12 h-[1px] bg-secondary mb-6 group-hover:w-24 transition-all duration-500"></div>
                  <h3 className="text-lg font-medium tracking-wide uppercase">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3.6 Precisión. Arte. Excelencia. & 3.7 Experiencia Médica Integrada */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 h-[600px] relative overflow-hidden">
            <img 
              src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella/perfil_mirella_v.JPG" 
              alt="Dra. Mirella" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-12">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-4">
                {t.about.principles.title}
              </h2>
              <p className="text-xl font-serif italic text-white/90 mb-4">
                {t.about.principles.subtitle}
              </p>
              <p className="text-lg font-light text-white/80">
                {t.about.principles.text}
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-primary mb-8">
              {t.about.officia.title}
            </h2>
            <div className="w-16 h-1 bg-secondary mb-8"></div>
            <p className="text-base md:text-lg text-text-light font-light leading-relaxed">
              {t.about.officia.text}
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
