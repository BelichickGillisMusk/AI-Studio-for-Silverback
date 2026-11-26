import { Mail, Phone } from 'lucide-react';
import { useLang, isOpenNow } from '../i18n';
import { EMAIL, OWNER, PHONE_DIGITS, PHONE_DISPLAY } from '../facts';

export function Hero() {
  const { t } = useLang();
  const open = isOpenNow();

  return (
    <section id="top" className="hero-ground relative overflow-hidden text-paper">
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-5 pb-16 pt-14 md:grid-cols-[1.2fr_0.8fr] md:pb-24 md:pt-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/70">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display mt-5 max-w-xl text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl">
            {t.hero.title}
          </h1>
          <p className="font-display mt-4 text-2xl font-medium italic text-clay md:text-3xl">
            {t.hero.titleAccent}
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-paper/80 md:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_DIGITS}`}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-clay px-5 text-sm font-semibold text-paper hover:bg-clay-dark"
            >
              <Phone size={16} /> {t.hero.ctaCall}
            </a>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent('Free estimate — Orozco Landscaping')}`}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-paper/25 px-5 text-sm font-semibold text-paper hover:bg-paper/10"
            >
              <Mail size={16} /> {t.hero.ctaEstimate}
            </a>
          </div>
        </div>

        <aside className="rounded-3xl bg-paper p-6 text-ink shadow-[0_24px_60px_-30px_rgba(0,0,0,0.55)] md:mb-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-light">
            {t.founder}
          </p>
          <p className="font-display mt-1 text-3xl font-medium tracking-tight">{OWNER}</p>
          <p className="mt-1 text-sm text-ink-muted">Sunnyvale, CA · {t.trust.years}</p>

          <a
            href={`tel:${PHONE_DIGITS}`}
            className="mt-6 flex items-center justify-between rounded-2xl bg-forest px-4 py-4 text-paper hover:bg-forest-dark"
          >
            <span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-paper/60">
                {t.contact.callLabel}
              </span>
              <span className="tabular mt-0.5 block text-lg font-semibold">{PHONE_DISPLAY}</span>
            </span>
            <Phone size={18} />
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-3 flex items-center justify-between rounded-2xl border border-line px-4 py-3 text-sm hover:bg-cream"
          >
            <span className="min-w-0">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-light">
                {t.contact.emailLabel}
              </span>
              <span className="mt-0.5 block truncate font-medium">{EMAIL}</span>
            </span>
            <Mail size={16} className="shrink-0 text-ink-muted" />
          </a>

          <div className="mt-5 flex items-center justify-between text-xs font-semibold">
            <span className={open ? 'text-moss' : 'text-ink-muted'}>
              {open ? t.hours.openNow : t.hours.closedNow}
            </span>
            <span className="text-ink-light">{t.hero.trust.split('·')[0]?.trim()}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
