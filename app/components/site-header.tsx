import { PortfolioMark } from './shared';
import type { Copy, Language } from '../portfolio';

export function SiteHeader({
  t,
  lang,
  onLanguageChange,
}: {
  t: Copy;
  lang: Language;
  onLanguageChange: (language: Language) => void;
}) {
  return (
    <header className="header wrap">
      <a className="wordmark" href="#top" aria-label={t.home}>
        iliya<span>.</span>
        <PortfolioMark />
      </a>
      <nav aria-label={t.nav}>
        <a href="#projects">{t.projects}</a>
        <a href="#about">{t.about}</a>
        <a href="#contact">{t.contact}</a>
      </nav>
      <fieldset className="language" aria-label={t.language}>
        <button
          onClick={() => onLanguageChange('bg')}
          aria-pressed={lang === 'bg'}
          lang="bg"
        >
          BG
        </button>
        <span aria-hidden="true">/</span>
        <button
          onClick={() => onLanguageChange('en')}
          aria-pressed={lang === 'en'}
          lang="en"
        >
          EN
        </button>
      </fieldset>
    </header>
  );
}
