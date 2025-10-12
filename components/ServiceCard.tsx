import React from 'react';
import { Service } from '../types';
// FIX: Added specific icon imports to replace `require` calls.
import { ArrowRight, Camera, Navigation, Code, Image, Briefcase } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { direction } = useTranslations();
  
  // FIX: Replaced `require` calls with direct component references from ES6 imports to resolve "Cannot find name 'require'" error.
  const iconMap: { [key: string]: React.ElementType } = {
    tour: Camera,
    drone: Navigation,
    web: Code,
    photo: Image,
  };
  
  const Icon = iconMap[service.id] || Briefcase;

  return (
    <a href={`#/${service.id}`} className="block group">
      <div className="bg-[var(--card)] p-8 rounded-lg text-left h-full flex flex-col border border-transparent group-hover:border-[var(--primary)] transition-colors duration-300">
        <div className="mb-4">
          <Icon className="w-10 h-10 text-[var(--primary)]" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 flex-grow">{service.title}</h3>
        <p className="text-gray-400 mb-4">{service.description}</p>
        <div className="mt-auto flex items-center text-[var(--primary)] font-semibold">
          Learn More
          <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${direction === 'rtl' ? 'rotate-180 -translate-x-1 group-hover:-translate-x-2 ms-2' : 'ms-2'}`} />
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;
