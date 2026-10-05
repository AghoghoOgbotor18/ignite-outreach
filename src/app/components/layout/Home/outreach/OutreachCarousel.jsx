"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OutreachCarousel({ slides }) {
    const trackRef = useRef(null);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    const update = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        setCanPrev(el.scrollLeft > 8);
        setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    }, []);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        update();
        el.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
        el.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
        };
    }, [update]);

    function scrollByCard(direction) {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector("[data-card]");
        const step = card
        ? card.getBoundingClientRect().width + 16
        : el.clientWidth * 0.8;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollBy({ left: direction * step, behavior: reduce ? "auto" : "smooth" });
    }

    return (
        <div className="relative">
        <ul
            ref={trackRef}
            aria-label="Outreach and giving photos"
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
        >
            {slides.map((slide) => (
            <li
                key={slide.title}
                data-card
                className="w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-[30%]"
            >
                <article className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-plum">
                <Image
                    src={slide.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 78vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-block rounded-full bg-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-plum">
                    {slide.tag}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                    {slide.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                    {slide.caption}
                    </p>
                </div>
                </article>
            </li>
            ))}
        </ul>

        {/* Arrows (tablet and up; phones swipe) */}
        <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Previous photos"
            className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-plum shadow-lg transition hover:bg-plum hover:text-white disabled:pointer-events-none disabled:opacity-0 md:flex"
        >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Next photos"
            className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-plum shadow-lg transition hover:bg-plum hover:text-white disabled:pointer-events-none disabled:opacity-0 md:flex"
        >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
        </div>
    );
}