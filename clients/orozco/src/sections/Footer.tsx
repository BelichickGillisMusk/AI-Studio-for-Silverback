import { useLang } from '../i18n';
import { EMAIL, PHONE_DISPLAY } from '../facts';

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 bg-forest-dark text-paper/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg text-paper">Orozco Landscaping</p>
          <p className="mt-1 text-xs">Sunnyvale, CA · {PHONE_DISPLAY} · {EMAIL}</p>
        </div>
        <p className="max-w-sm text-xs leading-relaxed">
          {t.footer.builtBy}
          {' · '}
          <a href="mailto:bryan@silverbackai.agency" className="underline decoration-paper/30 hover:text-paper">
            bryan@silverbackai.agency
          </a>
        </p>
        <p className="text-xs text-paper/45">© {year} Orozco Landscaping. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
