import { useLang } from '../i18n';

export function TrustBar() {
  const { t } = useLang();
  const items = [t.trust.licensed, t.trust.insured, t.trust.bonded, t.trust.years, t.trust.bilingual, t.trust.free];

  return (
    <section className="border-b border-line bg-paper">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-3 px-5 py-5 text-sm sm:grid-cols-3 md:grid-cols-6">
        {items.map((label) => (
          <li key={label} className="font-medium text-ink">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-clay align-middle" />
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
