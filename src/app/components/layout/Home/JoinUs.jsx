import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, PlayCircle } from "lucide-react";

const cardFocus =
  "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-orchid has-[:focus-visible]:ring-offset-2";

export default function JoinUs() {
    return (
        <section
        aria-labelledby="join-heading"
        className="bg-white py-20 md:py-28"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                <span className="inline-block rounded-full border border-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
                    New here?
                </span>
                <h2
                    id="join-heading"
                    className="mt-5 text-3xl font-bold leading-tight text-plum sm:text-4xl lg:text-5xl"
                >
                    Worship with us,{" "}
                    <span className="text-orchid">wherever you are</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink/80 sm:text-lg">
                    In person or online, there is a place for you at God&apos;s Own
                    Ministry.
                </p>
                </div>

                {/* Cards */}
                <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
                {/* Card 1: In person */}
                <article
                    className={`group relative flex flex-col overflow-hidden rounded-3xl bg-lilac transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-plum/15 ${cardFocus}`}
                >
                    <div className="relative h-52 overflow-hidden bg-plum/10 sm:h-60">
                    <Image
                        src="/images/hero-6.webp"
                        alt=""
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-plum text-gold shadow-lg">
                        <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-2xl font-bold text-plum sm:text-3xl">
                        Join Us in Person
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink/80">
                        Worship with us at one of our locations and become part of the
                        family.
                    </p>
                    <div className="mt-auto pt-8">
                        <Link
                        href="/location"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-plum px-6 py-3 text-sm font-semibold text-plum transition group-hover:bg-plum group-hover:text-white after:absolute after:inset-0"
                        >
                        Find a Location
                        <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                        />
                        </Link>
                    </div>
                    </div>
                </article>

                {/* Card 2: Online */}
                <article
                    className={`group relative isolate flex flex-col overflow-hidden rounded-3xl bg-plum text-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-plum/30 ${cardFocus}`}
                >
                    <Image
                    src="/images/hero-3.webp"
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-plum/95 via-plum/85 to-orchid/70" />

                    <div className="flex h-full min-h-[24rem] flex-1 flex-col justify-between p-6 sm:p-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-plum shadow-lg">
                        <PlayCircle className="h-6 w-6" aria-hidden="true" />
                    </span>

                    <div className="pt-10">
                        <h3 className="text-2xl font-bold sm:text-3xl">Watch Online</h3>
                        <p className="mt-3 leading-relaxed text-white/80">
                        Can&apos;t make it in person? Join our services live or
                        catch up on past messages from wherever you are.
                        </p>
                        <div className="pt-8">
                        <Link
                            href="/online"
                            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-plum transition group-hover:bg-[#e2b84d] after:absolute after:inset-0"
                        >
                            Watch Now
                            <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                            />
                        </Link>
                        </div>
                    </div>
                    </div>
                </article>
                </div>
            </div>
        </section>
    );
}