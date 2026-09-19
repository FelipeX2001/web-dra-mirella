import React from 'react';
import { useLanguage } from '../LanguageContext';

const FeatureGrid: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest mb-6">
            {t.features.mainTitle}
          </h2>
          <p className="text-text-light max-w-2xl mx-auto font-light leading-relaxed">
            {t.features.mainDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {t.features.items.map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden mb-8 aspect-[4/3] bg-gray-100">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4 group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-light font-light pr-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeatureGrid;