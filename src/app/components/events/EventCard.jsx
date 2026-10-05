import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
} from "lucide-react";

import {
  formatEventDate,
  getEventDay,
  getEventMonth,
} from "./eventUtils";

export default function EventCard({
  event,
  featured = false,
  past = false,
}) {
  const day = getEventDay(event.when);
  const month = getEventMonth(event.when);
  const fullDate = formatEventDate(event.when);

  return (
    <article
      className={`
        group
        w-full
        overflow-hidden
        rounded-[1.75rem]
        border
        border-plum/10
        bg-white
        p-3
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_25px_60px_rgba(62,4,53,0.12)]
        ${featured ? "lg:p-4" : ""}
      `}
    >
      {/* IMAGE */}
      <div
        className={`
          relative
          w-full
          overflow-hidden
          rounded-[1.25rem]
          bg-lilac
          ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}
        `}
      >
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes={
            featured
              ? "(min-width: 1024px) 50vw, 100vw"
              : "(min-width: 1024px) 50vw, 100vw"
          }
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* DATE */}
        <div className="absolute left-4 top-4 rounded-2xl bg-cream/95 px-3 py-2 text-center shadow-md backdrop-blur">
          <span className="block text-[0.65rem] font-bold uppercase tracking-widest text-orchid">
            {month}
          </span>

          <span className="block font-heading text-xl font-bold leading-none text-plum">
            {day}
          </span>
        </div>

        {/* PAST LABEL */}
        {past && (
          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-plum/70 backdrop-blur">
            Past Event
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-2 pb-2 pt-5">
        {/* TITLE */}
        <h3
          className={`
            font-heading
            font-semibold
            leading-tight
            text-plum
            ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}
          `}
        >
          {event.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted sm:text-base">
          {event.description}
        </p>

        {/* EVENT DETAILS */}
        <div className="mt-6 border-t border-plum/10 pt-5">
          <div className="space-y-3 text-sm text-ink/75">
            <div className="flex items-start gap-3">
              <CalendarDays
                className="mt-0.5 h-4 w-4 shrink-0 text-orchid"
                aria-hidden="true"
              />

              <span>{fullDate}</span>
            </div>

            <div className="flex items-start gap-3">
              <Clock
                className="mt-0.5 h-4 w-4 shrink-0 text-orchid"
                aria-hidden="true"
              />

              <span>{event.time}</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-orchid"
                aria-hidden="true"
              />

              <span className="min-w-0 truncate">
                {event.location}
              </span>
            </div>
          </div>

          {/* LINK */}
          <Link
            href={`/events/${event.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orchid"
          >
            View Event

            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}