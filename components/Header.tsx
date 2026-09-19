import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();

  // Check if we are on the homepage to apply transparency logic
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoUrl = "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/dra_mirella/dra_mirella_logo.png";

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Logic for text color: 
  // On Home: White at top, Dark when scrolled.
  // On Other Pages: Always Dark (Primary).
  const textColorClass = isHome && !isScrolled ? 'text-white' : 'text-primary';
  const mobileButtonColor = isMobileMenuOpen ? 'text-primary' : textColorClass;

  // Header Background Logic
  const headerBg = isMobileMenuOpen 
    ? 'bg-transparent' 
    : (isScrolled || !isHome)
      ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
      : 'bg-transparent';

  const headerPadding = (isScrolled || !isHome) ? 'py-4' : 'py-6';

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${headerBg} ${headerPadding}`}
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center relative">
        {/* Logo - Left aligned */}
        <Link to="/" className="relative z-50 flex-shrink-0">
          <img 
            src={logoUrl} 
            alt="Officia Medical Logo" 
            className={`transition-all duration-300 ${isScrolled || !isHome ? 'h-12' : 'h-16 md:h-20'}`}
          />
        </Link>

        {/* Desktop/Tablet Navigation and Actions - Right aligned */}
        <div className={`hidden md:flex items-center gap-6 lg:gap-8 ${textColorClass}`}>
          <nav className="flex items-center space-x-6 lg:space-x-8">
            <Link 
              to="/about" 
              className="group relative text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase transition-colors"
            >
              {t.header.about}
              <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/services" 
              className="group relative text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase transition-colors"
            >
              {t.header.services}
              <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contact"
              className="group relative text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase transition-colors"
            >
              {t.header.contact}
              <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          
          <div className="flex items-center gap-4 lg:gap-6 border-l border-current pl-4 lg:pl-6 opacity-80">
            <button 
              onClick={toggleLanguage}
              className="text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            
            <Link 
              to="/contact"
              className={`text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase border-b border-current pb-1 hover:text-secondary hover:border-secondary transition-colors duration-300`}
            >
              {t.header.schedule}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden relative z-50 p-2 ${mobileButtonColor} hover:text-secondary transition-colors`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay - Sidebar Right */}
        <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Link 
            to="/about"
            className="text-lg font-bold tracking-[0.2em] uppercase text-primary hover:text-secondary"
            onClick={handleNavClick}
          >
             {t.header.about}
          </Link>
          <Link 
            to="/services"
            className="text-lg font-bold tracking-[0.2em] uppercase text-primary hover:text-secondary"
            onClick={handleNavClick}
          >
             {t.header.services}
          </Link>
          <Link 
            to="/contact"
            className="text-lg font-bold tracking-[0.2em] uppercase text-primary hover:text-secondary"
            onClick={handleNavClick}
          >
             {t.header.contact}
          </Link>

          <button 
            onClick={() => { toggleLanguage(); handleNavClick(); }}
            className="text-lg font-bold tracking-[0.2em] uppercase text-primary hover:text-secondary"
          >
            {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          </button>
          <Link 
            to="/contact" 
            className="text-lg font-bold tracking-[0.2em] uppercase border-b border-primary pb-1 text-primary hover:text-secondary hover:border-secondary transition-colors"
            onClick={handleNavClick}
          >
            {t.header.schedule}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;