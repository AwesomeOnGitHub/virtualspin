import React, { useState, useCallback, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { useTranslations } from './hooks/useTranslations';
import PageWrapper from './components/PageWrapper';
import TourPage from './pages/TourPage';
import DronePage from './pages/DronePage';
import WebPage from './pages/WebPage';
import PhotographyPage from './pages/PhotographyPage';
import HomePage from './pages/HomePage';
import Contact from './components/Contact';
import CheckoutPage from './pages/CheckoutPage';
import GeneralCheckoutPage from './pages/GeneralCheckoutPage';

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
  
  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderPage = () => {
    if (route === '#/checkout') {
        return <GeneralCheckoutPage />;
    }
    if (route.startsWith('#/checkout/')) {
      const parts = route.substring('#/checkout/'.length).split('/');
      if (parts.length === 2) {
          const [serviceId, planSlug] = parts;
          return <CheckoutPage serviceId={serviceId} planSlug={planSlug} showToast={showToast} />;
      }
    }

    switch(route) {
      case '#/tour': return <TourPage />;
      case '#/drone': return <DronePage />;
      case '#/web': return <WebPage />;
      case '#/photography': return <PhotographyPage />;
      case '#/':
      default:
        return <HomePage onContactClick={handleContactClick} />;
    }
  };

  return (
    <div dir={direction} className="bg-[var(--background)] text-[var(--foreground)] font-sans">
      <Header onContactClick={handleContactClick} />
      <main>
        <PageWrapper key={route}>
          {renderPage()}
        </PageWrapper>
      </main>
      <div ref={contactRef}>
        <Contact showToast={showToast} />
      </div>
      <Footer />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} direction={direction} />}
    </div>
  );
};

export default App;