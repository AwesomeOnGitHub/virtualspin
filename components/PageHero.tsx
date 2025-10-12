import React from 'react';
import AnimatedSection from './AnimatedSection';

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url('${imageUrl}')` }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      <div className="relative container mx-auto px-6 py-20 z-10">
        <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tighter">
                {title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 font-light">
                {subtitle}
            </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PageHero;