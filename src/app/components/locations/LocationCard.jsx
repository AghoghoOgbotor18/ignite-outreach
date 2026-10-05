import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Navigation,
  Play,
} from "lucide-react";
import LocationWatermark from "./LocationWatermark";

export default function LocationCard({ location }) {
    if (location.featured) {
        return (
        <article className="group relative overflow-hidden rounded-[2rem] border border-plum/10 bg-white p-7 shadow-[0_20px_60px_rgba(62,4,53,0.09)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(62,4,53,0.14)] sm:p-8">
            <LocationWatermark light />

            <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-start justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-lilac px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-orchid">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {location.type}
                </span>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-plum text-gold">
                <MapPin className="h-5 w-5" strokeWidth={1.7} />
                </div>
            </div>

            <div className="mt-8">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                {location.country}
                </p>

                <h3 className="mt-2 font-heading text-3xl font-semibold text-plum sm:text-4xl">
                {location.city}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                {location.address}
                </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                href="/online"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-plum px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-orchid"
                >
                <Play className="h-4 w-4 fill-current" />
                Watch Online
                </Link>

                <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-plum/15 px-5 py-3 text-sm font-semibold text-plum transition-all hover:border-orchid hover:text-orchid"
                >
                Find Location
                <ArrowUpRight className="h-4 w-4" />
                </button>
            </div>
            </div>
        </article>
    );
}

    return (
        <article className="group relative overflow-hidden rounded-[2rem] bg-plum p-7 text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#4b0b41] hover:shadow-[0_25px_60px_rgba(62,4,53,0.2)] sm:p-8">
        <LocationWatermark />

        <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-start justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {location.type}
            </span>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gold">
                <MapPin className="h-5 w-5" strokeWidth={1.7} />
            </div>
            </div>

            <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                {location.country}
            </p>

            <h3 className="mt-2 font-heading text-3xl font-semibold text-white sm:text-4xl">
                {location.city}
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">
                {location.address}
            </p>
            </div>

            <div className="mt-8">
            <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-plum transition-all hover:bg-gold"
            >
                Find Location
                <Navigation className="h-4 w-4" />
            </button>
            </div>
        </div>
        </article>
    );
}