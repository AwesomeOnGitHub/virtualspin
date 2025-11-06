import React from 'react';
import PageHero from './PageHero';
import FeatureGrid from './FeaturesGrid';
import PricingTable from './PricingTable';
import ImageGallery from './ImageGallery';
import AnimatedSection from './AnimatedSection';
import { PageContent } from '../types';

interface ServicePageProps {
    serviceId: string;
    content: PageContent;
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceId, content }) => {
    return (
        <div>
            <PageHero {...content.hero} />
            
            <section className="py-24 sm:py-32 bg-[var(--background)]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <AnimatedSection className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{content.intro.title}</h2>
                        <div className="text-lg text-gray-400 space-y-6">
                            {content.intro.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <ImageGallery {...content.gallery} />
            <FeatureGrid {...content.features} />
            <PricingTable {...content.pricing} />
        </div>
    );
};

export default ServicePage;