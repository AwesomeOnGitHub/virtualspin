import React, { useRef } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';

const HomePage: React.FC = () => {
  // FIX: Corrected the useRef type from HTMLElement to HTMLDivElement to match the div element.
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero onGetStartedClick={scrollToServices} />
      <div ref={servicesRef}>
        <Services />
      </div>
    </>
  );
};

export default HomePage;