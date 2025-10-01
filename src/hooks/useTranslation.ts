import { useMemo } from 'react';
import en from '@/locales/en/common.json';
import it from '@/locales/it/common.json';
import { useLanguage } from '@/contexts/LanguageContext';

type Locale = 'en' | 'it';
type NestedValue = string | number | boolean | null | undefined | NestedObject;
type NestedObject = { [key: string]: NestedValue | NestedObject };
type Translations = Record<Locale, NestedObject>;

export const useTranslation = () => {
  const { language } = useLanguage();

  const translations = useMemo<Translations>(
    () => ({
      en: JSON.parse(JSON.stringify(en)) as NestedObject,
      it: JSON.parse(JSON.stringify(it)) as NestedObject,
    }),
    []
  );

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: NestedValue | NestedObject = translations[language as Locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k] as NestedValue | NestedObject;
      } else {
        console.warn(`Translation key '${key}' not found for locale '${language}'`);
        return key; // Return the key if translation not found
      }
    }
    
    // If we have a string, number, or boolean, convert it to string
    if (value === null || value === undefined) {
      return key;
    }
    
    return String(value);
  };

  return { t, locale: language };
};
