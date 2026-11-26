import { useLang } from '../i18n';

export function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">01</p>
          <h2 className="font-display mt-3 text-4xl font-medium tracking-tight md:text-5xl">{t.services.heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{t.services.sub}</p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => (
            <li key={item.title} className="bg-paper p-6">
              <p className="font-display text-sm text-clay">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
