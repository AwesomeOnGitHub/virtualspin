export type Language = 'en' | 'fr' | 'de' | 'ar';

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  oldPrice: string;
  newPrice: string;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isFeatured: boolean;
  oldPrice?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Image {
  src: string;
  alt: string;
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
        images: Image[];
    };
    features: {
        title: string;
        subtitle: string;
        items: Feature[];
    };
    pricing: {
        title: string;
        subtitle: string;
        plans: Plan[];
    };
    otherServices?: {
      title: string;
      subtitle: string;
    };
}

export interface Translations {
  nav: {
    home: string;
    tour: string;
    drone: string;
    website: string;
    photography: string;
    contact: string;
    getStarted: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  services: {
    title: string;
    subtitle: string;
    list: Service[];
    learnMore: string;
  };
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitButton: string;
    formSuccess: string;
    formError: string;
  };
  footer: {
    rights: string;
  };
  homePage: {
    whyChooseUs: {
        title: string;
        subtitle: string;
        items: Feature[];
    };
    portfolio: {
        title: string;
        subtitle: string;
    };
    cta: {
        title: string;
        subtitle: string;
        buttonText: string;
    };
  };
  pages: {
    tour: PageContent;
    drone: PageContent;
    website: PageContent;
    photography: PageContent;
  };
}