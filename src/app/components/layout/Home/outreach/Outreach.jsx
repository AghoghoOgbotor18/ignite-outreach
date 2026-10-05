import Link from "next/link";
import { Heart } from "lucide-react";
import { slides, organisations } from "@/app/data/outreach";
import OutreachCarousel from "./OutreachCarousel";
import OrganisationMarquee from "./OrganisationMarquee";

export default function Outreach() {
  return (
    <section
      aria-labelledby="outreach-heading"
      className="overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
            Our Impact
          </span>
          <h2
            id="outreach-heading"
            className="mt-5 text-3xl font-bold leading-tight text-plum sm:text-4xl lg:text-5xl"
          >
            Faith in action,{" "}
            <span className="text-orchid">beyond our walls</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/80 sm:text-lg">
            Outreach is how we live out what we believe. See the lives we are
            serving, and join us in making a difference.
          </p>
        </div>

        {/* Photos */}
        <div className="mt-12 md:mt-14">
          <OutreachCarousel slides={slides} />
        </div>

        {/* Give */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <Link
            href="/give?for=outreach"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-orchid px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orchid/25 transition hover:bg-orchid-dark"
          >
            <Heart className="h-5 w-5 fill-current text-gold" aria-hidden="true" />
            Give Towards Outreach
          </Link>
          <p className="text-sm text-muted">
            Every gift helps us reach more people.
          </p>
        </div>
      </div>

      <OrganisationMarquee organisations={organisations} />
    </section>
  );
}