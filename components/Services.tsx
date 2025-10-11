import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { Camera, Code, Scan, CheckCircle } from 'lucide-react';

const icons: { [key: string]: React.ReactNode } = {
  tour: <Scan className="w-8 h-8 text-[var(--primary)]" />,
  photo: <Camera className="w-8 h-8 text-[var(--primary)]" />,
  web: <Code className="w-8 h-8 text-[var(--primary)]" />,
};

const serviceImages: { [key: string]: string } = {
    tour: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2070&auto=format&fit=crop',
    photo: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop',
    web: 'https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=1925&auto=format&fit=crop'
};

const Services: React.FC = () => {
  const { t } = useTranslations();
  const servicesText = t('services');

  return (
    <section id="services" className="py-24 sm:py-32 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {servicesText.title}
          </h2>
          <p className="text-lg text-gray-400 mb-20">
            {servicesText.subtitle}
          </p>
        </div>
        <div className="space-y-24">
          {servicesText.list.map((service, index) => (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className={`relative aspect-video lg:aspect-[4/3] rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                 <img src={serviceImages[service.id]} alt={service.title} className="w-full h-full object-cover"/>
                 <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="text-left rtl:text-right">
                <div className="flex items-center gap-4 mb-4">
                    {icons[service.id]}
                    <h3 className="text-3xl font-bold text-white tracking-tight">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 me-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline justify-end space-x-2 rtl:space-x-reverse border-t border-gray-800 pt-4">
                    <span className="text-gray-500 line-through text-lg">{service.oldPrice}</span>
                    <span className="text-4xl font-bold text-[var(--primary)]">{service.newPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
