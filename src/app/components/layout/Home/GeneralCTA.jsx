import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function GeneralCTA() {
  return (
    <section className="relative bg-white px-4 pb-20 pt-8 sm:px-6 md:pb-24 md:pt-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-plum/10
            bg-gradient-to-br
            from-cream
            via-white
            to-lilac/70
            px-6
            py-12
            shadow-[0_20px_60px_rgba(62,4,53,0.10)]
            sm:px-10
            md:rounded-[2.5rem]
            md:px-14
            md:py-16
            lg:px-20
          "
        >
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-orchid/10
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -bottom-32
              -left-20
              h-64
              w-64
              rounded-full
              bg-gold/10
              blur-3xl
            "
          />

          {/* Decorative rings */}
          <div
            aria-hidden="true"
            className="
              absolute
              -right-20
              top-1/2
              hidden
              h-72
              w-72
              -translate-y-1/2
              rounded-full
              border
              border-gold/15
              lg:block
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -right-5
              top-1/2
              hidden
              h-44
              w-44
              -translate-y-1/2
              rounded-full
              border
              border-plum/10
              lg:block
            "
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-9 lg:flex-row lg:items-center">
            {/* Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-plum">
                  There is room for you
                </p>
              </div>

              <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-plum sm:text-4xl md:text-5xl">
                Your next chapter
                <span className="text-orchid"> starts here.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
                Discover a community where faith, purpose and meaningful
                relationships come together. Wherever you are on your journey,
                we'd love to connect with you.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="
                group/button
                inline-flex
                shrink-0
                items-center
                gap-3
                rounded-full
                bg-plum
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-plum/10
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-orchid
              "
            >
              Connect With Us

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-gold
                  text-plum
                  transition-transform
                  duration-300
                  group-hover/button:rotate-45
                "
              >
                <ArrowUpRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>

          {/* Bottom accent */}
          <div className="relative z-10 mt-10 flex items-center gap-3 border-t border-plum/10 pt-5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted/70">
              Faith · Purpose · Community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}