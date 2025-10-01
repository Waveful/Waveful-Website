import { useTranslation as originalUseTranslation } from '@/hooks/useTranslation';

declare module '@/hooks/useTranslation' {
  interface TranslationReturn {
    t: <T = string>(key: string, returnRaw?: boolean) => T | string;
  }
  
  function useTranslation(): TranslationReturn;
  
  export default useTranslation;
}
