import EventCard from "./EventCard";

export default function EventMonth({
  month,
  year,
  events,
  past = false,
}) {
  return (
    <section>
      {/* MONTH HEADING */}
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-plum">
              {year}
            </span>
          </div>

          <h3 className="mt-3 font-heading text-3xl font-semibold capitalize text-plum sm:text-4xl">
            {month}
          </h3>
        </div>

        <span className="hidden rounded-full bg-lilac px-4 py-2 text-xs font-semibold text-plum sm:inline-flex">
          {events.length}{" "}
          {events.length === 1 ? "Event" : "Events"}
        </span>
      </div>

      {/* EVENTS */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard
            key={event.slug}
            event={event}
            past={past}
          />
        ))}
      </div>
    </section>
  );
}