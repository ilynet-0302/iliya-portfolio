'use client';
import { useEffect, useSyncExternalStore } from 'react';
import { copy, type Language } from './portfolio';

const STORAGE_KEY = 'iliya-language';
const LANGUAGE_EVENT = 'portfolio:language-change';

function isLanguage(value: string | null): value is Language {
  return value === 'bg' || value === 'en';
}

function readLanguage(): Language {
  const requested = new URLSearchParams(window.location.search).get('lang');
  if (isLanguage(requested)) return requested;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {
    // Storage is optional; URL selection remains available.
  }
  return 'bg';
}

function subscribe(onChange: () => void) {
  window.addEventListener('popstate', onChange);
  window.addEventListener('storage', onChange);
  window.addEventListener(LANGUAGE_EVENT, onChange);
  return () => {
    window.removeEventListener('popstate', onChange);
    window.removeEventListener('storage', onChange);
    window.removeEventListener(LANGUAGE_EVENT, onChange);
  };
}

// The static document and the first hydration render use the same language.
function serverLanguage(): Language {
  return 'bg';
}

export function useLanguage() {
  const language = useSyncExternalStore(
    subscribe,
    readLanguage,
    serverLanguage,
  );
  const text = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === 'bg'
        ? 'Илия — Full-Stack Developer'
        : 'Iliya — Full-Stack Developer';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', text.meta);
  }, [language, text.meta]);

  function changeLanguage(next: Language) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.history.replaceState(null, '', url);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Persisting the preference is optional.
    }
    window.dispatchEvent(new Event(LANGUAGE_EVENT));
  }
  return { language, text, changeLanguage };
}
