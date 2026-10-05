"use client";

import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import { locations } from "./LocationData";
import LocationSearch from "./LocationSearch";
import LocationCard from "./LocationCard";

export default function FindLocation() {
    const [search, setSearch] = useState("");

    const suggestions = useMemo(() => {
        const value = search.trim().toLowerCase();

        if (!value) return [];

        return locations
        .filter(
            (location) =>
            location.city.toLowerCase().includes(value) ||
            location.country.toLowerCase().includes(value)
        )
        .slice(0, 5);
    }, [search]);

    const filteredLocations = useMemo(() => {
        const value = search.trim().toLowerCase();

        if (!value) return locations;

        return locations.filter(
        (location) =>
            location.city.toLowerCase().includes(value) ||
            location.country.toLowerCase().includes(value)
        );
    }, [search]);

    return (
        <section
        id="locations"
        aria-labelledby="location-heading"
        className="relative overflow-hidden bg-cream px-4 py-24 sm:px-6 md:py-32 lg:px-8"
        >
        <div
            aria-hidden="true"
            className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-lilac/70 blur-3xl"
        />

        <div
            aria-hidden="true"
            className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
            {/* Heading */}
            <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
            
                <span className="inline-block rounded-full border border-gold bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
                    Our Locations
                </span>

            </div>

            <h2
                id="location-heading"
                className="mt-5 font-heading text-4xl font-semibold leading-tight text-plum sm:text-5xl md:text-6xl"
            >
                Find A Location{" "}
                <span className="text-orchid">Near You</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                Wherever you are, there’s a place for you. Search for a city near
                you or explore our locations below and find your expression of
                Ignite Outreach.
            </p>
            </div>

            {/* Search */}
            <LocationSearch
            search={search}
            setSearch={setSearch}
            suggestions={suggestions}
            />

            {/* Location cards */}
            <div className="mt-14">
            {filteredLocations.length > 0 ? (
                <div className="grid gap-5 md:grid-cols-2">
                {filteredLocations.map((location) => (
                    <LocationCard
                    key={`${location.city}-${location.country}`}
                    location={location}
                    />
                ))}
                </div>
            ) : (
                <div className="rounded-[2rem] border border-plum/10 bg-white px-6 py-14 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lilac text-orchid">
                    <MapPin className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-heading text-2xl font-semibold text-plum">
                    No location found
                </h3>

                <p className="mt-2 text-sm text-muted">
                    Try searching for another city or country.
                </p>
                </div>
            )}
            </div>

            {/* Bottom note */}
            <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />

            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                One family · Many locations · One purpose
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-orchid" />
            </div>
        </div>
        </section>
    );
}