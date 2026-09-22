import { ArrowUpRight, Code2, Layers3, Server } from 'lucide-react';
import { ExternalLink, PortfolioMark } from './shared';
import type { Copy } from '../portfolio';

export function AboutSection({ t }: { t: Copy }) {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="wrap">
        <div className="about-intro">
          <div className="about-heading">
            <h2 id="about-title">
              {t.aboutTitle}
              <br />
              <span>{t.aboutLine2}</span>
            </h2>
            <div className="portrait-block">
              <img
                className="portrait"
                src="./iliya-profile.png"
                width="1254"
                height="1254"
                alt={t.name}
                loading="lazy"
              />
              <div className="name-sign">
                {t.name}
                <PortfolioMark />
              </div>
            </div>
          </div>
          <div className="about-copy">
            <p className="about-lead">{t.aboutLead}</p>
            <p>{t.aboutBody}</p>
            <p>{t.hobby}</p>
            <a className="text-link" href="#contact">
              {t.sayHello}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="current-work">
          <div>
            <span className="current-dot" />
            {t.current}
          </div>
          <div>
            <h3>Full-Stack Developer</h3>
            <p>T&amp;D Engineering</p>
          </div>
          <p>{t.currentDescription}</p>
        </div>
        <div className="expertise">
          <h3>{t.stackTitle}</h3>
          <div className="expertise-rows">
            <div className="expertise-row">
              <Code2 />
              <h4>Frontend</h4>
              <p>React · TypeScript · Svelte</p>
            </div>
            <div className="expertise-row">
              <Layers3 />
              <h4>Backend</h4>
              <p>Java · Spring Boot · PostgreSQL · Supabase</p>
            </div>
            <div className="expertise-row">
              <Server />
              <h4>{t.infrastructure}</h4>
              <p>Linux · Ansible · Docker · Git · CI/CD</p>
            </div>
          </div>
        </div>
        <div className="curiosity">
          <PortfolioMark />
          <p>{t.curiosity}</p>
          <ExternalLink
            href="https://github.com/ilynet-0302/chat_assistant-main"
            className="text-link"
          >
            {t.aiLink}
            <ArrowUpRight size={17} />
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
