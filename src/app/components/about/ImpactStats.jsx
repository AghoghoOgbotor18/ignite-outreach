const stats = [
    {
        number: "25K+",
        label: "Active Members",
    },
    {
        number: "12+",
        label: "Years of Impact",
    },
    {
        number: "50+",
        label: "Communities Reached",
    },
    {
        number: "100+",
        label: "Outreach Projects",
    },
];

export default function ImpactStats() {
    return (
        <section
        aria-label="Ignite Outreach impact statistics"
        className="relative overflow-hidden"
        >
        <div className="relative min-h-[300px] sm:min-h-[340px] md:min-h-[360px]">
            {/* Background image */}
            <img
            src="/images/hero-2.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-plum/80" />

            {/* Subtle colour atmosphere */}
            <div
            aria-hidden="true"
            className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orchid/20 blur-3xl"
            />

            <div
            aria-hidden="true"
            className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/15 blur-3xl"
            />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[300px] max-w-7xl items-center px-4 py-14 sm:min-h-[340px] sm:px-6 md:min-h-[360px] md:py-16 lg:px-8">
            <div className="w-full">
                <div className="grid grid-cols-2 divide-x divide-y divide-white/15 md:grid-cols-4 md:divide-y-0">
                {stats.map((stat, index) => (
                    <div
                    key={stat.label}
                    className={`
                        group flex flex-col items-center justify-center px-4 py-7 text-center
                        sm:px-6 md:py-4
                        ${index === 0 ? "border-l-0" : ""}
                    `}
                    >
                    <p className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-5xl lg:text-6xl">
                        {stat.number}
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/65 sm:text-[10px] sm:tracking-[0.2em]">
                        {stat.label}
                        </p>

                        <span className="h-px w-5 bg-gold transition-all duration-500 group-hover:w-8" />
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}