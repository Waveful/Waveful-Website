import { useTranslation as originalUseTranslation } from '@/hooks/useTranslation';

declare module '@/hooks/useTranslation' {
  export function useTranslation(): {
    t: <T = string>(key: string, returnRaw?: boolean) => T | string;
    locale: string;
  };
}
