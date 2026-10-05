import { ArrowUpRight } from "lucide-react";
import CoverArt from "./CoverArt";

// TODO: replace "#" with real links and delete any platform the church isn't on
const platforms = [
  { name: "Spotify", href: "#" },
  { name: "Apple Music", href: "#" },
  { name: "YouTube Music", href: "#" },
  { name: "Audiomack", href: "#" },
  { name: "Boomplay", href: "#" },
].filter((p) => p.href);

export default function Worship() {
    if (platforms.length === 0) return null;

    return (
        <section
        aria-labelledby="worship-heading"
        className="relative isolate overflow-hidden bg-plum py-20 text-white md:py-28"
        >
        {/* Soft glows */}
            <div
                aria-hidden="true"
                className="absolute -left-24 top-1/3 -z-10 h-96 w-96 rounded-full bg-orchid/25 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
            />

            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
                {/* Cover */}
                <div className="group mx-auto w-full max-w-md lg:max-w-lg lg:justify-self-start">
                    <div className="aspect-square overflow-hidden rounded-3xl border border-gold/40 shadow-2xl shadow-black/40">
                        <CoverArt />
                    </div>
                    </div>

                    {/* Text */}
                    <div className="mx-auto w-full max-w-2xl lg:mx-0">
                    <span className="inline-block rounded-full border border-gold/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        Worship
                    </span>

                    <h2
                        id="worship-heading"
                        className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
                    >
                        Let worship <span className="text-gold">ignite</span> your week
                    </h2>

                    <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
                        Listen to our latest songs wherever you stream music, and let
                        God&apos;s presence fill your day.
                    </p>

                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                        Listen on
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-3">
                        {platforms.map(({ name, href }) => (
                        <li key={name}>
                            <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:border-gold active:border-gold hover:bg-gold active:bg-gold hover:text-plum active:text-plum"
                            >
                            {name}
                            <ArrowUpRight className="h-4 w-4 opacity-70" aria-hidden="true" />
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}