import {
  ArrowRight,
  Phone,
  Mail,
  Globe,
  MapPin,
  Clock,
  Download,
  Check,
  Shield,
} from 'lucide-react';

const MIGUEL = {
  name: 'Miguel Orozco',
  company: 'Orozco Landscaping',
  city: 'Sunnyvale, CA',
  phone: '(408) 205-8417',
  phoneDigits: '+14082058417',
  email: 'migueob89@gmail.com',
};

const BRYAN = {
  name: 'Bryan',
  agency: 'Silverback AI Agency',
  email: 'bryan@silverbackai.agency',
};

const SITE_BASE = import.meta.env.BASE_URL.replace(/\/$/, '') || '';
const link = (path: string) => `${SITE_BASE}/${path.replace(/^\//, '')}`;

export default function App() {
  return (
    <div className="min-h-screen bg-silverback text-white">
      <Nav />
      <Hero />
      <DeliverableGrid />
      <Downloads />
      <Offer />
      <NextSteps />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-midnight/70 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="w-7 h-7" />
          <div className="leading-tight">
            <div className="text-[15px] font-extrabold tracking-tight">Silverback</div>
            <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-silver/80 -mt-0.5">
              AI Agency
            </div>
          </div>
        </a>
        <a
          href={`mailto:${BRYAN.email}?subject=${encodeURIComponent('Orozco Landscaping — launch')}`}
          className="btn-silver inline-flex items-center gap-2 h-9 px-3.5 rounded-full text-xs font-bold"
        >
          <Mail size={14} /> Reply to Bryan
        </a>
      </div>
    </header>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="8" fill="#0B1020" />
      <path
        d="M8 10 L16 6 L24 10 L24 18 C24 22 20 25 16 26 C12 25 8 22 8 18 Z"
        fill="none"
        stroke="#E8D9B0"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="15" r="2.5" fill="#E8D9B0" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-14 md:pt-20 pb-12 md:pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-silver/30 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-silver">
          <Shield size={12} /> Proposal · Prepared for Orozco Landscaping
        </div>
        <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-tight leading-[1.03] max-w-4xl">
          Miguel — we built you a real online presence.
          <span className="text-silver block mt-2">Here it is.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
          A bilingual website, a verified Google Business Profile, and a crew-ops app — ready to
          go live this week. You don't juggle vendors. You don't wait months. You just answer the
          phone when it rings.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#deliverables" className="btn-silver inline-flex items-center gap-2 h-12 px-5 rounded-xl text-base font-bold">
            See what we made <ArrowRight size={18} />
          </a>
          <a
            href={`tel:${BRYAN.email}`}
            className="inline-flex items-center gap-2 h-12 px-5 rounded-xl text-base font-bold bg-white/10 hover:bg-white/15 transition text-white border border-white/15"
          >
            <Mail size={16} /> bryan@silverbackai.agency
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
          <StatCard kpi="1" label="Subscription" />
          <StatCard kpi="3" label="Deliverables" />
          <StatCard kpi="EN/ES" label="Bilingual" />
          <StatCard kpi="10 yrs" label="Your track record" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="card-glass rounded-xl px-4 py-3">
      <div className="text-xl md:text-2xl font-extrabold tracking-tight text-silver">{kpi}</div>
      <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">{label}</div>
    </div>
  );
}

function DeliverableGrid() {
  return (
    <section id="deliverables" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="text-xs font-bold tracking-[0.18em] uppercase text-silver">What we made</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">Three things, one bill.</h2>
          </div>
          <p className="text-white/60 max-w-sm text-sm">
            Click any card to open it live. Built and deployed — not a mockup.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <DeliverableCard
            tag="Website"
            Icon={Globe}
            title="Orozco Landscaping one-pager"
            body="Bilingual (EN/ES). Services, story, service area, hours, tap-to-call. Hosted on silverbackai.agency."
            href={link('orozco/')}
            cta="Open the live site"
            accent="from-[#0A6A3A] to-[#08582F]"
          />
          <DeliverableCard
            tag="Google"
            Icon={MapPin}
            title="Google Business Profile"
            body="Categories, 750-char description, service-area cities, services list, opening post, call-tracking setup — done."
            href={link('gbp.md')}
            cta="See the GBP pack"
            accent="from-[#0A3161] to-[#061F3F]"
          />
          <DeliverableCard
            tag="Crew app"
            Icon={Clock}
            title="Timesheets for your crew"
            body="PIN clock-in, live labor cost, CA Labor Code compliance, payroll CSV. Chávez, Canelo, Márquez, Morales, Barrera pre-seeded for the demo."
            href={link('timesheets/')}
            cta="Run the demo"
            accent="from-[#1F3A5F] to-[#0F1D30]"
          />
        </div>

        <div className="mt-8 flex items-center gap-3 text-xs text-white/55">
          <Shield size={14} className="text-silver" />
          Everything above is deployed from a single repo and served at the same URL. You get it when you sign up.
        </div>
      </div>
    </section>
  );
}

