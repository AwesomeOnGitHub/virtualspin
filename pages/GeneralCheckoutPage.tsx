import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const serviceImages: { [key: string]: string } = {
    tour: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2070&auto=format&fit=crop',
    photography: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop',
    drone: 'https://images.unsplash.com/photo-1505872441885-25a86cc1a43a?q=80&w=2070&auto=format&fit=crop',
    web: 'https://images.unsplash.com/photo-1559028006-44a36f1159d5?q=80&w=1925&auto=format&fit=crop'
};


const GeneralCheckoutPage: React.FC = () => {
    const { t, direction } = useTranslations();
    const pageText = t('generalCheckoutPage');
    const services = t('services').list;

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column: Services List */}
                    <AnimatedSection>
                        <section aria-labelledby="services-heading">
                            <h1 id="services-heading" className="text-4xl font-bold mb-8">{pageText.title}</h1>
                            <div className="space-y-4">
                                {services.map(service => (
                                    <a href={`#/${service.id === 'web' ? 'web' : service.id}`} key={service.id} className="block group bg-[var(--card)] border border-gray-800 rounded-lg p-4 hover:border-[var(--primary)] transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-center gap-4">
                                            <img src={serviceImages[service.id]} alt={service.title} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
                                            <div className="flex-grow">
                                                <h2 className="font-bold text-lg text-white">{service.title}</h2>
                                                <p className="text-sm text-gray-400">{service.description.length > 80 ? service.description.substring(0, 80) + '...' : service.description}</p>
                                            </div>
                                            <div className="flex flex-col items-center gap-1">
                                                <ArrowRight className={`w-6 h-6 text-gray-500 group-hover:text-[var(--primary)] transition-transform group-hover:translate-x-1 ${direction === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                                                <span className="text-xs text-gray-500 group-hover:text-[var(--primary)]">{pageText.explore}</span>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* Right Column: Video and Description */}
                    <AnimatedSection>
                        <section aria-labelledby="details-heading" className="sticky top-28">
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
                            <div className="mt-8">
                                <h2 id="details-heading" className="text-3xl font-bold mb-4">{pageText.detailsTitle}</h2>
                                <p className="text-gray-400 leading-relaxed">{pageText.detailsText}</p>
                            </div>
                        </section>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default GeneralCheckoutPage;