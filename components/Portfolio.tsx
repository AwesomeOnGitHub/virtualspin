import React from 'react';
import AnimatedSection from './AnimatedSection';
import { PlayCircle, ArrowRight } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

const portfolioItems = [
    { 
        id: 'tour', 
        image: 'https://images.unsplash.com/photo-1600579034216-958863f350b2?q=80&w=2500&auto=format&fit=crop',
        isInteractive: true 
    },
    { 
        id: 'drone', 
        image: 'https://images.unsplash.com/photo-1508312923976-76a165b939e4?q=80&w=2070&auto=format&fit=crop',
        isInteractive: false 
    },
    { 
        id: 'photography', 
        image: 'https://images.unsplash.com/photo-1556761175-b413da4b248d?q=80&w=1974&auto=format&fit=crop',
        isInteractive: false
    },
];

const Portfolio: React.FC = () => {
    const { t, direction } = useTranslations();
    const portfolioText = t('homePage').portfolio;
    const services = t('services').list;

    const getServiceTitle = (id: string) => {
        return services.find(s => s.id === id)?.title || '';
    };

    const renderItemContent = (item: typeof portfolioItems[0]) => (
        <div className="relative w-full h-full rounded-lg overflow-hidden group">
            <img src={item.image} alt={getServiceTitle(item.id)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">{getServiceTitle(item.id)}</h3>
            </div>
            {item.isInteractive ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
                </div>
            ) : (
                <div className="absolute top-4 right-4 p-2 bg-black/40 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--primary)]">
                    <ArrowRight className={`w-5 h-5 text-white ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                </div>
            )}
        </div>
    );

    return (
        <section className="py-24 sm:py-32 bg-black">
            <div className="container mx-auto px-6">
                <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        {portfolioText.title}
                    </h2>
                    <p className="text-lg text-gray-400">
                        {portfolioText.subtitle}
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                     <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[70vh] min-h-[500px]">
                        <div className="col-span-12 md:col-span-6 row-span-2">
                           <a href={`#/${portfolioItems[0].id}`} className="block w-full h-full text-left">{renderItemContent(portfolioItems[0])}</a>
                        </div>
                        <div className="col-span-12 md:col-span-6 row-span-1">
                            <a href={`#/${portfolioItems[1].id}`} className="block w-full h-full">{renderItemContent(portfolioItems[1])}</a>
                        </div>
                        <div className="col-span-12 md:col-span-6 row-span-1">
                            <a href={`#/${portfolioItems[2].id}`} className="block w-full h-full">{renderItemContent(portfolioItems[2])}</a>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Portfolio;