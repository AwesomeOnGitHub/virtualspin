import React, { useEffect, useState } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { Plan } from '../types';
import { ArrowLeft } from 'lucide-react';

interface CheckoutPageProps {
  serviceId: string;
  planSlug: string;
  showToast: (message: string, type: 'success' | 'error') => void;
}

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const CheckoutPage: React.FC<CheckoutPageProps> = ({ serviceId, planSlug, showToast }) => {
  const { t } = useTranslations();
  const checkoutText = t('checkoutPage');
  const [plan, setPlan] = useState<Plan | null>(null);
  const [serviceTitle, setServiceTitle] = useState('');

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
    const pages = t('pages');
    const serviceKey = serviceId as keyof typeof pages;
    
    if (serviceKey in pages) {
        const serviceContent = pages[serviceKey];
        setServiceTitle(serviceContent.hero.title);
        const foundPlan = serviceContent.pricing.plans.find(p => slugify(p.name) === planSlug);
        if (foundPlan) {
            setPlan(foundPlan);
        }
    }
  }, [serviceId, planSlug, t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push({ ...formData, plan: plan?.name, service: serviceTitle, timestamp: new Date().toISOString() });
        localStorage.setItem('orders', JSON.stringify(orders));
        showToast(checkoutText.orderSuccess, 'success');
        setFormData({ name: '', email: '', message: '' });
    } else {
        showToast(checkoutText.orderError, 'error');
    }
  };

  if (!plan) {
    return (
        <div className="min-h-screen container mx-auto px-6 py-32 text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">{checkoutText.notFoundTitle}</h1>
            <p className="text-gray-400 mt-4 max-w-md">{checkoutText.notFoundText}</p>
            <a href="#/" className="mt-8 inline-block bg-[var(--primary)] text-white font-bold py-3 px-6 rounded-lg">{checkoutText.notFoundButton}</a>
        </div>
    );
  }
  
  const backlinkRoute = serviceId === 'website' ? '#/web' : `#/${serviceId}`;

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-16">
        <div className="container mx-auto px-6">
            <a href={backlinkRoute} className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} /> {checkoutText.backLink} {serviceTitle}
            </a>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* Middle Column: Contact Form */}
                <section className="lg:col-span-5 order-1 lg:order-2" aria-labelledby="contact-heading">
                     <h2 id="contact-heading" className="text-3xl font-bold mb-6">{checkoutText.contactTitle}</h2>
                     <form onSubmit={handleSubmit} noValidate className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">{checkoutText.nameLabel}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                                required
                                aria-required="true"
                                className="w-full bg-gray-900/50 text-white p-3 border-2 border-gray-600 rounded-md focus:border-[var(--primary)] focus:ring-0 focus:outline-none transition-colors"
                            />
                        </div>
                        <div>
                             <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">{checkoutText.emailLabel}</label>
                             <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={e => setFormData({...formData, email: e.target.value})}
                                required
                                aria-required="true"
                                className="w-full bg-gray-900/50 text-white p-3 border-2 border-gray-600 rounded-md focus:border-[var(--primary)] focus:ring-0 focus:outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">{checkoutText.notesLabel}</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={e => setFormData({...formData, message: e.target.value})}
                                placeholder={checkoutText.notesPlaceholder}
                                rows={4}
                                className="w-full bg-gray-900/50 text-white p-3 border-2 border-gray-600 rounded-md focus:border-[var(--primary)] focus:ring-0 focus:outline-none transition-colors resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[var(--primary)] hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105"
                        >
                            {checkoutText.placeOrderButton}
                        </button>
                    </form>
                </section>

                {/* Left Column: Product Summary */}
                <section className="lg:col-span-3 order-2 lg:order-1" aria-labelledby="summary-heading">
                    <div className="bg-[var(--card)] p-6 rounded-2xl border border-gray-800 sticky top-32">
                        <h2 id="summary-heading" className="text-xl font-bold mb-4">{checkoutText.orderSummaryTitle}</h2>
                        <div className="space-y-3">
                           <div className="flex justify-between items-start">
                                <span className="text-gray-400 text-sm">{checkoutText.productLabel}</span>
                                <span className="font-semibold text-right">{plan.name}</span>
                           </div>
                           <div className="flex justify-between items-start">
                                <span className="text-gray-400 text-sm">{checkoutText.serviceLabel}</span>
                                <span className="font-semibold text-right">{serviceTitle}</span>
                           </div>
                        </div>
                        <div className="border-t border-gray-700 my-4"></div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">{checkoutText.totalLabel}</span>
                            <span className="text-2xl font-bold text-[var(--primary)]">{plan.price}</span>
                        </div>
                         {plan.period && <span className="text-gray-400 text-sm text-right block mt-1">/{plan.period}</span>}
                    </div>
                </section>

                {/* Right Column: Details & Video */}
                <section className="lg:col-span-4 order-3 lg:order-3" aria-labelledby="details-heading">
                    <h2 id="details-heading" className="text-3xl font-bold mb-6">{checkoutText.gettingTitle}</h2>
                    <ul className="space-y-3 mb-8 text-gray-300">
                        {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-green-500 font-bold me-3 mt-1" aria-hidden="true">&#10003;</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                     <div className="aspect-video rounded-lg overflow-hidden shadow-lg shadow-black/30">
                        <iframe 
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0" 
                            title="Embedded YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </section>
            </div>
        </div>
    </div>
  );
};

export default CheckoutPage;