import { useLang, isOpenNow, pacificWeekday } from '../i18n';

export function Hours() {
  const { t } = useLang();
  const open = isOpenNow();
  const today = pacificWeekday();
  const todayIndex = today === 0 ? 6 : today - 1;

  return (
    <section id="hours" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">05</p>
            <h2 className="font-display mt-3 text-4xl font-medium tracking-tight md:text-5xl">{t.hours.heading}</h2>
          </div>
          <p className={`text-sm font-semibold ${open ? 'text-moss' : 'text-ink-muted'}`}>
            {open ? t.hours.openNow : t.hours.closedNow}
          </p>
        </div>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {t.hours.days.map((day, i) => {
            const isToday = i === todayIndex;
            return (
              <li key={day.label} className="flex items-center justify-between py-3.5 text-sm">
                <span className={isToday ? 'font-semibold' : 'text-ink-muted'}>
                  {day.label}
                  {isToday && (
                    <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-clay">
                      {t.today}
                    </span>
                  )}
                </span>
                <span className="tabular font-medium">{day.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
