import { ArrowRight } from 'lucide-react';
import type { Copy } from '../portfolio';

export function SiteFooter({ t }: { t: Copy }) {
  return (
    <footer className="footer wrap">
      <a className="wordmark" href="#top">
        iliya<span>.</span>
      </a>
      <span>{t.footer}</span>
      <a href="#top">
        {t.backTop}
        <ArrowRight className="back-arrow" size={17} />
      </a>
    </footer>
  );
}
