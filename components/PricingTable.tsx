import React from 'react';
import { Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface PricingTableProps {
  title: string;
  subtitle: string;
  featureGroups?: {
    title: string;
    features: string[];
  }[];
}


const PricingTable: React.FC<PricingTableProps> = ({ title, subtitle, featureGroups }) => {
  if (!featureGroups) {
    return null;
  }

  return (
    <section id="features" className="py-24 sm:py-32 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-400">
            {subtitle}
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {featureGroups.map((group, index) => (
            <AnimatedSection key={index}>
              <div className="bg-[var(--card)] p-8 rounded-2xl h-full border border-gray-800 flex flex-col">
                <h3 className="text-2xl font-semibold text-[var(--primary)] mb-6">{group.title}</h3>
                <ul className="space-y-4 flex-grow">
                  {group.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 me-3 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;