import React, { useState, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { Language } from '../types';
import { Globe, Menu, X } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const { language, setLanguage, t, direction } = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navText = t('nav');
  const textShadow = '[text-shadow:0_1px_3px_rgba(0,0,0,0.5)]';

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
  
  const handleNavLinkClick = (href: string) => {
    // This logic handles the case where the user clicks the link for the page they are already on.
    // The `hashchange` event won't fire in this case, so we manually scroll to the top.
    const currentPath = window.location.hash || '#/';

    if (href === currentPath) {
      window.scrollTo(0, 0);
    }
    
    // The browser will handle navigation for different hrefs via the `hashchange` 
    // event listener in App.tsx. We just need to ensure the mobile menu closes.
    closeAllMenus();
  };

  const navItems = [
      { id: 'tour', type: 'link', href: '#/tour', label: navText.tour },
      { id: 'drone', type: 'link', href: '#/drone', label: navText.drone },
      { id: 'photography', type: 'link', href: '#/photography', label: navText.photography },
      { id: 'web', type: 'link', href: '#/web', label: navText.website },
      { id: 'contact', type: 'button', action: onContactClick, label: navText.contact },
      { id: 'home', type: 'link', href: '#/', label: navText.home },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-black/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#/" onClick={() => handleNavLinkClick('#/')} className="flex items-center gap-2 z-50">
            <img src="/img/logo.png" alt="VirtualSpin Logo" className="h-10 w-10"/>
            <span className={`text-2xl font-bold text-white ${textShadow}`}>
              Virtual<span className="text-[var(--primary)]">Spin</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map(item => {
              if (item.type === 'link') {
                return (
                  <a key={item.id} href={item.href} onClick={() => handleNavLinkClick(item.href)} className={`text-gray-300 hover:text-[var(--primary)] transition-colors ${textShadow}`}>{item.label}</a>
                );
              }
              return (
                <button key={item.id} onClick={item.action} className={`text-gray-300 hover:text-[var(--primary)] transition-colors ${textShadow}`}>{item.label}</button>
              );
            })}
            <div className="relative">
              <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className={`flex items-center text-gray-300 hover:text-[var(--primary)] transition-colors ${textShadow}`}>
                <Globe className="w-5 h-5 me-2" />
                {language.toUpperCase()}
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full mt-2 right-0 rtl:right-auto rtl:left-0 bg-[var(--card)] rounded-md shadow-lg p-2 w-40 max-h-72 overflow-y-auto">
                  {languages.map(lang => (
                    <button key={lang.code} onClick={() => handleLanguageChange(lang.code)} className="w-full text-left rtl:text-right px-3 py-2 text-sm rounded-md hover:bg-[var(--primary)] flex items-center">
                      <span className="me-2">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
                <button onClick={onContactClick} className={`border-2 border-[var(--primary)] hover:bg-[var(--primary)] text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 ${textShadow}`}>
                {navText.getStarted}
                </button>
            </div>
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
        <nav className="flex flex-col items-center justify-center h-full space-y-6 text-xl font-medium">
          {navItems.map(item => {
            if (item.type === 'link') {
              return (
                <a key={item.id} href={item.href} onClick={() => handleNavLinkClick(item.href)} className="text-gray-300 hover:text-[var(--primary)] transition-colors">{item.label}</a>
              );
            }
            return (
              <button key={item.id} onClick={() => { item.action(); closeAllMenus(); }} className="text-gray-300 hover:text-[var(--primary)] transition-colors">{item.label}</button>
            );
          })}
           <div className="text-center max-h-48 overflow-y-auto border-y border-gray-700 py-2 my-2">
              {languages.map(lang => (
              <button key={lang.code} onClick={() => handleLanguageChange(lang.code)} className="w-full px-3 py-2 text-base rounded-md hover:bg-[var(--primary)] flex items-center justify-center">
                  <span className="me-3">{lang.flag}</span>
                  <span>{lang.name}</span>
              </button>
              ))}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => { onContactClick(); closeAllMenus(); }} className="border-2 border-[var(--primary)] hover:bg-[var(--primary)] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 mt-4">
                {navText.getStarted}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;