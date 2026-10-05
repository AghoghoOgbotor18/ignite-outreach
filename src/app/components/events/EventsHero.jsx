export default function EventsHero() {
    return (
        <section className="relative overflow-hidden bg-plum px-4 pb-20 pt-32 sm:px-6 md:pb-24 md:pt-40 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orchid/30 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-4xl text-center">
                <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-gold" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    What&apos;s Happening
                </span>

                <span className="h-px w-8 bg-gold" />
                </div>

                <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Gather. Grow.{" "}
                <span className="text-gold">Experience.</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base md:text-lg">
                From worship gatherings to conferences, community moments and
                special experiences, there&apos;s always something happening at
                Ignite Outreach.
                </p>
            </div>
        </section>
    );
}

