import { useLang } from '../i18n';

export function LangToggle() {
  const { lang, setLang, t } = useLang();
  return (
    <div
      role="group"
      aria-label={t.langToggle.label}
      className="inline-flex items-center rounded-full border border-line bg-cream p-0.5 text-xs font-semibold"
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`h-7 rounded-full px-2.5 transition ${
          lang === 'en' ? 'bg-forest text-paper' : 'text-ink-muted hover:text-ink'
        }`}
      >
        {t.langToggle.en}
      </button>
      <button
        type="button"
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
        className={`h-7 rounded-full px-2.5 transition ${
          lang === 'es' ? 'bg-forest text-paper' : 'text-ink-muted hover:text-ink'
        }`}
      >
        {t.langToggle.es}
      </button>
    </div>
  );
}
