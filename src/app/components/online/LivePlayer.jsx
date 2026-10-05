"use client";

import { ExternalLink, Play, Radio } from "lucide-react";

const YOUTUBE_VIDEO_ID = "";

export default function LivePlayer() {
  const hasVideo = Boolean(YOUTUBE_VIDEO_ID);

  const youtubeWatchUrl = hasVideo
    ? `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`
    : "https://www.youtube.com/";

  const embedUrl = hasVideo
    ? `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`
    : "";

  return (
    <section
      aria-labelledby="live-player-heading"
      className="bg-cream px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-plum">
                Live & On Demand
              </span>
            </div>

            <h2
              id="live-player-heading"
              className="mt-4 font-heading text-4xl font-semibold leading-tight text-plum sm:text-5xl md:text-6xl"
            >
              Join us <span className="text-orchid">online.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              Watch our services from wherever you are. When we are live,
              you can join the stream here or continue watching directly
              on YouTube.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-plum/10 bg-white px-4 py-2.5 shadow-sm">
            <span
              className={`relative flex h-2.5 w-2.5 ${
                hasVideo ? "" : "opacity-40"
              }`}
            >
              {hasVideo && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orchid/50" />
              )}

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orchid" />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-plum">
              {hasVideo ? "Live Stream" : "Coming Soon"}
            </span>
          </div>
        </div>

        {/* Video / Placeholder */}
        <div className="overflow-hidden rounded-[2rem] bg-plum shadow-[0_30px_90px_rgba(62,4,53,0.18)]">
          <div className="relative aspect-video w-full overflow-hidden bg-plum">
            {hasVideo ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={embedUrl}
                title="Ignite Outreach Live"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <>
                {/* Placeholder image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/images/hero-2.webp')",
                  }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-plum/70" />

                {/* Subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/35 to-plum/40" />

                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center px-6">
                  <div className="max-w-md text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold text-plum shadow-[0_15px_40px_rgba(212,167,58,0.2)]">
                      <Play className="ml-1 h-7 w-7 fill-current" />
                    </div>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      Ignite Online
                    </p>

                    <h3 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">
                      Currently Unavailable.
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-white/65 sm:text-base">
                      Join us online when our next service begins.
                      Until then, stay connected with the Ignite family.
                    </p>
                  </div>
                </div>

                {/* Bottom status */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-md">
                  <Radio className="h-4 w-4 text-gold" />

                  <span className="text-xs font-medium text-white/80">
                    Streaming soon
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Player footer */}
          <div className="flex flex-col gap-6 px-5 py-6 sm:px-7 md:flex-row md:items-center md:justify-between md:px-8 md:py-7">
            <div>
              <div className="flex items-center gap-2">
                <Radio className="h-4 w-4 text-gold" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Ignite Online
                </span>
              </div>

              <h3 className="mt-2 font-heading text-2xl font-semibold text-white sm:text-3xl">
                Worship with us
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
                Stay connected through worship, the Word and fellowship
                wherever you are.
              </p>
            </div>

            <a
              href={youtubeWatchUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-plum transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Watch on YouTube
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}