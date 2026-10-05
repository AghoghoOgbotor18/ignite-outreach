import {
  Flame,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

const values = [
    {
        letter: "F",
        title: "Faith",
        text: "We trust God and allow His Word to shape how we live, serve and lead.",
        icon: Flame,
        className: "bg-plum text-white",
        letterClass: "text-gold",
    },
    {
        letter: "I",
        title: "Integrity",
        text: "We choose honesty, character and excellence even when no one is watching.",
        icon: ShieldCheck,
        className: "bg-lilac text-plum",
        letterClass: "text-orchid",
    },
    {
        letter: "R",
        title: "Relationships",
        text: "We value people, meaningful community and relationships built on love and respect.",
        icon: HeartHandshake,
        className: "bg-orchid text-white",
        letterClass: "text-gold",
    },
    {
        letter: "E",
        title: "Excellence",
        text: "We bring our best to God, to people and to every assignment placed in our hands.",
        icon: Lightbulb,
        className: "bg-gold text-plum",
        letterClass: "text-plum",
    },
];

function ValueCard({
  letter,
  title,
  text,
  icon: Icon,
  className,
  letterClass,
}) {
    return (
        <article
        className={`group relative overflow-hidden rounded-[1.5rem] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(62,4,53,0.12)] sm:p-7 ${className}`}
        >
        {/* Large background letter */}
        <span
            aria-hidden="true"
            className="absolute -right-4 -top-10 font-heading text-[10rem] font-bold leading-none opacity-[0.07]"
        >
            {letter}
        </span>

        <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
            <span
                className={`font-heading text-6xl font-bold leading-none ${letterClass}`}
            >
                {letter}
            </span>

            <h3 className="mt-3 font-heading text-2xl font-semibold">
                {title}
            </h3>
            </div>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
            <Icon className="h-5 w-5" strokeWidth={1.7} />
            </div>
        </div>

        <p className="relative z-10 mt-5 max-w-sm text-sm leading-7 opacity-80">
            {text}
        </p>

        <div className="relative z-10 mt-6 h-px w-8 bg-current opacity-30 transition-all duration-500 group-hover:w-14" />
        </article>
    );
}

export default function CoreValues() {
    return (
        <section
        aria-labelledby="core-values-heading"
        className="relative overflow-hidden bg-lilac px-4 py-24 sm:px-6 md:py-32 lg:px-8"
        >
            {/* Soft background decoration */}
            <div
                aria-hidden="true"
                className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-lilac blur-3xl"
            />

            <div
                aria-hidden="true"
                className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mx-auto max-w-3xl text-center">
                <div className="flex items-center justify-center gap-3">
                    <span className="h-px w-8 bg-gold" />

                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-plum">
                    What Guides Us
                    </span>

                    <span className="h-px w-8 bg-gold" />
                </div>

                <h2
                    id="core-values-heading"
                    className="mt-5 font-heading text-4xl font-semibold leading-tight text-plum sm:text-5xl md:text-6xl"
                >
                    Our Core <span className="text-orchid">Values</span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                    The convictions that shape how we worship, how we treat people,
                    how we serve and how we carry our faith into the world.
                </p>
                </div>

                {/* Floating main box */}
                <div className="relative mx-auto mt-14 max-w-6xl rounded-[2rem] border border-plum/10 bg-white p-4 shadow-[0_25px_80px_rgba(62,4,53,0.10)] sm:mt-16 sm:rounded-[2.5rem] sm:p-6 md:p-8 lg:p-10">
                {/* Decorative top accent */}
                <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-plum via-orchid to-gold" />

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    {values.map((value) => (
                    <ValueCard key={value.letter} {...value} />
                    ))}
                </div>

                {/* Bottom line */}
                <div className="mt-6 flex items-center justify-center gap-3 border-t border-plum/10 pt-7">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />

                    <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                    Faith · Integrity · Relationships · Excellence
                    </p>

                    <span className="h-1.5 w-1.5 rounded-full bg-orchid" />
                </div>
                </div>
            </div>
        </section>
    );
}