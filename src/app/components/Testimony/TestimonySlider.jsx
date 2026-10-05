"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { testimonies } from "./testimonyData";
import TestimonyCard from "./TestimonyCard";

export default function TestimonySlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const intervalRef = useRef(null);

  useEffect(() => {
    function updateVisibleCards() {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    }

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const maxIndex = Math.max(
    0,
    testimonies.length - visibleCards
  );

  useEffect(() => {
    setActiveIndex((current) =>
      Math.min(current, maxIndex)
    );
  }, [maxIndex]);

  function next() {
    setActiveIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  }

  function previous() {
    setActiveIndex((current) =>
      current <= 0 ? maxIndex : current - 1
    );
  }

  function startAutoplay() {
    stopAutoplay();

    intervalRef.current = setInterval(() => {
      setActiveIndex((current) =>
        current >= maxIndex ? 0 : current + 1
      );
    }, 5000);
  }

  function stopAutoplay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  useEffect(() => {
    startAutoplay();

    return () => stopAutoplay();
  }, [maxIndex]);

  return (
    <section
      aria-labelledby="testimony-slider-heading"
      className="overflow-hidden bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-plum">
                From Our Family
              </span>
            </div>

            <h2
              id="testimony-slider-heading"
              className="mt-5 font-heading text-4xl font-semibold leading-tight text-plum sm:text-5xl md:text-6xl"
            >
              What people are{" "}
              <span className="text-orchid">saying.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Stories of faith, growth and God's goodness from
              people who are part of the Ignite family.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previous}
              onMouseEnter={stopAutoplay}
              onMouseLeave={startAutoplay}
              aria-label="Previous testimonies"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-plum/10 bg-cream text-plum transition-all duration-300 hover:border-plum hover:bg-plum hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={next}
              onMouseEnter={stopAutoplay}
              onMouseLeave={startAutoplay}
              aria-label="Next testimonies"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-plum/10 bg-cream text-plum transition-all duration-300 hover:border-plum hover:bg-plum hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          className="mt-12 overflow-hidden"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${
                activeIndex * (100 / visibleCards)
              }%)`,
            }}
          >
            {testimonies.map((testimony) => (
              <div
                key={testimony.id}
                className="shrink-0 px-2"
                style={{
                  width: `${100 / visibleCards}%`,
                }}
              >
                <TestimonyCard testimony={testimony} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map(
            (_, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimony slide ${index + 1}`}
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${
                      active
                        ? "w-7 bg-plum"
                        : "w-2 bg-plum/15 hover:bg-plum/30"
                    }
                  `}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}