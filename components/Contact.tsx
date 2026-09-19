import React from 'react';
import { useLanguage } from '../LanguageContext';
import { MapPin, Phone, Mail, Clock, Globe2 } from 'lucide-react';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-background min-h-screen">
      
      {/* Header */}
      <div className="relative pt-48 pb-32 px-6 md:px-12 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella_2/WhatsApp%20Image%202026-05-23%20at%2019.22.51%20(3).jpeg" 
            alt="Clínica Ambiente" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        <div className="relative z-20 max-w-[1920px] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 drop-shadow-md">{t.contactPage.title}</h1>
          <p className="text-lg font-light max-w-2xl mx-auto text-white/90 tracking-wide mb-8 drop-shadow">
            {t.contactPage.subtitle}
          </p>
          <div className="inline-block bg-black/30 px-6 py-3 border border-white/20 backdrop-blur-sm shadow-lg">
            <p className="text-sm font-medium tracking-wide">
              {t.contactPage.info.patients}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info Column */}
          <div className="flex flex-col">
            <div className="space-y-16">
              
              {/* Locations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {t.contactPage.info.locations.map((loc, idx) => (
                  <div key={idx} className="bg-surface p-8 shadow-sm border border-black/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                       <MapPin size={64} />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      {loc.label}
                    </h3>
                    <h4 className="text-xl font-serif text-primary mb-4">
                      {loc.location}
                    </h4>
                    <p className="text-text-light font-light leading-relaxed whitespace-pre-line text-sm mb-6">
                      {loc.value}
                    </p>
                    <div className="space-y-3">
                      <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors">
                        <MapPin size={14} />
                        {language === 'es' ? 'Ver en mapa' : 'View on map'}
                      </a>
                      <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors">
                        <Phone size={14} />
                        {loc.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 border-b border-black/5 pb-8">
                  <div className="p-3 bg-surface shadow-sm rounded-full text-secondary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                      {t.contactPage.info.phone.label}
                    </h3>
                    <p className="text-text-light font-light leading-relaxed">
                      {t.contactPage.info.phone.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 border-b border-black/5 pb-8">
                  <div className="p-3 bg-surface shadow-sm rounded-full text-secondary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                      {t.contactPage.info.email.label}
                    </h3>
                    <p className="text-text-light font-light leading-relaxed">
                      {t.contactPage.info.email.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-3 bg-surface shadow-sm rounded-full text-secondary shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                      {t.contactPage.info.hours.label}
                    </h3>
                    <p className="text-text-light font-light leading-relaxed whitespace-pre-line">
                      {t.contactPage.info.hours.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-surface p-8 md:p-12 shadow-xl border border-black/5 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary"></div>
            <h3 className="text-2xl font-serif text-primary mb-2">
              {t.contactPage.form.title}
            </h3>
            <p className="text-text-light font-light mb-8 text-sm">
              {language === 'es' ? 'Completa el formulario y nos contactaremos a la brevedad.' : 'Complete the form and we will contact you shortly.'}
            </p>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  {t.contactPage.form.name}
                </label>
                <input 
                  type="text" 
                  className="w-full bg-background border border-black/10 px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-sm"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    {t.contactPage.form.email}
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-background border border-black/10 px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    {t.contactPage.form.phone}
                  </label>
                  <input 
                    type="tel" 
                    className="w-full bg-background border border-black/10 px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  {t.contactPage.form.message}
                </label>
                <textarea 
                  rows={4}
                  className="w-full bg-background border border-black/10 px-4 py-3 focus:outline-none focus:border-secondary transition-colors text-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-secondary transition-colors duration-300 mt-4 shadow-md"
              >
                {t.contactPage.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[500px] bg-gray-200 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.970176885368!2d-77.0256886851867!3d-12.126487991414436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81d85834b6b%3A0x6291589739506698!2sOfficia%20Medical%20Coworking!5e0!3m2!1sen!2spe!4v1620000000000!5m2!1sen!2spe" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Officia Medical Coworking"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;