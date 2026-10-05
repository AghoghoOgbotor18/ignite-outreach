"use client";

import { events } from "@/app/data/events";

import EventsHero from "./EventsHero";
import EventGrid from "./EventGrid";
import {
  groupEventsByMonth,
  prepareEvents,
} from "./eventUtils";

export default function EventsPage() {
  const { upcoming, past } = prepareEvents(events);

  const upcomingGroups = groupEventsByMonth(upcoming);
  const pastGroups = groupEventsByMonth(past);

  return (
    <main>
      <EventsHero />

      {/* UPCOMING EVENTS */}
      <section
        aria-labelledby="upcoming-events-heading"
        className="bg-cream px-4 py-20 sm:px-6 md:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADER */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-plum">
                What's Next
              </span>
            </div>

            <h2
              id="upcoming-events-heading"
              className="mt-4 font-heading text-4xl font-semibold text-plum sm:text-5xl md:text-6xl"
            >
              Upcoming{" "}
              <span className="text-orchid">Events</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              Make plans to join us. Discover what is coming
              up and find an experience you can be part of.
            </p>
          </div>

          <EventGrid groups={upcomingGroups} />
        </div>
      </section>

      {/* PAST EVENTS */}
      {pastGroups.length > 0 && (
        <section
          aria-labelledby="past-events-heading"
          className="bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            {/* SECTION HEADER */}
            <div className="mb-12 md:mb-16">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-plum">
                  From Our Journey
                </span>
              </div>

              <h2
                id="past-events-heading"
                className="mt-4 font-heading text-4xl font-semibold text-plum sm:text-5xl md:text-6xl"
              >
                Past{" "}
                <span className="text-orchid">Events</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                Take a look back at some of the moments,
                gatherings and experiences we have shared
                together.
              </p>
            </div>

            <EventGrid
              groups={pastGroups}
              past
            />
          </div>
        </section>
      )}
    </main>
  );
}