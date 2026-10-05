
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

export default function AboutCTA() {
    return (
        <section className="bg-cream px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-plum/10 bg-white px-6 py-12 text-center shadow-[0_25px_70px_rgba(62,4,53,0.12)] sm:px-10 sm:py-14 md:rounded-[2.5rem] md:px-16 md:py-16">
            <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-plum">
                Join The Family
                </span>
                <span className="h-px w-8 bg-gold" />
            </div>

            <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight text-plum sm:text-5xl md:text-6xl">
                There is a place for you{" "}
                <span className="text-orchid">here.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
                Come as you are, connect with us and experience a community
                growing together in faith, purpose and love.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                <Link
                href="/location"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-plum px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orchid sm:w-auto"
                >
                Join Us this Sunday
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-plum">
                    <ArrowUpRight className="h-4 w-4" />
                </span>
                </Link>

                <Link
                href="/online"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-plum/15 bg-white px-6 py-3.5 text-sm font-semibold text-plum transition-all duration-300 hover:-translate-y-1 hover:border-orchid hover:text-orchid sm:w-auto"
                >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lilac text-orchid">
                    <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                Watch Online
                </Link>
            </div>
            </div>
        </div>
        </section>
    );
}

