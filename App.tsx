import React, { useState, useRef, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { useTranslations } from './hooks/useTranslations';
import AnimatedSection from './components/AnimatedSection';
import TourPage from './pages/TourPage';
import DronePage from './pages/DronePage';
import WebPage from './pages/WebPage';
import PhotographyPage from './pages/PhotographyPage';
import PageWrapper from './components/PageWrapper';

const App: React.FC = () => {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const { direction } = useTranslations();
  const [route, setRoute] = useState(window.location.hash || '#/');

  const contactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial route
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);
  
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderPage = () => {
    switch(route) {
      case '#/tour': return <TourPage />;
      case '#/drone': return <DronePage />;
      case '#/website': return <WebPage />;
      case '#/photography': return <PhotographyPage />;
      case '#/':
      default:
        return (
          <>
            <Hero onGetStartedClick={scrollToContact} />
            <AnimatedSection>
              <Services />
            </AnimatedSection>
          </>
        );
    }
  };

  return (
    <div dir={direction} className="bg-[var(--background)] text-[var(--foreground)] font-sans">
      <Header onContactClick={scrollToContact} />
      <main>
        <PageWrapper key={route}>
          {renderPage()}
        </PageWrapper>
      </main>
      <AnimatedSection>
        <div ref={contactRef}>
          <Contact showToast={showToast} />
        </div>
      </AnimatedSection>
      <Footer />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} direction={direction} />}
    </div>
  );
};

export default App;