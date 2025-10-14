import React from 'react';
import AnimatedSection from './AnimatedSection';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <section className="py-24 sm:py-32 bg-[var(--card)]">
      <AnimatedSection>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">{subtitle}</p>
          <button
            onClick={onButtonClick}
            className="bg-[var(--primary)] hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 text-lg"
          >
            {buttonText}
          </button>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CTA;
