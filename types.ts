export type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'nl' | 'da' | 'hu' | 'tr' | 'ar' | 'hi';

export interface NavTranslations {
  tour: string;
  drone: string;
  website: string;
  photography: string;
  contact: string;
  getStarted: string;
}

export interface HeroTranslations {
  title: string;
  subtitle: string;
  description: string;
}

export interface Service {
  id: string;
  title:string;
  description: string;
  features: string[];
  oldPrice: string;
  newPrice: string;
}

export interface ServicesTranslations {
  title: string;
  subtitle: string;
  list: Service[];
}

export interface ContactTranslations {
  title: string;
  subtitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitButton: string;
  formSuccess: string;
  formError: string;
}

export interface FooterTranslations {
  rights: string;
}

export interface PageContent {
    hero: {
        title: string;
        subtitle: string;
        imageUrl: string;
    };
    intro: {
        title: string;
        paragraphs: string[];
    };
    gallery: {
        title: string;
        subtitle: string;
        images: {
            src: string;
            alt: string;
        }[];
    };
    features: {
        title: string;
        subtitle: string;
        items: {
            icon: string;
            title: string;
            description: string;
        }[];
    };
    pricing: {
        title: string;
        subtitle: string;
        plans: {
            name: string;
            price: string;
            period: string;
            features: string[];
            isFeatured: boolean;
        }[];
    };
}

export interface PagesTranslations {
    tour: PageContent;
    drone: PageContent;
    website: PageContent;
    photography: PageContent;
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  services: ServicesTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
  pages: PagesTranslations;
}