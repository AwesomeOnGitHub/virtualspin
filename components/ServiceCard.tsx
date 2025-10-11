
import React from 'react';
import { Service } from '../types';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

interface ServiceCardProps {
  service: Service;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, icon }) => {
  const { direction } = useTranslations();
  return (
    <div className="group bg-[#252525]/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-left transition-all duration-300 hover:border-[#FF6933]/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
      <p className="text-gray-400 mb-6 h-20">{service.description}</p>
      <ul className="space-y-3 mb-8">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 me-3" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-baseline justify-end space-x-2 rtl:space-x-reverse">
        <span className="text-gray-500 line-through">{service.oldPrice}</span>
        <span className="text-3xl font-bold text-[#FF6933]">{service.newPrice}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
