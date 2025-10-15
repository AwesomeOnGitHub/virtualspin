// FIX: This file was incorrectly containing translation data instead of type definitions,
// causing circular dependencies and missing type errors across the application.
// The content has been replaced with the correct type definitions.

export type Language = 'en' | 'fr' | 'de' | 'ar';

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  oldPrice: string;
  newPrice: string;
}

export interface Image {
    src: string;
    alt: string;
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface Plan {
    name: string;
    price: string;
    period: string;
    features: string[];
    isFeatured: boolean;
    oldPrice?: string;
    isPremium?: boolean;
    backgroundImage?: string;
}

interface HeroContent {
    title: string;
    subtitle: string;
    imageUrl: string;
}

interface IntroContent {
    title: string;
    paragraphs: string[];
}

interface GalleryContent {
    title: string;
    subtitle: string;
    images: Image[];
}

interface FeaturesContent {
    title: string;
    subtitle: string;
    items: Feature[];
}

interface PricingContent {
    title: string;
    subtitle: string;
    plans: Plan[];
}

export interface PageContent {
    hero: HeroContent;
    intro: IntroContent;
    gallery: GalleryContent;
    features: FeaturesContent;
    pricing: PricingContent;
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
    learnMore: string;
    list: Service[];
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
  pricing: {
    choosePlan: string;
    getQuote: string;
  };
  checkoutPage: {
    backLink: string;
    contactTitle: string;
    nameLabel: string;
    emailLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    placeOrderButton: string;
    orderSummaryTitle: string;
    productLabel: string;
    serviceLabel: string;
    totalLabel: string;
    gettingTitle: string;
    orderSuccess: string;
    orderError: string;
    notFoundTitle: string;
    notFoundText: string;
    notFoundButton: string;
  };
  generalCheckoutPage: {
    title: string;
    detailsTitle: string;
    detailsText: string;
    explore: string;
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
    web: PageContent;
    photography: PageContent;
  };
}
