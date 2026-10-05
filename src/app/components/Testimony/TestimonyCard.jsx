import Image from "next/image";
import { Quote } from "lucide-react";

export default function TestimonyCard({ testimony }) {
  return (
    <article className="group h-full rounded-[2rem] border border-plum/10 bg-cream p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(62,4,53,0.10)] sm:p-6">
      {/* Person */}
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md">
          <Image
            src={testimony.image}
            alt={testimony.name}
            fill
            sizes="56px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="min-w-0">
          <h3 className="truncate font-semibold text-plum">
            {testimony.name}
          </h3>

          <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-orchid">
            {testimony.role}
          </p>
        </div>
      </div>

      {/* Quote */}
      <div className="relative mt-7">
        <Quote className="absolute -left-1 -top-3 h-10 w-10 text-orchid/10" />

        <p className="relative pl-2 font-heading text-xl font-medium leading-relaxed text-plum sm:text-[1.35rem]">
          “{testimony.quote}”
        </p>
      </div>

      {/* Bottom line */}
      <div className="mt-7 flex items-center gap-3">
        <span className="h-px w-10 bg-gold" />

        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Ignite Outreach
        </span>
      </div>
    </article>
  );
}