function DeliverableCard({
  tag, Icon, title, body, href, cta, accent,
}: {
  tag: string;
  Icon: typeof Globe;
  title: string;
  body: string;
  href: string;
  cta: string;
  accent: string;
}) {
  return (
    <a
      href={href}
      className="card-glass group rounded-2xl p-6 flex flex-col hover:-translate-y-0.5 transition"
    >
      <div className={`relative h-32 -mx-6 -mt-6 mb-5 rounded-t-2xl overflow-hidden bg-gradient-to-br ${accent}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={54} className="text-white/80" />
        </div>
        <span className="absolute top-3 left-3 text-[10px] font-bold tracking-[0.14em] uppercase bg-white/15 backdrop-blur rounded-full px-2.5 py-1 text-white">
          {tag}
        </span>
      </div>
      <h3 className="text-lg font-bold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-white/70 leading-relaxed flex-1">{body}</p>
      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-silver group-hover:gap-2.5 transition-all">
        {cta} <ArrowRight size={14} />
      </div>
    </a>
  );
}

function Downloads() {
  return (
    <section id="downloads" className="border-t border-white/5 bg-midnight-2/40">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <div className="text-xs font-bold tracking-[0.18em] uppercase text-silver">Take it with you</div>
        <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">Downloadable PDFs</h2>
        <p className="mt-2 text-white/60 text-sm max-w-xl">
          For sharing with family or texting around. Same content as the live site.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4 max-w-3xl">
          <DownloadRow
            href={link('orozco/send/orozco-landscaping-EN.pdf')}
            title="Orozco Landscaping — English"
            sub="Letter · 7 pages"
          />
          <DownloadRow
            href={link('orozco/send/orozco-landscaping-ES.pdf')}
            title="Orozco Landscaping — Español"
            sub="Carta · 7 páginas"
          />
        </div>
      </div>
    </section>
  );
}

function DownloadRow({ href, title, sub }: { href: string; title: string; sub: string }) {
  return (
    <a
      href={href}
      download
      className="card-glass flex items-center gap-4 rounded-xl px-4 py-3.5 hover:bg-white/[0.06] transition"
    >
      <div className="w-10 h-10 rounded-lg bg-silver/15 text-silver flex items-center justify-center">
        <Download size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-bold truncate">{title}</div>
        <div className="text-xs text-white/55">{sub}</div>
      </div>
      <ArrowRight size={16} className="text-silver" />
    </a>
  );
}

function Offer() {
  const rows = [
    { label: 'One-page bilingual website', value: 'Included' },
    { label: 'Google Business Profile setup + verification', value: 'Included' },
    { label: 'Timesheets crew app (up to 10 seats)', value: 'Included' },
    { label: 'Bilingual crew training (you + capataz)', value: 'Included' },
    { label: 'Ongoing hosting + updates', value: 'Included' },
  ];

  return (
    <section id="offer" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="text-xs font-bold tracking-[0.18em] uppercase text-silver">The deal</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
          Launch Pack · one price, everything in.
        </h2>

        <div className="mt-8 grid lg:grid-cols-[1.1fr_1fr] gap-5 max-w-5xl">
          <div className="card-glass rounded-2xl p-7 relative overflow-hidden">
            <div className="absolute -top-14 -right-14 w-48 h-48 rounded-full bg-silver/10 blur-2xl pointer-events-none" />
            <div className="text-xs font-bold tracking-[0.18em] uppercase text-silver">First month</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-6xl font-black tabular">$299</span>
              <span className="text-sm text-white/60">one-time launch</span>
            </div>
            <p className="mt-2 text-sm text-white/70">
              Website live · Google Profile verified · crew + job sites seeded · bilingual training.
            </p>

            <div className="my-6 border-t border-white/10" />

            <div className="text-xs font-bold tracking-[0.18em] uppercase text-silver">Then</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-5xl font-black tabular">$199</span>
              <span className="text-sm text-white/60">/month</span>
            </div>
            <p className="mt-2 text-sm text-white/70">
              Website and GBP stay free forever, as long as you're subscribed to Timesheets.
            </p>

            <div className="mt-7 rounded-xl border border-silver/25 bg-silver/5 p-4">
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-silver">Grow-with-you option</div>
              <p className="mt-1 text-sm text-white/80 leading-relaxed">
                Swap the flat $199 for <span className="font-bold">5% of net-new revenue</span> above
                your current baseline, capped at $500/mo. Quiet months cost less. Busy months we both win.
              </p>
            </div>
          </div>

          <div className="card-glass rounded-2xl p-7">
            <h3 className="text-base font-bold tracking-tight">What's in the box</h3>
            <ul className="mt-4 divide-y divide-white/5">
              {rows.map((r) => (
                <li key={r.label} className="flex items-center justify-between py-3">
                  <span className="text-sm text-white/85">{r.label}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-silver">
                    <Check size={14} /> {r.value}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 text-xs text-white/50 leading-relaxed">
              No contract. Cancel any time — you keep your data; website and Google Profile retire.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NextSteps() {
  const steps = [
    {
      n: '1',
      title: 'Pick up the phone',
      body: (
        <>
          Call or text Bryan: <span className="tabular font-bold text-white">(but for now, just email)</span>
          <br />
          <a href={`mailto:${BRYAN.email}`} className="font-bold text-silver hover:underline">{BRYAN.email}</a>
        </>
      ),
    },
    {
      n: '2',
      title: 'We verify your Google listing',
      body: <>10 minutes of your time. Verification postcard from Google arrives in 5–14 days.</>,
    },
    {
      n: '3',
      title: 'Send us 10 photos',
      body: <>Any phone photos of finished jobs. We clean them up, post them to GBP and swap them into the gallery.</>,
    },
  ];

  return (
    <section id="next" className="border-t border-white/5 bg-midnight-2/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="text-xs font-bold tracking-[0.18em] uppercase text-silver">Next steps</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
          You're three steps from being on Google.
        </h2>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="card-glass rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-silver text-midnight font-black flex items-center justify-center text-lg">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-silver text-midnight p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5 justify-between">
          <div>
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-midnight/70">Ready to launch?</div>
            <div className="mt-1 text-xl md:text-2xl font-extrabold tracking-tight">
              Reply to this email and we'll schedule your Google verification.
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${BRYAN.email}?subject=${encodeURIComponent("Let's launch Orozco")}`}
              className="inline-flex items-center gap-2 h-12 px-5 rounded-xl text-base font-bold bg-midnight text-white hover:bg-midnight-2 transition"
            >
              <Mail size={16} /> Reply to Bryan
            </a>
            <a
              href={`tel:${MIGUEL.phoneDigits}`}
              className="inline-flex items-center gap-2 h-12 px-5 rounded-xl text-sm font-bold bg-white text-midnight hover:bg-cream transition"
              title="Your own number — on the live site"
            >
              <Phone size={16} /> {MIGUEL.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-midnight border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
        <div className="flex items-center gap-2.5">
          <Logo className="w-6 h-6" />
          <div className="leading-tight">
            <div className="text-white font-extrabold tracking-tight text-sm">{BRYAN.agency}</div>
            <div className="text-white/50 text-[11px]">Prepared for {MIGUEL.company} · {MIGUEL.city}</div>
          </div>
        </div>
        <div className="text-white/50 text-xs">
          <a href={`mailto:${BRYAN.email}`} className="hover:text-white/80">{BRYAN.email}</a>
        </div>
        <div className="text-white/40 text-xs">© {year} Silverback AI Agency.</div>
      </div>
    </footer>
  );
}
