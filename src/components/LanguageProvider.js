import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import translations from '../data/translations.json';

export const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'mwr', label: 'Marwari', native: 'मारवाड़ी' },
];

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('language');
      if (stored && translations[stored]) setLanguageState(stored);
    } catch (e) {}
  }, []);

  const setLanguage = useCallback((lang) => {
    if (!translations[lang]) return;
    setLanguageState(lang);
    try { localStorage.setItem('language', lang); } catch (e) {}
    try { document.documentElement.lang = lang === 'mwr' ? 'hi' : lang; } catch (e) {}
  }, []);

  const t = useCallback(
    (key) => {
      const dict = translations[language] || translations.en;
      return dict[key] ?? translations.en[key] ?? key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
