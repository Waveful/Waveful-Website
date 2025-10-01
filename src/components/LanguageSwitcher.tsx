import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'en' | 'it');
  };

  return (
    <div className="relative inline-block">
      <select
        value={language}
        onChange={handleLanguageChange}
        className="appearance-none bg-transparent border-none text-current pl-2 pr-8 py-1 rounded-md 
                 focus:outline-none cursor-pointer transition-colors duration-200"
      >
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg 
          className="w-4 h-4 text-current" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
