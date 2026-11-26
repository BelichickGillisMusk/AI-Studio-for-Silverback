import { useLang } from '../i18n';
import { OWNER } from '../facts';

export function Story() {
  const { t } = useLang();

  return (
    <section id="story" className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[0.7fr_1.3fr] md:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">03</p>
          <h2 className="font-display mt-3 text-4xl font-medium tracking-tight md:text-5xl">{t.story.heading}</h2>
          <p className="mt-6 text-sm font-semibold">{OWNER}</p>
          <p className="text-sm text-ink-muted">{t.founder} · Orozco Landscaping</p>
        </div>
        <p className="text-lg leading-relaxed text-ink-muted md:text-xl md:leading-relaxed">{t.story.body}</p>
      </div>
    </section>
  );
}
