import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { PortfolioMark } from './shared';
import type { Copy } from '../portfolio';

export function HeroSection({ t }: { t: Copy }) {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          {t.heroLine1}
          <br />
          <span>{t.heroLine2}</span>
          <PortfolioMark className="hero-mark" />
        </h1>
        <div className="hero-intro">
          <p>
            {t.hello} <strong>{t.name}.</strong>
            <br />
            Full-Stack Developer.
          </p>
          <p>{t.intro}</p>
          <a className="text-link" href="#projects">
            {t.explore}
            <ArrowDown size={19} />
          </a>
        </div>
      </div>
      <div className="project-reel" aria-label={t.previewLabel}>
        <a href="#travel" className="reel-item reel-travel">
          <img
            src="./projects/travel.png"
            width="1731"
            height="909"
            alt="Travel Memory Map"
            fetchPriority="high"
          />
          <span>
            Travel Memory Map
            <ArrowUpRight size={17} />
          </span>
        </a>
        <a href="#loglens" className="reel-item reel-loglens">
          <img
            src="./projects/loglens.png"
            width="1280"
            height="640"
            alt="LogLens"
          />
          <span>
            LogLens
            <ArrowUpRight size={17} />
          </span>
        </a>
        <a href="#cinepick" className="reel-item reel-cinepick">
          <img
            src="./projects/cinepick.png"
            width="1672"
            height="941"
            alt="Cinepick"
          />
          <span>
            Cinepick
            <ArrowUpRight size={17} />
          </span>
        </a>
      </div>
      <div className="hero-bottom">
        <span>
          <MapPin size={15} />
          {t.location}
        </span>
        <span>Java / React / Linux</span>
        <a href="#projects">
          {t.keepScrolling}
          <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
