import React from 'react';
import { Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Plan } from '../types';

interface PricingTableProps {
  title: string;
  subtitle: string;
  plans: Plan[];
}

const PricingTable: React.FC<PricingTableProps> = ({ title, subtitle, plans }) => {
  return (
    <section className="py-24 sm:py-32 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-400">
            {subtitle}
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={index}>
                <div className={`relative flex flex-col h-full bg-[var(--card)] rounded-2xl p-8 border ${plan.isFeatured ? 'border-[var(--primary)]' : 'border-gray-800'}`}>
                    {plan.isFeatured && (
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <span className="bg-[var(--primary)] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">Most Popular</span>
                        </div>
                    )}
                    <h3 className="text-2xl font-semibold text-white text-center mb-2">{plan.name}</h3>
                    <div className="text-center mb-8 h-20 flex flex-col justify-center items-center">
                        <div className="flex items-baseline justify-center gap-2">
                            {plan.oldPrice && (
                                <span className="text-3xl font-bold text-gray-500 line-through">{plan.oldPrice}</span>
                            )}
                            <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                        </div>
                        {plan.period && <span className="text-gray-400 mt-1">/{plan.period}</span>}
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                        {plan.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start">
                                <Check className="w-5 h-5 text-green-500 flex-shrink-0 me-3 mt-1" />
                                <span className="text-gray-300">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <button className={`w-full font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 ${plan.isFeatured ? 'bg-[var(--primary)] hover:bg-orange-700 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
                        Choose Plan
                    </button>
                </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;