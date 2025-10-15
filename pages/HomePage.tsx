import React, { useRef } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FeatureGrid from '../components/FeaturesGrid';
import CTA from '../components/CTA';
import Portfolio from '../components/Portfolio';
import { useTranslations } from '../hooks/useTranslations';

interface HomePageProps {
  onContactClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onContactClick }) => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslations();
  
  const whyChooseUsText = t('homePage').whyChooseUs;
  const ctaText = t('homePage').cta;

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero onGetStartedClick={scrollToServices} />
      <div ref={servicesRef}>
        <Services />
      </div>
      <FeatureGrid 
        title={whyChooseUsText.title}
        subtitle={whyChooseUsText.subtitle}
        items={whyChooseUsText.items}
      />
      <Portfolio />
      <CTA 
        title={ctaText.title}
        subtitle={ctaText.subtitle}
        buttonText={ctaText.buttonText}
        onButtonClick={onContactClick}
      />
    </>
  );
};

export default HomePage;