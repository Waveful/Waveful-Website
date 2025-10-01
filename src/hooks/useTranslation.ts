import { useMemo } from 'react';
import en from '@/locales/en/common.json';
import it from '@/locales/it/common.json';
import { useLanguage } from '@/contexts/LanguageContext';

type Locale = 'en' | 'it';

export const useTranslation = () => {
  const { language } = useLanguage();

  const translations = useMemo(() => ({
    en: { ...en },
    it: { ...it },
  }), []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language as Locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key '${key}' not found for locale '${language}'`);
        return key; // Return the key if translation not found
      }
    }
    
    return value || key;
  };

  return { t, locale: language };
};
