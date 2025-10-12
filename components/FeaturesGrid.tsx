import React from 'react';
import {
  Eye, MousePointerClick, Smartphone, Share2, Film, Building, Search, Map,
  LayoutTemplate, Rocket, ShieldCheck, Home, Briefcase, ShoppingBag, Utensils, HelpCircle
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  title: string;
  subtitle: string;
  items: Feature[];
}

// Create a stable map of string names to statically imported icon components.
// This is a robust replacement for the unreliable dynamic import (* as Icons).
const iconMap: { [key: string]: React.ElementType } = {
  Eye,
  MousePointerClick,
  Smartphone,
  Share2,
  Film,
  Building,
  Search,
  Map,
  LayoutTemplate,
  Rocket,
  ShieldCheck,
  Home,
  Briefcase,
  ShoppingBag,
  Utensils,
};

const FeatureGrid: React.FC<FeatureGridProps> = ({ title, subtitle, items }) => {
  return (
    <section className="py-24 sm:py-32 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-400">
            {subtitle}
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((feature, index) => {
            // Look up the icon from our stable map, with a fallback for safety.
            const IconComponent = iconMap[feature.icon] || HelpCircle;
            return (
              <AnimatedSection key={index}>
                <div className="bg-[var(--card)] p-8 rounded-lg text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
