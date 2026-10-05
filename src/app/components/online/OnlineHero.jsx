export default function OnlineHero() {
  return (
    <section className="relative isolate overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/preach.webp')",
        }}
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-plum/55"
      />

      {/* Directional gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-plum/95 via-plum/70 to-plum/45"
      />

      {/* Orchid glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 -z-10 h-96 w-96 rounded-full bg-orchid/20 blur-3xl"
      />

      {/* Gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3">
          <span className="inline-block rounded-full border border-gold bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
            Watch Online
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 font-heading text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl">
          Church,{" "}
          <span className="text-orchid">
            wherever you are.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
          Join us online for worship, the Word and moments that remind us
          that distance does not have to keep you from being part of the
          Ignite family.
        </p>

        {/* Live badge */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2.5 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orchid/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orchid" />
          </span>

          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
            Join Us Online
          </span>
        </div>
      </div>
    </section>
  );
}