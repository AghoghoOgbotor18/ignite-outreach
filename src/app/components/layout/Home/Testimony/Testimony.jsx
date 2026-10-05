import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import TestimonyVideo from "./TestimonyVideo";

// TODO: replace with a real testimony video and thumbnail
const featured = {
  youtubeId: "REPLACE_WITH_YOUTUBE_ID",
  thumbnail: "/images/testimony.webp",
  title: "Featured testimony from God's Own Ministry",
};

export default function Testimony() {
  return (
    <section
      aria-labelledby="testimony-heading"
      className="relative isolate overflow-hidden bg-lilac py-20 md:py-28"
    >
      {/* Soft decorative glow */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-10 -z-10 h-80 w-80 rounded-full bg-orchid/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Video */}
        <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
          <TestimonyVideo {...featured} />
          <span className="absolute -right-2 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-plum text-gold shadow-lg sm:-right-4">
            <Quote className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>

        {/* Text */}
        <div className="mx-auto w-full max-w-2xl lg:mx-0">
          <span className="inline-block rounded-full border border-gold bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
            Testimonies
          </span>

          <h2
            id="testimony-heading"
            className="mt-5 text-3xl font-bold leading-tight text-plum sm:text-4xl lg:text-5xl"
          >
            Every story points to{" "}
            <span className="text-orchid">God&apos;s goodness</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-ink/80 sm:text-lg">
            Has God healed, provided or answered a prayer in your life? Your
            story can strengthen someone else&apos;s faith. Watch how He has
            moved among us, then share yours.
          </p>

          <Link
            href="/testimony"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-orchid px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orchid/25 transition hover:bg-orchid-dark"
          >
            Share Your Testimony
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