import { CalendarDays, Clock } from "lucide-react";

const services = [
  {
    day: "Sunday",
    title: "Sunday Celebration",
    time: "9:00 AM & 11:00 AM",
  },
  {
    day: "Wednesday",
    title: "Midweek Encounter",
    time: "6:00 PM",
  },
];

export default function ServiceTimes() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">

            <span className="inline-block rounded-full border border-gold bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
              Join Us
            </span>

          </div>

          <h2 className="mt-5 font-heading text-4xl font-semibold text-plum sm:text-5xl">
            Service <span className="text-orchid">Times.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Plan your time with us and join the Ignite family online.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={`${service.day}-${service.title}`}
              className="group rounded-[2rem] border border-plum/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(62,4,53,0.10)] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full bg-lilac px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-orchid">
                    {service.day}
                  </span>

                  <h3 className="mt-4 font-heading text-2xl font-semibold text-plum sm:text-3xl">
                    {service.title}
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-plum text-gold transition-colors duration-300 group-hover:bg-orchid">
                  <CalendarDays className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-7 flex items-center gap-3 border-t border-plum/10 pt-5">
                <Clock className="h-4 w-4 text-orchid" />

                <span className="text-sm font-semibold text-ink">
                  {service.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}