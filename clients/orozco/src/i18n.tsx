import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'es';

type Dict = {
  nav: { services: string; story: string; area: string; contact: string };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaCall: string;
    ctaEstimate: string;
    trust: string;
  };
  services: {
    heading: string;
    sub: string;
    items: { title: string; desc: string }[];
  };
  trust: { licensed: string; insured: string; bonded: string; years: string; bilingual: string; free: string };
  story: { heading: string; body: string };
  process: {
    heading: string;
    sub: string;
    steps: { title: string; body: string }[];
  };
  area: { heading: string; sub: string; cities: string[]; note: string };
  founder: string;
  today: string;
  hours: {
    heading: string;
    days: { label: string; value: string }[];
    closedNow: string;
    openNow: string;
  };
  contact: {
    heading: string;
    sub: string;
    callLabel: string;
    emailLabel: string;
    cta: string;
  };
  footer: {
    builtBy: string;
    rights: string;
  };
  langToggle: { en: string; es: string; label: string };
};

const EN: Dict = {
  nav: { services: 'Services', story: 'Our Story', area: 'Service Area', contact: 'Contact' },
  hero: {
    eyebrow: 'Sunnyvale, CA · Licensed · Insured · Bonded',
    title: 'Lawns, irrigation, and concrete.',
    titleAccent: 'Done right the first time.',
    subtitle:
      'Miguel Orozco. A family crew. Ten years on the Peninsula. Free estimates. No job too small.',
    ctaCall: 'Call (408) 205-8417',
    ctaEstimate: 'Email for an estimate',
    trust: 'No job too small · Same-week estimates · Se habla español',
  },
  services: {
    heading: 'What we do',
    sub: 'From a single sprinkler head to a full driveway tear-out and re-pour.',
    items: [
      { title: 'Lawn Care & Maintenance', desc: 'Weekly mow, trim, blow, and edge. Seasonal cleanups included.' },
      { title: 'Sprinklers & Irrigation', desc: 'New installs, broken valves, leaks, smart timers, drip conversion.' },
      { title: 'Landscape Design', desc: 'Fresh sod, new plantings, mulch, and layout that actually drains.' },
      { title: 'Concrete & Driveways', desc: 'Driveways, walkways, patios, and concrete flatwork done to code.' },
      { title: 'Pavers & Hardscape', desc: 'Paver patios, borders, and walkways. Clean lines, no settling.' },
      { title: 'Fences', desc: 'Wood fence repair and new builds. Straight lines, posts set in concrete.' },
    ],
  },
  trust: {
    licensed: 'Licensed',
    insured: 'Insured',
    bonded: 'Bonded',
    years: '10 Years Experience',
    bilingual: 'Bilingual Crew',
    free: 'Free Estimates',
  },
  story: {
    heading: 'Our story',
    body:
      'Orozco Landscaping has served owners of residential and commercial properties in Sunnyvale and the surrounding Peninsula for the last decade. We are a family-run, locally owned shop — licensed, insured, and bonded — with a crew that treats every yard like it belongs to their own family. From a one-visit lawn clean-up to full irrigation and concrete projects, we listen first, quote honestly, and show up when we said we would. No job is too small.',
  },
  process: {
    heading: 'How a job starts',
    sub: 'You talk to Miguel. There is no portal.',
    steps: [
      {
        title: 'Call or text',
        body: '(408) 205-8417. We answer in English or Spanish.',
      },
      {
        title: 'We walk the yard',
        body: 'Same-week estimates. We look before we name a price.',
      },
      {
        title: 'We do the work',
        body: 'One sprinkler head, or a driveway we tear out and pour again.',
      },
    ],
  },
  area: {
    heading: 'Where we work',
    sub: 'Service-area crew. No storefront. Sunnyvale is home.',
    cities: [
      'Sunnyvale',
      'Mountain View',
      'Cupertino',
      'Los Altos',
      'Los Altos Hills',
      'Santa Clara',
      'Palo Alto',
      'Saratoga',
      'Campbell',
      'Los Gatos',
    ],
    note: 'Not on the list? Call. We still cover a lot of the Peninsula.',
  },
  founder: 'Founder',
  today: 'Today',
  hours: {
    heading: 'Hours',
    days: [
      { label: 'Monday', value: '5:00 AM – 6:00 PM' },
      { label: 'Tuesday', value: '5:00 AM – 6:00 PM' },
      { label: 'Wednesday', value: '5:00 AM – 6:00 PM' },
      { label: 'Thursday', value: '5:00 AM – 6:00 PM' },
      { label: 'Friday', value: '5:00 AM – 6:00 PM' },
      { label: 'Saturday', value: '5:00 AM – 6:00 PM' },
      { label: 'Sunday', value: 'Closed' },
    ],
    closedNow: 'Closed now',
    openNow: 'Open now',
  },
  contact: {
    heading: 'Call Miguel',
    sub: 'A call or a text is the fastest way. English or Spanish.',
    callLabel: 'Call or text',
    emailLabel: 'Email',
    cta: 'Call (408) 205-8417',
  },
  footer: {
    builtBy: 'Website & Google Business Profile by Silverback AI Agency',
    rights: 'All rights reserved.',
  },
  langToggle: { en: 'EN', es: 'ES', label: 'Language' },
};

