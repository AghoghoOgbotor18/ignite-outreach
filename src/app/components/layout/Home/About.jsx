import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export default function About() {
    return (
        <section
        aria-labelledby="about-heading"
        className="relative isolate overflow-hidden bg-cream py-20 md:py-28"
        >
            {/* Soft decorative glow */}
            <div
                aria-hidden="true"
                className="absolute -left-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-lilac/70 blur-3xl"
            />

            <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 md:grid-cols-2 md:gap-12 lg:gap-20 lg:px-8">
                {/* Photo */}
                <div className="relative mx-auto w-full max-w-sm md:max-w-none">
                
                    <div className="relative aspect-[4/5] overflow-hidden rounded-b-3xl rounded-t-full bg-lilac shadow-xl shadow-plum/10">
                        <Image
                        src="/images/hero-3.webp"
                        alt="Members of God's Own Ministry worshipping together"
                        fill
                        sizes="(min-width: 768px) 45vw, 90vw"
                        className="object-cover"
                        />
                    </div>
                </div>

                {/* Text */}
                <div>
                <span className="inline-block rounded-full border border-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
                    Who We Are
                </span>

                <h2
                    id="about-heading"
                    className="mt-5 text-3xl font-bold leading-tight text-plum sm:text-4xl lg:text-5xl"
                >
                    A church family{" "}
                    <span className="text-orchid">built on faith and love</span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-ink/80 sm:text-lg">
                    Ignite Outreach is more than a Sunday gathering. We are a
                    community of people who come together to worship, learn from the
                    Word, and care for one another through every season of life.
                </p>
                <p className="mt-4 text-base font-semibold leading-relaxed text-orchid sm:text-lg">
                    Our heart is to help every person know God, grow in faith and serve
                    others.
                </p>

                <Link
                    href="/about"
                    className="group mt-8 inline-flex items-center gap-2 rounded-full border-2 border-plum px-7 py-3 text-sm font-semibold text-plum transition hover:bg-plum hover:text-white"
                >
                    Learn More
                    <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                    />
                </Link>
                </div>
            </div>
        </section>
    );
}