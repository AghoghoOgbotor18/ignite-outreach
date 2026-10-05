import { featuredTestimonies } from "./testimonyData";
import FeaturedTestimonyCard from "./FeaturedTestimonyCard";

export default function FeaturedTestimonies() {
  return (
    <section
      aria-labelledby="featured-testimonies-heading"
      className="bg-cream px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="inline-block rounded-full border border-gold bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
              Featured Stories
            </span>
          </div>

          <h2
            id="featured-testimonies-heading"
            className="mt-5 font-heading text-4xl font-semibold leading-tight text-plum sm:text-5xl md:text-6xl"
          >
            Stories that{" "}
            <span className="text-orchid">encourage.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Every testimony is a reminder that no season is wasted and
            no story is beyond the reach of God's grace.
          </p>
        </div>

        {/* Featured Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredTestimonies.map((testimony) => (
            <FeaturedTestimonyCard
              key={testimony.id}
              testimony={testimony}
            />
          ))}
        </div>
      </div>
    </section>
  );
}