'use client';
import { SiteHeader } from './components/site-header';
import { HeroSection } from './components/hero-section';
import { ProjectsSection } from './components/projects-section';
import { AboutSection } from './components/about-section';
import { ContactSection } from './components/contact-section';
import { SiteFooter } from './components/site-footer';
import { useLanguage } from './use-language';

export default function Home() {
  const { language, text, changeLanguage } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main">
        {text.skip}
      </a>
      <SiteHeader t={text} lang={language} onLanguageChange={changeLanguage} />
      <main id="main">
        <HeroSection t={text} />
        <ProjectsSection t={text} lang={language} />
        <AboutSection t={text} />
        <ContactSection t={text} />
      </main>
      <SiteFooter t={text} />
    </>
  );
}
