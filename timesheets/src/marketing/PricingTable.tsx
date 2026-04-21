import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';

type Plan = {
  name: string;
  tagline: string;
  seats: string;
  monthly: number;
  annual: number;
  highlight?: boolean;
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: 'Foundation',
    tagline: 'Small crew, big standards.',
    seats: 'Up to 4 employees',
    monthly: 89,
    annual: 890,
    features: [
      'PIN + GPS clock-in',
      'Live labor cost per job site',
      'CA Labor Code compliance alerts',
      'Weekly payroll CSV export',
      'Email support',
    ],
  },
  {
    name: 'Crew',
    tagline: 'For growing operations.',
    seats: 'Up to 10 employees',
    monthly: 149,
    annual: 1490,
    highlight: true,
    features: [
      'Everything in Foundation',
      'Multiple job sites + geofencing',
      'QuickBooks-ready export',
      'Audit trail + compliance history',
      'Priority support',
    ],
  },
  {
    name: 'Operations',
    tagline: 'Multi-foreman, multi-site.',
    seats: 'Up to 20 employees',
    monthly: 249,
    annual: 2490,
    features: [
      'Everything in Crew',
      'Foreman roles + approval flow',
      'Custom break policies',
      'Quarterly compliance review',
      'Dedicated onboarding',
    ],
  },
];

export function PricingTable() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <div className="inline-flex text-xs font-semibold tracking-wide uppercase text-primary bg-primary-light rounded-full px-3 py-1 mb-3">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text">
            Flat pricing. Pay-per-crew, not per-click.
          </h2>
          <p className="mt-3 text-text-muted max-w-xl mx-auto">
            Annual billing saves two months. All plans include a one-time $499 setup fee
            covering crew onboarding, job-site geofence setup, and compliance review.
          </p>

          <div className="mt-6 inline-flex items-center bg-white border border-border rounded-full p-1">
            <ToggleChip active={!annual} onClick={() => setAnnual(false)}>
              Monthly
            </ToggleChip>
            <ToggleChip active={annual} onClick={() => setAnnual(true)}>
              Annual <span className="ml-1 text-[10px] bg-primary-light text-primary-dark rounded-full px-1.5 py-0.5">save 2 mo</span>
            </ToggleChip>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PLANS.map((p) => (
            <PricingCard key={p.name} plan={p} annual={annual} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-text-light">
          Additional seats beyond your plan: $15/mo each. All prices USD.
        </p>
      </div>
    </section>
  );
}

function ToggleChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 h-9 rounded-full text-sm font-semibold transition ${
        active ? 'bg-primary text-white' : 'text-text-muted hover:text-text'
      }`}
    >
      {children}
    </button>
  );
}

function PricingCard({ plan, annual }: { plan: Plan; annual: boolean }) {
  const price = annual ? plan.annual / 12 : plan.monthly;
  const sublabel = annual ? `billed annually · $${plan.annual}/yr` : 'billed monthly';
  const alert = (msg: string) => () => {
    // simple browser alert is plenty for a prototype
    window.alert(msg);
  };

  return (
    <div
      className={`rounded-lg p-6 flex flex-col ${
        plan.highlight
          ? 'bg-white border-2 border-primary relative shadow-sm'
          : 'bg-white border border-border'
      }`}
    >
      {plan.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold tracking-wide uppercase rounded-full px-3 py-1">
          Most popular
        </div>
      )}
      <h3 className="text-lg font-bold text-text">{plan.name}</h3>
      <p className="text-sm text-text-muted mt-0.5">{plan.tagline}</p>
      <p className="text-xs text-text-light mt-2 font-medium uppercase tracking-wide">
        {plan.seats}
      </p>

      <div className="mt-5 mb-2 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold tabular text-text">
          ${Math.round(price)}
        </span>
        <span className="text-sm text-text-muted">/month</span>
      </div>
      <p className="text-xs text-text-light">{sublabel}</p>

      <ul className="mt-5 space-y-2.5 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-text">
            <span className="mt-0.5 inline-flex w-4 h-4 rounded-full bg-primary-light text-primary items-center justify-center shrink-0">
              <Check size={11} strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Button
          full
          size="lg"
          variant={plan.highlight ? 'primary' : 'secondary'}
          onClick={alert('Checkout coming soon. Email bryan@silverbackai.agency to get set up.')}
        >
          Start free trial
        </Button>
      </div>
    </div>
  );
}
