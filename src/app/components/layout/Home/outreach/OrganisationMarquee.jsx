export default function OrganisationMarquee({ organisations }) {
  if (!organisations || organisations.length === 0) return null;

  const half = Math.ceil(organisations.length / 2);
  const rotated = [...organisations.slice(half), ...organisations.slice(0, half)];

  return (
    <div className="mt-20">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted">
        Movements we fuel
      </p>

      <div className="relative mt-8 space-y-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32"
        />

        <MarqueeRow
          items={organisations}
          animation="animate-[outreach-marquee_35s_linear_infinite]"
        />
        <MarqueeRow
          items={rotated}
          animation="animate-[outreach-marquee-reverse_40s_linear_infinite]"
        />
      </div>
    </div>
  );
}

function MarqueeRow({ items, animation }) {
  // Repeat items so one copy is always wider than the screen
  const base = Array.from({ length: Math.ceil(8 / items.length) }, () => items).flat();

  return (
    <div className="group overflow-hidden">
      <div
        className={`flex w-max ${animation} group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0">
            {base.map((name, i) => (
              <li key={`${name}-${i}`}>
                <OrganisationCard name={name} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

function OrganisationCard({ name }) {
  return (
    <div className="mx-2 flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl border border-plum/10 bg-cream/40 px-6 transition-all duration-300 hover:border-gold/50 hover:bg-lilac/30 sm:mx-3 sm:w-64">
      <div className="text-center">
        <div className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full border border-gold/70">
          <span className="h-2 w-2 rounded-full bg-gold" />
        </div>
        <p className="font-heading text-sm font-semibold tracking-[0.12em] text-plum sm:text-base">
          {name}
        </p>
      </div>
    </div>
  );
}