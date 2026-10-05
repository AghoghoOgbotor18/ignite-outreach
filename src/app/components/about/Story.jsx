import { ArrowDownRight } from "lucide-react";

export default function Story() {
    return (
        <section
        aria-labelledby="story-heading"
        className="relative overflow-hidden bg-cream px-4 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-36 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                <div className="flex items-center justify-center gap-3">

                    <span className="inline-block rounded-full border border-gold bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
                        Here's Our Story
                    </span>

                </div>

                <h1
                    id="story-heading"
                    className="mt-5 font-heading text-4xl font-semibold leading-tight text-plum sm:text-5xl md:text-6xl"
                >
                    Unlock <span className="text-orchid">Your Potential</span>
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                    A story of faith, purpose, people and a growing desire to see
                    lives transformed through the power of God.
                </p>
                </div>

                {/* Story image */}
                <div className="relative mx-auto max-w-6xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-plum shadow-[0_25px_80px_rgba(62,4,53,0.18)] sm:aspect-[16/9] md:rounded-[2.5rem]">
                    {/* Image */}
                    <img
                    src="/images/pray.webp"
                    alt="Ignite Outreach community"
                    className="h-full w-full object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

                    {/* Gold glow */}
                    <div
                    aria-hidden="true"
                    className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
                    />

                    {/* Image inscription */}
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 md:p-14">
                    <div className="max-w-2xl">
                        <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-10 bg-gold" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold sm:text-xs">
                            Our Journey
                        </span>
                        </div>

                        <p className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        Called to{" "}
                        <span className="text-gold">ignite.</span>
                        <br />
                        Built to{" "}
                        <span className="text-gold">impact.</span>
                        </p>
                    </div>
                    </div>

                    {/* Corner mark */}
                    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md sm:right-8 sm:top-8">
                    <ArrowDownRight
                        className="h-5 w-5 text-gold"
                        aria-hidden="true"
                    />
                    </div>
                </div>

                {/* Decorative line */}
                <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-3">
                    <span className="h-px flex-1 bg-plum/10" />
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span className="h-px flex-1 bg-plum/10" />
                </div>
                </div>

                {/* Quote */}
                <div className="mx-auto mt-16 max-w-4xl text-center md:mt-20">
                <span
                    aria-hidden="true"
                    className="font-heading text-6xl leading-none text-gold/50 sm:text-7xl"
                >
                    “
                </span>

                <blockquote className="-mt-5 font-heading text-2xl font-medium leading-relaxed text-plum sm:text-3xl md:text-4xl">
                    We believe that when hearts are awakened by faith, ordinary lives
                    can become extraordinary expressions of God’s purpose.
                </blockquote>

                <div className="mt-7 flex items-center justify-center gap-3">
                    <span className="h-px w-8 bg-gold" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    The Ignite Story
                    </span>
                    <span className="h-px w-8 bg-gold" />
                </div>
                </div>
            </div>
        </section>
    );
}