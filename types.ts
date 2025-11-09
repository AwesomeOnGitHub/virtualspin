// FIX: This file was incorrectly containing translation data instead of type definitions,
// causing circular dependencies and missing type errors across the application.
// The content has been replaced with the correct type definitions.

export type Language = 'en' | 'fr' | 'de' | 'ar';

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  // FIX: Add optional price properties to resolve type errors in ServiceCard.tsx
  oldPrice?: string;
  newPrice?: string;
}

export interface Image {
    src: string;
    alt: string;
    iframeSrc?: string;
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface Plan {
    name: string;
    features: string[];
    isFeatured: boolean;
    isPremium?: boolean;
    backgroundImage?: string;
    // FIX: Add optional price and period to resolve type errors in CheckoutPage.tsx
    price?: string;
    period?: string;
}

interface HeroContent {
    title: string;
    subtitle: string;
    imageUrl?: string;
    iframeSrc?: string;
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

export interface PricingContent {
    title: string;
    subtitle: string;
    plans?: Plan[];
    featureGroups?: {
        title: string;
        features: string[];
    }[];
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
  footer: {};
  pricing: {
    choosePlan: string;
    getQuote: string;
  };
  homePage: {
    portfolio: {};
  };
  pages: {
    tour: PageContent;
    drone: PageContent;
    web: PageContent;
    photography: PageContent;
  };
  // FIX: Add checkoutPage translations to resolve type errors.
  checkoutPage: {
    orderSuccess: string;
    orderError: string;
    notFoundTitle: string;
    notFoundText: string;
    notFoundButton: string;
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
  };
  // FIX: Add generalCheckoutPage translations to resolve type errors.
  generalCheckoutPage: {
    title: string;
    explore: string;
    detailsTitle: string;
    detailsText: string;
  };
}