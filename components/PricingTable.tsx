import React from 'react';
import { Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Plan } from '../types';
import { useTranslations } from '../hooks/useTranslations';

interface PricingTableProps {
  serviceId: string;
  title: string;
  subtitle: string;
  plans: Plan[];
}

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');


const PricingTable: React.FC<PricingTableProps> = ({ serviceId, title, subtitle, plans }) => {
  const { t } = useTranslations();
  const pricingText = t('pricing');

  const getButton = (plan: Plan) => {
    const isQuote = plan.price.toLowerCase().includes('request');
    const href = `#/checkout/${serviceId}/${slugify(plan.name)}`;
    const text = isQuote ? pricingText.getQuote : pricingText.choosePlan;
    const baseClasses = 'w-full font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 inline-block text-center';
    let specificClasses = '';

    if (plan.isPremium) {
      specificClasses = 'w-full lg:w-auto bg-[var(--primary)] hover:bg-orange-700 text-white';
    } else if (plan.isFeatured) {
      specificClasses = 'bg-[var(--primary)] hover:bg-orange-700 text-white';
    } else {
      specificClasses = 'bg-gray-700 hover:bg-gray-600 text-white';
    }
    
    return (
        <a href={href} className={`${baseClasses} ${specificClasses}`}>
            {text}
        </a>
    );
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <AnimatedSection key={index} className={plan.isPremium ? 'lg:col-span-3' : ''}>
                <div 
                  className={`relative flex h-full rounded-2xl border ${plan.isFeatured ? 'border-[var(--primary)]' : 'border-gray-800'} ${plan.isPremium ? 'flex-col lg:flex-row bg-cover bg-center overflow-hidden' : 'flex-col bg-[var(--card)] p-8'}`}
                  style={plan.backgroundImage ? { backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), ${plan.backgroundImage}` } : {}}
                >
                    {plan.isPremium ? (
                      <>
                        <div className="p-8 lg:w-2/5 flex flex-col text-center lg:text-left justify-center">
                            <h3 className="text-3xl font-semibold text-white mb-2">{plan.name}</h3>
                             <div className="text-center lg:text-left mb-8 h-20 flex flex-col justify-center items-center lg:items-start">
                                <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                            </div>
                            <p className="text-gray-400 mb-8 flex-grow">For enterprise-level needs, offering bespoke solutions and dedicated support.</p>
                            {getButton(plan)}
                        </div>
                        <div className="p-8 lg:w-3/5 lg:border-l lg:border-gray-700/50">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 h-full content-center">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 me-3 mt-1" />
                                    <span className="text-gray-300">{feature}</span>
                                </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <>
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
                        {getButton(plan)}
                      </>
                    )}
                </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;