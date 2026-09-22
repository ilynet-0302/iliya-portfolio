'use client';

import { ArrowDownToLine, ArrowUpRight, MapPin } from 'lucide-react';
import { SiteHeader } from '../components/site-header';
import { SiteFooter } from '../components/site-footer';
import { ExternalLink } from '../components/shared';
import { useLanguage } from '../use-language';
import cv from './cv-data.json';
import './cv.css';

const pageMetadata = {
  title: { bg: cv.labels.bg.title, en: cv.labels.en.title },
  description: { bg: cv.labels.bg.meta, en: cv.labels.en.meta },
};

export default function CvPage() {
  const { language, text, changeLanguage } = useLanguage(pageMetadata);
  const t = cv.labels[language];
  const [givenName, ...surname] = cv.name[language].split(' ');
  const pdf = `../cv/iliya-baltadzhiev-${language}.pdf`;

  return (
    <>
      <a className="skip-link" href="#main">
        {text.skip}
      </a>
      <SiteHeader
        t={text}
        lang={language}
        onLanguageChange={changeLanguage}
        page="cv"
      />
      <main id="main" className="cv-page">
        <section className="cv-intro wrap" aria-labelledby="cv-name">
          <div className="cv-intro-copy">
            <h1 id="cv-name">
              {givenName}
              <span>{surname.join(' ')}</span>
            </h1>
            <p className="cv-role">{cv.role}</p>
            <p className="cv-summary">{cv.summary[language]}</p>
            <div className="cv-download-row">
              <a className="cv-download" href={pdf} download>
                {t.download}
                <ArrowDownToLine size={19} aria-hidden="true" />
              </a>
              <span>{t.downloadHint}</span>
            </div>
          </div>
          <div className="cv-intro-portrait">
            <img
              src="../iliya-profile.png"
              width="1254"
              height="1254"
              alt={cv.name[language]}
              fetchPriority="high"
            />
            <p>
              <MapPin size={15} aria-hidden="true" />
              {cv.location[language]}
            </p>
          </div>
        </section>

        <div className="cv-paper">
          <div className="cv-document wrap">
            <div className="cv-main-column">
              <section className="cv-section" aria-labelledby="cv-experience">
                <h2 id="cv-experience">{t.experience}</h2>
                <div className="cv-entry">
                  <p className="cv-period">
                    <time dateTime={cv.experience.startDate}>
                      {cv.experience.period[language]}
                    </time>
                  </p>
                  <div>
                    <h3>{cv.experience.role}</h3>
                    <p className="cv-organisation">{cv.experience.company}</p>
                    <ul className="cv-responsibilities">
                      {cv.experience.bullets[language].map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="cv-section" aria-labelledby="cv-education">
                <h2 id="cv-education">{t.education}</h2>
                {cv.education.map((education) => (
                  <div className="cv-entry" key={education.id}>
                    <p className="cv-period">{education.year}</p>
                    <div>
                      <h3>{education.title[language]}</h3>
                      <p className="cv-organisation">
                        {education.school[language]}
                      </p>
                      <p>{education.qualification[language]}</p>
                      {education.note[language] && (
                        <p className="cv-note">{education.note[language]}</p>
                      )}
                    </div>
                  </div>
                ))}
              </section>

              <section className="cv-section" aria-labelledby="cv-projects">
                <h2 id="cv-projects">{t.projects}</h2>
                <p className="cv-projects-intro">{t.projectsIntro}</p>
                <div className="cv-project-list">
                  {cv.projects.map((project) => (
                    <article key={project.id}>
                      <h3>
                        <ExternalLink href={project.url}>
                          {project.name}
                          <ArrowUpRight size={17} aria-hidden="true" />
                        </ExternalLink>
                      </h3>
                      <p>{project.description[language]}</p>
                      <p className="cv-project-tech">{project.tech}</p>
                    </article>
                  ))}
                </div>
                <a
                  className="text-link cv-portfolio-link"
                  href={`../?lang=${language}#projects`}
                >
                  {t.portfolio}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </section>
            </div>

            <aside className="cv-sidebar">
              <section aria-labelledby="cv-contact">
                <h2 id="cv-contact">{t.contact}</h2>
                <address className="cv-contact-list">
                  <a href={`mailto:${cv.email}`}>{cv.email}</a>
                  <a href={`tel:${cv.phone}`}>{cv.phoneDisplay}</a>
                  <ExternalLink href={cv.linkedin}>
                    LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
                  </ExternalLink>
                  <ExternalLink href={cv.github}>
                    GitHub <ArrowUpRight size={15} aria-hidden="true" />
                  </ExternalLink>
                </address>
              </section>
              <section aria-labelledby="cv-skills">
                <h2 id="cv-skills">{t.skills}</h2>
                {cv.skills.map((group) => (
                  <div className="cv-skill-group" key={group.name.en}>
                    <h3>{group.name[language]}</h3>
                    <p>{group.items.join(' · ')}</p>
                  </div>
                ))}
              </section>
              <section aria-labelledby="cv-languages">
                <h2 id="cv-languages">{t.languages}</h2>
                <dl className="cv-languages">
                  {cv.languages.map((item) => (
                    <div key={item.name.en}>
                      <dt>{item.name[language]}</dt>
                      <dd>{item.level[language]}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </aside>
          </div>
        </div>

        <section className="cv-close wrap" aria-labelledby="cv-close-title">
          <h2 id="cv-close-title">{t.close}</h2>
          <a className="text-link" href={`mailto:${cv.email}`}>
            {t.email}
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </section>
      </main>
      <SiteFooter t={text} />
    </>
  );
}
