import React from 'react';
import { useLanguage } from '../LanguageContext';

const ProcessSteps: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 w-full">
      {t.process.items.map((step, index) => (
        <div key={index} className="relative h-[500px] md:h-[700px] w-full overflow-hidden group">
          <img 
            src={step.image} 
            alt={step.title} 
            className="w-full h-full object-cover brightness-[0.6] group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-l-2 border-white pl-4">
              {index + 1}. {step.title}
            </h3>
            <p className="text-sm font-light leading-relaxed text-gray-200 pl-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProcessSteps;