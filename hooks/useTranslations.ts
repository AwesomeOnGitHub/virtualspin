import { useState, useEffect, useCallback } from 'react';
import { Language, Translations } from '../types';
import { translations } from '../constants/translations';

const getInitialLanguage = (): Language => {
  const savedLang = localStorage.getItem('language');
  return (savedLang as Language) || 'en';
};

export const useTranslations = (): {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <K extends keyof Translations>(key: K) => Translations[K];
  direction: 'ltr' | 'rtl';
} => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = useCallback(
    function <K extends keyof Translations>(key: K): Translations[K] {
      return translations[language][key];
    },
    [language]
  );
  
  const setLang = (lang: Language) => {
    setLanguage(lang);
  };

  return {
    language,
    setLanguage: setLang,
    t,
    direction: language === 'ar' ? 'rtl' : 'ltr'
  };
};
