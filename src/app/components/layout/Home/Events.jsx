import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { events } from "@/app/data/events";

export default function Events() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const all = events.map((e) => ({ ...e, when: new Date(`${e.date}T00:00:00`) }));
    const upcoming = all.filter((e) => e.when >= today).sort((a, b) => a.when - b.when);
    const past = all.filter((e) => e.when < today).sort((a, b) => b.when - a.when);

    const hasUpcoming = upcoming.length > 0;
    const shown = (hasUpcoming ? upcoming : past).slice(0, 3);

    if (shown.length === 0) return null;

    return (
        <section
        aria-labelledby="events-heading"
        className="bg-cream py-20 md:py-28"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                <span className="inline-block rounded-full border border-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
                    Events
                </span>
                <h2
                    id="events-heading"
                    className="mt-5 text-3xl font-bold leading-tight text-plum sm:text-4xl lg:text-5xl"
                >
                    {hasUpcoming ? (
                    <>
                        Upcoming <span className="text-orchid">events</span>
                    </>
                    ) : (
                    <>
                        Recent <span className="text-orchid">events</span>
                    </>
                    )}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink/80 sm:text-lg">
                    {hasUpcoming
                    ? "Join us for what God is doing next."
                    : "Nothing is scheduled at the moment, but here is a look back at our recent gatherings."}
                </p>
                </div>

                {/* Cards: swipe row on phone/tablet, grid on laptop and up */}
                <ul className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-8 pt-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 md:mt-14 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
                {shown.map((event) => {
                    const day = event.when.getDate();
                    const month = event.when.toLocaleDateString("en-GB", { month: "short" });
                    const fullDate = event.when.toLocaleDateString("en-GB", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    });

                    return (
                    <li
                        key={event.slug}
                        className="flex w-[82%] shrink-0 snap-start sm:w-[45%] lg:w-auto"
                    >
                        <article className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-plum/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-plum/10 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-orchid has-[:focus-visible]:ring-offset-2 p-4">
                        {/* Flyer */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-lilac rounded-lg">
                            <Image
                            src={event.image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 82vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105 rounded-md"
                            />

                            {/* Date chip */}
                            <div className="absolute left-4 top-4 rounded-2xl bg-cream/95 px-3 py-2 text-center shadow-md backdrop-blur">
                            <span className="block text-[0.65rem] font-bold uppercase tracking-widest text-orchid">
                                {month}
                            </span>
                            <span className="block font-heading text-xl font-bold leading-none text-plum">
                                {day}
                            </span>
                            </div>

                            {!hasUpcoming && (
                            <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-plum/70 backdrop-blur">
                                Past event
                            </span>
                            )}
                        </div>

                        {/* Body */}
                        <div className="flex flex-1 flex-col py-3">
                            <h3 className="text-xl font-bold text-plum sm:text-2xl">
                            {event.title}
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/80 sm:text-base">
                            {event.description}
                            </p>

                            <div className="mt-auto pt-5">
                            <ul className="space-y-2.5 border-t border-plum/10 pt-5 text-sm text-ink/80">
                                <li className="flex items-center gap-2.5">
                                <CalendarDays className="h-4 w-4 shrink-0 text-orchid" aria-hidden="true" />
                                {fullDate}
                                </li>
                                <li className="flex items-center gap-2.5">
                                <Clock className="h-4 w-4 shrink-0 text-orchid" aria-hidden="true" />
                                {event.time}
                                </li>
                                <li className="flex items-center gap-2.5">
                                <MapPin className="h-4 w-4 shrink-0 text-orchid" aria-hidden="true" />
                                <span className="truncate">{event.location}</span>
                                </li>
                            </ul>

                            <Link
                                href={`/events/${event.slug}`}
                                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orchid after:absolute after:inset-0"
                            >
                                Learn More
                                <ArrowRight
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                aria-hidden="true"
                                />
                            </Link>
                            </div>
                        </div>
                        </article>
                    </li>
                    );
                })}
                </ul>

            </div>
        </section>
    );
}