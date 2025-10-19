import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStartedClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  const { t, direction } = useTranslations();
  const heroText = t('hero');
  const navText = t('nav');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070&auto=format&fit=crop')"}}>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      <div className="relative container mx-auto px-6 py-20 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tighter">
          <span className="bg-gradient-to-r from-orange-400 to-[var(--primary)] bg-clip-text text-transparent">{heroText.subtitle}</span>
          <br />
          {heroText.title}
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8 font-light">
          {heroText.description}
        </p>
        <button onClick={onGetStartedClick} className="group inline-flex items-center border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 text-lg">
          {navText.getStarted}
          <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${direction === 'rtl' ? 'rotate-180 -translate-x-1 group-hover:-translate-x-2 ms-2' : 'ms-2'}`} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
