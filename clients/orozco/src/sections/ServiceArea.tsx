import { useLang } from '../i18n';

export function ServiceArea() {
  const { t } = useLang();

  return (
    <section id="area" className="border-t border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">04</p>
          <h2 className="font-display mt-3 text-4xl font-medium tracking-tight md:text-5xl">{t.area.heading}</h2>
          <p className="mt-4 text-lg text-ink-muted">{t.area.sub}</p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {t.area.cities.map((city) => (
            <li
              key={city}
              className="rounded-2xl border border-line bg-paper px-4 py-4 text-sm font-semibold"
            >
              {city}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-muted">{t.area.note}</p>
      </div>
    </section>
  );
}
