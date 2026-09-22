import type { Metadata } from 'next';
import CvPage from './cv-page';
import cv from './cv-data.json';

export const metadata: Metadata = {
  title: cv.labels.bg.title,
  description: cv.labels.bg.meta,
};

export default function Page() {
  return <CvPage />;
}