const ES: Dict = {
  nav: { services: 'Servicios', story: 'Sobre Nosotros', area: 'Área de Servicio', contact: 'Contacto' },
  hero: {
    eyebrow: 'Sunnyvale, CA · Con licencia · Asegurado · Afianzado',
    title: 'Jardín, riego y concreto.',
    titleAccent: 'Bien hecho desde la primera vez.',
    subtitle:
      'Miguel Orozco. Cuadrilla familiar. Diez años en la Península. Cotización gratis. Ningún trabajo es muy pequeño.',
    ctaCall: 'Llama (408) 205-8417',
    ctaEstimate: 'Correo para cotizar',
    trust: 'Ningún trabajo es muy pequeño · Cotizaciones la misma semana · Se habla español',
  },
  services: {
    heading: 'Lo que hacemos',
    sub: 'Desde un solo aspersor hasta una cochera completa, la arrancamos y la volvemos a colar.',
    items: [
      { title: 'Jardinería y Mantenimiento', desc: 'Corte semanal, orillado, soplado y recorte. Limpieza de temporada incluida.' },
      { title: 'Riego y Aspersores', desc: 'Instalaciones nuevas, válvulas, fugas, timers inteligentes, conversión a goteo.' },
      { title: 'Diseño de Jardín', desc: 'Pasto nuevo, plantas, mulch, y diseño que sí drena.' },
      { title: 'Concreto y Cocheras', desc: 'Cocheras, banquetas, patios, y concreto plano hecho al código.' },
      { title: 'Adoquín y Hardscape', desc: 'Patios y banquetas de adoquín. Líneas limpias, sin hundimiento.' },
      { title: 'Cercas', desc: 'Reparación de cercas de madera y cercas nuevas. Postes en concreto.' },
    ],
  },
  trust: {
    licensed: 'Con licencia',
    insured: 'Asegurado',
    bonded: 'Afianzado',
    years: '10 años de experiencia',
    bilingual: 'Cuadrilla bilingüe',
    free: 'Cotizaciones gratis',
  },
  story: {
    heading: 'Sobre nosotros',
    body:
      'Orozco Landscaping ha servido a dueños de propiedades residenciales y comerciales en Sunnyvale y la Península durante la última década. Somos un negocio familiar y local — con licencia, asegurado y afianzado — con una cuadrilla que trata cada jardín como si fuera propio. Desde una limpieza de una visita hasta proyectos completos de riego y concreto, escuchamos primero, cotizamos honestamente, y llegamos cuando dijimos que íbamos a llegar. Ningún trabajo es demasiado pequeño.',
  },
  process: {
    heading: 'Cómo empieza un trabajo',
    sub: 'Hablas con Miguel. No hay portal.',
    steps: [
      {
        title: 'Llama o manda texto',
        body: '(408) 205-8417. Contestamos en inglés o español.',
      },
      {
        title: 'Vemos el jardín',
        body: 'Cotización la misma semana. Miramos antes de dar precio.',
      },
      {
        title: 'Hacemos el trabajo',
        body: 'Un aspersor, o una cochera que arrancamos y volvemos a colar.',
      },
    ],
  },
  area: {
    heading: 'Dónde trabajamos',
    sub: 'Cuadrilla de área. Sin local. Sunnyvale es la casa.',
    cities: [
      'Sunnyvale',
      'Mountain View',
      'Cupertino',
      'Los Altos',
      'Los Altos Hills',
      'Santa Clara',
      'Palo Alto',
      'Saratoga',
      'Campbell',
      'Los Gatos',
    ],
    note: '¿No está en la lista? Llama. Cubrimos buena parte de la Península.',
  },
  founder: 'Fundador',
  today: 'Hoy',
  hours: {
    heading: 'Horario',
    days: [
      { label: 'Lunes', value: '5:00 AM – 6:00 PM' },
      { label: 'Martes', value: '5:00 AM – 6:00 PM' },
      { label: 'Miércoles', value: '5:00 AM – 6:00 PM' },
      { label: 'Jueves', value: '5:00 AM – 6:00 PM' },
      { label: 'Viernes', value: '5:00 AM – 6:00 PM' },
      { label: 'Sábado', value: '5:00 AM – 6:00 PM' },
      { label: 'Domingo', value: 'Cerrado' },
    ],
    closedNow: 'Cerrado ahora',
    openNow: 'Abierto ahora',
  },
  contact: {
    heading: 'Llama a Miguel',
    sub: 'Una llamada o un texto es lo más rápido. Inglés o español.',
    callLabel: 'Llamada o texto',
    emailLabel: 'Correo',
    cta: 'Llama (408) 205-8417',
  },
  footer: {
    builtBy: 'Sitio web y Perfil de Google hecho por Silverback AI Agency',
    rights: 'Todos los derechos reservados.',
  },
  langToggle: { en: 'EN', es: 'ES', label: 'Idioma' },
};

const DICT: Record<Lang, Dict> = { en: EN, es: ES };

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = window.localStorage.getItem('orozco.lang');
    if (saved === 'en' || saved === 'es') return saved;
    const nav = window.navigator.language || '';
    return nav.toLowerCase().startsWith('es') ? 'es' : 'en';
  });

  useEffect(() => {
    window.localStorage.setItem('orozco.lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LangCtx>(() => ({ lang, setLang, t: DICT[lang] }), [lang]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error('useLang must be used within LangProvider');
  return v;
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

function pacificParts(now: Date): { weekday: number; hour: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    weekday: 'short',
    hour: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(now);
  const weekdayLabel = parts.find((part) => part.type === 'weekday')?.value ?? 'Sun';
  const hour = Number(parts.find((part) => part.type === 'hour')?.value ?? '0');
  const weekday = WEEKDAYS.indexOf(weekdayLabel as (typeof WEEKDAYS)[number]);
  return { weekday: weekday < 0 ? 0 : weekday, hour };
}

/** Sunday index 0 through Saturday index 6, in Pacific time. */
export function pacificWeekday(now: Date = new Date()): number {
  return pacificParts(now).weekday;
}

export function isOpenNow(now: Date = new Date()): boolean {
  const { weekday, hour } = pacificParts(now);
  if (weekday === 0) return false;
  return hour >= 5 && hour < 18;
}
