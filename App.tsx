import React, { useState, useRef, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { useTranslations } from './hooks/useTranslations';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const { direction } = useTranslations();

  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);
  
  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div dir={direction} className="bg-[var(--background)] text-[var(--foreground)] font-sans">
      <Header 
        onServicesClick={() => scrollTo(servicesRef)} 
        onContactClick={() => scrollTo(contactRef)} 
      />
      <main>
        <Hero onGetStartedClick={() => scrollTo(contactRef)} />
        <AnimatedSection>
          <div ref={servicesRef}>
            <Services />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div ref={contactRef}>
            <Contact showToast={showToast} />
          </div>
        </AnimatedSection>
      </main>
      <Footer />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} direction={direction} />}
    </div>
  );
};

export default App;
