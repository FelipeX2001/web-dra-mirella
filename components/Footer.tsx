import React from 'react';
import { Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white py-12 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-70">
          © {new Date().getFullYear()} {t.footer.copyright}
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="opacity-70 hover:opacity-100 transition-opacity hover:text-secondary">
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="opacity-70 hover:opacity-100 transition-opacity hover:text-secondary">
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;