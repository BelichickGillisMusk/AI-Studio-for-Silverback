import { Phone } from 'lucide-react';
import { useLang } from '../i18n';
import { PHONE_DIGITS, PHONE_DISPLAY } from '../facts';
import { LangToggle } from '../ui/LangToggle';

export function Nav() {
  const { t } = useLang();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight text-forest">
          Orozco
          <span className="ml-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-ink-light">
            Landscaping
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-muted md:flex">
          <a href="#services" className="hover:text-ink">{t.nav.services}</a>
          <a href="#story" className="hover:text-ink">{t.nav.story}</a>
          <a href="#area" className="hover:text-ink">{t.nav.area}</a>
          <a href="#contact" className="hover:text-ink">{t.nav.contact}</a>
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <a
            href={`tel:${PHONE_DIGITS}`}
            className="inline-flex h-9 items-center gap-2 rounded-full bg-forest px-3 text-xs font-semibold text-paper hover:bg-forest-dark"
          >
            <Phone size={14} aria-hidden="true" />
            <span className="hidden tabular sm:inline">{PHONE_DISPLAY}</span>
            <span className="sr-only sm:hidden">{t.contact.cta}</span>
          </a>
        </div>
      </div>
      <nav className="flex flex-wrap gap-x-5 gap-y-2 px-5 pb-3 text-sm font-medium text-ink-muted md:hidden">
        <a href="#services" className="shrink-0 hover:text-ink">{t.nav.services}</a>
        <a href="#story" className="shrink-0 hover:text-ink">{t.nav.story}</a>
        <a href="#area" className="shrink-0 hover:text-ink">{t.nav.area}</a>
        <a href="#contact" className="shrink-0 hover:text-ink">{t.nav.contact}</a>
      </nav>
    </header>
  );
}
