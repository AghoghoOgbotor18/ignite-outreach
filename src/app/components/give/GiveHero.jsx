import Image from "next/image";

export default function GiveHero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-24 pt-32 sm:px-6 md:pb-32 md:pt-40 lg:px-8">
      <Image
        src="/images/give.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-plum/75 via-plum/55 to-plum/75"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 -z-10 h-96 w-96 rounded-full bg-orchid/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full border border-gold bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur">
          Give
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
          Give with <span className="text-gold">purpose.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Your generosity helps us create spaces, reach communities, support
          people and advance the work God has entrusted to us.
        </p>

        <figure className="mx-auto mt-10 max-w-xl border-t border-white/15 pt-8">
          <blockquote className="font-heading text-lg italic leading-relaxed text-white/90 sm:text-xl">
            &ldquo;Every man according as he purposeth in his heart, so let him
            give; not grudgingly, or of necessity: for God loveth a cheerful
            giver.&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            2 Corinthians 9:7 (KJV)
          </figcaption>
        </figure>
      </div>
    </section>
  );
}