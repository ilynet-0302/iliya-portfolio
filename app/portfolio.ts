export type Language = 'bg' | 'en';
export type Localized<T> = Record<Language, T>;
export interface Project {
  id: string;
  name: Localized<string>;
  type: Localized<string>;
  description: Localized<string>;
  tech: readonly string[];
  image: string;
  width: number;
  height: number;
  alt: Localized<string>;
  note?: Localized<string>;
  live: string;
  source: string;
}
export const profile = {
  email: 'iliabal0404@gmail.com',
  linkedin: 'https://www.linkedin.com/in/iliabaltadzhiev/',
  github: 'https://github.com/ilynet-0302',
};
export const copy = {
  bg: {
    meta: 'Илия — Full-Stack Developer. Java, React, Linux и автоматизация. Лични проекти, практически идеи и софтуер, който работи.',
    skip: 'Към съдържанието',
    home: 'Илия — начало',
    nav: 'Основна навигация',
    language: 'Език',
    projects: 'Проекти',
    about: 'За мен',
    contact: 'Контакт',
    heroLine1: 'От идея',
    heroLine2: 'до действие.',
    hello: 'Здравей, аз съм',
    name: 'Илия',
    intro:
      'Създавам приложения, свързвам системи и се грижа кодът да работи — от интерфейса до Linux сървъра.',
    explore: 'Разгледай проектите',
    previewLabel: 'Избрани проекти — бърз достъп',
    location: 'Варна, България',
    keepScrolling: 'Има още надолу',
    workTitle: 'Направено от мен',
    workIntro: 'Лични проекти, започнали с един въпрос: „Ами ако го направя?“',
    technologies: 'Технологии',
    live: 'Отвори проекта',
    source: 'Кодът в GitHub',
    windows: 'За Windows',
    moreTitle: 'Любопитството продължава.',
    moreIntro: 'Още код, инструменти и експерименти.',
    allRepos: 'Всички хранилища в GitHub',
    aboutTitle: 'Зад кода',
    aboutLine2: 'стои човек.',
    aboutLead:
      'Харесва ми да разбирам как работят нещата. Още повече — да ги правя.',
    aboutBody:
      'Работя като Full-Stack Developer. Пиша backend с Java и Spring Boot, изграждам интерфейси с React и TypeScript и работя с бази данни. Занимавам се и с Ansible и с проблемите в Linux сървърите, на които качваме услугите.',
    hobby:
      'В свободното си време превръщам любопитството в малки приложения. Пътувания, филми, логове, дори поливане на растения — всяка практична идея е повод да науча нещо ново.',
    sayHello: 'Пиши ми',
    current: 'В момента',
    currentDescription:
      'Разработка на приложения, автоматизация с Ansible и поддръжка на Linux средите за нашите услуги.',
    stackTitle: 'С какво работя',
    infrastructure: 'Инфраструктура',
    curiosity:
      'Извън ежедневната работа експериментирам с локални LLM модели, автоматизация и интеграции.',
    aiLink: 'Виж експеримента',
    contactTitle: 'Имаш идея?',
    contactLine2: 'Да поговорим.',
    contactIntro:
      'За проект, технически разговор или просто едно „здравей“ — ще се радвам да се свържем.',
    footer: 'Създадено с любопитство. И доста код.',
    backTop: 'Към началото',
  },
  en: {
    meta: 'Iliya — Full-Stack Developer. Java, React, Linux and automation. Personal projects, practical ideas and software that works.',
    skip: 'Skip to content',
    home: 'Iliya — home',
    nav: 'Main navigation',
    language: 'Language',
    projects: 'Projects',
    about: 'About me',
    contact: 'Contact',
    heroLine1: 'From idea',
    heroLine2: 'to reality.',
    hello: 'Hi, I’m',
    name: 'Iliya',
    intro:
      'I build applications, connect systems and make the code work — from the interface to the Linux server.',
    explore: 'Explore my projects',
    previewLabel: 'Selected projects — quick links',
    location: 'Varna, Bulgaria',
    keepScrolling: 'More to explore',
    workTitle: 'Built by me',
    workIntro:
      'Personal projects that started with one question: “What if I built it?”',
    technologies: 'Technologies',
    live: 'Open project',
    source: 'Source on GitHub',
    windows: 'For Windows',
    moreTitle: 'Still curious. Still building.',
    moreIntro: 'More code, tools and experiments.',
    allRepos: 'All repositories on GitHub',
    aboutTitle: 'A person',
    aboutLine2: 'behind the code.',
    aboutLead:
      'I like understanding how things work. Even more, I like making them.',
    aboutBody:
      'I work as a Full-Stack Developer. I build backends with Java and Spring Boot, interfaces with React and TypeScript, and work with databases. My work also involves Ansible and troubleshooting the Linux servers that run our services.',
    hobby:
      'In my spare time, curiosity turns into small applications. Travel, films, logs, even watering plants — every practical idea is a chance to learn something new.',
    sayHello: 'Say hello',
    current: 'Currently',
    currentDescription:
      'Application development, Ansible automation and maintenance of the Linux environments running our services.',
    stackTitle: 'My everyday toolkit',
    infrastructure: 'Infrastructure',
    curiosity:
      'Beyond my day-to-day work, I experiment with local LLMs, automation and integrations.',
    aiLink: 'Explore the experiment',
    contactTitle: 'Have an idea?',
    contactLine2: 'Let’s talk.',
    contactIntro:
      'A project, a technical conversation or just a hello — I’d be happy to connect.',
    footer: 'Made with curiosity. And a lot of code.',
    backTop: 'Back to top',
  },
};
export type Copy = (typeof copy)[Language];

