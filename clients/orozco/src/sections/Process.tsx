import { useLang } from '../i18n';

export function Process() {
  const { t } = useLang();

  return (
    <section id="process" className="bg-forest text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">02</p>
          <h2 className="font-display mt-3 text-4xl font-medium tracking-tight md:text-5xl">{t.process.heading}</h2>
          <p className="mt-4 text-lg text-paper/75">{t.process.sub}</p>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {t.process.steps.map((step, i) => (
            <li key={step.title} className="border-t border-paper/15 pt-5">
              <p className="font-display text-3xl text-clay">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
