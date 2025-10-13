import React, { useState, useRef, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { useTranslations } from './hooks/useTranslations';
import AnimatedSection from './components/AnimatedSection';
import PageWrapper from './components/PageWrapper';
import TourPage from './pages/TourPage';
import DronePage from './pages/DronePage';
import WebPage from './pages/WebPage';
import PhotographyPage from './pages/PhotographyPage';

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
    handleHashChange(); // Set initial route

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);
  
  const scrollToContact = () => {
    // If on a subpage, navigate home first, then scroll.
    if (route !== '#/') {
      window.location.hash = '#/';
      // The scroll needs to happen after the navigation and re-render.
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    } else {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderPage = () => {
    switch(route) {
      case '#/tour': return <TourPage />;
      case '#/drone': return <DronePage />;
      case '#/web': return <WebPage />;
      case '#/photography': return <PhotographyPage />;
      case '#/':
      default:
        return (
          <>
            <Hero onGetStartedClick={scrollToContact} />
            <AnimatedSection>
              <Services />
            </AnimatedSection>
            <AnimatedSection>
              <div ref={contactRef}>
                <Contact showToast={showToast} />
              </div>
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
      <Footer />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} direction={direction} />}
    </div>
  );
};

export default App;