// This file provides type information for the useTranslation hook

declare module '@/hooks/useTranslation' {
  interface TranslationReturn {
    t: <T = string>(key: string, returnRaw?: boolean) => T | string;
    locale: string;
  }
  
  const useTranslation: () => TranslationReturn;
  
  export default useTranslation;
}
