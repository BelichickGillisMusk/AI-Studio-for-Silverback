import { Smartphone, DollarSign, Scale } from 'lucide-react';

const FEATURES = [
  {
    icon: Smartphone,
    title: 'Clock in from any phone',
    body:
      'No apps to install, no passwords to remember. A name, a 4-digit PIN, and the clock is running.',
  },
  {
    icon: DollarSign,
    title: 'Know what you owe this week',
    body:
      'Live labor cost per job site, regular vs. overtime, payroll-ready totals. No spreadsheets on Sunday night.',
  },
  {
    icon: Scale,
    title: 'CA Labor Code, handled',
    body:
      'Missed meal breaks, rest breaks, overtime thresholds — flagged the moment they happen, with the §-citation attached.',
  },
];

export function Features() {
  return (
    <section className="bg-white border-y border-border-light">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex text-xs font-semibold tracking-wide uppercase text-primary bg-primary-light rounded-full px-3 py-1 mb-3">
            Why crews use it
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text">
            Built for the field, not the office.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-lg border border-border p-6">
              <div className="w-10 h-10 rounded-md bg-primary-light text-primary inline-flex items-center justify-center mb-4">
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-text mb-1.5">{f.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
