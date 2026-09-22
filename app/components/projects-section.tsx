import { ArrowUpRight, Download, GitFork } from 'lucide-react';
import { projects, experiments, profile } from '../portfolio';
import { ExternalLink } from './shared';
import type { Copy, Language } from '../portfolio';

export function ProjectsSection({ t, lang }: { t: Copy; lang: Language }) {
  return (
    <section
      id="projects"
      className="work-section wrap"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <h2 id="work-title">
          {t.workTitle}
          <span>.</span>
        </h2>
        <p>{t.workIntro}</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article
            className={'project project-' + project.id}
            id={project.id}
            key={project.id}
          >
            <ExternalLink
              href={project.live}
              className={'project-image image-' + project.id}
            >
              <img
                src={'./projects/' + project.image}
                width={project.width}
                height={project.height}
                alt={project.alt[lang]}
                loading="lazy"
              />
              <span className="image-action" aria-hidden="true">
                <ArrowUpRight size={23} />
              </span>
            </ExternalLink>
            <div className="project-content">
              <div className="project-title-row">
                <h3>{project.name[lang]}</h3>
                <span className="project-type">{project.type[lang]}</span>
              </div>
              <p>{project.description[lang]}</p>
              <ul className="tech-list" aria-label={t.technologies}>
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <ExternalLink href={project.live} className="text-link">
                  {project.id === 'plant' ? (
                    <>
                      <Download size={16} />
                      {t.windows}
                    </>
                  ) : (
                    <>
                      {t.live}
                      <ArrowUpRight size={16} />
                    </>
                  )}
                </ExternalLink>
                <ExternalLink href={project.source} className="source-link">
                  <GitFork size={16} />
                  {t.source}
                </ExternalLink>
              </div>
              {project.note && (
                <small className="project-note">{project.note[lang]}</small>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="more-work">
        <div>
          <h3>{t.moreTitle}</h3>
          <p>{t.moreIntro}</p>
        </div>
        <ul>
          {experiments.map((repo) => (
            <li key={repo.name}>
              <ExternalLink href={repo.url}>
                <span>{repo.name}</span>
                <ArrowUpRight size={20} />
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
      <ExternalLink
        href={profile.github + '?tab=repositories'}
        className="all-repos"
      >
        {t.allRepos}
        <ArrowUpRight size={18} />
      </ExternalLink>
    </section>
  );
}
