import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'en' | 'it');
  };

  return (
    <div className="relative inline-block">
        {/* TODO: implement language switcher */}
    </div>
  );
};

export default LanguageSwitcher;
