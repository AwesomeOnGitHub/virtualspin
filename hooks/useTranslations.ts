
import React, { useState, useEffect, useCallback, createContext, useContext, ReactNode } from 'react';
import { Language, Translations } from '../types';
import { translations } from '../constants/translations';

interface TranslationsContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <K extends keyof Translations>(key: K) => Translations[K];
  direction: 'ltr' | 'rtl';
}

const TranslationsContext = createContext<TranslationsContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  const savedLang = localStorage.getItem('language');
  // Make sure saved lang is a valid language, otherwise default to 'en'
  if (savedLang && Object.keys(translations).includes(savedLang)) {
    return savedLang as Language;
  }
  return 'en';
};

export const TranslationsProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = useCallback(
    function <K extends keyof Translations>(key: K): Translations[K] {
      const langTranslations = translations[language];
      const fallbackTranslations = translations.en;

      // 1. If the entire language pack is missing or completely empty, default to English.
      if (!langTranslations || Object.keys(langTranslations).length === 0) {
        return fallbackTranslations[key];
      }

      const requestedTranslation = langTranslations[key];

      // 2. If the specific key (e.g., 'hero') is missing in the current language, default to English.
      if (requestedTranslation === undefined || requestedTranslation === null) {
        return fallbackTranslations[key];
      }
      
      // 3. If the translation exists but is an empty object (and not an array), it's an un-translated stub. Default to English.
      // This allows empty arrays (e.g. features: []) to be valid translations.
      if (typeof requestedTranslation === 'object' && !Array.isArray(requestedTranslation) && Object.keys(requestedTranslation).length === 0) {
        return fallbackTranslations[key];
      }

      return requestedTranslation;
    },
    [language]
  );
  
  const direction: 'ltr' | 'rtl' = language === 'ar' ? 'rtl' : 'ltr';

  const value = { language, setLanguage, t, direction };

  return React.createElement(TranslationsContext.Provider, { value }, children);
};

export const useTranslations = (): TranslationsContextType => {
  const context = useContext(TranslationsContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a TranslationsProvider');
  }
  return context;
};
