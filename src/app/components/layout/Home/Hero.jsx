"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PlayCircle } from "lucide-react";

const slides = [
  "/images/hero-1.webp",
  "/images/hero-2.webp",
  "/images/hero-4.webp",
  "/images/hero-5.webp",
];

const INTERVAL = 6000;

export default function Hero() {
    const [current, setCurrent] = useState(0);
   
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const id = setInterval(
        () => setCurrent((c) => (c + 1) % slides.length),
        INTERVAL
        );
        // Re-runs when `current` changes, so clicking a dot restarts the timer
        return () => clearInterval(id);
    }, [current]);

    return (
        <section
        aria-label="Welcome"
        className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-plum"
        >
        {/* Photos */}
        {slides.map((src, i) => (
            <div
            key={src}
            aria-hidden="true"
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out motion-reduce:transition-none ${
                i === current ? "opacity-100" : "opacity-0"
            }`}
            >
            <Image
                src={src}
                alt=""
                fill
                sizes="100vw"
                priority={i === 0}
                className={`object-cover transition-transform duration-[8000ms] ease-out motion-reduce:transition-none ${
                i === current ? "scale-100" : "scale-110"
                }`}
            />
            </div>
        ))}

        {/* Plum gradient behind the text: bottom-up on mobile, left-to-right from tablet */}
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/60 to-plum/10 md:bg-gradient-to-r md:from-plum md:via-plum/75 md:to-transparent" />

        {/* Keeps the transparent navbar readable over bright photos */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-32 sm:px-6 md:pb-24 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
                Welcome to Ignite Outreach
            </h1>
            <p className="mt-4 font-heading text-lg font-semibold text-gold sm:text-xl md:text-2xl">
                Where faith comes alive
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
                Join us in person or online. Worship with us, hear the Word, and
                find a family that walks with you.
            </p>

            <div className="mt-8 flex gap-3 flex-row">
                <Link
                href="/online"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-plum shadow-lg shadow-gold/20 transition hover:bg-[#e2b84d]"
                >
                <PlayCircle className="h-5 w-5" aria-hidden="true" />
                Watch Online
                </Link>
                <Link
                href="/location"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                Plan a Visit
                </Link>
            </div>
            </div>
        </div>

        {/* Slide dots */}
        <div className="absolute inset-x-0 bottom-4 z-10">
            <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 md:justify-end lg:px-8">
            {slides.map((_, i) => (
                <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === current}
                className="group flex h-11 w-10 items-center justify-center"
                >
                <span
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                        ? "w-8 bg-gold"
                        : "w-3 bg-white/50 group-hover:bg-white"
                    }`}
                />
                </button>
            ))}
            </div>
        </div>
        </section>
    );
}