const QAS = [
  {
    q: 'How does clock-in work without a password?',
    a: 'Each crew member taps their name, enters a 4-digit PIN, picks the job site they\'re working. The phone records GPS and device fingerprint so buddy-punching gets flagged automatically.',
  },
  {
    q: 'Do employees need to install an app?',
    a: 'No. It\'s a web app that runs in any phone browser. On iPhone, they can save it to the home screen for a one-tap experience.',
  },
  {
    q: 'What does the $499 setup fee cover?',
    a: 'One-time onboarding: configuring your job sites and geofences, importing your crew, a compliance review of your current break schedule, and a 30-minute call to walk your foreman through the owner dashboard.',
  },
  {
    q: 'Do you handle overtime and meal-break rules?',
    a: 'Yes. California §510 daily overtime (8hr → 1.5x, 12hr → 2x), §512 meal breaks, and §226.7 rest breaks are tracked automatically. When something slips, you get an alert with the exact Labor Code citation.',
  },
];

export function FAQ() {
  return (
    <section className="bg-white border-t border-border-light">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="mb-10">
          <div className="text-xs font-semibold tracking-wide uppercase text-primary bg-primary-light rounded-full px-3 py-1 mb-3 inline-flex">
            Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text">
            Before you ask.
          </h2>
        </div>

        <div className="divide-y divide-border-light border-y border-border-light">
          {QAS.map((qa) => (
            <details key={qa.q} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-base font-semibold text-text pr-4">{qa.q}</span>
                <span className="text-text-light text-xl leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">{qa.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
