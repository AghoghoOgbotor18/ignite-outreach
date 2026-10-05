import { Eye, Heart, Target } from "lucide-react";

const cards = [
    {
        title: "Our Mission",
        text: "To raise people who know God, discover their purpose, and live with courage, compassion and impact.",
        icon: Target,
        accent: "bg-white/10",
        iconBg: "bg-gold",
    },
    {
        title: "Our Vision",
        text: "To see transformed lives and communities where faith produces purpose, excellence and meaningful influence.",
        icon: Eye,
        accent: "bg-white/10",
        iconBg: "bg-white",
    },
    {
        title: "What We Believe",
        text: "We believe in Jesus Christ, the Word of God, the transforming power of the Holy Spirit and the calling of every believer to live a purposeful life.",
        icon: Heart,
        accent: "bg-white/10",
        iconBg: "bg-orchid",
    },
];

function InfoCard({ title, text, icon: Icon, accent, iconBg }) {
    return (
        <article
        className={`group relative overflow-hidden rounded-[1.75rem] ${accent} p-7 text-white shadow-[0_20px_50px_rgba(62,4,53,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_65px_rgba(62,4,53,0.22)] sm:p-8`}
        >
            {/* Decorative circle */}
            <div
                aria-hidden="true"
                className="absolute -right-14 -top-14 h-40 w-40 rounded-full border border-white/15 transition-transform duration-700 group-hover:scale-125"
            />

            <div
                className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}
            >
                <Icon
                className={`h-5 w-5 ${
                    iconBg === "bg-white" ? "text-orchid" : "text-plum"
                }`}
                strokeWidth={1.8}
                />
            </div>

            <h3 className="relative mt-7 font-heading text-2xl font-semibold sm:text-3xl">
                {title}
            </h3>

            <p className="relative mt-4 text-sm leading-7 text-white/80 sm:text-base">
                {text}
            </p>

            <div className="relative mt-7 h-px w-12 bg-white/30 transition-all duration-500 group-hover:w-20" />
            </article>
    );
}

export default function WhoWeAre() {
    return (
        <section
        aria-labelledby="who-we-are-heading"
        className="relative overflow-hidden bg-plum py-24 sm:py-28 lg:py-32"
        >
            {/* Background atmosphere */}
            <div
                aria-hidden="true"
                className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orchid/30 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mx-auto max-w-4xl text-center">
                <div className="flex items-center justify-center gap-3">
          
                    <span className="inline-block rounded-full border border-gold bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
                        Who We are
                    </span>

                </div>

                <h2
                    id="who-we-are-heading"
                    className="mt-5 font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
                >
                    More than a gathering.
                    <br />
                    <span className="text-gold">A people with purpose.</span>
                </h2>

                <p className="mx-auto mt-7 max-w-3xl text-base font-medium leading-8 text-white/70 sm:text-lg">
                    Ignite Outreach is a community of people pursuing God, growing in
                    faith, discovering purpose and becoming a positive influence in
                    the world around us.
                </p>
                </div>

                {/* Floating cards */}
                <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
                {cards.map((card) => (
                    <InfoCard key={card.title} {...card} />
                ))}
                </div>

                {/* Bottom statement */}
                <div className="mx-auto mt-14 max-w-3xl text-center">
                <p className="font-heading text-xl leading-relaxed text-white/90 sm:text-2xl">
                    “We are a family learning to love deeply, serve faithfully and
                    live boldly.”
                </p>
                </div>
            </div>
        </section>
    );
}