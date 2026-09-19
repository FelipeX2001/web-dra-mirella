import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import ServicesList from './components/ServicesList';
import Contact from './components/Contact';
import { LanguageProvider } from './LanguageContext';

// Scroll to top component on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="font-sans text-primary antialiased bg-background overflow-x-hidden min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesList />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;