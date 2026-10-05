"use client";

import { MapPin, Search } from "lucide-react";

export default function LocationSearch({
  search,
  setSearch,
  suggestions,
}) {
    return (
        <div className="relative mx-auto mt-10 max-w-2xl">
            <div className="relative">
                <Search
                className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
                strokeWidth={1.7}
                />

                <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by city or country..."
                className="h-16 w-full rounded-full border border-plum/10 bg-white pl-14 pr-6 text-sm text-ink shadow-[0_15px_45px_rgba(62,4,53,0.08)] outline-none transition-all placeholder:text-muted/60 focus:border-orchid/40 focus:ring-4 focus:ring-orchid/10"
                aria-label="Search for an Ignite Outreach location"
                />
            </div>

            {suggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-2xl border border-plum/10 bg-white p-2 shadow-[0_20px_50px_rgba(62,4,53,0.15)]">
                {suggestions.map((location) => (
                    <button
                    key={location.city}
                    type="button"
                    onClick={() => setSearch(location.city)}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-lilac"
                    >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lilac text-orchid">
                        <MapPin className="h-4 w-4" />
                    </span>

                    <span>
                        <span className="block text-sm font-semibold text-plum">
                        {location.city}
                        </span>

                        <span className="block text-xs text-muted">
                        {location.country}
                        </span>
                    </span>
                    </button>
                ))}
                </div>
            )}
        </div>
    );
}