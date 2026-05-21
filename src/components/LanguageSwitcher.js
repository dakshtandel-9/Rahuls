import { useEffect, useRef, useState } from 'react';
import { LANGUAGES, useLanguage } from './LanguageProvider';

export default function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  const current = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Change language. Current: ${current.label}`}
        className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 dark:border-[#1f1f1f] bg-white/60 dark:bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="uppercase tracking-wider">{current.code === 'mwr' ? 'MR' : current.code}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.24 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 mt-2 w-44 rounded-xl border border-gray-200 dark:border-[#1f1f1f] bg-white dark:bg-[#0a0a0a] shadow-lg overflow-hidden z-50"
        >
          {LANGUAGES.map(l => {
            const active = l.code === language;
            return (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => { setLanguage(l.code); setOpen(false); }}
                  className={`w-full text-left px-3 py-2 text-sm flex items-center justify-between transition-colors ${
                    active
                      ? 'bg-[#FF9500]/10 text-[#FF9500]'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  <span className="flex flex-col">
                    <span className="font-semibold leading-tight">{l.native}</span>
                    <span className="text-[11px] opacity-60 leading-tight">{l.label}</span>
                  </span>
                  {active && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd"/>
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
