import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from '../hooks/useTranslations';

type PortfolioItem = {
    id: string;
    image: string;
    iframeSrc?: string;
};

const portfolioItems: PortfolioItem[] = [
    { 
        id: 'tour', 
        image: '/img/photo/interior.jpg',
        iframeSrc: 'https://storage.net-fs.com/hosting/2727323/396/index.htm'
    },
    { 
        id: 'drone', 
        image: '/img/drone/bella_vista.jpg',
    },
    { 
        id: 'photography', 
        image: '/img/photo/business.jpg',
    },
];

const Portfolio: React.FC = () => {
    const { t, direction } = useTranslations();
    const services = t('services').list;

    const getServiceTitle = (id: string) => {
        return services.find(s => s.id === id)?.title || '';
    };

    const renderImageItem = (item: PortfolioItem) => (
        <a href={`#/${item.id}`} className="block w-full h-full">
            <div className="relative w-full h-full rounded-lg overflow-hidden group">
                <img src={item.image} alt={getServiceTitle(item.id)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{getServiceTitle(item.id)}</h3>
                </div>
                <div className="absolute top-4 right-4 p-2 bg-black/40 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--primary)]">
                    <ArrowRight className={`w-5 h-5 text-white ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                </div>
            </div>
        </a>
    );
    
    const renderIframeItem = (item: PortfolioItem) => (
         <div className="w-full h-full rounded-lg overflow-hidden">
            <iframe
                src={item.iframeSrc}
                title={getServiceTitle(item.id)}
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
            />
         </div>
    );

    return (
        <section className="py-24 sm:py-32 bg-black">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                     <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[70vh] min-h-[500px]">
                        <div className="col-span-12 md:col-span-6 row-span-2">
                           {portfolioItems[0].iframeSrc ? renderIframeItem(portfolioItems[0]) : renderImageItem(portfolioItems[0])}
                        </div>
                        <div className="col-span-12 md:col-span-6 row-span-1">
                           {renderImageItem(portfolioItems[1])}
                        </div>
                        <div className="col-span-12 md:col-span-6 row-span-1">
                           {renderImageItem(portfolioItems[2])}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Portfolio;
