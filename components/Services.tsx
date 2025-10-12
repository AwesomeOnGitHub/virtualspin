import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const { t } = useTranslations();
  const servicesText = t('services');

  return (
    <section id="services" className="py-24 sm:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{servicesText.title}</h2>
          <p className="mt-4 text-lg text-gray-400">{servicesText.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesText.list.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
