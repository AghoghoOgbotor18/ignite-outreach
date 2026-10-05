import Link from "next/link";
import {
  ArrowUpRight,
  MessageCircleHeart,
} from "lucide-react";

export default function OnlineCTA() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-plum px-6 py-14 text-center shadow-[0_30px_80px_rgba(62,4,53,0.16)] sm:px-10 md:px-16 md:py-20">
        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute"
        />

        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Stay Connected
            </span>

            <span className="h-px w-8 bg-gold" />
          </div>

          <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Need someone to{" "}
            <span className="text-orchid">pray with you?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            You don't have to walk through life alone. Reach out to us,
            share what is on your heart and let us stand with you in prayer.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-plum transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto"
            >
              <MessageCircleHeart className="h-4 w-4" />

              Request Prayer

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-plum/10">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            <Link
              href="/location"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              Find a Location
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}