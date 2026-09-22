import type { Metadata } from 'next';
import './globals.css';

const siteUrl =
  process.env.SITE_URL ||
  `http://localhost:3000${process.env.BASE_PATH || ''}/`;
const socialImage = {
  url: 'social-preview.jpg',
  width: 1280,
  height: 640,
  type: 'image/jpeg',
  alt: 'Iliya — Full-Stack Developer. From idea to reality.',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Илия — Full-Stack Developer',
  description:
    'Илия — Full-Stack Developer. Java, React, Linux и автоматизация. Лични проекти, практически идеи и софтуер, който работи.',
  icons: { icon: './favicon.svg' },
  openGraph: {
    title: 'Iliya — Full-Stack Developer',
    description:
      'Personal projects, practical ideas and software that works. Java, React, Linux and automation.',
    type: 'website',
    locale: 'bg_BG',
    alternateLocale: ['en_US'],
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iliya — Full-Stack Developer',
    description:
      'Personal projects, practical ideas and software that works. Java, React, Linux and automation.',
    images: [socialImage],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bg">
      <body id="top">{children}</body>
    </html>
  );
}
