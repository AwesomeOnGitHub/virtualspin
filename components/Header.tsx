import React, { useState, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { Language } from '../types';
import { Globe, Menu, X } from 'lucide-react';

interface HeaderProps {
  onServicesClick: () => void;
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onServicesClick, onContactClick }) => {
  const { language, setLanguage, t, direction } = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navText = t('nav');

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
    setIsMenuOpen(false);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsLangMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white z-50">
            Virtual<span className="text-[var(--primary)]">Spin</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <button onClick={onServicesClick} className="text-gray-300 hover:text-[var(--primary)] transition-colors">{navText.services}</button>
            <button onClick={onContactClick} className="text-gray-300 hover:text-[var(--primary)] transition-colors">{navText.contact}</button>
            <div className="relative">
              <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center text-gray-300 hover:text-[var(--primary)] transition-colors">
                <Globe className="w-5 h-5 me-2" />
                {language.toUpperCase()}
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full mt-2 right-0 rtl:right-auto rtl:left-0 bg-[var(--card)] rounded-md shadow-lg p-2 w-36">
                  {languages.map(lang => (
                    <button key={lang.code} onClick={() => handleLanguageChange(lang.code)} className="w-full text-left rtl:text-right px-3 py-2 text-sm rounded-md hover:bg-[var(--primary)] flex items-center">
                      <span className="me-2">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={onContactClick} className="border-2 border-[var(--primary)] hover:bg-[var(--primary)] text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
              {navText.getStarted}
            </button>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 relative text-white">
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : direction === 'rtl' ? '-translate-x-full' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-medium">
          <button onClick={() => { onServicesClick(); closeAllMenus(); }} className="text-gray-300 hover:text-[var(--primary)] transition-colors">{navText.services}</button>
          <button onClick={() => { onContactClick(); closeAllMenus(); }} className="text-gray-300 hover:text-[var(--primary)] transition-colors">{navText.contact}</button>
           <div className="text-center">
              {languages.map(lang => (
              <button key={lang.code} onClick={() => handleLanguageChange(lang.code)} className="w-full px-3 py-3 text-lg rounded-md hover:bg-[var(--primary)] flex items-center justify-center">
                  <span className="me-3">{lang.flag}</span>
                  <span>{lang.name}</span>
              </button>
              ))}
          </div>
          <button onClick={() => { onContactClick(); closeAllMenus(); }} className="border-2 border-[var(--primary)] hover:bg-[var(--primary)] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 mt-4">
            {navText.getStarted}
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
