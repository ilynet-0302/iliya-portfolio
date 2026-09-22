import { ArrowUpRight, Mail, GitFork, UserRound } from 'lucide-react';
import { profile } from '../portfolio';
import { ExternalLink, PortfolioMark } from './shared';
import type { Copy } from '../portfolio';

export function ContactSection({ t }: { t: Copy }) {
  return (
    <section
      id="contact"
      className="contact-section wrap"
      aria-labelledby="contact-title"
    >
      <div className="contact-heading">
        <h2 id="contact-title">
          {t.contactTitle}
          <br />
          <span>{t.contactLine2}</span>
        </h2>
        <PortfolioMark />
      </div>
      <div className="contact-bottom">
        <p>{t.contactIntro}</p>
        <div className="contact-links">
          <a href={'mailto:' + profile.email} className="email-link">
            <Mail size={21} />
            <span>{profile.email}</span>
            <ArrowUpRight size={23} />
          </a>
          <div className="social-links">
            <ExternalLink href={profile.linkedin}>
              <UserRound size={18} />
              LinkedIn
              <ArrowUpRight size={16} />
            </ExternalLink>
            <ExternalLink href={profile.github}>
              <GitFork size={18} />
              GitHub
              <ArrowUpRight size={16} />
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
