import React from 'react';
import { useLanguage } from '../LanguageContext';

const ServicesList: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-32">
        
        {/* 4.1 Servicios Premium (overview) */}
        <section className="text-center max-w-5xl mx-auto pt-10">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-primary mb-6">
            {t.servicesPage.overview.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-serif italic text-secondary mb-16">
            {t.servicesPage.overview.subtitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {t.servicesPage.overview.list.map((item, index) => (
              <div key={index} className="bg-surface p-8 shadow-sm border border-black/5 flex items-start gap-4 group hover:border-secondary/30 transition-colors">
                <span className="text-secondary font-medium block mt-1 w-4 h-px bg-secondary flex-shrink-0"></span>
                <span className="text-primary font-medium uppercase tracking-wide text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4.2 Carillas Premium Signature */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-[600px] bg-surface relative overflow-hidden group">
            <img 
              src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella/carillas_emax.JPG" 
              alt="Carillas Premium" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Small thumbnail reused from Ceramists */}
            <div className="absolute bottom-8 right-8 w-1/3 aspect-square border-4 border-white shadow-2xl overflow-hidden hidden md:block">
               <img 
                src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella_2/WhatsApp%20Image%202026-05-23%20at%2019.22.51.jpeg" 
                alt="Detalle Ceramista" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-primary mb-4">
              {t.servicesPage.veneers.title}
            </h2>
            <h3 className="text-xl font-serif italic text-secondary mb-8">
              {t.servicesPage.veneers.subtitle}
            </h3>
            <p className="text-lg text-text-light font-light leading-relaxed mb-8">
              {t.servicesPage.veneers.text}
            </p>
            <ul className="space-y-4">
              {t.servicesPage.veneers.list.map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-primary font-medium">
                  <span className="w-8 h-[1px] bg-secondary inline-block"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4.3 Totalmente Personalizado */}
        <section className="bg-primary text-white py-24 px-6 md:px-16 mx-[-1.5rem] md:mx-0 text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-16">
              {t.servicesPage.customization.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
              {t.servicesPage.customization.list.map((item, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-12 h-[1px] bg-secondary mb-6 group-hover:w-24 transition-all duration-500"></div>
                  <h3 className="text-sm font-medium tracking-widest uppercase">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner: Laboratorio / Tecnología */}
        <section className="relative h-[400px] w-full flex items-center justify-center mx-[-1.5rem] md:mx-[-3rem] px-6 md:px-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
              src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella_2/WhatsApp%20Image%202026-05-23%20at%2019.22.52%20(1).jpeg" 
              alt="Laboratorio Dental" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/35 z-10"></div>
          </div>
          <div className="relative z-20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white mb-6 drop-shadow-lg">
              ARTE & PRECISIÓN DIGITAL
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
        </section>

        {/* 4.4 & 4.5 Tecnología y Objetivos */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="h-[400px] lg:h-auto bg-surface relative overflow-hidden shadow-sm">
             <img 
              src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella_2/WhatsApp%20Image%202026-05-23%20at%2019.22.51%20(2).jpeg" 
              alt="Detrás de escena" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="bg-surface p-10 shadow-sm border border-black/5">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-primary mb-8">
              {t.servicesPage.technology.title}
            </h2>
            <ul className="space-y-4">
              {t.servicesPage.technology.list.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-text-main font-light text-sm border-b border-black/5 pb-3 last:border-0">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full inline-block"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface p-10 shadow-sm border border-black/5">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-primary mb-3">
              {t.servicesPage.goals.title}
            </h2>
            <h3 className="text-base font-serif italic text-secondary mb-8">
              {t.servicesPage.goals.subtitle}
            </h3>
            <ul className="space-y-4">
              {t.servicesPage.goals.list.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-text-main font-light text-sm border-b border-black/5 pb-3 last:border-0">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full inline-block"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4.6 & 4.7 Rehabilitación & Implantología */}
        <section className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold uppercase tracking-wider text-primary mb-6">
                {t.servicesPage.rehabilitation.title}
              </h2>
              <p className="text-lg text-text-light font-light leading-relaxed mb-8">
                {t.servicesPage.rehabilitation.text}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.servicesPage.rehabilitation.list.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-primary text-sm font-medium">
                    <span className="w-4 h-[1px] bg-secondary inline-block"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 h-[400px] bg-surface relative overflow-hidden">
               <img 
                src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella/coronas_portada.JPG" 
                alt="Rehabilitación" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[400px] bg-surface relative overflow-hidden">
              <img 
                src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella/corona_porcelana_2.JPG" 
                alt="Implantología" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-wider text-primary mb-4">
                {t.servicesPage.implantology.title}
              </h2>
              <h3 className="text-xl font-serif italic text-secondary mb-6">
                {t.servicesPage.implantology.subtitle}
              </h3>
              <p className="text-lg text-text-light font-light leading-relaxed mb-8">
                {t.servicesPage.implantology.text}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.servicesPage.implantology.list.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-primary text-sm font-medium">
                    <span className="w-4 h-[1px] bg-secondary inline-block"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4.8, 4.9 & 4.10 Surgery, Harmonization, Form & Function */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface p-10 border border-black/5 hover:border-secondary/30 transition-colors">
            <h2 className="text-xl font-bold uppercase tracking-wider text-primary mb-6 h-12">
              {t.servicesPage.surgery.title}
            </h2>
            <p className="text-sm text-text-light font-light leading-relaxed mb-8">
              {t.servicesPage.surgery.text}
            </p>
            <ul className="space-y-3">
              {t.servicesPage.surgery.list.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-xs uppercase tracking-wider text-primary font-medium">
                  <span className="w-3 h-px bg-secondary mt-1.5 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface p-10 border border-black/5 hover:border-secondary/30 transition-colors">
            <h2 className="text-xl font-bold uppercase tracking-wider text-primary mb-6 h-12">
              {t.servicesPage.harmonization.title}
            </h2>
            <p className="text-sm text-text-light font-light leading-relaxed mb-8">
              {t.servicesPage.harmonization.text}
            </p>
            <ul className="space-y-3">
              {t.servicesPage.harmonization.list.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-xs uppercase tracking-wider text-primary font-medium">
                  <span className="w-3 h-px bg-secondary mt-1.5 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface p-10 border border-black/5 hover:border-secondary/30 transition-colors">
            <h2 className="text-xl font-bold uppercase tracking-wider text-primary mb-6 h-12">
              {t.servicesPage.formAndFunction.title}
            </h2>
            <p className="text-sm text-text-light font-light leading-relaxed mb-8">
              {t.servicesPage.formAndFunction.text}
            </p>
            <ul className="space-y-3">
              {t.servicesPage.formAndFunction.list.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-xs uppercase tracking-wider text-primary font-medium">
                  <span className="w-3 h-px bg-secondary mt-1.5 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4.11 Luxury Patient Journey */}
        <section className="relative p-12 lg:p-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
              src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella_2/WhatsApp%20Image%202026-05-23%20at%2019.22.51%20(3).jpeg" 
              alt="Luxury Patient Journey" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30 z-10"></div>
          </div>
          
          <div className="relative z-20">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-center text-white mb-16">
              {t.servicesPage.journey.title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {t.servicesPage.journey.list.map((step, index) => (
                <div key={index} className="flex flex-col relative group">
                  {/* Connector line for desktop */}
                  {index < t.servicesPage.journey.list.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[60%] w-full h-[1px] bg-white/20"></div>
                  )}
                  
                  <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center text-sm font-bold tracking-widest mb-6 relative z-10 group-hover:bg-secondary group-hover:text-white transition-colors shadow-lg">
                    0{index + 1}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 drop-shadow-md">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/90 font-light leading-relaxed drop-shadow">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ServicesList;