export const projects: readonly Project[] = [
  {
    id: 'travel',
    name: { bg: 'Travel Memory Map', en: 'Travel Memory Map' },
    type: { bg: 'Full-stack приложение', en: 'Full-stack application' },
    description: {
      bg: 'Пътуванията като интерактивни истории. Карти, спомени, споделени разходи и Trip Replay събират цялото приключение на едно място.',
      en: 'Trips become interactive stories. Maps, memories, shared expenses and Trip Replay bring the whole adventure together.',
    },
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'MapLibre'],
    image: 'travel.png',
    width: 1731,
    height: 909,
    alt: {
      bg: 'Travel Memory Map — карта с маршрут и спомени от пътувания',
      en: 'Travel Memory Map — a route map and travel memories',
    },
    live: 'https://ilynet-0302.github.io/Travel-Memory-Map/',
    source: 'https://github.com/ilynet-0302/Travel-Memory-Map',
  },
  {
    id: 'loglens',
    name: { bg: 'LogLens', en: 'LogLens' },
    type: { bg: 'Инструмент за разработчици', en: 'Developer tool' },
    description: {
      bg: 'От сурови логове до ясна следа. Търсене, филтри и времева линия — изцяло в браузъра, без качване на данни.',
      en: 'From raw logs to a clear trail. Search, filters and a timeline — entirely in your browser, without uploading data.',
    },
    tech: ['React', 'TypeScript', 'Web Workers', 'Vitest'],
    image: 'loglens.png',
    width: 1280,
    height: 640,
    alt: {
      bg: 'LogLens — интерфейс за локален анализ на логове с филтри и времева линия',
      en: 'LogLens — local log analysis interface with filters and timeline',
    },
    live: 'https://ilynet-0302.github.io/LogLens/',
    source: 'https://github.com/ilynet-0302/LogLens',
  },
  {
    id: 'cinepick',
    name: { bg: 'Cinepick', en: 'Cinepick' },
    type: { bg: 'Уеб приложение', en: 'Web application' },
    description: {
      bg: 'Следващият добър филм е някъде там. Откриване на филми и сериали, препоръки и лични колекции със синхронизация между устройствата.',
      en: 'Your next great film is out there. Discover movies and TV shows, get recommendations and keep personal collections in sync.',
    },
    tech: ['React', 'TypeScript', 'TMDB', 'Supabase'],
    image: 'cinepick.png',
    width: 1672,
    height: 941,
    alt: {
      bg: 'Cinepick — интерфейс с оригинални измислени филмови изображения',
      en: 'Cinepick — interface with original fictional movie artwork',
    },
    note: {
      bg: 'Изображението е с демо съдържание. Приложението използва данни от TMDB.',
      en: 'Preview uses fictional demo artwork. The application uses TMDB data.',
    },
    live: 'https://ilynet-0302.github.io/Cinepick/',
    source: 'https://github.com/ilynet-0302/Cinepick',
  },
  {
    id: 'plant',
    name: { bg: 'Полей ме!', en: 'Полей ме! / Water me!' },
    type: { bg: 'Windows приложение', en: 'Windows application' },
    description: {
      bg: 'Малък помощник за зелените съквартиранти. Индивидуални графици за поливане, известия и компактен widget — с данни само на твоя компютър.',
      en: 'A little help for your green roommates. Individual watering schedules, notifications and a compact widget — with data kept on your computer.',
    },
    tech: ['Svelte', 'TypeScript', 'Tauri', 'Rust'],
    image: 'plant.png',
    width: 396,
    height: 609,
    alt: {
      bg: 'Полей ме! — прозорец за добавяне на растение и график за поливане',
      en: 'Water me! — window for adding a plant and watering schedule',
    },
    live: 'https://github.com/ilynet-0302/plant-watering-widget/releases/latest',
    source: 'https://github.com/ilynet-0302/plant-watering-widget',
  },
];
export const experiments = [
  {
    name: 'Local LLM & automation',
    url: 'https://github.com/ilynet-0302/chat_assistant-main',
  },
  { name: 'TaxFlow', url: 'https://github.com/ilynet-0302/TaxFlow' },
  {
    name: 'Document_analiser',
    url: 'https://github.com/ilynet-0302/Document_analiser',
  },
  {
    name: 'T11-Tickets',
    url: 'https://github.com/ilynet-0302/T11-Tickets-V1.1',
  },
];
