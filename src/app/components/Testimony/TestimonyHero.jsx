export default function TestimonyHero() {
  return (
    <section className="relative isolate overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-top"
        style={{
          backgroundImage: "url('/images/test.webp')",
        }}
      />

      {/* Plum overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-plum/70"
      />

      {/* Directional gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-plum/75 via-plum/55 to-plum/30"
      />

      {/* Orchid glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 -z-10 h-96 w-96 rounded-full bg-orchid/20 blur-3xl"
      />

      {/* Gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Label */}
        <div className="flex items-center justify-center">
          <span className="rounded-full border border-gold/60 bg-black/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-md">
            Testimonies
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 font-heading text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl">
          Stories of{" "}
          <span className="text-orchid">Grace.</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
          Real stories. Real journeys. Real reminders that God is still
          moving in the lives of His people.
        </p>
      </div>
    </section>
  );
}