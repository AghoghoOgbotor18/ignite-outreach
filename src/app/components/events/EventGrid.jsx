"use client";

import { useState } from "react";
import EventCard from "./EventCard";
import EventMonthTabs from "./EventMonthTabs";

export default function EventGrid({
  groups,
  past = false,
}) {
  const [activeMonth, setActiveMonth] = useState(
    groups[0]?.key || ""
  );

  if (!groups.length) {
    return (
      <div className="rounded-[2rem] border border-plum/10 bg-white px-6 py-14 text-center">
        <h3 className="font-heading text-2xl font-semibold text-plum">
          {past
            ? "No past events yet."
            : "No upcoming events yet."}
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">
          {past
            ? "Check back later to explore our previous gatherings."
            : "Check back soon for what is coming next."}
        </p>
      </div>
    );
  }

  const activeGroup =
    groups.find((group) => group.key === activeMonth) ||
    groups[0];

  return (
    <div>
      {/* MONTH SELECTOR */}
      <EventMonthTabs
        groups={groups}
        activeMonth={activeGroup.key}
        onChange={setActiveMonth}
      />

      {/* SELECTED MONTH */}
      <div>
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-plum">
                {activeGroup.year}
              </span>
            </div>

            <h3 className="mt-3 font-heading text-3xl font-semibold capitalize text-plum sm:text-4xl">
              {activeGroup.month}
            </h3>
          </div>

          <span className="hidden rounded-full bg-lilac px-4 py-2 text-xs font-semibold text-plum sm:inline-flex">
            {activeGroup.events.length}{" "}
            {activeGroup.events.length === 1
              ? "Event"
              : "Events"}
          </span>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeGroup.events.map((event) => (
            <EventCard
              key={event.slug}
              event={event}
              past={past}
            />
          ))}
        </div>
      </div>
    </div>
  );
}