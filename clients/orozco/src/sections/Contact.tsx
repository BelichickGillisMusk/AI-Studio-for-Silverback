import { Mail, Phone } from 'lucide-react';
import { useLang } from '../i18n';
import { EMAIL, PHONE_DIGITS, PHONE_DISPLAY } from '../facts';

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="bg-forest-dark text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <h2 className="font-display text-5xl font-medium tracking-tight md:text-6xl">{t.contact.heading}</h2>
          <p className="mt-4 max-w-md text-lg text-paper/75">{t.contact.sub}</p>
        </div>
        <div className="flex flex-col justify-end gap-3">
          <a
            href={`tel:${PHONE_DIGITS}`}
            className="inline-flex items-center justify-between rounded-2xl bg-clay px-5 py-5 text-paper hover:bg-clay-dark"
          >
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-paper/80">
                {t.contact.callLabel}
              </span>
              <span className="tabular mt-1 block text-2xl font-semibold">{PHONE_DISPLAY}</span>
            </span>
            <Phone size={20} />
          </a>
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent('Free estimate — Orozco Landscaping')}`}
            className="inline-flex items-center justify-between rounded-2xl border border-paper/20 px-5 py-5 hover:bg-paper/5"
          >
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-paper/60">
                {t.contact.emailLabel}
              </span>
              <span className="mt-1 block truncate text-lg font-medium">{EMAIL}</span>
            </span>
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
